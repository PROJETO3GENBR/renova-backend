import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarProduto() {

  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [produto, setProduto] = useState<Produto>()

  useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/deletarProduto/${id}`, setProduto, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
        navigate('/produto')
          deleteId(`/produto/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          alert('Produto deletado com sucesso');
        }
      
        function nao() {
          navigate('/produto')
        }
    
    return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography color="textSecondary" >
              {produto?.nome}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export {DeletarProduto};
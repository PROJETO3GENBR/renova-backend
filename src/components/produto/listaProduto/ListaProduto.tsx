import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProduto.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import Produto from '../../../models/Produto';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/produto", setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [produto.length])

  return (
    <>

      <Grid container>
        {
          produto.map(produto => (
            <Grid item xs={6} sm={4} md={3} >
              <Box m={2} >
                <Card variant="outlined">
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={produto.foto}
                      alt="#"
                    />
                    <Typography color="textSecondary" gutterBottom>
                      Produtos
                    </Typography>

                    <Typography className="bold" variant="h5" component="h2">
                      {produto.nome}
                    </Typography>
                    <Typography variant="h6" component="h2">
                      {produto.descricao}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {`R$: ${produto.preco}`}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {produto.categoria?.categoria_composto}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {produto.categoria?.categoria_eletronico}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>

                     <Link to={`/atualizarproduto/${produto.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='medium' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link> 
                      <Link to={`/deletarproduto/${produto.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='medium'>
                            deletar
                          </Button>
                      
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export { ListaProduto };
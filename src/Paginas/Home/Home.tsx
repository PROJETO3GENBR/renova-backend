import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Button, Card, CardContent, CardActions, CardMedia } from '@material-ui/core';
import './Home.css';
import Produto from "../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { Link, useNavigate } from "react-router-dom";
import { busca } from "../../services/Service";

function Home() {
  const [produto, setProduto] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();


  async function getPost() {
    await busca("/produto", setProduto, { Authorization: token })
  }
  useEffect(() => {
    getPost()
  }, [produto.length]);


  let prdbtn;
  if (token != '') {
    prdbtn =  <a id='btn_pub' href='/formularioProduto'></a>
  } else {
   
  }


  return (
    <>
      <div id='container_pub'>
    
       {prdbtn}
      </div>
      <div id='fundo'>
        <Grid container>

          {

            produto.map(produto => (
              <Grid item xs={12} sm={12} md={4} >



                <Box m={2} >
                  <Card id='produto_card'>
                    <CardContent>

                      <CardMedia className='produto_img'
                        component="img"
                        height="160px"
                        image={produto.foto}
                        alt="#"
                      />



                      <Typography id='produto_card_title' className="bold" variant="h5" component="h2">
                        {produto.nome}
                      </Typography>

                      <Typography id='produto_card_desc' variant="h6" component="h2">
                        {produto.descricao}
                      </Typography>
                      <Typography id='produto_card_preco' variant="h5" component="h2">
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

                        {/* <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link> */}
                        <Link to={`/produto/${produto.id}`} className="text-decorator-none">
                          <Box mx={1}>
                            <Button id='produto_button_comprar' variant="contained" size='medium'>
                              comprar
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
      </div>
    </>
  );
}

export { Home };
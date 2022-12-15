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
            <main id='main_produto'>
        
    
          <div id='product_cartao_buy'>
            <h1 id='product_name_buy'> {produto.nome} </h1>
            <img id='product_image_buy' src='https://www.amityinternational.com/wp-content/uploads/2018/12/amity-place-holder.jpg' alt='' title='' />
            <div id='product_button_price'>
            <Button  href='/SucessPage' id='product_button_buy' variant="contained" size='medium' color="secondary">
              comprar
            </Button>
            <p> {`R$: ${produto.preco}`}</p>
            </div>
          </div>


        <div id='sub_product_buy'>
          <div id='sub_product_desc'> Descrição do Produto</div>
          <div id='sub_product_desc_text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, commodi repellat rem sit est at corrupti exercitationem ullam architecto veniam consequuntur voluptas, temporibus officia optio totam alias asperiores odio vitae.
            </p>
          </div>
        </div>

      </main>
          ))
        }
      </Grid>
    </>
  )
}

export  {ListaProduto};

import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../models/Produto';
import '../Produto/Produto.css';
import { busca, buscaId } from './../../services/Service'




function VendaProduto() {
  const [produto, setProduto] = useState<Produto>({
  id:0, 
  nome:'',
  foto:'',
  descricao:'',
  preco:0
})
  const [token, setToken] = useLocalStorage('token');
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getPost (id: string) {
    await buscaId(`/produto/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() =>{
    if(id !== undefined){
        getPost(id)
    }
}, [id])
  return (
    <>
      <Grid container>
            <main id='main_produto'>
        
    
          <div id='product_cartao_buy'>
            <h1 id='product_name_buy'> {produto.nome} </h1>
            <img id='product_image_buy' src={produto.foto} alt='' title='' />
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
            {produto.descricao}
            </p>
          </div>
        </div>

      </main>
      </Grid>
    </>
  )
}
export { VendaProduto }

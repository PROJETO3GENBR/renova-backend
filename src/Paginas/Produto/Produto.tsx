
import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../models/Produto';
import '../Produto/Produto.css';
import { busca, buscaId } from './../../services/Service'
import { toast } from 'react-toastify';


function VendaProduto() {
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    foto: '',
    descricao: '',
    preco: 0
  })
  const [token, setToken] = useLocalStorage('token');
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  async function getPost(id: string) {
    await buscaId(`/produto/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      getPost(id)
    }
  }, [id])
  return (
    <>
      <Grid container>
        <main id='main_produto'>

          <div id='product_container'>
            <div id='product_cartao_buy'>
              <img id='product_image_buy' src={produto.foto} alt='' title='' />
              <h1 id='product_name_buy'> {produto.nome} </h1>
              <div id='product_button_price'>
                <Button href='/SucessPage' id='product_button_buy' variant="contained" size='medium' color="secondary">
                  comprar
                </Button>
              </div>
            </div>
            <div id='product_des'>
            <div id='product_price'> {`R$: ${produto.preco}`}</div>
            <div id='desc_pr'>DESCRIÇÃO: {produto.descricao}</div>
            </div>
          </div>
        </main>
      </Grid>
    </>
  )
}
export { VendaProduto }

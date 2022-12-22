import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, cadastroProduto } from '../../../services/Service';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { toast } from 'react-toastify';

function CadastroProduto() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produto, setProduto] = useState<Produto>(
    {
      id: 0,
      nome: '',
      descricao: '',
      preco: 0,
      foto: '',
      categoria: { id: 0, categoria_composto: null, categoria_eletronico: null }
    }
  )

  const [categoria, setCategoria] = useState<Categoria>(
    {
      id: 0,
      categoria_composto: null,
      categoria_eletronico: null
    }
  )

  useEffect(() => {
    if (categorias.length === 0)
      getCategorias();
  }, [categorias.length]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria
    })
  }, [categoria])

  async function getCategorias() {
    await busca(`/categoria`, setCategorias, { Authorization: token })
  }

  function updateProduto(e: ChangeEvent<HTMLInputElement>) {

    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(produto);

    try {
      await cadastroProduto(`/produto`, produto, setProduto, { Authorization: token })

    
      toast.success('Produto cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    } catch (error) {
      toast.error('Dados inconsistentes. Erro ao cadastrar produto!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    }
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro do produto</Typography>
        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)} id="descricao" label="Descriçao" name="descricao" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)} id="preco" label="Preço" name="preco" variant="outlined" margin="normal" fullWidth />
        <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)} id="foto" label="Foto" name="foto" variant="outlined" margin="normal" fullWidth />


        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, { Authorization: token })}
          >

            {
              categorias.map((categoria) => (
                <MenuItem key={categoria.id} value={categoria.id}>
                  {`Ele é composto? ${categoria.categoria_composto}` + ' - ' + `Ele é eletrônico? ${categoria.categoria_eletronico}`}
                </MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Escolha a categoria do produto</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}
export default CadastroProduto;
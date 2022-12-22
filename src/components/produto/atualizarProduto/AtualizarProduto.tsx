import React, { useEffect, useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import './AtualizarProduto.css';
import Produto from '../../../models/Produto';
import { busca, buscaId, put } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';

function AtualizarProduto() {

    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token')
    const [produto, setProduto] = useState<Produto>(
        {

            id: 0,
            nome: '',
            descricao: '',
            preco: 0,
            foto: '',
            categoria: { id: 0, categoria_composto: null, categoria_eletronico: null }
        })

    const [categoria, setCategoria] = useState<Categoria>({

        id: 0,
        categoria_composto: null,
        categoria_eletronico: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id != undefined) {
            findById(id)
        }
    }, [id])

    async function getCategorias() {
        await busca(`/categoria`, setCategorias, { Authorization: token })
    }

    async function findById(id: string) {
        await buscaId(`/produto/${id}`, setProduto, { Authorization: token })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined && produto.preco > 0) {
            await put(`/produto/${produto.id}`, produto, setProduto, { Authorization: token })
            toast.success('Produto alterado com sucesso.', {
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
        back ()
    }

    function back (){
        navigate('/home');
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6}><img className='imagem2' src="https://www.ferrovelhocoradin.com.br/wp-content/uploads/2017/06/Empresas-e-Programas-Educacionais-para-Reciclar-3.jpg" alt="" /></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Atualizar Produto   </Typography>
                        <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id='descricao' label='Descrição' variant='outlined' name='descricao' margin='normal' fullWidth />
                        <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id='preco' label='Preço' variant='outlined' name='preco' margin='normal' fullWidth />
                        <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth />

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
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                        
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export { AtualizarProduto };
import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabProduto from "../../components/produto/tabprodutos/TabProduto";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} className='produtos'>
                {/* <TabProduto/> */}
                </Grid>
            </Grid>
        </>
    );
}

export {Home};
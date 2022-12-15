import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/estaticos/footer/Footer';
import Login from './Paginas/Login/Login'
import CadastroCliente  from './Paginas/cadastroCliente/CadastroCliente';
import Navbar from './components/estaticos/Navbar/Navbar';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import {DeletarProduto} from './components/produto/deletarProduto/DeletarProduto';
import CadastroProduto from './components/produto/cadastroProduto/CadastroProduto';
import {ListaProduto} from './components/produto/listaProduto/ListaProduto';
import { VendaProduto } from './Paginas/Produto/Produto';
import { SucessPage } from './Paginas/SucessPage/SucessPage';
import AlterarCadastro from './Paginas/alterarCadastro/AlterarCadastro';
import { Home } from './Paginas/Home/Home';
import Perfil from './Paginas/Perfil/Perfil';
<<<<<<< HEAD
import {Provider} from 'react-redux';
import store from './store/store';

=======
import { AtualizarProduto } from './components/produto/atualizarProduto/AtualizarProduto';
>>>>>>> e90661329c9e3f8cadc16b63fecccaf22e3fe99f




function App() {
  return (
    <Provider store={store}>
    <Router>
      <div style={{minHeight: 'calc(100vh - 100px)'}} >
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastrar' element={<CadastroCliente />} />
            <Route path='/login' element={<Login />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria/>} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produto/:id" element={<VendaProduto />} />
            <Route path="/formularioProduto" element={<CadastroProduto/>} />
            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/atualizarProduto/:id" element={<AtualizarProduto/>} />
            <Route path="/SucessPage" element={<SucessPage />} />
            <Route path="/atualizar" element={<AlterarCadastro/>} />
            <Route path="/listaproduto" element={<ListaProduto/>} />
            <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
        </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App ;
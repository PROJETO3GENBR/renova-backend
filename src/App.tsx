import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/estaticos/footer/Footer';
import { Home } from './Paginas/Home/Home';
import Login from './Paginas/Login/Login'
import  Card  from './components/Card/Card';
import { CadastroCliente } from './Paginas/cadastroCliente/CadastroCliente';
import Navbar from './components/estaticos/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
       
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<CadastroCliente />} />
            <Route path='/login' element={<Login />} />
          
        </Routes>
      <Footer />
    </Router>
  );
}

export { App };
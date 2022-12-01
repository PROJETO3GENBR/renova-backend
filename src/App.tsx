import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/estaticos/footer/Footer';
import { Home } from './components/Paginas/home/Home';
import { Login } from './components/Login/Login.tsx'
import  Card  from './components/Card/Card';
import { CadastroCliente } from './paginas/cadastroCliente/CadastroCliente';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <div style={{minHeight: '100vh'}}>
            <Route path='/'>
              <Login />
            </Route>
            <Route path='/home'>
              <Login />
            </Route>
            <Route path='/cliente'>
              <Home />
            </Route>
            <Route path='/cadastrocliente'>
              <CadastroCliente />
            </Route>
          </div>
        </Routes>
      < Footer />
    </Router>
  );
}

export { App };
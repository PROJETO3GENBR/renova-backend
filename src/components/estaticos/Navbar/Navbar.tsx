import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'
import { Box, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Navbar() {

  const classes = useStyles();

  const navigate = useNavigate()
  const [token, setToken] = useLocalStorage('token');

  function logout() {
    setToken('');
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });

    navigate('/login');
  }

  let button;
  if (token != '') {
    button = <Button id='botao_nav' onClick={logout} >Sair </Button>
  } else {
    button = <Button id='botao_nav' href='/login'>Login</Button>
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={0} id='navbar' position="static">
        <Toolbar>


          <a href='/home'>

            <img id='logo' src="https://raw.githubusercontent.com/PROJETO3GENBR/renova-visual-archives/main/logo/renovasemfundo.png" alt="logo" />
          </a>
          {/* <div>
        <form className="navbar_search" action="/action_page.php">
          <input id='navbar_search_input' type="text" placeholder="Search.." name="search"/>
            <button id='navbar_search_button' type="submit">Buscar</button>
        </form>
</div> */}

          <div id="botoes">
            <Button id='botao_nav' href='/home'>Home</Button>
            {button}

            <Button href='/perfil'>
              <img id='settings_svg' src='https://i.imgur.com/IKYw1jn.png' alt='' />
            </Button>
          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react'
import './inicio.css'
import { Button } from '@material-ui/core'
import BasicExample from './scrollTo'
import CadastroCliente from '../cadastroCliente/CadastroCliente'




function Inicio() {


  return (
    <>
      <div className='inicio_page'>
        <div className='side1'>
          <img id='renova_logo_about' src='https://raw.githubusercontent.com/PROJETO3GENBR/renova-visual-archives/main/logo/nrenovasvg.svg' alt='Renova Logo' />
          <span id='texto'>
            O Projeto RENOVA é um e-commerce que visa ajudar no contato de pessoas interessadas em reciclagem com os itens de potencial reciclavel.
            Criado por Lucas, Levy, Luna, Hebert, Danielle, Geovanni e Anderson.
          </span>
          <div id='button_list'>
            <BasicExample />
            <Button className='use_btn' id='home_btn' href='/home' variant='contained' >
              VER PRODUTOS
            </Button>
          </div>
        </div>


        <div className='side2'>
          <Button id='login_btn' href='/login' variant='contained' >
            LOGIN
          </Button>
          <img id='pessoa_svg' src='https://i.imgur.com/AnCvjKl.png' alt='pessoa reciclando' />
        </div>
    


      </div>
      <div className='formSide' id='formSide'>
        <div id='formCad'>
        <CadastroCliente/>
        </div>
      </div>

    </>
  )
}

export default Inicio
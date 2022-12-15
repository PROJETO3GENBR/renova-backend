import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import User from '../../models/User';
import './Perfil.css'
import { buscaId } from '../../services/Service';




function Perfil() {
  const [token, setToken] = useLocalStorage('token');
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])
  // const [produto, setProduto] = useState<User>({
  //   id:0, 
  //   usuario:''    

  // })
  //   const [token, setToken] = useLocalStorage('token');
  //   const { id } = useParams<{ id: string }>();
  //   let navigate = useNavigate();
  
  //   useEffect(() => {
  //     if (token == "") {
  //       alert("Você precisa estar logado")
  //       navigate("/login")
  
  //     }
  //   }, [token])
  
  //   async function getPost (id: string) {
  //     await buscaId(`/produto/${id}`, setProduto, {
  //       headers: {
  //         'Authorization': token
  //       }
  //     })
  //   }
  
  //   useEffect(() =>{
  //     if(id !== undefined){
  //         getPost(id)
  //     }
  // }, [id])

  return (
    <main>
      <div>
        
      </div>
      <Button id='botao_perfil' href='/formularioProduto'>CADASTRAR PRODUTO</Button>
      {/* <Button id='botao_nav' href='/formularioProduto'>ATUALIZAR PRODUTO</Button> */}
      <Button id='botao_perfil' href='/atualizar'>ATUALIZAR PERFIL</Button>
      <Button id='botao_perfil_delete' href='/listaproduto' >DELETAR PRODUTO</Button>
    </main>
  )
}

export default Perfil
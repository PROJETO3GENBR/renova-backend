import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://renova-p3.onrender.com/'
})

export const CadastroCliente = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}
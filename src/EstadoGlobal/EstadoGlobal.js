import React, { useState } from "react";
import axios from "axios";
import { ContextoGlobal } from './EstadoGlobalContexto';
import { BASE_URL } from "../constantes/urls";
import useRequestData from '../hooks/useRequestData';

const EstadoGlobal = (props) => {
    // Todos os estados e setters são declarados aqui:
    const [carrinho, setCarrinho] = useState([])
    const [dadosPerfil, setDadosPerfil] = useState([])
    const [loading, setLoading] = useState(false)
    const [pedidoAtivo, setPedidoAtivo] = useState({})
    const restaurantes = useRequestData([], `${BASE_URL}/restaurants`)


    // Todas as requisições da API vão aqui:

    

    const pegarPerfil = () => {
        setLoading(true)
        const token = localStorage.getItem('token')

        axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            setDadosPerfil(res.data.user)
              setLoading(false)
        }).catch((err) =>{
            alert(err.response.data.message)
        })
    }

    const editarPerfil = (body) => {
        const token = localStorage.getItem('token')

        axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
            }
        }).then((res) => {
            alert("dados alterados")
        }).catch((err) =>{
            alert(err.response.data.message)
        })
    }

    const pegarPedidosAtivos = () =>{
        const token = localStorage.getItem('token')

        axios.get(`${BASE_URL}/active-order`,{
            headers: {
                auth: token
            } 
        }).then((res)=>{
            setPedidoAtivo(res.data)
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    // Todos os nomes dos estados vão dentro desse objeto (separados por vírgulas). 
    // O mesmo com os setters e requisições
    // Assim só precisa chamar essas três consts quando quiser acessar esses valores
    const states = { carrinho, dadosPerfil, loading, pedidoAtivo , restaurantes}
    const setters = { setCarrinho, setDadosPerfil, setLoading , setPedidoAtivo}
    const requests = { pegarPerfil, editarPerfil, pegarPedidosAtivos}

    return (
        <ContextoGlobal.Provider value={{ states, setters, requests }}>
            {props.children}
        </ContextoGlobal.Provider>
    )
}
export default EstadoGlobal
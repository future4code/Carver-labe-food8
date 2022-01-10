import React from 'react';
import { ContainerEditarPerfil } from './estilo';
import { BASE_URL } from '../../constantes/urls'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Perfil = () => {

  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFlTTg5azFvU203VUN6MVRvQzBCIiwibmFtZSI6IkRlc2F0aW5hciIsImVtYWlsIjoicm9kcmlnb3NkbkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMCIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2NDE4MzM5MTR9.50QgjPIpVYMTxgZUryROVoGI2bSXtE52qnXrmSJO-So'

    axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: token
      }
    }).then((res) => {
      setDados(res.data.user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>
      Carregando
    </div>
  } else {

  return (
    <ContainerEditarPerfil className='Perfil'>
      <div className='Bar'>
        <div className='Title'>
          Meu Perfil
        </div>
      </div>
      <p>
        Nome: 
        {dados.name}
        <button>editar</button>
      </p>
      <p>
        Email: 
        {dados.email}
      </p>
      <p>
        CPF: 
        {dados.cpf}
      </p>
      <div className='Rectangle'>
        <p>
          Endereço Cadastrado
          <button>editar</button>
        </p>
        <p>
          Endereço: 
        </p>
      </div>
      <div>
        Histórico de pedidos
        <div className='pedidos_card'>
          <div className='Card_Historico'>
            <p>
              Loja
            </p>
            <p>
              Data
            </p>
            <p>
              Valor
            </p>
          </div>
        </div>
        <div className='Footer'>
          🤖 🤖 🤖
        </div>
      </div>
    </ContainerEditarPerfil>
  )};
}

export default Perfil;
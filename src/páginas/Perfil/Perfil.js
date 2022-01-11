import React from 'react';
import { ContainerEditarPerfil } from './estilo';
import { BASE_URL } from '../../constantes/urls'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { irParaEditarPerfil } from '../../routes/cordinator';


const Perfil = () => {
  
  const history = useHistory()
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(false)
   
  useEffect(() => {
    setLoading(true)

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFlTTg5azFvU203VUN6MVRvQzBCIiwibmFtZSI6IkRlc2F0aW5hciIsImVtYWlsIjoicm9kcmlnb3NkbkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDE5MTE1NjN9.0BRQ27nIkizNT-vUwiiiw0Focg9DQo64FvgFHoYOADM'

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
        <button onClick={() => irParaEditarPerfil(history)}>
          editar
          </button>
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
          {dados.address}
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
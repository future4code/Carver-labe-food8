import React, { useContext, useState } from 'react';
import { ContainerEditarPerfil } from './estilo';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { irParaCarrinho, irParaEditarEndereco, irParaEditarPerfil, irParaInicio, irParaPerfil } from '../../routes/cordinator';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls';


const Perfil = () => {
  const history = useHistory()
  const { states, requests } = useContext(ContextoGlobal)
  const [historicoPedidos, setHistoricoPedidos] = useState([])

  useEffect(() => {
    requests.pegarPerfil()

  }, [
    //requests
  ])

  const visualizarHistoricoPedidos = () => {
    axios.get(`${BASE_URL}/orders/history`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((res) => {
      setHistoricoPedidos(res.data.orders)
    }).catch((err) => {
      console.log(err.response)
    })
  }

  const arrayTeste = [1, 2, 3, 4]
  const arrayTeste2 = []

  console.log(arrayTeste2.length ? "sim" : "não", "teste")
  console.log(arrayTeste.length ? "sim" : "não" , "teste array com coisa")

  const mapHistoricoPedidos = historicoPedidos.map((item) => {
      return (
        <div>
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
      )
  })

  console.log(historicoPedidos, "historico pedidos")
  return (
    <ContainerEditarPerfil className='Perfil'>
      <div className='Bar'>
        <div className='Title'>
          Meu Perfil
        </div>
      </div>
      <p>
        Nome:
        {states.dadosPerfil.name}
        <button onClick={() => irParaEditarPerfil(history)}>
          editar
        </button>
      </p>
      <p>
        Email:
        {states.dadosPerfil.email}
      </p>
      <p>
        CPF:
        {states.dadosPerfil.cpf}
      </p>
      <div className='Rectangle'>
        <p>
          Endereço Cadastrado
          <button onClick={() => irParaEditarEndereco(history)}>editar</button>
        </p>
        <p>
          Endereço:
          {states.dadosPerfil.address}
        </p>
      </div>
      <div>
        Histórico de pedidos
        <div className='pedidos_card'>
          <div className='Card_Historico'>
            {/* <button onClick={visualizarHistoricoPedidos}>
              teste histórico
            </button> */}
            {historicoPedidos.length === 0 ? <div>array vazio</div> : <div>array com coisa</div>}

            {/* <p>
              Loja
            </p>
            <p>
              Data
            </p>
            <p>
              Valor
            </p> */}
          </div>
        </div>
        <div className='Footer'>
          <button onClick={() => irParaInicio(history)}>Início</button>
          <button onClick={() => irParaCarrinho(history)}>Carrinho</button>
          <button onClick={() => irParaPerfil(history)}>Perfil</button>
        </div>
      </div>
    </ContainerEditarPerfil>
  )
};

export default Perfil;
import React, { useContext } from 'react';
import { ContainerEditarPerfil } from './estilo';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { irParaEditarPerfil } from '../../routes/cordinator';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';


const Perfil = () => {
  const history = useHistory()
  const { states, setters, requests } = useContext(ContextoGlobal)

  useEffect(() => {
    requests.pegarPerfil()

  }, [requests])

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
          <button>editar</button>
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
  )
};

export default Perfil;
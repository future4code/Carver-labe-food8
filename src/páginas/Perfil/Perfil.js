import React, { useContext, useState } from 'react';
import { Container, ContainerPerfil, FooterPerfil, Header } from './estilo';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { irParaCarrinho, irParaEditarEndereco, irParaEditarPerfil, irParaInicio, irParaPerfil } from '../../routes/cordinator';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import perfil from '../../recursos/imagens/perfilVerde.png'
import homepage from '../../recursos/imagens/homePageCinza.png'
import carrinho from '../../recursos/imagens/carrinhoCinza.png'


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
  console.log(arrayTeste.length ? "sim" : "não", "teste array com coisa")

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

  // console.log(historicoPedidos, "historico pedidos")
  return (

    <Container>
      <ContainerPerfil>
        <div className='header'>
          Meu Perfil
        </div>
        <div className='dados'>
          <p className='nome'>
            {states.dadosPerfil.name}
            <EditOutlinedIcon fontSize='small' style={{ color: "black" }} onClick={() => irParaEditarPerfil(history)} />
          </p>
          <p className='email'>
            {states.dadosPerfil.email}
          </p>
          <p className='cpf'>
            {states.dadosPerfil.cpf}
          </p>
        </div>
        <div className='endereco'>
          <p className='endereco-cadastrado'>
            Endereço cadastrado
            <EditOutlinedIcon fontSize='small' style={{ color: "black" }} onClick={() => irParaEditarEndereco(history)} />
          </p>
          <p className='endereco-usuario'>
            {states.dadosPerfil.address}
          </p>
        </div>
        <div className='historico'>
          <p className='historico-titulo'>
            Histórico de pedidos
          </p>
          <p className='sublinhado'>
          </p>

          <div className='pedidos_card'>
            <div className='Card_Historico'>
              {/* <button onClick={visualizarHistoricoPedidos}>
              teste histórico
            </button> */}
              {historicoPedidos.length === 0 ? <div>array vazio</div> : <div>array com coisa</div>}
            </div>
          </div>
          <div className='Footer'>
          </div>
        </div>
        <FooterPerfil>
          <button onClick={() => irParaInicio(history)}><img src={homepage}/></button>
          <button onClick={() => irParaCarrinho(history)}><img src={carrinho}/></button>
          <button onClick={() => irParaPerfil(history)}><img src={perfil}/></button>
        </FooterPerfil>
      </ContainerPerfil>
    </Container>





  )
};

export default Perfil;
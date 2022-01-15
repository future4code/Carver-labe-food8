import React, { useContext, useState } from 'react';
import { Container, ContainerPerfil, FooterPerfil, HistoricoVazio, Pedidos } from './estilo';
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
import { Card, CardContent, Typography } from '@material-ui/core';


const Perfil = () => {
  const history = useHistory()
  const { states, requests } = useContext(ContextoGlobal)
  const [historicoPedidos, setHistoricoPedidos] = useState([])

  useEffect(() => {
    requests.pegarPerfil()

    axios.get(`${BASE_URL}/orders/history`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((res) => {
      setHistoricoPedidos(res.data.orders)
    }).catch((err) => {
      alert(err.response.data.message)
    })

  }, [
    //requests
  ])

  const mapHistoricoPedidos = historicoPedidos.map((item) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date(item.createdAt);

    return (
      <Pedidos key={item.createdAt}>
        <Card variant='outlined'>
          <CardContent>
            <Typography className='restaurante'>
              {item.restaurantName}
            </Typography>
            <Typography className='data'>
              {today.toLocaleDateString("pt-BR", options)}
            </Typography>
            <Typography className='total'>
              SUBTOTAL R${item.totalPrice}
            </Typography>
          </CardContent>
        </Card>
      </Pedidos>
    )
  })

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
              {historicoPedidos && historicoPedidos.length === 0 ?
                <HistoricoVazio>Você não realizou nenhum pedido</HistoricoVazio>
                :
                <div>{mapHistoricoPedidos}</div>}
            </div>
          </div>
          <div className='Footer'>
          </div>
        </div>
        <FooterPerfil>
          <button onClick={() => irParaInicio(history)}><img src={homepage} /></button>
          <button onClick={() => irParaCarrinho(history)}><img src={carrinho} /></button>
          <button onClick={() => irParaPerfil(history)}><img src={perfil} /></button>
        </FooterPerfil>
      </ContainerPerfil>
    </Container>
  )
};

export default Perfil;
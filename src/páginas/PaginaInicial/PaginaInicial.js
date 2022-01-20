import React, { useContext } from 'react';
import { usePaginaProtegida } from '../../hooks/usePaginaProtegida';
import CardRestaurantes from '../../componentes/CardRestaurantes/CardRestaurantes'
import { ContainerPaginaInicial, ContainerHeader, ConteudoHeader, Navegacao, FooterPaginaInicial } from './estilo';
import { useHistory } from 'react-router-dom';
import { irParaRestaurante } from '../../routes/cordinator';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import { useState } from 'react';
import Busca from '../../componentes/BuscaeFiltros/Busca';
import { irParaCarrinho, irParaInicio, irParaPerfil } from '../../routes/cordinator';
import perfil from '../../recursos/imagens/perfilVerde.png'
import homepage from '../../recursos/imagens/homePageCinza.png'
import carrinho from '../../recursos/imagens/carrinhoCinza.png'

const PaginaInicial = () => {
  usePaginaProtegida()
  const history = useHistory()
  const { states } = useContext(ContextoGlobal)
 
  //criei um estado de filtro pra mudar a tela
  // e quando a gente clica no botão
  // ele muda esse estado com o nome da categoria do restaurante
  const [filtro, setFiltro] = useState('')

  const onClickCard = (id) => {
    irParaRestaurante(history, id)
  }

  const cardsRestaurante = states.restaurantes.map((restaurant) => {
    return (

      <CardRestaurantes
        key={restaurant.id}
        titulo={restaurant.name}
        imagem={restaurant.logoUrl}
        frete={restaurant.shipping}
        tempoEntrega={restaurant.deliveryTime}
        onClick={() => onClickCard(restaurant.id)}
      />
    )
  })

  // fiz uma variável com o retorno do filter incluindo o que a gente enviar do botão (não sei juntar as duas :( )
  const restauranteFiltrado = states.restaurantes.filter((rest) => {

    return rest.category.includes(filtro)

  })

  //aqui o map do item filtrado + teu card
  const cardsRestauranteFiltrado = restauranteFiltrado.map((restaurant) => {
    return (
      <CardRestaurantes
        key={restaurant.id}
        titulo={restaurant.name}
        imagem={restaurant.logoUrl}
        frete={restaurant.shipping}
        tempoEntrega={restaurant.deliveryTime}
        onClick={() => onClickCard(restaurant.id)}
      />
    )
  })

  return (
    <div>
      <ContainerPaginaInicial>
        <ContainerHeader>
          <ConteudoHeader>
            <div><p>FutureEats</p></div>
          </ConteudoHeader>
        </ContainerHeader>   <Busca /> <Navegacao>
          <button onClick={() => setFiltro('')}>
            Todos
          </button>
          <button onClick={() => setFiltro('Árabe')}>
            Árabe
          </button>
          <button onClick={() => setFiltro('Asiática')}>
            Asiática
          </button>
          <button onClick={() => setFiltro('Hamburguer')}>
            Hamburguer
          </button>
          <button onClick={() => setFiltro('Italiana')}>
            Italiana
          </button>
          <button onClick={() => setFiltro('Sorvetes')}>
            Sorvetes
          </button>
          <button onClick={() => setFiltro('Carnes')}>
            Carnes
          </button>
          <button onClick={() => setFiltro('Baiana')}>
            Baiana
          </button>
          <button onClick={() => setFiltro('Petiscos')}>
            Petiscos
          </button>
          <button onClick={() => setFiltro('Mexicana')}>
            Mexicana
          </button>
        </Navegacao>
        {/* comparacao pra mudar a tela de acordo com o item escolhido */}
        {
          filtro === '' ?
            <div>
              {cardsRestaurante}
            </div>
            :
            <div>
              {cardsRestauranteFiltrado}
            </div>
        }
      </ContainerPaginaInicial>

      <FooterPaginaInicial>
          <button onClick={() => irParaInicio(history)}><img src={homepage} /></button>
          <button onClick={() => irParaCarrinho(history)}><img src={carrinho} /></button>
          <button onClick={() => irParaPerfil(history)}><img src={perfil} /></button>
        </FooterPaginaInicial>
    </div>
  );
}

export default PaginaInicial;
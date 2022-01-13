import React, { useContext } from 'react';
import { usePaginaProtegida } from '../../hooks/usePaginaProtegida';
import CardRestaurantes from '../../componentes/CardRestaurantes/CardRestaurantes'
import { ContainerPaginaInicial, ContainerHeader, ConteudoHeader } from './estilo';
import { useHistory } from 'react-router-dom';
import { irParaRestaurante } from '../../routes/cordinator';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';

const PaginaInicial = () => {
  usePaginaProtegida()
  const { states } = useContext(ContextoGlobal)
  const history = useHistory()

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

  return (
    <div> 
      <ContainerPaginaInicial>
      <ContainerHeader>
        <ConteudoHeader>
        <p>FutureEats</p>
        </ConteudoHeader>
        </ContainerHeader>     
        {cardsRestaurante}
      </ContainerPaginaInicial>
    </div>
  );
}

export default PaginaInicial;
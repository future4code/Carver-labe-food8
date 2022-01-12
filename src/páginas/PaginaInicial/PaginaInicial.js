import React, { useContext } from 'react';
// import { BASE_URL } from '../../constantes/urls';
// import useRequestData from '../../hooks/useRequestData';
// import { usePaginaProtegida } from '../../hooks/usePaginaProtegida';
import CardRestaurantes from '../../componentes/CardRestaurantes/CardRestaurantes'
// import Header from '../../Header/Header';
import { ContainerPaginaInicial } from './estilo';
import { useHistory } from 'react-router-dom';
import { irParaRestaurante } from '../../routes/cordinator';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';

const PaginaInicial = () => {
  // usePaginaProtegida()
  const {states} = useContext(ContextoGlobal)
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
    <ContainerPaginaInicial>
    <div>
      {cardsRestaurante}
    </div>
    </ContainerPaginaInicial>
  );
}

export default PaginaInicial;
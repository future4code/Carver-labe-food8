import React, { useContext } from 'react';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';

export const CardPedido=()=>{
    const {states, setters, requests} = useContext(ContextoGlobal)
    const cardInfoRestaurante= states.restaurantes.map((restaurant) => {
    return (

      <div
        key={restaurant.id}
      >
          <p>{restaurant.name}</p>
          <span>{restaurant.adress}</span>
          <span>{restaurant.deliveryTime}</span>
      </div>
    )
  })
  return(
      <>
      {cardInfoRestaurante}
      </>
  )
}
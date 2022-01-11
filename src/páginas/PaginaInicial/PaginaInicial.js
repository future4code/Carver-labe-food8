import React from 'react';
import { BASE_URL } from '../../constantes/urls';
import useRequestData from '../../hooks/useRequestData';
// import { usePaginaProtegida } from '../../hooks/usePaginaProtegida';
import CardRestaurante from '../../componentes/CardRestaurantes/CardRestaurantes';



const PaginaInicial = () => {
  // usePaginaProtegida()
  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`)
  console.log(restaurantes)

const cardRestaurante = restaurantes.map((restaurants)=> {
  return <p>{restaurants.name}</p>
})

  return (
    <CardRestaurante>
      <h1>Página Inicial</h1>
      <p>Restaurante</p>
      {cardRestaurante}
    </CardRestaurante>
  );
}

export default PaginaInicial;
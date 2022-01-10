import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls'


const pegaRestaurantes = async () => {

  try {
    const response = await axios.get("BASE_URL/restaurants")

    setRestaurantes(response.data.results)
    console.log(restaurants)
  } catch(error) {
    alert(error.response.message)
    console.log(error)
  }
}


const PaginaInicial = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
    </div>
  );
}

export default PaginaInicial;
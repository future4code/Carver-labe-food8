import React from 'react';
import './estilo';
import { Bar, Rectangle, Endereco, Rua } from './estilo';


function Carrinho() {
  return (
    <div>
      <Bar>
        <div><span>Meu Carrinho</span></div>
        
      </Bar>
      <Rectangle>
        <Endereco>Endereço de entrega</Endereco>
        <Rua>Rua Blablabla, XX</Rua>
      </Rectangle>
      <div>
        <p>Carrinho vazio</p>
      </div>
    </div>
  );
}

export default Carrinho;
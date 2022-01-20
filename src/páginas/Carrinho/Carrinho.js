import React, { useContext } from 'react';
import './estilo';
import { Bar, Rectangle, Endereco, Rua } from './estilo';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import { CardPedido } from './CardPedido';
import { CardSemPedido } from './cardSemPedido';

const Carrinho = () => {
  const { states, setters, requests } = useContext(ContextoGlobal)
  return (
    <div>
      <Bar>
        <div><span>Meu Carrinho</span></div>

      </Bar>
      <>
        {states.pedidoAtivo !== null ?
          <CardPedido/> : <CardSemPedido/>}
      </>

    </div>
  );
}

export default Carrinho;
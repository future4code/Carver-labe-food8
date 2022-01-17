import React, { useContext, useState } from "react";
import styled from "styled-components";
import lupa from "../../recursos/imagens/search.png"
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import CardRestaurantes from "../CardRestaurantes/CardRestaurantes";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";


export const BuscaContainer = styled.div`
width: 328px;
  height: 50px;
 margin: 15px;
  padding: 16px 17px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  align-items: center;
  display: flex;
 

  img {
  width: 24px;
  height: 24px;
  margin: 5 10 5 5px;
  object-fit: contain;
}

input {
    width: 328px;
    border: none;
    height: 50px
}
`


const Busca = () => {
    // em comentário tentativa de fazer o search
    usePaginaProtegida()


    const { states } = useContext(ContextoGlobal)

    const [buscar, setBuscar] = useState("")

    const novaRender = states.restaurantes
        .filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(buscar.toLowerCase())
        })
        .map((restaurant) => {
            return (
                <div key={restaurant.id}>
                    <CardRestaurantes
                        restaurante={restaurant}
                    />
                </div>
            )


        })

    const atualizarBusca = (event) => {
        setBuscar(event.target.value)
    }


    return (
        <BuscaContainer>
            <img src={lupa} />
            <input
                type="text"
                placeholder="Restaurante"
                value={buscar}
                onChange={atualizarBusca}
            />
        </BuscaContainer>
    )
}

export default Busca
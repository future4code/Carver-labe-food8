import React, {useContext, useState} from "react";
import styled from "styled-components";
import lupa from "../../recursos/imagens/search.png"
// import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
// import CardRestaurantes from "../CardRestaurantes/CardRestaurantes";


export const BuscaContainer = styled.div`
width: 328px;
  height: 56px;
  margin-top: 10;
  margin: 10 10 10 10px;
  padding: 16px 17px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;

  img {
  width: 24px;
  height: 24px;
  margin: 5 10 5 5px;
  object-fit: contain;
}
`

const Busca = () => {
// em comentário tentativa de fazer o search



    // const { restaurantes } = useContext(ContextoGlobal)  

    // const [buscar, setBuscar] = useState("")

    // const novaRender = restaurantes
    // .filter((restaurant) => {
    //     return restaurant.name.toLowerCase().includes(buscar.toLowerCase())
    // })
    // .map((rest) => {
    //     return (
    //         <div key={rest.id}>
    //             <CardRestaurantes
    //             restaurante={rest}
    //             />
    //         </div>
    //     )
    // })

    // const atualizarBusca = (e) => {
    //     setBuscar(e.target.value)
    // }

    return (
        <BuscaContainer> 
            <img src={lupa}/>  
            <input 
            type="text"
            placeholder="Restaurante"
            // value={buscar}
            // onChange={atualizarBusca}
                />
        
        </BuscaContainer>
    )
 }

export default Busca
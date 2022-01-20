import React from "react";
// import { useHistory } from "react-router-dom";
// import { irParaRestaurante } from "../../routes/cordinator";
import { ContainerCardRestaurante, ContainerImagem, ContainerTextoNome, ContainerTextos } from "./estilo";

const CardRestaurantes = (props) => {

    // const history = useHistory()

    return (
        <ContainerCardRestaurante onClick={props.onClick}>
            <ContainerImagem src={props.imagem} alt={props.titulo}>
            </ContainerImagem>
            <ContainerTextoNome>
                {props.titulo}
                </ContainerTextoNome>
            <ContainerTextos>
               <div>{props.tempoEntrega}min</div> 
                <div>Frete: {props.frete},00</div>
            </ContainerTextos>
        </ContainerCardRestaurante>
    )
}

export default CardRestaurantes
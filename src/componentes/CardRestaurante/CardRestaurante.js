import React from "react";
import { Botao, BotaoAdd, BotaoRem, ImgProduto, NomeDoItem, Preco, RetanguloCard, TextDescritivo } from "./estilo";

const CardRestaurante = (props) => {
    return (
        <RetanguloCard>
            <ImgProduto src={props.detalhe.photoUrl} />
            <NomeDoItem>{props.detalhe.name}</NomeDoItem>
            <TextDescritivo>{props.detalhe.description}</TextDescritivo>
            <Preco>{props.detalhe.price.toFixed(2)}</Preco>

            <BotaoAdd>ADICIONAR</BotaoAdd>
            <BotaoRem>REMOVER</BotaoRem>

        </RetanguloCard>
    )
}

export default CardRestaurante;
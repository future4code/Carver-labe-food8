import React from "react";
import { BotaoAdd, BotaoRem, CardDetalhes, ContainerCard, Detalhes, ImgProduto, NomeDoItem, Preco, RetanguloCard, TextDescritivo } from "./estilo";

const CardRestaurante = (props) => {


    const mudaBotao = () => {
        
        if (true) {
          return (
            <BotaoAdd>
              ADICIONAR
            </BotaoAdd>
          );
        } else {
          return (
            <BotaoRem>
              REMOVER
            </BotaoRem>
          );
        }
    }
    return (
        <div>
            <CardDetalhes>
                <RetanguloCard>
                    <ImgProduto src={props.detalhe.photoUrl} />
                    <Detalhes>
                        <ContainerCard>
                            <NomeDoItem>{props.detalhe.name}</NomeDoItem>
                        </ContainerCard>
                        <ContainerCard>
                            <TextDescritivo>{props.detalhe.description}</TextDescritivo>
                        </ContainerCard>

                        <ContainerCard>
                            <Preco>R${props.detalhe.price.toFixed(2)}</Preco>
                        </ContainerCard>
                        {mudaBotao()}
                    </Detalhes>
                </RetanguloCard>
            </CardDetalhes>
        </div >
    )
}

export default CardRestaurante;
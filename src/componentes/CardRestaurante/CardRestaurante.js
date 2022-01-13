import React, { useContext } from "react";
import EstadoGlobal from "../../EstadoGlobal/EstadoGlobal";
import { BotaoAdd, BotaoRem, CardDetalhes, ContainerCard, Detalhes, ImgProduto, NomeDoItem, Preco, TextDescritivo } from "./estilo";

const CardRestaurante = (props, carrinho, setCarrinho) => {
    // const { carrinho, setCarrinho } = useContext(EstadoGlobal)

    // const addCarrinho = (addItem) => {
    //     const indexProd = props.detalhe.findIndex((i) => i.id === addItem.id);
    //     const novoCarrinho = [...carrinho];

    //     if (indexProd === -1) {
    //         // não está no carrinho
    //         const carrItem = { ...addItem, amount: 1 };
    //         novoCarrinho.push(carrItem);
    //     } else {
    //         // já está no carrinho
    //         novoCarrinho[indexProd].amount += 1;
    //     }

    //     setCarrinho(novoCarrinho);
    // };

    // const productCards =
    //     products &&
    //     products.products.map((prod) => {
    //         return (
    //             <ProductCard
    //                 key={prod.id}
    //                 product={prod}
    //                 addItemToCart={addItemToCart}
    //             />
    //         );
    //     });

    // const remCarrinho = (remItem) => {
    //     const indexProd = props.detalhe.findIndex((i) => i.id === remItem.id)
    //     const novoCarrinho = [...carrinho]
    //     if (novoCarrinho[indexProd].amount === 1) {
    //         // Se só tem um, quero remover
    //         novoCarrinho.splice(indexProd, 1);
    //     } else {
    //         // Se tem mais de um, quero diminuir
    //         novoCarrinho[indexProd].amount -= 1;
    //     }
    //     setCarrinho(novoCarrinho);
    // };

    // console.log(novoCarrinho)


    const mudaBotao = () => {

        if (props.detalhe.where === 'restaurante') {
            return (
                <BotaoAdd >
                    ADICIONAR
                </BotaoAdd>
            );
        } else {
            return (
                <BotaoRem >
                    REMOVER
                </BotaoRem>
            );
        }
    }
    return (
        <div>
            <CardDetalhes>
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
                </Detalhes>
                {mudaBotao()}
            </CardDetalhes>
        </div >
    )
}

export default CardRestaurante;
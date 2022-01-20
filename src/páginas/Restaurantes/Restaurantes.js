import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardRestaurante from '../../componentes/CardRestaurante/CardRestaurante';
import { BASE_URL } from '../../constantes/urls'
import { BordaCard, Categoria, Container, ContainerRestaurante, Endereco, Frete, ImgCard, NomeRestaurante, Tempo, TempoDeCompra } from './estilo';


const Restaurante = () => {
  const [dadoRestaurante, setDadoRestaurante] = useState({});
  const [dadoProdutos, setDadoProdutos] = useState([]);

  const params = useParams();

  const token = localStorage.getItem('token')
  const url = `${BASE_URL}/restaurants/${params.id}`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res)
        setDadoRestaurante(res.data.restaurant);
        setDadoProdutos(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const detalhesDoRestaurante = () => {
    const dadoProdutosOrdenado = dadoProdutos.sort((a, b) => {
      return a.category < b.category ? -1 : b.category > a.category ? 1 : 0;
    });
    let categoria = "";
    const renderizaCard =
      dadoProdutosOrdenado &&
      dadoProdutosOrdenado.map((detalhe) => {
        if (detalhe.category !== categoria) {
          categoria = detalhe.category;
          return (
            <div>
              <BordaCard><h5>{categoria}</h5></BordaCard>
              <CardRestaurante restauranteId={dadoRestaurante.id} detalhe={detalhe} />
            </div>
          );
        } else {
          return <CardRestaurante restauranteId={dadoRestaurante.id} detalhe={detalhe} />;
        }
      });
    return <div>{renderizaCard}</div>;

  }
  return (
    <Container>
      <ContainerRestaurante>
        <ImgCard src={dadoRestaurante.logoUrl} />
        <NomeRestaurante>{dadoRestaurante.name} </NomeRestaurante>
        <Categoria>{dadoRestaurante.category} </Categoria>
        <TempoDeCompra>
          <Tempo>{dadoRestaurante.deliveryTime} min</Tempo>
          <Frete>Frete: R$ {dadoRestaurante.shipping},00</Frete>
        </TempoDeCompra>
        <Endereco>{dadoRestaurante.address}</Endereco>
        {detalhesDoRestaurante()}
      </ContainerRestaurante>
    </Container >
  );
}

export default Restaurante;
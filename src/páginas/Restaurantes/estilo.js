import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0 80px 0;
`;
export const ContainerRestaurante = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;

`;
export const ImgCard = styled.img`
  width: 328px;
  height: 120px;
  margin: 17px 16px 12px;
  object-fit: contain;

`;
export const NomeRestaurante = styled.div`
  width: 328px;
  height: 18px;
  margin: 12px 16px 8px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: #5cb646;
`;
export const Categoria = styled.div`
  width: 328px;
  height: 18px;
  margin: 8px 8px 8px ;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const Tempo = styled.span`
  width: 328px;
  height: 18px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const Endereco = styled.span`
  width: 328px;
  height: 18px;
  margin: 10px 16px 16px ;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const TempoDeCompra = styled.div`
  width: 328px;
  height: 18px;
  margin: 8px 8px 8px ;
  display: flex;
  justify-content:center;
`
export const Frete = styled.span`
  width: 328px;
  height: 18px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const BordaCard = styled.div`
  border-bottom: 2px solid black;
  margin-top: 0;
  margin-bottom: 0;
  h5{
    margin-bottom: 0;
  }
`
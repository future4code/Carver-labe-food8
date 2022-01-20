import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  height: 20%;
  width: 101%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 0;
  margin-bottom: 0;
`

export const CardDetalhes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: solid 1px #00000025;
  padding-bottom: 0;
`;

export const ImgProduto = styled.img`
  width: 96px;
  height: 112px;
  margin: 0 16px 0 0;
  object-fit: contain;
`
export const Detalhes = styled.div`
  height: 110%;
  width: 40%;
`

export const NomeDoItem = styled.span`
  width: 200px;
  height: 20px;
  margin: 5px 0px 0px 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

export const TextDescritivo = styled.span`
  width: 200px;
  height: 30px;
  margin: 8px 16px 4px 10px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`

export const Preco = styled.span`
  width: 118px;
  height: 19px;
  margin: 35px 8px 15px 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

export const BotaoAdd = styled.button`
  color:#5cb646;
  font-size: 10px;
  background-color: white;
  width: 30%;
  height: 35%;
  align-self: flex-end;
  margin-bottom: 0;
  border-top-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border: solid 1px #5cb646;
`
export const BotaoRem = styled.button`
  color:#e02020;
  font-size: 10px;
  background-color: white;
  width: 30%;
  height: 35%;
  align-self:flex-end;
  border-top-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border: solid 1px #e02020;
`
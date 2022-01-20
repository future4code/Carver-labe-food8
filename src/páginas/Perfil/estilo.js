import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100vw;
  height: 100vh;

 .header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 64px;
    margin: 0 0 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
 }

 .dados{
   height: 102px;
   width: 360px;
   padding: 12px;

   .nome{
      width: 360px;
      height: 18px;
      margin: 0 0 10px 0;
      letter-spacing: -0.39px;
      display: flex;
      justify-content: space-between;
   }

   .email{
      letter-spacing: -0.39px;

   }
   .cpf{
      letter-spacing: -0.39px;
   }
 }

 .endereco{
    min-width: 360px;
    height: 76px;
    padding: 12px;
    background-color: #eeeeee;

    .endereco-cadastrado{
      color: #b8b8b8;
      display: flex;
      justify-content: space-between;
      letter-spacing: -0.39px;
    }

    .endereco-usuario{
      letter-spacing: -0.39px;
    }
 }

 .historico{
    width: 360px;
    height: 18px;
    letter-spacing: -0.39px;
    margin-bottom: -2px;

  .sublinhado{
    width: 360px;
    margin: -2px 0 7px;
    border: solid 0.1vw black;
  }
 }

`
export const ContainerPerfil = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
export const FooterPerfil = styled.div`
display: flex;
justify-content: space-around;
position: fixed;
bottom: 0;
width: 360px;
height: 49px;
box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
z-index: 1;
background-color: #fff;

button{
  background-color: transparent;
  border: none;
}
`

export const HistoricoVazio = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;

`

export const Pedidos = styled.div`

display: flex;
flex-direction: column;
margin: 10px 0;
font-family: 'Roboto', sans-serif;

.data{
  width: 296px;
  height: 18px;
  margin: 9px 0 7px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px
}

.total{
  width: 296px;
  height: 18px;
  margin: 7px 0 0;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
}

.restaurante{
  width: 296px;
  height: 18px;
  margin: 0 0 9px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;

}

`
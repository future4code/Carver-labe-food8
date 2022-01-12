import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  min-width: 100vw;
  min-height: 100vh;
  /* width: 360px; */
  /* height: 640px; */

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
   width: 328px;

   .nome{
      width: 328px;
      height: 18px;
      margin: 0 0 16px 0;
      letter-spacing: -0.39px;
      display: flex;
      justify-content: space-between;
   }

   .email{
      letter-spacing: -0.39px;
      margin: 2px 0 0 0;
   }
   .cpf{
      letter-spacing: -0.39px;
      margin: 16px 0 0 0;
   }
 }

 .endereco{
    min-width: 335px;
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
    width: 328px;
    height: 18px;
    letter-spacing: -0.39px;
    margin-bottom: -2px;

  .sublinhado{
    width: 328px;
    margin: -2px 0 7px;
    border: solid 1px black;
  }
 }

`
export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

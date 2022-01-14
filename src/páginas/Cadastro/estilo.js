import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  .header-editar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 360px;
    height: 64px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;    
    button{
      background-color: transparent;
      border: none;
    }
    p{
      color: transparent;
    }

    }
`

export const Formulario = styled.div`

  margin: 0px 16px;

  button{
    background-color: #5cb646;
    text-transform: none;
  }
  
  button:hover{
    background-color: #5cb646;
  }

`






import styled from "styled-components"

export const ContainerEntrar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 80px; */
  width: 100%;
  height: 640px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

    button{
      margin-top: 20px;
      text-transform: none;
    }
    .espaco-header{
        height: 64px;
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
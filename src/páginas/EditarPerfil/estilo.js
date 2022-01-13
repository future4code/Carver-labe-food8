import { AppBar } from "@material-ui/core"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100vw;
  height: 100vh;

  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 360px;
    height: 64px;
    margin: 0 0 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;    
    button{
      background-color: transparent;
      border: none;
    }

  .container-formulario{
    .botao-formulario{
      width: 328px;
      height: 42px;
      padding: 12px 16px;
      border-radius: 2px;
      background-color: black;
    }
  }
 }

`



export const FooterEditarPerfil = styled.div`
display: flex;
justify-content: space-around;
position:absolute;
bottom: 0;
width: 360px;
height: 49px;
box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
background-color: #fff;

button{
  background-color: transparent;
  border: none;
}
`
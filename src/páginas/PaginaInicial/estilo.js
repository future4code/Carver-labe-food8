import styled from 'styled-components'

export const ContainerPaginaInicial = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const ContainerHeader = styled.div`
width: 100%;
height: 64px;
margin: 0 0px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 var(--black-25);
border-bottom: solid 1px #b8b8b8;
`
export const ConteudoHeader = styled.div`
width: 100%;
height: 44px;
margin: 15 15 15 15px;
display: flex;
justify-content: center;
align-items: center;


p {
text-decoration: bold;
width: 74px;
height: 19px;
font-family: Roboto-Regular;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
}
`
export const Navegacao = styled.nav`
width: 100%;
height: 42px;
margin: 8 5 5 5px;
padding: 12px 0 12px 16px;
display: flex;
flex-direction: row;

  
  
button {
background-color: white;
border: none;
width: 87px;
height: 18px;
margin: 0 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
}
  
  `
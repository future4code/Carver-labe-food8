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
font-family: 'Roboto', sans-serif;;
align-items: center;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
font-weight: bold;
}
`
export const Navegacao = styled.nav`
width: 100%;
height: 42px;
margin: 8 5 5 5px;
padding: 12px 0 12px 16px;
display: flex;
flex-direction: row;
overflow: auto;

  
  
button {
background-color: white;
border: none;
width: 87px;
height: 18px;
margin: 0 8px;
font-family: 'Roboto', sans-serif;;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
}

button:active {
 color: #5cb646;
}

button:hover {
 color: #5cb646;
}
  `

export const FooterPaginaInicial = styled.div`
bottom: 0;
width:100%;
height: 49px;
display: flex;
justify-content: space-around;
position: fixed;
box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
z-index: 1;
background-color: #fff;
`
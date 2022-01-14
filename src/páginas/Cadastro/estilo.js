import styled from "styled-components";

// export const ButtonNav = styled.div `
//     display: flex;
//     justify-content:flex-start;
// `

// export const ContainerForm = styled.div `
//     /* display: flex;
//     flex-direction: column;
//     align-items: center; */
//     width: 100%;
    
    
//     h1 {
//         width: 296px;
//         height: 18px;
//         font-family: Roboto;
//         font-size: 20px;
//         font-weight: normal;
//         font-style: normal;
//         line-height: normal;
//         letter-spacing: -0.39px;
//         text-align: center;
//         color: var(--black);
//     }

// `

// export const InputContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction:column;
//     align-items: center;
//     width: 328px;
//     height: 300px;
//     margin: 8px;
//     padding: 19px 48px 19px 16px;
//     border-radius: 2px;
//     /* border:solid 1px #b8b8b8; */
//     border-radius: 8px;


//     input {
//         width: 318px;
//         height: 25px;
//         font-family: Roboto;
//         font-size: 16px;
//         font-weight: normal;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: normal;
//         letter-spacing: -0.50px;
//         color: #d0d0d0;
//         margin: 10px;
//         padding: 5px;
//     }

//     button {
//         margin: 10px;
//         width: 328px;
//         height: 42px;
//         padding: 12px 16px;
//         border-radius: 5px;
//         background-color: #5cb646;
//     }
// `

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-family: 'Roboto', sans-serif;
//   font-size: 16px;
//   width: 100vw;
//   height: 100vh;

//   .header{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 360px;
//     height: 64px;
//     margin: 0 0 16px;
//     -webkit-backdrop-filter: blur(10px);
//     backdrop-filter: blur(10px);
//     box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
//     background-color: #fff;    
//     button{
//       background-color: transparent;
//       border: none;
//     }

//   .container-formulario{
//     .botao-formulario{
//       width: 328px;
//       height: 42px;
//       padding: 12px 16px;
//       border-radius: 2px;
//       background-color: black;
//     }
//   }
//  }

// `

//começa aqui

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
    /* margin: 0 0 16px; */
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






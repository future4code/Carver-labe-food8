import styled from "styled-components"

export const ContainerPai = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    h1 {
        width: 296px;
        height: 18px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: var(--black);
    }

`

export const InputRetangulo = styled.div `
    width: 328px;
    height: 200px;
    margin: 8px 0 0;
    padding: 19px 48px 19px 16px;
    border-radius: 2px;
    /* border:solid 1px #b8b8b8; */
    border-radius: 8px;

    span {
        width: 78px;
        height: 18px;
        margin: 3px 234px 43px 16px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: #b8b8b8;
    
    }
    

    input {
        width: 318px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.50px;
        color: #d0d0d0;
        margin: 10px;
        padding: 5px;
    }
`

export const ButtonLogin = styled.div `
    
    
    button {
        margin: 10px;
        width: 328px;
        height: 42px;
        padding: 12px 16px;
        border-radius: 5px;
        background-color: #5cb646;
    }
    
`
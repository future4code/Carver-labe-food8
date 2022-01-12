import styled from "styled-components";

export const Bar = styled.div`
width: 360px;
height: 64px;
margin: 0 0 1px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 var(--black-25);
background-color: #fff;
div{
    width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 42px 12px;
}

span{
    width: 91px;
  height: 19px;
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
export const Rectangle = styled.div`
  width: 360px;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`
export const Endereco = styled.span`
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const Rua = styled.span`
  width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`
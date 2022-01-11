import React from 'react';
import { Header } from '../../Header/Header';
import { ContainerPai , InputRetangulo, ButtonLogin} from './estilo';

export const Entrar = () => {


  return (
    <ContainerPai>
      <Header/>
      <h1>Entrar</h1>
        <InputRetangulo>
          <span> E-mail* </span> 
          <input placeholder='E-mail'></input>
        </InputRetangulo>
        <InputRetangulo>
          <span> Senha* </span> 
          <input placeholder='Senha'></input>
        </InputRetangulo>
        <ButtonLogin>
          <button>Entrar</button>
        </ButtonLogin>
      <p>Não possui cadastro? Clique aqui.</p>
    </ContainerPai>
  );
}

export default Entrar;
import React from 'react';
import { Header } from '../../Header/Header';
import { ContainerPai , InputRetangulo, ButtonLogin} from './estilo';
import useForm from "../../hooks/useForm"
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls';

export const Entrar = () => {
  const [form, onChange, clear] = useForm  ({email: "", password: ""})

  const pegarDados = (event) => {
    event.preventDefault()
    console.log(form)
    fazerLogin(form)
  }

  const fazerLogin = (body) => {
    axios.post (`${BASE_URL}/login`, body) 
    .then((resposta) => {
      console.log(resposta)
    })
  }

  return (
    <ContainerPai>
      <Header/>
      <h1>Entrar</h1>
        <InputRetangulo>
          <form onSubmit={pegarDados}>

          <input 

            placeholder={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type="email"
          />
          <input 
            placeholder={"Senha"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            type="senha"
          />
          <ButtonLogin>
            <button>Entrar</button>
          </ButtonLogin>
          </form>
        </InputRetangulo>
        
      <p>Não possui cadastro? Clique aqui.</p>
    </ContainerPai>
  );
}

export default Entrar;
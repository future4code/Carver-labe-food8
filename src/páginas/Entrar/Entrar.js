import React from 'react';
import { Header } from '../../Header/Header';
import { ContainerPai , InputRetangulo, ButtonLogin} from './estilo';
import useForm from "../../hooks/useForm"
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { irParaCadastro, irParaCadastroEndereco, irParaInicio } from '../../routes/cordinator';

export const Entrar = () => {
  const [form, onChange, clear] = useForm  ({email: "", password: ""})
  const history = useHistory()

  const pegarDados = (event) => {
    event.preventDefault()
    fazerLogin(form)
  }

  const fazerLogin = (body) => {
    axios.post (`${BASE_URL}/login`, body) 
    .then((resposta) => {
      localStorage.setItem('endereco', resposta.data.user.hasAddress)
      localStorage.setItem('token', resposta.data.token)
      if(resposta.data.user.hasAddress === true){
        localStorage.setItem('token', resposta.data.token)
        irParaInicio(history)
      } else {
        irParaCadastroEndereco(history)
      }
    }).catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <ContainerPai>
      <Header/>
      <h1>Entrar</h1>
        <InputRetangulo>
          <form onSubmit={pegarDados}>
          <span>Email*
          <input 
            placeholder={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type="email"
          />
          </span>
          <span> Senha*
          <input 
            placeholder={"Senha"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            type="password"
            required
          />
          </span>
          <ButtonLogin>
            <button>Entrar</button>
          </ButtonLogin>
          </form>
        </InputRetangulo>
        
      <button onClick={() => irParaCadastro(history)}>Não possui cadastro? Clique aqui.</button>
    </ContainerPai>
  );
}

export default Entrar;
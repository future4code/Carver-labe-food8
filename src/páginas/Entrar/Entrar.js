import React from 'react';
import { Header } from '../../Header/Header';
import { ContainerPai, ContainerEntrar, Formulario } from './estilo';
import useForm from "../../hooks/useForm"
import axios from 'axios';
import { BASE_URL } from '../../constantes/urls';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { irParaCadastro, irParaCadastroEndereco, irParaInicio } from '../../routes/cordinator';
import { Button, TextField } from '@material-ui/core';

export const Entrar = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const history = useHistory()

  const pegarDados = (event) => {
    event.preventDefault()
    fazerLogin(form)
  }

  const fazerLogin = (body) => {
    axios.post(`${BASE_URL}/login`, body)
      .then((resposta) => {
        localStorage.setItem('endereco', resposta.data.user.hasAddress)
        localStorage.setItem('token', resposta.data.token)
        if (resposta.data.user.hasAddress === true) {
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
    <ContainerEntrar>
      <div className='espaco-header' />
      <Header />
      <p>
        Entrar
      </p>
      <Formulario>
        <form onSubmit={pegarDados}>
          <TextField
            label={'E-mail'}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type="email"
            variant={"outlined"}
            margin='normal'
            fullWidth
          />
          <TextField
            label={"Senha"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            type="password"
            required
            variant={'outlined'}
            margin='normal'
            fullWidth

          />
          <Button
            fullWidth
            size='large'
            type='submit'
            variant={"contained"}
          >
            Entrar
          </Button>
        </form>
      </Formulario>
      <Button onClick={() => irParaCadastro(history)}>Não possui cadastro? Clique aqui.</Button>
    </ContainerEntrar>
  );
}

export default Entrar;
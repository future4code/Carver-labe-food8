import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { BASE_URL } from '../../constantes/urls';
import { Header } from '../../Header/Header';
import useForm from '../../hooks/useForm';
import { irParaCadastroEndereco, irParaLogin } from '../../routes/cordinator';
import { ContainerForm, ButtonNav, InputContainer } from './estilo';
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export const Cadastro = () => {
  const history = useHistory()
  const [form, onChange] = useForm({ name: '', email: '', cpf: '', password: '' })

  const enviarCadastro = (e) => {
    e.preventDefault()
    cadastrarUsuario(form)
  }

  const cadastrarUsuario = (body) => {
    axios.post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        irParaCadastroEndereco(history)
      }).catch((err) => {
        alert(err.response.data.message)
      })

  }

  return (
    <ContainerForm>
      <ButtonNav>
        <button onClick={() => irParaLogin(history)}>voltar</button>
      </ButtonNav>
      <Header />
      <InputContainer>
        <h1>Cadastrar</h1>
        <form onSubmit={enviarCadastro}>
          <TextField
            name='name'
            placeholder='Nome e Sobrenome'
            onChange={onChange}
            value={form.name}
            type='text'
            required
            label={'Nome'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='email'
            placeholder='E-mail'
            onChange={onChange}
            value={form.email}
            type='email'
            required
            label={'E-mail'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='cpf'
            placeholder='CPF'
            onChange={onChange}
            value={form.cpf}
            type='text'
            required
            pattern='\d{3}\.\d{3}\.\d{3}-\d{2}'
            title='CPF inválido. Exemplo de CPF válido: 123.456.789-11'
            label={'CPF'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='password'
            placeholder='Senha'
            onChange={onChange}
            value={form.password}
            type='password'
            required
            id='senha1'
            label={'Senha'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <Button
            fullWidth
            variant={"contained"}
            type='submit'
          > 
          Criar</Button>
        </form>
      </InputContainer>
    </ContainerForm>
  );
}

export default Cadastro
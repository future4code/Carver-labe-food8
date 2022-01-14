import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { BASE_URL } from '../../constantes/urls';
import { Header } from '../../Header/Header';
import useForm from '../../hooks/useForm';
import { irParaCadastroEndereco, irParaLogin } from '../../routes/cordinator';
import { ContainerForm, Formulario, InputContainer } from './estilo';
import { TextField } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import voltar from '../../recursos/imagens/setaVoltarHeader.png'

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
      <div className='header-editar'>
        <button onClick={() => irParaLogin(history)}>
          <img src={voltar} />
        </button>  
        <p>
          ****
        </p>
      </div>
      <Header/>
      <p>
        Cadastrar
      </p>
      <Formulario>
        <form onSubmit={enviarCadastro}>
          <TextField
            name='name'
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
            onChange={onChange}
            value={form.cpf}
            type='text'
            label={'CPF'}
            variant={"outlined"}
            fullWidth
            required
            margin='normal'
          />
          <TextField
            name='password'
            onChange={onChange}
            value={form.password}
            required
            label={'Senha'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='password2'
            onChange={onChange}
            // value={}
            required
            label={'Confirmar'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <Button
            fullWidth
            size='large'
            type='submit'
            variant={"contained"}
          >
            Criar
          </Button>
        </form>
      </Formulario>
    </ContainerForm>
  );
}

export default Cadastro
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { BASE_URL } from '../../constantes/urls';
import { Header } from '../../Header/Header';
import useForm from '../../hooks/useForm';
import { irParaCadastroEndereco, irParaLogin } from '../../routes/cordinator';

export const Cadastro = () => {
  const history = useHistory()
  const [form, onChange] = useForm({name: '', email: '', cpf: '', password: ''})

  const enviarCadastro = (e) => {
    e.preventDefault()
    cadastrarUsuario(form)
  }

  const cadastrarUsuario = (body) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      irParaCadastroEndereco(history)
    })
    
  }

  return (
    <div>
      <button onClick={() => irParaLogin(history)}>voltar</button>
      <Header/>
      Cadastrar
      <form onSubmit={enviarCadastro}>
        <input
        name='name'
        placeholder='Nome e Sobrenome'
        onChange={onChange}
        value={form.name}
        type='text'
        required
        />
        <input
        name='email'
        placeholder='E-mail'
        onChange={onChange}
        value={form.email}
        type='email'
        required
        />
        <input
        name='cpf'
        placeholder='CPF'
        onChange={onChange}
        value={form.cpf}
        type='text'
        required
        pattern='\d{3}\.\d{3}\.\d{3}-\d{2}'
        title='CPF inválido. Exemplo de CPF válido: 123.456.789-11'
        />
        <input
        name='password'
        placeholder='Senha'
        onChange={onChange}
        value={form.password}
        type='password'
        required
        id='senha1'
        />
        {/* <input
         name='password2'
         placeholder='Senha'
         onChange={onChange}
         value='{target.value}'
         type='password'
         required
         id='senha2'
         /> */}
        <button>Criar</button>
      </form>
    </div>
  );
}

export default Cadastro
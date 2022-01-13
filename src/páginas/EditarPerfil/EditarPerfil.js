import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import { irParaPerfil } from '../../routes/cordinator';
import { useHistory } from 'react-router-dom';
import { Container, FooterEditarPerfil } from './estilo';
import voltar from '../../recursos/imagens/setaVoltarHeader.png'
import { Button, TextField } from '@material-ui/core';


const EditarPerfil = () => {
  const { requests } = useContext(ContextoGlobal)
  const [form, onChange] = useForm({ name: "", email: "", cpf: "" })
  const history = useHistory()

  const enviarDados = (e) => {
    e.preventDefault()
    requests.editarPerfil(form)
  }

  return (
    <Container>
      <div className='header'>
        <button onClick={() => irParaPerfil(history)}>
          <img src={voltar} />
        </button>
        Editar
        <span />
      </div>
      <div className='container-formulario'>
      <form onSubmit={enviarDados} className='formulario'>
        <TextField
          label='Nome'
          id="outlined-size-normal"
          variant="outlined"
          fullWidth
          name='name'
          value={form.name}
          onChange={onChange}
          required
        />
        <TextField
          label='E-mail'
          id="outlined-size-normal"
          variant="outlined"
          fullWidth
          name='email'
          type='email'
          value={form.email}
          onChange={onChange}
          required
        />
        <TextField
          style={{ margin: 4 }}
          label='CPF'
          id="outlined-size-normal"
          variant="outlined"
          fullWidth
          name='cpf'
          inputProps={{ pattern: '\d{3}\.\d{3}\.\d{3}-\d{2}' }}
          pattern='\d{3}\.\d{3}\.\d{3}-\d{2}'
          helperText='Exemplo de CPF válido: 123.456.789-11'
          value={form.cpf}
          onChange={onChange}
          required
        />
        <button className='botao-formulario'>
          Salvar
        </button>
      </form>

      </div>
      
    </Container>
  )
}

export default EditarPerfil;
import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import { irParaPerfil } from '../../routes/cordinator';
import { useHistory } from 'react-router-dom';
import { ContainerForm, Formulario } from './estilo';
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
    <ContainerForm>
      <div className='header-editar'>
        <button onClick={() => irParaPerfil(history)}>
          <img src={voltar} />
        </button>
        Editar
        <p>
          ****
        </p>
      </div>
      <Formulario>
        <form onSubmit={enviarDados}>
          <TextField
            name='name'
            onChange={onChange}
            value={form.name}
            type='text'
            required
            label={'Nome'}
            variant={'outlined'}
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
            label={'CPF'}
            variant={"outlined"}
            fullWidth
            // required
            // inputProps={{pattern: "^\d{3}\.\d{3}\.\d{3}\-\d{2}$"}}
            helperText='Exemplo de CPF válido: 123.456.789-11'
            margin='normal'
          />
          <Button
            fullWidth
            size='large'
            variant={"contained"}
            type='submit'
          >
            Salvar
          </Button>
        </form>
      </Formulario>
    </ContainerForm>
  )
}

export default EditarPerfil;
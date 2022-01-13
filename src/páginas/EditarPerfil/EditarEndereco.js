import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from "../../constantes/urls";
import useForm from "../../hooks/useForm";
import { irParaPerfil } from "../../routes/cordinator";
import { ContainerForm, Formulario } from './estilo';
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import voltar from '../../recursos/imagens/setaVoltarHeader.png'

export const EditarEndereco = () => {
  const [form, onChange] = useForm({ street: '', number: '', neighbourhood: '', city: '', state: '', complement: '' })
  const history = useHistory()

  const eviarEditarCadastro = (e) => {
    e.preventDefault()
    editarEndereco(form)

  }

  const editarEndereco = (body) => {
    axios.put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res, "resposta editar endereço")
      alert("sucesso")

    }).catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <ContainerForm>
      <div className='header-editar'>
        <button onClick={() => irParaPerfil(history)}>
          <img src={voltar} />
        </button>
        Endereço
        <p>
          ****
        </p>
      </div>
      <Formulario>
        <form onSubmit={eviarEditarCadastro}>
          <TextField
            name='street'
            onChange={onChange}
            value={form.street}
            type='text'
            required
            label={'Logradouro'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='number'
            onChange={onChange}
            value={form.number}
            type='number'
            required
            label={'Número'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='complement'
            onChange={onChange}
            value={form.complement}
            type='text'
            label={'Complemento'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='neighbourhood'
            onChange={onChange}
            value={form.neighbourhood}
            required
            label={'Bairro'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='city'
            onChange={onChange}
            value={form.city}
            required
            label={'Cidade'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='state'
            onChange={onChange}
            value={form.state}
            required
            label={'Estado'}
            variant={"outlined"}
            fullWidth
            helperText='Siglas do Estado. Exemplo: PE'
            margin='normal'
          />
          <Button
            fullWidth
            size='large'
            type='submit'
            variant={"contained"}
          >
            Salvar
          </Button>
        </form>
      </Formulario>
    </ContainerForm>
  )
}

export default EditarEndereco
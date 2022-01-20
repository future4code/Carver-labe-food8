import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from "../../constantes/urls";
import useForm from "../../hooks/useForm";
import { irParaCadastro, irParaInicio } from "../../routes/cordinator";
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Formulario, ContainerForm } from "./estilo";
import { Header } from "../../Header/Header";
import voltar from '../../recursos/imagens/setaVoltarHeader.png'



export const CadastroEndereco = () => {
  const history = useHistory()
  const [form, onChange] = useForm({ street: '', number: '', neighbourhood: '', city: '', state: '', complement: '' })

  const enviarCadastroEndereco = (e) => {
    e.preventDefault()
    cadastrarEndereco(form)
  }

  const cadastrarEndereco = (body) => {
    axios.put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      alert("Cadastro efetuado com Sucesso!")
      irParaInicio(history)
    }).catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (

    <ContainerForm>
      <div className='header-editar'>
        <button onClick={() => irParaCadastro(history)}>
          <img src={voltar} />
        </button>  
        <p>
          ****
        </p>
      </div>
      <p>
        Meu endereço
      </p>
      {/* Meu endereço */}
      <Formulario>
        <form onSubmit={enviarCadastroEndereco}>
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
            // helperText='Sigla do Estado. Exemplo: PE'
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

export default CadastroEndereco
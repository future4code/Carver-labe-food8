import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from "../../constantes/urls";
import useForm from "../../hooks/useForm";
import { irParaInicio } from "../../routes/cordinator";
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { ButtonNav, ContainerForm, InputContainer } from "./estilo";
import { Header } from "../../Header/Header";



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
      alert(err.response)
    })
  }

  return (
    <ContainerForm>
      <ButtonNav>
        <button onClick={() => irParaInicio(history)}>Ir para Home</button>
      </ButtonNav>
      <InputContainer>
        <h1>Meu endereço</h1>
        <form onSubmit={enviarCadastroEndereco}>
          <TextField
            name='street'
            placeholder='Logradouro'
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
            placeholder='Número'
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
            placeholder='Complemento'
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
            placeholder='Bairro'
            onChange={onChange}
            value={form.neighbourhood}
            type='text'
            required
            label={'Bairro'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='city'
            placeholder='Cidade'
            onChange={onChange}
            value={form.city}
            type='text'
            required
            label={'Cidade'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <TextField
            name='state'
            placeholder='Estado'
            onChange={onChange}
            value={form.state}
            type='text'
            required
            title='Sigla do Estado. Exemplo: PE'
            pattern='[A-Z]{2}'
            label={'Estado'}
            variant={"outlined"}
            fullWidth
            margin='normal'
          />
          <Button
            fullWidth
            variant={"contained"}
          >
          
          Salvar </Button>
        </form>
      </InputContainer>
    </ContainerForm>
  )
}

export default CadastroEndereco
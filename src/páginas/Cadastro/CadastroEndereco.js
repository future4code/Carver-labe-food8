import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from "../../constantes/urls";
import useForm from "../../hooks/useForm";
import { irParaInicio } from "../../routes/cordinator";

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
      localStorage.setItem(res.data.token, 'token')
      alert("Cadastro efetuado com Sucesso!")
    }).catch((err) =>{
      alert(err.response)
    })
  }

  return (
    
    <div>
      <button onClick={() => irParaInicio(history)}>Ir para Home</button>
      Meu endereço
      <form onSubmit={enviarCadastroEndereco}>
        <input
        name='street'
        placeholder='Logradouro'
        onChange={onChange}
        value={form.street}
        type='text'
        required
        />
        <input
        name='number'
        placeholder='Número'
        onChange={onChange}
        value={form.number}
        type='number'
        required
        />
        <input
        name='complement'
        placeholder='Complemento'
        onChange={onChange}
        value={form.complement}
        type='text'
        />
        <input
        name='neighbourhood'
        placeholder='Bairro'
        onChange={onChange}
        value={form.neighbourhood}
        type='text'
        required
        />
        <input
        name='city'
        placeholder='Cidade'
        onChange={onChange}
        value={form.city}
        type='text'
        required
        />
        <input
        name='state'
        placeholder='Estado'
        onChange={onChange}
        value={form.state}
        type='text'
        required
        title='Sigla do Estado. Exemplo: PE'
        pattern='[A-Z]{2}'
        />
        <button>Salvar</button>
      </form>
    </div>
  )
}
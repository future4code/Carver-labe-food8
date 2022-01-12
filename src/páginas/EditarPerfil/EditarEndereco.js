import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from "../../constantes/urls";
import useForm from "../../hooks/useForm";
import { irParaPerfil } from "../../routes/cordinator";

export const EditarEndereco = () =>{
  const [form, onChange] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: '' })
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
      console.log(err.response, "resposta erro")
    })
  }

  return(
    <div>
      <button onClick={() => irParaPerfil(history)}>voltar</button>
      Endereço
      <form onSubmit={eviarEditarCadastro}>
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

export default EditarEndereco
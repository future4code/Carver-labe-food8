import React from 'react';
import { BASE_URL } from '../../constantes/urls'
import axios from 'axios';
import useForm from '../../hooks/useForm';

const EditarPerfil = () => {
  const [ form, onChange ] = useForm({ name: "", email: "", cpf: "" })

  const requisicaoEditar = (body) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFlTTg5azFvU203VUN6MVRvQzBCIiwibmFtZSI6IkRlc2F0aW5hciIsImVtYWlsIjoicm9kcmlnb3NkbkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDE5MTE1NjN9.0BRQ27nIkizNT-vUwiiiw0Focg9DQo64FvgFHoYOADM'

    axios.put(`${BASE_URL}/profile`, body, {
      headers: {
        auth: token
      }
    }).then((res) =>{
      alert("dados alterados")
    })
  }

  const enviarDados = (e) => {
    e.preventDefault()
    requisicaoEditar(form)
  }

  return(
    <div>
      Editar Perfil
      <form onSubmit={enviarDados}>
        <input
        placeholder='Nome'
        name='name'
        value={form.name}
        onChange={onChange}
        required
        />
        <input
        placeholder='Email'
        name='email'
        type='email'
        value={form.email}
        onChange={onChange}
        required
        />
        <input
        placeholder='CPF'
        name='cpf'
        type='text'
        pattern='\d{3}\.\d{3}\.\d{3}-\d{2}'
        value={form.cpf}
        onChange={onChange}
        required
        />
        <button>
          enviar
        </button>
       
      </form>
    </div>
  )
}

export default EditarPerfil;
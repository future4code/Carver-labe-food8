import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { ContextoGlobal } from '../../EstadoGlobal/EstadoGlobalContexto';
import { irParaPerfil } from '../../routes/cordinator';
import { useHistory } from 'react-router-dom';

const EditarPerfil = () => {
  const { requests } = useContext(ContextoGlobal)
  const [form, onChange] = useForm({ name: "", email: "", cpf: "" })
  const history = useHistory()

  const enviarDados = (e) => {
    e.preventDefault()
    requests.editarPerfil(form)
  }

  return (
    <div>
      <button onClick={() => irParaPerfil(history)}>
        voltar
      </button>
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
          placeholder='E-mail'
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
          title='CPF inválido. Exemplo de CPF válido: 123.456.789-11'
        />
        <button>
          enviar
        </button>

      </form>
    </div>
  )
}

export default EditarPerfil;
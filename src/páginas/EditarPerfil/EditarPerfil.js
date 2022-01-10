import React from 'react';
import { ContainerEditarPerfil } from './estilo';


function EditarPerfil() {
  return (
    <ContainerEditarPerfil className='Perfil'>
      <div className='Bar'>
        <div className='Title'>
          Meu Perfil
        </div>
      </div>
      <p>
        Nome
      </p>
      <p>
        Email
      </p>
      <p>
        CPF
      </p>
      <div className='Rectangle'>
        <p>
          Endereço Cadastrado
        </p>
        <p>
          Endereço:
        </p>
      </div>
      <div>
        Histórico de pedidos
        <div className='pedidos_card'>
          <div className='Card_Historico'>
            <p>
              Loja
            </p>
            <p>
              Data
            </p>
            <p>
              Valor
            </p>
          </div>
        </div>
        <div className='Footer'>
          🤖 🤖 🤖
        </div>
      </div>

    </ContainerEditarPerfil>
  );
}

export default EditarPerfil;
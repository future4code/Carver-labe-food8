import React from 'react';
import EstadoGlobal from './EstadoGlobal/EstadoGlobal';
import Entrar from './páginas/Entrar/Entrar';
import { Router } from './routes/router';


const App = () => {
  return (
    <div>
      <EstadoGlobal>
        <Router />
      </EstadoGlobal>
    </div>
  )
}
export default App
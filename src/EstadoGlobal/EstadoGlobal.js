import React, { useState } from "react";
import axios from "axios";
import {ContextoGlobal} from './EstadoGlobalContexto';

export default EstadoGlobal = (props) => {
// Todos os estados e setters são declarados aqui:
const [carrinho, setCarrinho] = useState([])

// Todas as requisições da API vão aqui:




// Todos os nomes dos estados vão dentro desse objeto (separados por vírgulas). 
// O mesmo com os setters e requisições
// Assim só precisa chamar essas três consts quando quiser acessar esses valores
const states = {carrinho}
const setters = {setCarrinho}
const requests = {}

return(
    <ContextoGlobal.Provider value={{states, setters, requests}}>
        {props.children}
    </ContextoGlobal.Provider>
)
}
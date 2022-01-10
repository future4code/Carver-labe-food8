import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PaginaInicial from '../páginas/PaginaInicial';
import Entrar from '../páginas/Entrar';
import Cadastro from '../páginas/Cadastro';
import Carrinho from '../páginas/Carrinho';
import Perfil from '../páginas/Perfil';
import EditarPerfil from '../páginas/EditarPerfil';
import Restaurantes from '../páginas/Restaurantes';
import PaginaDeErro from '../páginas/PaginaDeErro';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} >
                    <PaginaInicial />
                </Route>
                <Route exact path={'/login'}>
                    <Entrar />
                </Route>
                <Route exact path={'/cadastro'}>
                    <Cadastro />
                </Route>
                <Route exact path={'/carrinho'}>
                    <Carrinho />
                </Route>
                <Route exact path={'/perfil'}>
                    <Perfil />
                </Route>
                <Route exact path={'/editarperfil'}>
                    <EditarPerfil />
                </Route>
                <Route exact path={`/restaurante/:id`}>
                    <Restaurantes />
                </Route>
                <Route>
                    <PaginaDeErro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
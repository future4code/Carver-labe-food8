import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PaginaInicial from '../páginas/PaginaInicial/PaginaInicial';
import Entrar from '../páginas/Entrar/Entrar';
import Cadastro from '../páginas/Cadastro/Cadastro';
import Carrinho from '../páginas/Carrinho/Carrinho';
import Perfil from '../páginas/Perfil/Perfil';
import EditarPerfil from '../páginas/EditarPerfil/EditarPerfil';
import Restaurantes from '../páginas/Restaurantes/Restaurantes';
import PaginaDeErro from '../páginas/PaginaDeErro/PaginaDeErro';
import { Header } from '../Header/Header';
import React from 'react';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
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
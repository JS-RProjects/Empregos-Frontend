import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import CadastrarEmpresa from './pages/Cadastrar-Empresa';
import Login from './pages/Login';
import LoginEmpresa from './pages/Login-Empresa';
import PageNotFound from './pages/404';
import PerfilPessoa from './pages/Perfil-Pessoa';
import RedirectProfile from './pages/RedirectProfile';
import PerfilEmpresa from './pages/Perfil-Empresa';
import CriarVaga from './pages/Criar-Vaga';
import Vagas from './pages/Vagas';
import DelVaga from './pages/DelVaga';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastrar" exact component={Cadastrar} />
                <Route path="/pessoa/:profileid" exact component={PerfilPessoa} />
                <Route path="/pessoa" exact component={RedirectProfile} />
                
                <Route path="/empresa/login" exact component={LoginEmpresa} />  
                <Route path="/empresa/cadastrar" exact component={CadastrarEmpresa} />
                <Route path="/empresa/cadastrar" exact component={CadastrarEmpresa} />
                <Route path="/empresa/:profileid" exact component={PerfilEmpresa} />
                <Route path="/empresa" exact component={RedirectProfile} />
                
                <Route path="/vagas" exact component={Vagas} />
                <Route path="/vagas/new" exact component={CriarVaga} />
                <Route path="/vagas/del/:vaga_id" exact component={DelVaga} />

                <Route path="/404" exact component={PageNotFound} />
                <Redirect to="/404"/>
                {/* <Route path="/dashboard" component={Dashboard} /> */}
            </Switch>
        </BrowserRouter>
    );
}
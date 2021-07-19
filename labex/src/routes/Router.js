import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateTripPage from './../pages/CreateTripPage/CreateTripPage';
import LoginPage from './../pages/LoginPage/LoginPage';
import ApplicationPage from './../pages/ApplicationPage/ApplicationPage';
import TripListPage from './../pages/TripListPage/TripListPage';
import HomePage from './../pages/HomePage/HomePage';

const Router = () => {
    return(
        
        <BrowserRouter>
            <Switch>
            <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/inscricao'>
                    <ApplicationPage />
                </Route>
                <Route exact path='/viagens'>
                    <TripListPage />
                </Route>
                <Route exact path='/viagens/criar'>
                    <CreateTripPage />
                </Route>
                <Route exact path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Router

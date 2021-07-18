import React from 'react';
import {MainPage, MenuPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { ThanksPage } from '../pages';

import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <AppHeader total={0}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/menu' exact component={MenuPage}/>
                <Route path='/cart' exact component={CartPage}/>
                <Route path='/thanks' exact component={ThanksPage}/>
            </Switch>
        </div>
    )
}

export default App;
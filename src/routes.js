import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Resevas from './pages/Resevas';


export default function Routes (){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact path="/reservas" component={Resevas}/>
        </Switch>
    );
}
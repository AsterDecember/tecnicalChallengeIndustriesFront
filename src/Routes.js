import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import  IndustriesDetail from './components/industries/IndustriesDetail'

const Routes = () => (

    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/industry/:id' component={IndustriesDetail} />
    </Switch>)
    
    export default Routes;
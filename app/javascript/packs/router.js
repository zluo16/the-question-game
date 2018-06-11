import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import App from './App'

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/game' component={App} />
            </Switch>
        )
    }
}
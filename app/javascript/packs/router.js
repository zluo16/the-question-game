import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import GameApp from './GameApp'
import Leaderboard from './leaderboard/leaderboard'
import AddYourName from './addYourName';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/game' component={GameApp} />
                <Route path='/name-prompt' component={AddYourName} />
                <Route path='/leaderboard' component={Leaderboard} />
            </Switch>
        );
    };
};
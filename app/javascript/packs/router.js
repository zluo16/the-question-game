import React from 'react';
import { Switch, Route } from 'react-router';
import GameApp from './GameApp'
import Leaderboard from './leaderboard/leaderboard'
import AddYourName from './addYourName';
import StartPage from './startPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={StartPage} />
            <Route exact path='/game' component={GameApp} />
            <Route exact path='/name-prompt' component={AddYourName} />
            <Route exact path='/leaderboard' component={Leaderboard} />
        </Switch>
    );
};

export default Router;
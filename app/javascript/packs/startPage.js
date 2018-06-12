import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory({
    hashType: 'slash'
});

export default class StartPage extends Component {

    handleStart = () => {
        history.push('/game');
    }

    render() {
        return (
            <div>
                <h3>Welcome to the Question Game!</h3>
                <Button 
                    onClick={this.handleStart}
                    variant='contained'>
                    Start Game
                </Button>
            </div>
        );
    }
};
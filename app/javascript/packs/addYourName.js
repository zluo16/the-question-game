import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import addYourNameStyles from './styles/addYourNameStyles';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory({
    hashType: 'slash'
});

class AddYourName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: ''
        };
    };

    handleInputChange = (event) => {
        this.setState({ player: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let score = sessionStorage.getItem('score');
        axios.post('/api/add-player', {
            player: this.state.player,
            score: parseInt(score)
        }).then(res => {
            if (res.data.message == 'Success') {
                sessionStorage.clear();
                history.push('/leaderboard');
            };
        }).catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <h3>Your score: {sessionStorage.getItem('score')}</h3>
                <form 
                    className={this.props.container} 
                    onSubmit={this.handleSubmit}>
                    <Input
                        placeholder="Add your name"
                        className={this.props.input}
                        inputProps={{'aria-label': 'Description'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type='submit' variant='contained'>
                        Add
                    </Button>
                </form>
            </div>
        );
    };
};

AddYourName.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(addYourNameStyles)(AddYourName);
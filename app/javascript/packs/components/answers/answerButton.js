import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class AnswerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Button 
                id={this.props.answer.id} 
                variant='contained'
                onClick={this.props.checkCorrect}>
                {this.props.answer.text}
            </Button>
        );
    };
};
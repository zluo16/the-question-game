import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import buttonStyles from '../../styles/buttonStyles';
import Button from '@material-ui/core/Button';

class AnswerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const { classes, answer, checkCorrect } = this.props
        return (
            <Button
                className={classes.button}
                variant='contained'
                onClick={checkCorrect}
            >
                {answer}
            </Button>
        );
    };
};

AnswerButton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(buttonStyles)(AnswerButton);
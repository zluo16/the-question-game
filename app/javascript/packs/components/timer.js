import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import timerStyles from '../styles/timerStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

const Timer = ({ time, classes }) => {
    return (
        <LinearProgress variant='determinate' value={time} className={classes.progress} />
    );
};

Timer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(timerStyles)(Timer);
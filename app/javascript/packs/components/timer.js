import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import timerStyles from '../styles/timerStyles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const Timer = ({ time, classes }) => {
  return (
    <div>
      <Typography variant='subheading' className={classes.time}>Timer: {time}</Typography>
      <LinearProgress variant='determinate' value={time} className={classes.progress} />
    </div>
  );
};

Timer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(timerStyles)(Timer);

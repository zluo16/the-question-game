import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import startPageStyles from './styles/startPageStyles';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory({
  hashType: 'slash'
});

class StartPage extends Component {
  constructor(props) {
    super(props);
  };

  handleStart = () => {
    history.push('/game');
  };

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs></Grid>
        <Grid item xs={4}>
          <Card className={this.props.classes.card}>
            <CardContent className={this.props.classes.content}>
              <Typography variant='display1'>Welcome to Multiple Choice Jeopardy!</Typography>
            </CardContent>
            <CardActions>
              <Button
                className={this.props.classes.button}
                onClick={this.handleStart}
                variant='contained'>
                Start Game
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
  };
};

StartPage.proptypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(startPageStyles)(StartPage);

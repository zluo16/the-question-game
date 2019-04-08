import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import addYourNameStyles from './styles/addYourNameStyles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory({
  hashType: 'slash'
});

class AddYourName extends Component {
  constructor(props) {
    super(props);
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
    const { container, input, button } = this.props.classes
    return (
      <Grid container spacing={24}>
        <Grid item xs></Grid>
        <Grid item xs={4}>
          <Card className={container}>
            <CardContent>
              <Typography variant='display2'>
                Your score: {sessionStorage.getItem('score')}
              </Typography>
            </CardContent>
            <CardActions>
              <form
                onSubmit={this.handleSubmit}>
                <Input
                  placeholder="Add your name"
                  className={input}
                  inputProps={{'aria-label': 'Description'}}
                  onChange={this.handleInputChange}
                />
                <Button className={button} type='submit' variant='outlined'>
                  Add
                </Button>
              </form>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
  };
};

AddYourName.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addYourNameStyles)(AddYourName);

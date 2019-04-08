import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Question = ({ question }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography
          variant='headline'
          align='center'
        >{question}</Typography>
      </Grid>
    </Grid>
  );
};

export default Question;

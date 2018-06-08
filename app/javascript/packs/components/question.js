import React from 'react';
import Grid from '@material-ui/core/Grid';

const Question = ({ question }) => {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                {question}
            </Grid>
        </Grid>
    );
};

export default Question;
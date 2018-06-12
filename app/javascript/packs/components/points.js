import React from 'react';
import Typography from '@material-ui/core/Typography';

const Points = ({ points }) => {
    return (
        <Typography variant='display3'>
            Points: {points}
        </Typography>
    );
};

export default Points;
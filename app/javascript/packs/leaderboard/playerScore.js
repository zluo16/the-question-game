import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import leaderboardStyles from '../styles/leaderboardStyles';

const PlayerScore = (props) => {
    const { player, score, classes } = props
    return (
        <TableRow>
            <TableCell component='th' scope='row'>
                <Typography variant='body2'>
                    {player}
                </Typography>
            </TableCell>
            <TableCell className={classes.cell}>
                <Typography variant='body2'>
                    {score}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

PlayerScore.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(leaderboardStyles)(PlayerScore);
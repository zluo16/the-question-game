import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const PlayerScore = ({ player, score }) => {
    return (
        <TableRow>
            <TableCell component='th' scope='row'>
                {player}
            </TableCell>
            <TableCell numeric>
                {score}
            </TableCell>
        </TableRow>
    );
};

export default PlayerScore;
import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const PlayerScore = ({ player, score }) => {
    return (
        <TableRow>
            <TableCell component='th' scope='row'>
                {player}
            </TableCell>
            <TableCell>
                {score}
            </TableCell>
        </TableRow>
    );
};

export default PlayerScore;
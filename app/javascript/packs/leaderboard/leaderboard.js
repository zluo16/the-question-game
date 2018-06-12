import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import leaderbaordStyles from '../styles/leaderboardStyles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayerScore from './playerScore';

class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leaderboard: []
        };
    };

    componentDidMount() {
        axios.get('/api/leaderboard')
            .then(res => {
                this.setState({ leaderboard: res.data });
            });
    };

    render() {
        return (
            <Table className={this.props.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Player</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.leaderboard.map(game => {
                        return (
                            <PlayerScore 
                                player={game.player} 
                                score={game.score}
                            />
                        )
                    })}
                </TableBody>
            </Table>
        );
    };
};

Leaderboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(leaderbaordStyles)(Leaderboard);
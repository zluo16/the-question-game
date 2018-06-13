import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import leaderbaordStyles from '../styles/leaderboardStyles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <Table className={classes.table}>
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
            </Card>
            );
        };
    };
    
Leaderboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(leaderbaordStyles)(Leaderboard);
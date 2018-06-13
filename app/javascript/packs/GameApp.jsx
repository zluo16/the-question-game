import React, { Component } from 'react';
import axios from 'axios';
import Points from './components/points';
import Timer from './components/timer';
import Question from './components/question';
import AnswerList from './components/answers/answersList';
import createHashHistory from 'history/createHashHistory';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import gameAppStyles from './styles/gameAppStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const history = createHashHistory({
    hashType: 'slash'
})

class GameApp extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            clue: '', 
            answers: [], 
            seconds: 100 ,
            points: 0
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    };

    componentDidMount() {
        this.getNewQuestion();
        this.startTimer();
    };

    getNewQuestion() {
        axios.get('/api/clue')
            .then(res => {
                const answers = res.data.answers.map(a => a.answer);
                answers.push(res.data.clue.answer);
                const shuffledAnswers = this.shuffleAnswers(answers)
                this.setState({
                    ...this.state,
                    clue: res.data.clue,
                    answers: shuffledAnswers
                });
            });
    };

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 700);
        };
    };

    countDown() {
        let secs = this.state.seconds - 1;
        if (secs < 1) {
            clearInterval(this.timer);
            sessionStorage.setItem('score', JSON.stringify(this.state.points));
            history.push('/name-prompt');
        } else {
            this.setState({
                ...this.state,
                seconds: secs
            });
        };
    };

    shuffleAnswers(answers) {
        for (let i = answers.length - 1; i > -1; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = answers[i]
            answers[i] = answers[j];
            answers[j] = temp;
        };
        return answers;
    };

    checkCorrect = (event) => {
        if (event.target.textContent == this.state.clue.answer) {
            this.setState({
                ...this.state,
                seconds: this.state.seconds + 2,
                points: this.state.points + 15
            });
        } else {
            this.setState({
                ...this.state,
                points: this.state.points - 10
            });
        };
        this.getNewQuestion();
    };

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs></Grid>
                    <Grid item xs={6}>
                        <Card className={this.props.classes.card}>
                            <CardContent>
                                <Timer time={this.state.seconds} />
                            </CardContent>
                            <CardContent>
                                <Points points={this.state.points} />
                            </CardContent>
                            <CardContent>
                                <Question question={this.state.clue.phrase} />
                            </CardContent>
                            <CardActions className={this.props.classes.actions}>
                                <AnswerList 
                                    answers={this.state.answers}
                                    checkCorrect={this.checkCorrect}
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </div>
        );
    };
};

GameApp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(gameAppStyles)(GameApp);
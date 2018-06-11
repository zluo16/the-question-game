import React, { Component } from 'react';
import axios from 'axios';
import Points from './components/points';
import Timer from './components/timer';
import Question from './components/question';
import AnswerList from './components/answers/answersList';

export default class App extends Component {

    constructor() {
        super();
        this.state = { 
            clue: '', 
            answers: [], 
            seconds: 30 ,
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
            this.timer = setInterval(this.countDown, 1000);
        };
    };

    countDown() {
        let secs = this.state.seconds - 1;
        if (secs < 0) {
            clearInterval(this.timer);
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
            let temp = answers[i];
            let rand = answers[j];
            answers[i] = rand;
            answers[j] = temp;
        };
        return answers;
    };

    checkCorrect = (event) => {
        debugger
        if (event.target.value == this.state.clue.answer) {
            this.setState({
                ...this.state,
                points: this.state.points + 15
            });
        };
        this.getNewQuestion();
    };

    render() {
        return (
            <div>
                <Timer time={this.state.seconds} />
                <Points points={this.state.points} />
                <Question question={this.state.clue.phrase} />
                <AnswerList 
                    answers={this.state.answers}
                    checkCorrect={this.checkCorrect}
                />
            </div>
        );
    };
};

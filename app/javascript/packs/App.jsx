import React, { Component } from 'react';
import axios from 'axios';
import Timer from './components/timer';
import Question from './components/question';
import AnswerList from './components/answers/answersList';

export default class App extends Component {

    constructor() {
        super();
        this.state = { clue: '', answers: [], seconds: 30 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    };

    componentDidMount() {
        axios.get('/api/clue')
             .then(res => {
                const answers = res.data.answers.map(a => a.answer);
                answers.push(res.data.clue.answer);
                const shuffledAnswers = this.shuffleAnswers(answers);
                this.setState({ 
                    clue: res.data.clue, 
                    answers: shuffledAnswers 
                });
             });
        this.startTimer();
    };

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
        };
    };

    countDown() {
        let secs = this.state.seconds - 1;
        if (secs == 0) {
            clearInterval(this.timer);
        } else {
            this.setState({
                ...this.state,
                seconds: secs
            });
        };
    };

    shuffleAnswers(answers) {
        for (let i = 0; i < answers.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j] = answers[j], answers[i]];
        };
        return answers;
    };

    render() {
        return (
            <div>
                <Timer time={this.state.seconds} />
                <Question question={this.state.clue.phrase} />
                <AnswerList answers={this.state.answers} />
            </div>
        );
    };
};

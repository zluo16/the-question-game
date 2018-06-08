import React, { Component } from 'react';
import axios from 'axios';
import Question from './components/question';
import AnswerList from './components/answersList';

export default class App extends Component {

    constructor() {
        super();
        this.state = { clue: '', answers: [] };
        this.timer = 30;
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
            <div className='uk-container'>
                <h2 className='font-face'>Hello World</h2>
                <Question question={this.state.clue.phrase} />
                <AnswerList answers={this.state.answers} />
            </div>
        );
    };
};

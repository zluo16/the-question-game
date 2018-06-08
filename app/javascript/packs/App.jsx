import React, { Component } from 'react';
import axios from 'axios';
import Question from './components/question';

export default class App extends Component {

    state = {
        clue: '',
        answers: []
    }

    componentDidMount() {
        axios.get('/api/clue')
             .then(res => {
                this.setState({ clue: res.data.clue })
             })
    }

    render() {
        return (
            <div className='uk-container'>
                <h2 className='font-face'>Hello World</h2>
                <Question question={this.state.clue.phrase} />
            </div>
        )
    }
}

import React from 'react';
import AnswerButton from './answerButton';

const AnswerList = ({ answers }) => {
    return (
        <div>
            {answers.map(answer => <AnswerButton answer={answer} />)}
        </div>
    );
};

export default AnswerList;
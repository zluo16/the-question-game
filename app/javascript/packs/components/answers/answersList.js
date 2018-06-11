import React from 'react';
import AnswerButton from './answerButton';

const AnswerList = ({ answers, checkCorrect }) => {
    return (
        <div>
            {answers.map(answer => {
                return (
                    <AnswerButton 
                        answer={answer} 
                        checkCorrect={checkCorrect}
                    />
                );
            })};
        </div>
    );
};

export default AnswerList;
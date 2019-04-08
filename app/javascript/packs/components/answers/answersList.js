import React from 'react';
import AnswerButton from './answerButton';

const AnswerList = ({ answers, checkCorrect, index }) => {
  return (
    <div>
      {answers.map(answer => {
        return (
          <AnswerButton 
            key={index}
            answer={answer} 
            checkCorrect={checkCorrect}
          />
        );
      })}
    </div>
  );
};

export default AnswerList;

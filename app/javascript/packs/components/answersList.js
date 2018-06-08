import React from 'react';

const AnswerList = ({ answers }) => {
    return (
        <ul>
            {answers.map(answer => <li>{answer}</li>)}
        </ul>
    );
};

export default AnswerList;
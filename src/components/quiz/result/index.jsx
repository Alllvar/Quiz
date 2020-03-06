import React from 'react';
import {QUESTIONS} from '../../../constants/index';
import './index.css';

class Result extends React.Component {
    handleQuestion({ text, answers, id }) {
        const savedAnswers = sessionStorage.getItem('answers');
        const parsedAnswers = JSON.parse(savedAnswers);
        const answerObj = answers.find(answer => answer.id == parsedAnswers[id]);
        const answerText = answerObj.text;

        return <div key={id}>{text}: {answerText}</div>;
    }

    render() {
        return (
            <div className="container">
                <div className="result-container">
                    {QUESTIONS.map(this.handleQuestion)}
                </div>
            </div>
        )
    }
}

export default Result;
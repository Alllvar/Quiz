import React from "react";
import "./index.css";
import {QUESTIONS} from "../../../constants/index";

class Result extends React.Component {
    handleQuestion(question) {
        const questionText = question.question;
        const answers = sessionStorage.getItem('answers');
        const parsedAnswers = JSON.parse(answers);
        console.log(parsedAnswers)
        const answerObj = question.answers.find(answer => answer.id == parsedAnswers[question.id]);
        const answerText = answerObj.answer;
        return <div key={question.id}>{questionText}: {answerText}</div>;
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
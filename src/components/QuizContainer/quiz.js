import React from "react";
import './quiz.css';
import { withRouter } from "react-router";
import Answers from "../AnswersContainer/answers";
const questions = [
    {
        question: "What does HTML stand for?",
        id: 1,
    },
    {
        question: "Who is making the Web standards?",
        id: 2,
    },
    {
        question: "Which is the capital of Ukraine?",
        id: 3,
    },
    {
        question: "Who is the oldest brother?",
        id: 4,
    }
];

class Quiz extends React.Component {
    renderQuestion ({question}) {
        return (
            <div>
                <h1 className="question">{question}</h1>
            </div>
        )
    }
    render() {
        const {id} = this.props.match.params || 1;
        return  (
            <div className="container">
                {this.renderQuestion(questions.find(question => question.id == id))}
                <Answers />
            </div>
        )
    };
}
export default withRouter(Quiz);
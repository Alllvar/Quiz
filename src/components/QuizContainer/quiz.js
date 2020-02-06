import React from "react";
import './quiz.css';
import { withRouter } from "react-router";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
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
    constructor(props) {
        super(props);
        this.state = {
            answers: {}
        };
    }

    componentDidMount() {
        console.log(this.props);
        const {id} = this.props.match.params || 1;
        this.props.history.push("/quiz/1");
    }

    handleClickedAnswer (e, questionId) {
        this.setState({
            answers: {
                ...this.state.answers,
                [questionId]: e.target.value
            }
        }, () => console.log(this.state.answers))
    };

    showNext = () => {
        this.setState({
            ...this.state,
            step: this.state.step + 1
        });
    };

    renderQuestion ({question}) {
        return (
            <div>
                <h1 className="question">{question}</h1>
            </div>
        )
    }
    render() {

        return  (
            <div className="container">
                <Route exact path="/:id" component={Answers} />
            </div>
        )
    };
}
export default withRouter(Quiz);
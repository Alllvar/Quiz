import React from "react";
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import Question from "./question";
import { QUESTIONS } from '../../constants';
import './quiz.css';
import Result from "./result";

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     answers: [],
        // };

        this.handleAnswer = this.handleAnswer.bind(this);
        this.next = this.next.bind(this);

    };


    getResult() {
        let test = 1;
    }

    componentDidMount() {
        sessionStorage.removeItem('answers');
        const id = parseInt(this.props.location.pathname.slice(-1), 10);

        if(QUESTIONS.find(question => question.id === id)) {
            return this.props.history.push(`/quiz/${id}`);
        }

        return this.props.history.push(`/quiz/${QUESTIONS[0].id}`);
    }

    handleAnswer(e, questionId) {
        // this.setState({
        //     answers: {
        //         ...this.state.answers,
        //         [questionId]: e.target.value,
        //     },
        // },

        // () => console.log(this.state.answers))
        const answers = sessionStorage.getItem('answers');
        let container;
        // console.log(answers)
        if (!answers) {
            container = {};
        } else {
            container = JSON.parse(answers);
        }

        sessionStorage.setItem('answers', JSON.stringify({
            ...container, 
            [questionId]: e.target.value,
        }))

        console.log(container)
    }

    next(questionId) {
        const questionIndex = QUESTIONS.findIndex((question) => question.id === parseInt(questionId, 10));
        if(questionIndex < QUESTIONS.length - 1) {
            this.setState({
                currentQuestion: questionIndex + 1
            }, () => this.props.history.push(`/quiz/${QUESTIONS[questionIndex + 1].id}`))
        }

        const answers = sessionStorage.getItem('answers');
        // console.log(answers)
        const container = answers ? JSON.parse(answers) : {};

        const answersLength = Object.keys(container).length;
        console.log(answersLength);

        if (QUESTIONS.length === answersLength) {
            this.props.history.push(`/result`);
        }
    }

    answerContainer() {

    }

    render() {
        return  (
            <Switch>
                <Route path="/quiz/:id">
                    <Question handleAnswer={this.handleAnswer} next={this.next} />
                </Route>
            </Switch>
        )
    };
}
export default withRouter(Quiz);

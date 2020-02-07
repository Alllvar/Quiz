import React from "react";
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import Question from "./question";
import { QUESTIONS } from '../../constants';
import './quiz.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: {},
        };

        this.handleAnswer = this.handleAnswer.bind(this);
        this.next = this.next.bind(this);
    }

    componentDidMount() {
        const id = parseInt(this.props.location.pathname.slice(-1), 10);

        if(QUESTIONS.find(question => question.id === id)) {
            return this.props.history.push(`/quiz/${id}`);
        }

        return this.props.history.push(`/quiz/${QUESTIONS[0].id}`);
    }

    handleAnswer(e, questionId) {
        this.setState({
            answers: {
                ...this.state.answers,
                [questionId]: e.target.value
            }
        }, () => console.log(this.state.answers))
    }

    next(questionId) {
        const questionIndex = QUESTIONS.findIndex((question) => question.id === parseInt(questionId, 10));

        if(questionIndex < QUESTIONS.length - 1) {
            this.setState({
                currentQuestion: questionIndex + 1
            }, () => this.props.history.push(`/quiz/${QUESTIONS[questionIndex + 1].id}`))
        }
    }

    render() {
        return  (
            <div className="container">
                <Switch>
                    <Route path="/quiz/:id">
                        <Question handleAnswer={this.handleAnswer} next={this.next} />
                    </Route>
                </Switch>
            </div>
        )
    };
}
export default withRouter(Quiz);

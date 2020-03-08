import React from "react";
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { QUESTIONS } from '../../constants';
import { next } from '../../actions';
import Question from "./question";
import './quiz.scss';

const mapStateToProps = (state) => ({
    answers: state.answers
})

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.handleAnswer = this.handleAnswer.bind(this);
        this.next = this.next.bind(this);
    };

    componentDidMount() {
        const id = parseInt(this.props.location.pathname.slice(-1), 10);

        if(QUESTIONS.find(question => question.id === id)) {
            return this.props.history.push(`/quiz/${id}`);
        }

        return this.props.history.push(`/quiz/${QUESTIONS[0].id}`);
    }

    handleAnswer(e, questionId) {        
        this.props.next({
            [questionId]: e.target.value
        });
    }

    next(questionId) {
        const questionIndex = QUESTIONS.findIndex((question) => question.id === parseInt(questionId, 10));
        const answersLength = Object.keys(this.props.answers).length;

        if(questionIndex < QUESTIONS.length - 1) {
            this.setState({
                currentQuestion: questionIndex + 1
            }, () => this.props.history.push(`/quiz/${QUESTIONS[questionIndex + 1].id}`))
        }

        if (QUESTIONS.length === answersLength) {
            this.props.history.push('/result');
        }
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

export default compose(
        withRouter,
        connect(mapStateToProps, {next})
    ) (Quiz);

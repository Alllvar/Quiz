import React from 'react';
import { connect } from 'react-redux'
import { QUESTIONS } from '../../../constants/index';
import './index.scss';

const mapStateToProps = (state) => {
    return {
        userAnswers: state.answers
    }
}

class Result extends React.Component {
    handleQuestion = ({ text, answers, id }) => {
        const { userAnswers } = this.props;
        
        const answerObj = answers.find(answer => answer.id == userAnswers[id]);
        const answerText = answerObj.text;
        return <div className="answer" key={id}>{text}: {answerText}</div>;
    }

    render() {
        return (
            <div className="container">
                <div className="result-container">
                    <h1 className="title-result">Ваш результат</h1>
                    {QUESTIONS.map(this.handleQuestion)}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Result);
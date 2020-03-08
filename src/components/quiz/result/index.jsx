import React from 'react';
import { connect } from 'react-redux'
import { QUESTIONS } from '../../../constants/index';
import './index.scss';

class Result extends React.Component {
    handleQuestion = ({ text, answers, id }) => {
        const { userAnswers } = this.props;
        
        const answerObj = answers.find(answer => answer.id == userAnswers[id]);
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

const mapStateToProps = (state) => {
    return {
        userAnswers: state.answers
    }
}

export default connect(mapStateToProps)(Result);
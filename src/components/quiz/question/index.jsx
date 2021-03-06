import React from 'react';
import { withRouter } from 'react-router-dom';
import { QUESTIONS } from '../../../constants';
import './index.scss';

class Question extends React.Component {
    render() {
        const question = QUESTIONS.find(question => question.id === parseInt(this.props.match.params.id, 10));
        const oneQuestion = question.text;

        return (
            <div className="question-container">
                {oneQuestion && <span className="question">{oneQuestion}</span>}
                <div className="answers">
                    {question.answers.map(item => (
                        <div key={item.id} className="answer">
                            <input
                                name={question.id}
                                type="radio"
                                value={item.id}
                                onClick={(e) => this.props.handleAnswer(e, question.id)}
                            />
                            {item.text}
                        </div>
                    ))}
                    <button className="next-btn" onClick={() => this.props.next(this.props.match.params.id)}>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Question);

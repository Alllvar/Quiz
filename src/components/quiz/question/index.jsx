import React from "react";
import './index.css';
import { withRouter } from "react-router-dom";
import { QUESTIONS } from '../../../constants';

class Question extends React.Component {
    render() {
        const question = QUESTIONS.find(question => question.id === parseInt(this.props.match.params.id, 10));
        console.log(question);

        const oneQuestion = question.question;
        console.log(oneQuestion);

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
                                {item.answer}
                            </div>
                        ))}
                        <button className="next-btn" onClick={() => this.props.next(this.props.match.params.id)}>Next</button>
                    </div>
            </div>
        )
    }
}

export default withRouter(Question);

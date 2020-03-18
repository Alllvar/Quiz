import React from 'react';
import { withRouter } from 'react-router-dom';
import { QUESTIONS, INPUT_TYPES } from '../../../constants';
import RadioGroup from '../radioGroup';
import CheckboxGroup from '../checkboxGroup';
import './index.scss';

class Question extends React.Component {
    renderAnswers = (question) => {
        switch(question.inputType) {
            case INPUT_TYPES.RADIO: 
            return <RadioGroup item={question} handleChange={this.props.handleAnswer} />;

            case INPUT_TYPES.CHECKBOX: 
            return <CheckboxGroup item={question} handleChange={this.props.handleAnswer} />;

            // case INPUT_TYPES.TEXT: 
            // return <TextGroup />;

            // case INPUT_TYPES.SELECT: 
            // return <SelectGroup />;
        }
        return null
    }
    render() {
        const question = QUESTIONS.find(question => question.id === parseInt(this.props.match.params.id, 10));
        const oneQuestion = question.text;

        return (
            <div className="question-container">
                {oneQuestion && <span className="question">{oneQuestion}</span>}
                <div className="answers">
                    {this.renderAnswers(question)}

                    <button className="next-btn" onClick={() => this.props.next(this.props.match.params.id)}>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Question);
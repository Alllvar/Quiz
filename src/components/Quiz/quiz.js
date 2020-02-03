import React from "react";
import './quiz.css';
import { withRouter } from "react-router";
const questions = [
    {
        question: "What does HTML stand for?",
        id: 1,
        answers: [
            {answer: "Hyper Text Markup Language", id: 1},
            {answer: "1Hyper Text Markup Language", id: 2},
            {answer: "2Home Tool Markup Language", id: 3}
        ]
    },
    {
        question: "Who is making the Web standards?",
        id: 2,
        answers: [
            {answer: "The World Wide Web Consortium", id: 1},
            {answer: "Google", id: 2},
            {answer: "Microsoft", id: 3}
        ]
    },
    {
        question: "Which is the capital of Ukraine?",
        id: 3,
        answers: [
            {answer: "Odesa", id: 1},
            {answer: "Kiev", id: 2},
            {answer: "Lwiw", id: 3}
        ]
    },
    {
        question: "Who is the oldest brother?",
        id: 4,
        answers: [
            {answer: "Zahar", id: 1},
            {answer: "Mykola", id: 2},
            {answer: "Victor", id: 3}
        ]
    }
];

console.log(questions.answers);

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            answers: {}
        };
        this.handleClickedAnswer = this.handleClickedAnswer.bind(this);
    }

    handleClickedAnswer (e, questionId) {
        // this.setState({
        //     answers: {
        //         ...this.state.answers,
        //         [questionId]: e.target.value
        //     }
        // }, () => console.log(this.state.answers))
    };

    renderQuestion ({question, answers, id}) {
        return (
            <div>
                <h1 className="question">{question}</h1>
                <div className="answers">
                    {answers.map(item => (
                        <div key={item.id}>
                            <input name={id} type="radio" value={item.id} onClick={(e) => this.handleClickedAnswer(e, id)} className="answer" />
                            {item.answer}
                        </div>
                    ))};
                    <button className="next-btn" onClick={this.showNext}>Next</button>
                </div>
            </div>
        )
    }
    showNext = () => {
        // this.setState({
        //     ...this.state,
        //     step: this.state.step + 1
        // });
    };


    render() {
        const {id} = this.props.match.params || 1;
        return  (
            <div className="container">
                {this.renderQuestion(questions.find(question => question.id == id))}
            </div>
        )
    };
}
export default withRouter(Quiz);
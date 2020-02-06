import React from "react";
import './answers.css';

const answers = [
    {
        answers: [
            {answer: "Hyper Text Markup Language", id: 1},
            {answer: "1Hyper Text Markup Language", id: 2},
            {answer: "2Home Tool Markup Language", id: 3}
        ]
    },
    {
        answers: [
            {answer: "The World Wide Web Consortium", id: 1},
            {answer: "Google", id: 2},
            {answer: "Microsoft", id: 3}
        ]
    },
    {
        answers: [
            {answer: "Odesa", id: 1},
            {answer: "Kiev", id: 2},
            {answer: "Lwiw", id: 3}
        ]
    },
    {
        answers: [
            {answer: "Zahar", id: 1},
            {answer: "Mykola", id: 2},
            {answer: "Victor", id: 3}
        ]
    }
];

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            answers: {}
        };
        // this.handleClickedAnswer = this.handleClickedAnswer.bind(this);
    }

    renderAnswers ({answers, id}) {
        return (
            <div className="answers">
                {answers.map(item => (
                    <div key={item.id}>
                        <input name={id} type="radio" value={item.id} onClick={(e) => this.handleClickedAnswer(e, id)} className="answer" />
                        {item.answer}
                    </div>
                ))};
                <button className="next-btn" onClick={this.showNext}>Next</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                {/*{this.renderAnswers}*/}
            </div>
        )
    }
}

export default Answers;
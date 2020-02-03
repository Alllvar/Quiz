import React from "react";
import './App.css';
import Quiz from "../components/QuizContainer/quiz";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            answers: {}
        };
    }
    // componentDidMount() {
    //
    // }
    render() {
        return (
            <div className="container">
                <Router>
                    <Route exact path="/quiz/:id" component={Quiz}/>
                    <Redirect from="/" to="/quiz" />
                </Router>
            </div>
        )
    };
}
export default App;

import React from "react";
import './app.css';
import Quiz from "../components/quiz/quiz";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Result from "./quiz/result";
import Start from "./start/index";
import Main from "../main";

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
                <Router history={history}>
                    <Route path="/start" component={Start} />
                    <Route path="/quiz" component={Quiz} />
                    <Route path="/result" component={Result} />
                    <Route exact path="/" component={Main} />
                </Router>
        )
    };
}
export default App;

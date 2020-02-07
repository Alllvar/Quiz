import React from "react";
import './app.css';
import Quiz from "../components/quiz/quiz";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <Route path="/quiz" component={Quiz}/>
                    <Redirect from="/" to="/quiz/1"/>
                </Router>
            </div>
        )
    };
}
export default App;

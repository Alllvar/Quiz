import React from 'react';
import { createBrowserHistory } from 'history';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Quiz from '../components/quiz/quiz';
import Result from './quiz/result';
import Start from './start/index';
import Main from '../main';
import './app.scss';

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route path='/start' component={Start} />
                <Route path='/quiz' component={Quiz} />
                <Route path='/result' component={Result} />
                <Route exact path='/' component={Main} />
            </Router>
        )
    };
}

export default App;
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './index.css';

class Start extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/start">
                    <Link className="link" to="/quiz/1" >
                        <button className="start-btn">Click to start quiz!!!</button>
                    </Link>
                </Route>
            </Switch>
        )
    }
}

export default Start;
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './index.scss';

class Main extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/">
                    <Link className="link" to="/start" >
                        <button className="click-btn">Click me</button>
                    </Link>
                </Route>
            </Switch>
        )
    }
}

export default Main;
import React from 'react';
import "./index.css";
import { Switch, Route, Link } from 'react-router-dom';

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
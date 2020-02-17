import React from "react";
import "./index.css";

class Result extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="result">
                    {console.log(this.props.getResult)}
                </div>
            </div>
        )
    }
}

export default Result;
import React from 'react';

class TextGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
    }};

    handleChange(event) {
        this.setState({
            answer: event.target.value
        }, () => this.props.handleChange(this.state.answer, this.props.item.id))
    }
  
    render() {
      return (
        <div>
            <input
                type="text"
                onChange={this.handleChange.bind(this)}
            /> 
        </div>
      );
    }
}

export default TextGroup;
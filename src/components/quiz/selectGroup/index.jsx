import React from 'react';
import './index.scss';

class SelectGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: []
    }};

    handleChange(e) {
        const value = e.target.value;
        this.setState({
            answer: [value]
        }, () => this.props.handleChange(this.state.answer, this.props.item.id))
    }
    
    renderRadioButton(item) {
        return (
            <option 
                value={item.id}>
                    {item.text}
            </option>
        )
    }
  
    render() {
      return (
        <select onChange={this.handleChange.bind(this)}>
            {this.props.item.answers.map(this.renderRadioButton.bind(this))}
        </select>
      );
    }
}

export default SelectGroup;



import React from 'react';
import './index.scss';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: []
    }};

    handleChange(e) {
        const checked = e.target.checked;
        const value = e.target.value;
        this.setState({
            answer: checked ? [...this.state.answer, value] : this.state.answer.filter(el => el !== value )
        }, () => this.props.handleChange(e, this.props.item.id))
    }
    
    renderCheckboxButton(item) {
        
        return (
            <label>
                <input
                    name={item.id}
                    type="checkbox"
                    value={item.id}
                    onClick={this.handleChange.bind(this)}

                /> 
                {item.text}
            </label>
        )
    }
  
    render() {
        console.log(this.props.item)
      return (
        <div>
            {this.props.item.answers.map(this.renderCheckboxButton.bind(this))}
        </div>
      );
    }
}

export default CheckboxGroup;

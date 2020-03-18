import React from 'react';
import './index.scss';

class RadioGroup extends React.Component {

    handleChange(e) {
        this.props.handleChange(e, this.props.item.id)
    }
    
    renderRadioButton(item) {
        return (
            <label>
                <input
                    name={this.props.item.id}
                    type="radio"
                    value={item.id}
                    onClick={this.handleChange.bind(this)}
                /> 
                {item.text}
            </label>
        )
    }
  
    render() {
      return (
        <div>
            {this.props.item.answers.map(this.renderRadioButton.bind(this))}
        </div>
      );
    }
}

export default RadioGroup;



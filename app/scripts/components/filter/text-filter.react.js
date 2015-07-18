import React from 'react';
import {Input} from 'react-bootstrap';

class TextFilter extends React.Component{

  constructor (props) {
    super(props);
    this.state = {};
    this.state.value = '1';

    this.handleChange = this.handleChange.bind(this);
  }

    validationState() {
        let length = this.state.value.length;
        switch(true){
        	case length > 10: return 'success';
        	case length > 5: return 'warning';
        	case length > 0: return 'error';
        	default: return 'error';
        }
    }

  handleChange() {
  	console.log('this.state', this.state);
	this.state.value = this.refs.input.getValue();
  }

	render () {
	      return (
	      	<div>
	      	<p>{this.state.value}</p>
	      	<Input
		        type='text'
		        value={this.state.value}
		        placeholder='Enter text'
		        label='Working example with validation'
		        help='Validation is based on string length.'
		        bsStyle={this.validationState()}
		        hasFeedback
		        ref='input'
		        groupClassName='group-class'
		        labelClassName='label-class'
	        	onChange={this.handleChange} />
        	</div>		
    );
	}
}

export default TextFilter;
import React from 'react';
import {Input} from 'react-bootstrap';

class TextFilter extends React.Component{

	constructor (props) {
	super(props);
	console.log(this.props);
	this.state = {value: ''};
	this.handleChange = this.handleChange.bind(this);

	}

	validationState() {
		return 'success';
	    let length = this.state.value.length;
	    switch(true){
	    	case length > 10: return 'success';
	    	case length > 5: return 'warning';
	    	case length > 0: return 'error';
	    default: return 'error';
	    }
	}

	handleChange() {
		this.props.onChange({type: "text", target: this.props.target, value: this.refs.input.getValue()});
		this.setState({value: this.refs.input.getValue()});
	}

	render () {
	      return (
	      	<div>
		      	<Input
			        type='text'
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
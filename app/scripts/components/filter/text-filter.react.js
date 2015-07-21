import React from 'react';
import {Input} from 'react-bootstrap';

class TextFilter extends React.Component{

	constructor (props) {
	super(props);
	this.state = {value: this.props.value};
	this.handleChange = this.handleChange.bind(this);

	}

	componentWillReceiveProps(nextProps){
		this.setState({value: nextProps.value});
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
		let val = this.refs.input.getValue();
		console.log('value: ', val);
		this.setState({value: val});
		this.props.onChange({type: "text", target: this.props.target, value: val});
	}

	render () {
	      return (
	      	<div>
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
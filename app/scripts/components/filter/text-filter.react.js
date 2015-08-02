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

	handleChange() {
		let val = this.refs.input.getValue();
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
			        label={this.props.label}
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
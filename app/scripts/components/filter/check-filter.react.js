import React from 'react';
import {Input} from 'react-bootstrap';

class CheckFilter extends React.Component{

	constructor (props) {
	super(props);
	this.state = {value: ''};
	this.handleChange = this.handleChange.bind(this);

	}

	handleChange() {
		console.log('handle check filter change ',this.refs.input.getChecked() );
		this.props.onChange({target: this.props.target, value: this.refs.input.getChecked()});
	}

	render () {
	      return (
		      	<div>
	      			<Input type='checkbox' ref='input' label={this.props.label} onChange={this.handleChange} />
		    	</div>		
				);
	}
}

export default CheckFilter;
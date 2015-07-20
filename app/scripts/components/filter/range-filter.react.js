import React from 'react';

class RangeFilter extends React.Component{

	constructor (props) {
	super(props);
	this.state = {value: ''};
	this.handleChange = this.handleChange.bind(this);

	}

	handleChange() {
		// this.props.onChange({target: this.props.target, value: this.refs.input.getValue()});
		this.setState({value: this.refs.input.getValue()});
	}

	render () {
	      return (
	      	<div>
	      		Range 
	    	</div>		
				);
	}
}

export default RangeFilter;
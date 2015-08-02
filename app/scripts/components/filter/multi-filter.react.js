import React from 'react';
import {Input} from 'react-bootstrap';

class MultiFilter extends React.Component{

	constructor (props) {
	super(props);
	this.state = {values: this.props.values};
	this.handleChange = this.handleChange.bind(this);

	}

	componentWillReceiveProps(nextProps){
		this.setState({values: nextProps.values});
	}

	renderOptions(){
		return this.state.values.map(m => (<option value={m}>{m}</option>));
	}

	handleChange() {
		let val = this.refs.input.getValue();
		this.setState({values: val});
		this.props.onChange({type: "multi", target: this.props.target, value: val});
	}
	/*
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
	*/

	render () {
		let options = this.renderOptions(this.props.selectAll);
	      return (
	      		<Input 
		      		type='select' 
		      		ref='input'
		      		label={this.props.label}  
		      		onChange={this.handleChange}
		      		multiple>
	      			{options}	
			    </Input>
				);
	}
}

export default MultiFilter;
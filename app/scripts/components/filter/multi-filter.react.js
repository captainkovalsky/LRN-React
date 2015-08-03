import React from 'react';
import {Input} from 'react-bootstrap';
import {SELECTED_ALL} from '../../constants/constants.js';

class MultiFilter extends React.Component{

	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}


	renderOptions(selectAll = false){
		let items = this.props.values.map((m, idx) => (<option key={idx + 1} value={m}>{m}</option>));
		
		if(selectAll){
			items.unshift((<option key={0} value={SELECTED_ALL}>All</option>));
		}

		return items;
	}

	handleChange() {
		let val = this.refs.input.getValue();
		if(val.indexOf(SELECTED_ALL) !== -1){
			val = SELECTED_ALL;
		}
		this.props.onChange({type: "multi", target: this.props.target, value: val});
	}

	render () {
		let options = this.renderOptions(true);
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
import React from 'react';
import {Input} from 'react-bootstrap';

class CheckFilter extends React.Component{

	constructor (props) {
	super(props);
	this.state = {checked: this.props.checked};
	this.handleChange = this.handleChange.bind(this);

	}

	componentWillReceiveProps(nextProps){
		this.setState({checked: nextProps.checked});
	}

	handleChange() {
		let checked = this.refs.input.getChecked() ;
		this.setState({checked: checked});
		this.props.onChange({type: "bool", target: this.props.target, value: checked});
	}

	render () {
	      return (
		      	<div>
	      			<Input checked={this.state.checked} type='checkbox' ref='input' label={this.props.label} onChange={this.handleChange} />
		    	</div>		
				);
	}
}

export default CheckFilter;
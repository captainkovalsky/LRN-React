import React from 'react';
import {Panel} from 'react-bootstrap';

class Filters extends React.Component{

  constructor (props) {
    super(props);
  }

	render () {
	  return (
				<Panel header='Filters'>
					Panel filters
				</Panel>
	        );
	}
}

export default Filters;
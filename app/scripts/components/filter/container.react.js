import React from 'react';
import {Panel, Button, Row, Col} from 'react-bootstrap';

import TextFilter from './text-filter.react';

class Filters extends React.Component{

  constructor (props) {
    super(props);
  }

  applyFiltersClick(){
  	console.log('aaply filters');
  }

	render () {
	  return (
				<Panel header='Filters'>
					<Row>
						<Col md={12}>Panel filters</Col>
					</Row>
					<Row>
						<Col md={12}><TextFilter /></Col>
					</Row>
					<Row>
						<Col md={12}>
							<Button bsStyle='primary' onClick={this.applyFiltersClick}>Primary</Button>
						</Col>
					</Row>
				</Panel>
	        );
	}
}

export default Filters;
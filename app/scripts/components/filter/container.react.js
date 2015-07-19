import React from 'react';
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import {Panel, Button, Row, Col} from 'react-bootstrap';

import TextFilter from './text-filter.react';

class Filters extends React.Component{

  constructor (props) {
    super(props);

    this._applyFiltersClick = this._applyFiltersClick.bind(this);
  }

  _applyFiltersClick(){
  	console.log('aaply filters');
  	let filterA = (phone) => true;
  	let filterB = (phone) => true;
  	PhoneStore.applyFilters(filterA, filterB );
  }

	render () {
	  return (
				<Panel header='Filters'>
					<Row>
						<Col md={12}>Panel filters</Col>
					</Row>
					<Row>
						<Col md={12}><TextFilter  /></Col>
					</Row>
					<Row>
						<Col md={12}>
							<Button bsStyle='primary' onClick={this._applyFiltersClick}>Primary</Button>
						</Col>
					</Row>
				</Panel>
	        );
	}
}

export default Filters;
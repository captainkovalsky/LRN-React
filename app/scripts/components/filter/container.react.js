import React from 'react';
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid
import {Panel, Button, Row, Col} from 'react-bootstrap';

import TextFilter from './text-filter.react';

class Filters extends React.Component{

  constructor (props) {
    super(props);

    this._applyFiltersClick = this._applyFiltersClick.bind(this);
    this._clearFilters = this._clearFilters.bind(this);
  }

  _onChange(){
  	console.log('change phone store');
  }

  _clearFilters(){
  	PhoneAction.clearFilters();
  }

  _applyFiltersClick(){
  	let filterA = (phone) => phone.name === 'NEXUS'; //hardcode
  	PhoneAction.filterPhones(filterA);
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
							<Button bsStyle='primary' onClick={this._applyFiltersClick}>Apply</Button>
							<Button bsStyle='primary' onClick={this._clearFilters}>Clear</Button>
						</Col>
					</Row>
				</Panel>
	        );
	}
}

export default Filters;
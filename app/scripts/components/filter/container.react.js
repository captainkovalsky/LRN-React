import React from 'react';
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid
import {Panel, Button, Row, Col} from 'react-bootstrap';

import TextFilter from './text-filter.react';
import CheckFilter from './check-filter.react';

class Filters extends React.Component{

  constructor (props) {
    super(props);

    this._applyFiltersClick = this._applyFiltersClick.bind(this);
    this._clearFilters = this._clearFilters.bind(this);
    this._handleFilterChange = this._handleFilterChange.bind(this);

    this.filters = {};
  }

  _onChange(){
  }

  _handleFilterChange(filterMeta){
  	this.filters[filterMeta.target] = filterMeta;
  }

  _clearFilters(){
  	PhoneAction.clearFilters();
  }

  _applyFiltersClick(){
  	PhoneAction.filterPhones(this.filters);
  }

	render () {
	  return (
				<Panel header='Filters'>
					<Row>
						<Col md={12}>Panel filters</Col>
					</Row>
					<Row>
						<Col md={12}><TextFilter target="name" onChange={this._handleFilterChange} /></Col>
					</Row>
					<Row>
						<Col md={12}><CheckFilter label="Has wifi" target="attr.hasWifi" onChange={this._handleFilterChange} /></Col>
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
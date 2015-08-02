import React from 'react';
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid
import {Panel, Button, Row, Col} from 'react-bootstrap';

import TextFilter from './text-filter.react';
import CheckFilter from './check-filter.react';
import MultiFilter from './multi-filter.react';

const empty = {
    name: {value: ''},
    wifi: {checked: false}
    }; //imm

class Filters extends React.Component{

  constructor (props) {
    super(props);
    this.state = empty;
    this.m = PhoneStore.getManufactures();

    this._applyFiltersClick = this._applyFiltersClick.bind(this);
    this._clearFilters = this._clearFilters.bind(this);
    this._handleFilterChange = this._handleFilterChange.bind(this);

    this.filters = {};
  }

  _handleFilterChange(filterMeta){
    console.log(filterMeta, 'manufacturers');
  	this.filters[filterMeta.target] = filterMeta;
  }

  _clearFilters(){
  	this.setState(empty);
  	this.filters = {};
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
                        <Col md={12}>
                            <MultiFilter 
                            values={this.m} 
                            label="Manufacturers" 
                            target="manufacturer" 
                            onChange={this._handleFilterChange} />
                        </Col>
                    </Row>
					<Row>
						<Col md={12}><TextFilter value={this.state.name.value} label="Name" target="name" onChange={this._handleFilterChange} /></Col>
					</Row>
					<Row>
						<Col md={12}><CheckFilter checked={this.state.wifi.checked} label="Has wifi" target="attr.hasWifi" onChange={this._handleFilterChange} /></Col>
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
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
    this.manufactures = PhoneStore.getManufactures();

    this._clearFilters = this._clearFilters.bind(this);
    this._handleFilterChange = this._handleFilterChange.bind(this);

    this.filters = {};
  }

  _handleFilterChange(filterMeta){
  	this.filters[filterMeta.target] = filterMeta;
    PhoneAction.filterPhones(this.filters);
  }

  _clearFilters(){
  	this.setState(empty);
  	this.filters = {};
  	PhoneAction.clearFilters();
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
                            values={this.manufactures} 
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
							<Button bsStyle='primary' onClick={this._clearFilters}>Reset filters</Button>
						</Col>
					</Row>
				</Panel>
	        );
	}
}

export default Filters;
import React from 'react';
import {Table, Pagination} from 'react-bootstrap';

import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid

import PhoneRow from './row.react.js';
import HeaderPhoneRow from './row-header.react.js';

import {DISPLAY_ON_PAGE, MAX_PAGING_BUTTONS} from '../../constants/constants.js';

class PhoneList extends React.Component{

  constructor (props) {
    super(props);
    PhoneAction.clearFilters();
    let paged = PhoneStore.getPaged();
    this.state = {phones: PhoneStore.getAll(), activePage: 1};
    this.items = PhoneStore.getPagingItems(DISPLAY_ON_PAGE); 
  }

  renderPhoneRow (phoneModel) {
    return (<PhoneRow key={phoneModel.ID} phone={phoneModel}></PhoneRow>);
    }

  _onChange(){
    var phones = PhoneStore.getAll();
    this.setState({phones: phones});
  }

  componentWillMount(){
      PhoneStore.addChangeListener(this._onChange.bind(this));
  }

  handleSelect(evt,selectedEvent){
    let page = selectedEvent.eventKey;
    PhoneAction.changePage(page, DISPLAY_ON_PAGE);
    this.setState({activePage: page}); //just for test
  }

    render () {
      let rows = [];
      if(this.state.phones.length === 0){
        return (
          <h2> There are no items. </h2>
          );
      }
      for(let i = 0, max = this.state.phones.length; i < max; i++){
        rows.push(this.renderPhoneRow(this.state.phones[i]));
      }
      return (
            <div>
                <Table responsive bordered hover >
                  <thead>
                   <HeaderPhoneRow />
                  </thead> 
                  <tbody>{rows}</tbody>
                </Table>
                 <Pagination
                  first
                  last
                  ellipsis
                  bsSize='medium'
                  items={this.items}
                  maxButtons={MAX_PAGING_BUTTONS}
                  activePage={this.state.activePage}
                  onSelect={this.handleSelect.bind(this)} />
                <br />
              </div>
            );
    }
}

export default PhoneList;
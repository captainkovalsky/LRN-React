import React from 'react';
import {Table, Pagination} from 'react-bootstrap';

import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid

import PhoneRow from './row.react.js';
import HeaderPhoneRow from './row-header.react.js';

import {MAX_PAGING_BUTTONS} from '../../constants/constants.js';

class PhoneList extends React.Component{

  constructor (props) {
    super(props);
    PhoneAction.clearFilters();
    this.state = {
      phones: PhoneStore.getPagedItems(), 
      activePage: 1, 
      pagesCount: PhoneStore.getPagesCount()};
  }

  renderPhoneRow (phoneModel) {
    return (<PhoneRow key={phoneModel.ID} phone={phoneModel}></PhoneRow>);
    }

  _onChange(){
    var phones = PhoneStore.getPagedItems();
    this.setState({
      phones: phones, 
      activePage: PhoneStore.getActivePage(),
      pagesCount: PhoneStore.getPagesCount()
    });
  }

  componentWillMount(){
      PhoneStore.addChangeListener(this._onChange.bind(this));
  }

  handleSelect(evt,selectedEvent){
    let page = selectedEvent.eventKey;
    PhoneAction.changePage(page);
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
                { this.state.pagesCount > 1 ? 
                  <Pagination
                  first
                  last
                  ellipsis
                  bsSize='medium'
                  maxButtons={this.state.pagesCount > MAX_PAGING_BUTTONS ? MAX_PAGING_BUTTONS : this.state.pagesCount}
                  items={this.state.pagesCount}
                  activePage={this.state.activePage}
                  onSelect={this.handleSelect.bind(this)} />: null }
                 
                <br />
              </div>
            );
    }
}

export default PhoneList;
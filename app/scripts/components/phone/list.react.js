import React from 'react';
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import {Table} from 'react-bootstrap';

import PhoneRow from './row.react.js';
import HeaderPhoneRow from './row-header.react.js';

class PhoneList extends React.Component{

  constructor (props) {
    super(props);
    this.state = {phones: PhoneStore.getAll()};
  }

  renderPhoneRow (phoneModel) {
    return (<PhoneRow phone={phoneModel}></PhoneRow>);
    }

  _onChange(){
    var phones = PhoneStore.getAll();
    this.setState({phones: phones});
  }

  componentWillMount(){
      PhoneStore.addChangeListener(this._onChange.bind(this));
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
              <Table responsive>
                <thead>
                 <HeaderPhoneRow />
                </thead> 
                <tbody>{rows}</tbody>
              </Table>
            );
    }
}

export default PhoneList;
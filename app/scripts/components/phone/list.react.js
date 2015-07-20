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
      console.log('new phones ', PhoneStore.getAll());
       this.setState({phones: PhoneStore.getAll()});
    }

  componentWillMount(){
      PhoneStore.addChangeListener(this._onChange.bind(this));
}

    render () {
      var phoneRows = this.state.phones.map(this.renderPhoneRow);
      return (
              <Table responsive>
                <thead>
                 <HeaderPhoneRow />
                </thead> 
                <tbody>{phoneRows}</tbody>
              </Table>
            );
    }
}

export default PhoneList;
import React from 'react';
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid
import {Table} from 'react-bootstrap';

import PhoneRow from './row.react.js';

class PhoneList extends React.Component{

  constructor (props) {
    super(props);
    this.state = {};
    this.state.phones = PhoneStore.getAll();
  }

  renderPhoneRow (phoneModel) {
    return (<PhoneRow phone={phoneModel}></PhoneRow>);
    }

    render () {
      var phoneRows = this.state.phones.map(this.renderPhoneRow);
      return (
              <Table responsive>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>color</th> 
                  </tr>
                </thead> 
                <tbody>{phoneRows}</tbody>
              </Table>
            );
    }
}

export default PhoneList;
import React from 'react';
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid

class HeaderPhoneRow extends React.Component {

    constructor(props) {
        super(props);
    }

    _order(name){
      PhoneAction.changeOrderFor(name);
    }

    render() {
        return (
              <tr>
                <th onClick={this._order.bind(this, 'name')}>name</th>
                <th onClick={this._order.bind(this, 'price')}>price</th>
                <th onClick={this._order.bind(this, 'attr.color')}>color</th> 
                <th onClick={this._order.bind(this, 'attr.hasWifi')}>Wifi</th> 
              </tr>
              );
  }
}
export default HeaderPhoneRow;

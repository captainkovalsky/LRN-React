import React from 'react';
import PhoneAction from '../../actions/phone-action.js'; //TODO: avoid
import PhoneStore from '../../stores/phone-store.js'; //TODO: avoid

class HeaderPhoneRow extends React.Component {

    constructor(props) {
        super(props);
        this.order = PhoneStore.getOrder();
        
    }

    _order(name){
      PhoneAction.changeOrderFor(name);
    }

    _getSortOrderClass(name){
      let className = '';

      if(this.order.fieldName === name){
        className += 'fa fa-sort-' + this.order.direction.toLowerCase();
      }

      return className;
    }

    render() {
        return (
              <tr>
                <th>ID</th>
                <th onClick={this._order.bind(this, 'name')}>name<i className={this._getSortOrderClass('name')}></i></th>
                <th onClick={this._order.bind(this, 'price')}>price<i className={this._getSortOrderClass('price')}></i></th>
                <th onClick={this._order.bind(this, 'attr.color')}>color<i className={this._getSortOrderClass('attr.color')}></i></th> 
                <th onClick={this._order.bind(this, 'attr.hasWifi')}>Wifi<i className={this._getSortOrderClass('attr.hasWifi')}></i></th> 
              </tr>
              );
  }
}
export default HeaderPhoneRow;

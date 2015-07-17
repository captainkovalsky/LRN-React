import React from 'react';
import PhoneStore from '../stores/phone-store.js';
import {Table} from 'react-bootstrap';

class PhoneItemRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.phone = props.phone;
    }

    render() {
        var phone = this.state.phone;
        return (
                  <tr>
                    <td>{phone.name}</td>
                    <td>{phone.price}</td>
                    <td>{phone.attr.color}</td>
                  </tr>
              );
  }
}

PhoneItemRow.propTypes = {phone: React.PropTypes.object};
PhoneItemRow.defaultProps = {phone:  {}};


class ProductList extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.state.phones = PhoneStore.getAll();
  }

  renderPhone(phoneItem){
    return (<PhoneItemRow phone={phoneItem}></PhoneItemRow>);
    }

    render() {
      var phoneListItems = this.state.phones.map(this.renderPhone);
      return (
              <Table responsive>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>color</th> 
                  </tr>
                </thead> 
                <tbody>{phoneListItems}</tbody>
              </Table>
            );
    }
}

export default ProductList;
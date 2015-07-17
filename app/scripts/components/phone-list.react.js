import React from 'react';

class PhoneItemRow extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.state.phone = props.phone;
  }

  render(){
    var phone = this.state.phone;
    return (
      <tr><td>{phone.name}</td><td>{phone.price}</td></tr>
    );
  }
}

PhoneItemRow.propTypes = {phone: React.PropTypes.object};
PhoneItemRow.defaultProps = {phone:  {}};



class ProductList extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.state.phones = [{name: 'NEXUS', price: 299}, {name: 'АЙФОНІЙ ', price: 699}];
  }

  renderPhone(phoneItem){
    return (<PhoneItemRow phone={phoneItem}> </PhoneItemRow>);
  }

  render(){
    var phoneListItems = this.state.phones.map(this.renderPhone);
    return (<table><thead><tr><td>name</td><td>price</td></tr></thead><tbody>{phoneListItems}</tbody></table>);
  }
}


export default ProductList;

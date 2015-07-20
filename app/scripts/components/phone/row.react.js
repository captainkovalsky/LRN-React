import React from 'react';

class PhoneRow extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      var phone = this.props.phone;
        return (
                  <tr>
                    <td>{phone.name}</td>
                    <td>{phone.price}</td>
                    <td>{phone.attr.color}</td>
                    <td>{phone.attr.hasWifi ? 'yes' : 'no'}</td>
                  </tr>
              );
  }
}

PhoneRow.propTypes = {phone: React.PropTypes.object};
PhoneRow.defaultProps = {phone:  {}};

export default PhoneRow;

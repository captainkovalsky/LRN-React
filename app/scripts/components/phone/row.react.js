import React from 'react';

class PhoneRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {phone: props.phone};
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

PhoneRow.propTypes = {phone: React.PropTypes.object};
PhoneRow.defaultProps = {phone:  {}};

export default PhoneRow;

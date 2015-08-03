import _ from 'lodash';
const ASC = 'ASC';
const DESC = 'DESC';
const colorOrder = ['green', 'blue', 'red'];

class PhoneSorter {
    constructor() {
        this._order = {
            fieldName: '',
            direction: ''
        };

        this._iteratee = {
            'name': phone => phone.name.toLowerCase(),
            'price': 'price',
            'attr.color': phone => colorOrder.indexOf(phone.attr.color),
            'attr.hasWifi': phone => phone.attr.hasWifi
        };

    }

    order(phones, byField) {
        let previousOrderField = this._order.fieldName === byField ? this._order.direction : '';
        let withDirection = previousOrderField === DESC ? ASC : DESC;

        this._order.fieldName = byField;
        this._order.direction = withDirection;
        return _.sortByOrder(phones, this._iteratee[byField], withDirection.toLowerCase()); //TODO: should be changed
    }

    getOrder(){
        return this._order;
    }
}

export default PhoneSorter;
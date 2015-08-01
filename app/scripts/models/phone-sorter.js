import _ from 'lodash';
const ASC = 'ASC';
const DESC = 'DESC';
const colorOrder = ['green', 'blue', 'red'];

class PhoneSorter {
    constructor() {
        this._order = {
            name: '',
            price: '',
            attr: {
                color: ''
            }
        };

        this._iteratee = {
            'name': phone => phone.name.toLowerCase(),
            'price': 'price',
            'attr.color': phone => colorOrder.indexOf(phone.attr.color),
            'attr.hasWifi': phone => phone.attr.hasWifi
        };

    }

    order(phones, byField) {
        let previousOrderField = _.get(this._order, byField);
        let withDirection = previousOrderField === DESC ? ASC : DESC;

        _.set(this._order, byField, withDirection);

        return _.sortByOrder(phones, this._iteratee[byField], withDirection.toLowerCase()); //TODO: should be changed
    }

    getOrder(){
        return this._order;
    }
}

export default PhoneSorter;
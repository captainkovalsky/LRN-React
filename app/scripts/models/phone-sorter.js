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
        return _.sortByOrder(phones, this._iteratee[byField], withDirection); //TODO: should be changed
    }

    keepOrder(phones){
        let byField = this._order.fieldName;
        let direction = this._order.direction.toLowerCase();
        let wasOrdered = (byField !== '' && direction !== '');

        return wasOrdered ? _.sortByOrder(phones, this._iteratee[byField], direction) : phones;
    }

    getOrder(){
        return this._order;
    }
}

export default PhoneSorter;
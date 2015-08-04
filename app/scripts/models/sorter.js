import _ from 'lodash';
const ASC = 'asc';
const DESC = 'desc';

class Sorter {
    constructor(iteratee) {
        this._order = {
            fieldName: '',
            direction: ''
        };
        this._iteratee = iteratee;
    }

    order(items, byField) {
        let previousOrderField = this._order.fieldName === byField ? this._order.direction : '';
        let withDirection = previousOrderField === DESC ? ASC : DESC;
        
        this._order.fieldName = byField;
        this._order.direction = withDirection;
        console.log('sort %s by %s ', withDirection, byField);
        return _.sortByOrder(items, this._iteratee[byField], withDirection);
    }

    keepOrder(items){
        let byField = this._order.fieldName;
        let direction = this._order.direction.toLowerCase();
        let wasOrdered = (byField !== '' && direction !== '');

        return wasOrdered ? _.sortByOrder(items, this._iteratee[byField], direction) : items;
    }

    getOrder(){
        return this._order;
    }
}

export default Sorter;
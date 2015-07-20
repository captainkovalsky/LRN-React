import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES} from '../constants/constants.js';
import _ from 'lodash'; //or lodash-compact ?

var CHANGE_EVENT = 'CHANGE';
var phones = [
      {name: 'Iphone', price: 699, attr: {color: 'blue'}},
      {name: 'NEXUS', price: 299, attr: {color: 'red'}}, 
      {name: 'LUMIA 630', price: 69, attr: {color: 'green'}}
    ];

const ASC = 'ASC';
const DESC = 'DESC';

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._orders = {name: '', price: '', attr : {color: ''}};
    this._phones = phones;

      AppDispatcher.register(payload => {
        let action = payload.action;
          switch (action.actionType) {
              case FILTER_PHONE:
                  this.applyFilter(action.filters);
                  break;
              case CLEAR_FILTERS:
                  this.clearFilters();
                  break;
              case ORDER_PHONES:
                  this.orderPhones(action.field);
                  break;

          }
          this.emitChange();
      });
  }

  orderPhones(fieldName){
    let fieldOrder = _.get(this._orders, fieldName);
    let newOrder = fieldOrder === ASC ? DESC : ASC;
    _.set(this._orders, fieldName, newOrder);
    this._phones = _.sortByOrder(this._phones, [fieldName], [newOrder.toLowerCase()]);
  }

  getAll(){
    return this._phones;
  }

  clearFilters(){
    this._phones = phones;
  }

  applyFilter(filters){
    console.log('apply filter', filters.name);

    this._phones = _.filter(phones, function(phone){
      var hasIn = _.get(phone, filters.name.target).toUpperCase().indexOf(filters.name.value.toUpperCase())  > -1;
      return hasIn;
    });
  }

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback)
  }
}

var store = new PhoneStore;

export default store;

import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES} from '../constants/constants.js';


var CHANGE_EVENT = 'CHANGE';
var phones = [
      {name: 'NEXUS', price: 299, attr: {color: 'red'}}, 
      {name: 'Iphone', price: 699, attr: {color: 'blue'}},
      {name: 'LUMIA 630', price: 69, attr: {color: 'green'}},
    ];

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = phones;
    
      AppDispatcher.register(payload => {
        let action = payload.action;
          switch (action.actionType) {
              case FILTER_PHONE:
                  this.applyFilters(action.filters);
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
    console.log('update state by order ', fieldName);
  }

  getAll(){
    return this._phones;
  }

  clearFilters(){
    this._phones = phones;
  }

  applyFilters(filters){
    this._phones = this._phones.filter(filters);
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

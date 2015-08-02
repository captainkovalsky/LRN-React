import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES} from '../constants/constants.js';
import PhoneSorter from '../models/phone-sorter.js';
import PhoneFilter from '../models/phone-filter.js';

import _ from 'lodash'; //or lodash-compact ?

console.log('phone filter ', PhoneFilter);
var CHANGE_EVENT = 'CHANGE';
var phones = [
      {name: 'Alcatel', price: 34324, attr: {color: 'black', hasWifi: true}},
      {name: 'LUMIA 530', price: 65, attr: {color: 'green', hasWifi: false}},
      {name: 'Iphone', price: 699, attr: {color: 'blue', hasWifi: false}},
      {name: 'NEXUS', price: 299, attr: {color: 'red', hasWifi: true}}, 
      {name: 'LUMIA 630', price: 69, attr: {color: 'green', hasWifi: true}},
      {name: 'LUMIA 600', price: 34, attr: {color: 'green', hasWifi: false}}
    ];

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = phones;

    this.filter = new PhoneFilter();
    this.sorter = new PhoneSorter();
    this._orders = this.sorter.getOrder();

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

  orderPhones (byField){
    this._phones = this.sorter.order(this._phones, byField);
  }

  getAll(){
    return this._phones;
  }

  clearFilters(){
    this._phones = phones;
  }

  applyFilter(filters){
    this.filter.setFilters(filters);
    let phones = this.filter.applyFilters(this._phones);
    return;

    // if(_.isEmpty(filters)){
    //   this._phones = phones;
    //   return;
    // }

    // let funcs = [];


    // for(var name in filters){
    //   if(this._checkFilterForAcitve(filters[name])){
    //     funcs.push(this._buildFilterFunction(filters[name]));
    //   }
    // }

    // if(_.isEmpty(funcs)){
    //   this._phones = phones;
    //   return;
    // }

    // var compose = filtersFunc => phone => _.every(filtersFunc, f => f.call(null, phone));

    // var commonFilterFunc = compose(funcs);

    // this._phones = _.filter(phones, commonFilterFunc);
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

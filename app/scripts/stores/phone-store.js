import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES, CHANGE_PAGE} from '../constants/constants.js';
import PhoneSorter from '../models/phone-sorter.js';
import PhoneFilter from '../models/phone-filter.js';

import _ from 'lodash'; //or lodash-compact ?


var CHANGE_EVENT = 'CHANGE';
var phones = [
      {name: 'Alcatel', price: 34324, manufacturer:'Google', attr: {color: 'black', hasWifi: true}},
      {name: 'LUMIA 530', price: 65, manufacturer:'Microsoft', attr: {color: 'green', hasWifi: false}},
      {name: 'Iphone', price: 699, manufacturer:'Apple', attr: {color: 'blue', hasWifi: false}},
      {name: 'NEXUS', price: 299, manufacturer:'Google', attr: {color: 'red', hasWifi: true}}, 
      {name: 'LUMIA 630', price: 69, manufacturer:'Microsoft', attr: {color: 'green', hasWifi: true}},
      {name: 'LUMIA 600', price: 34, manufacturer:'Microsoft', attr: {color: 'green', hasWifi: false}},
      {name: 'Gsmart', price: 545, manufacturer:'China', attr: {color: 'gray', hasWifi: true}}
    ];
    phones.forEach(function(p, idx, arr){ p.ID = idx + 1;});

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = phones;

    this.filter = new PhoneFilter(); //maybe phones should be injected into PhoneFilter and/or to PhoneSorter ??
    this.sorter = new PhoneSorter();
    // this.pager = new Pager();
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
              case CHANGE_PAGE:
                  this.changePage(action.page, action.onPage);
                  break;
          }
          this.emitChange();
      });
  }

  changePage(page, perPage){
      let startFrom = (page - 1) * perPage;
      let paged = this._phones.slice(startFrom, startFrom + perPage);
      this._paged = paged;
  }

  getPaged(){
    return this._paged;
  }
  
  getPagingItems(onPage = 10){
    if( onPage === 0 ){
      throw "Items on page must be greater than 0.";
    }

    return Math.ceil(phones.length / onPage);
  }

  getManufactures(){
    return _.uniq(_.pluck(phones, 'manufacturer'));
  }

  orderPhones (byField){
    this._phones = this.sorter.order(this._phones, byField);
  }

  getAll(){
    return this._phones;
  }

  getOrder(){
    return this.sorter.getOrder();
  }

  clearFilters(){
    this._phones = phones;
  }

  applyFilter(filters){
    this.filter.setFilters(filters);
    this._phones = this.sorter.keepOrder(this.filter.applyFilters(phones));
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

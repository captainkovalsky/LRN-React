import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES, CHANGE_PAGE, DISPLAY_ON_PAGE} from '../constants/constants.js';
import Sorter from '../models/sorter.js';
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
const colorOrder = ['green', 'blue', 'red'];

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = phones;

    this.filter = new PhoneFilter(); //maybe phones should be injected into PhoneFilter and/or to PhoneSorter ??
    let iteratee = {
            'name': phone => phone.name.toLowerCase() ,
            'price': 'price',
            'attr.color': phone => colorOrder.indexOf(phone.attr.color),
            'attr.hasWifi': phone => phone.attr.hasWifi
        };
    this.sorter = new Sorter(iteratee);

    this.changePage(1, DISPLAY_ON_PAGE);
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

  changePage(page){
      let startFrom = (page - 1) * DISPLAY_ON_PAGE;
      let paged = this._phones.slice(startFrom, startFrom + DISPLAY_ON_PAGE);
      this._paged = paged;
  }

  getPaged(){
    return this._paged;
  }
  
  getPagingItems(){
    return Math.ceil(this._phones.length / DISPLAY_ON_PAGE);
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

import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES, CHANGE_PAGE, DISPLAY_ON_PAGE} from '../constants/constants.js';
import Sorter from '../models/sorter.js';
import PhoneFilter from '../models/phone-filter.js';
import Pagination from '../models/pagination.js';

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
    this.pagination = new Pagination(2);
    this.pagination.setItems(phones);
    this.filter = new PhoneFilter(); //maybe phones should be injected into PhoneFilter and/or to PhoneSorter ??
    let iteratee = {
            'name': phone => phone.name.toLowerCase() ,
            'price': 'price',
            'attr.color': phone => colorOrder.indexOf(phone.attr.color),
            'attr.hasWifi': phone => phone.attr.hasWifi
        };
    this.sorter = new Sorter(iteratee);

    this._orders = this.sorter.getOrder();

      AppDispatcher.register(payload => {
        let action = payload.action;
          switch (action.actionType) {
              case FILTER_PHONE:
                  this.applyFilter(action.filters);
                  this.updatePagingItems();
                  break;
              case CLEAR_FILTERS:
                  this.clearFilters();
                  this.updatePagingItems();
                  break;
              case ORDER_PHONES:
                  this.orderPhones(action.field);
                  this.updatePagingItems(this.pagination.getActivePage());
                  break;
              case CHANGE_PAGE:
                  this.changePage(action.page, action.onPage);
                  break;
          }
          this.emitChange();
      });
  }

  updatePagingItems(page = 1){
     this.pagination.setItems(this._phones);
     this.pagination.changePage(page);
  }

  changePage(page){
     this.pagination.changePage(page);
  }

  getPagedItems(){
    return this.pagination.getPagedItems();
  }
  
  getPagesCount(){
    return this.pagination.getPagesCount();
  }

  getActivePage(){
    return this.pagination.getActivePage();
  }

  getManufactures(){
    return _.uniq(_.pluck(phones, 'manufacturer'));
  }

  orderPhones (byField){
    this._phones = this.sorter.order(this._phones, byField);
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

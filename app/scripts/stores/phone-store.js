import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES} from '../constants/constants.js';
import _ from 'lodash'; //or lodash-compact ?

var CHANGE_EVENT = 'CHANGE';
var phones = [
      {name: 'Alcatel', price: 34324, attr: {color: 'black', hasWifi: true}},
      {name: 'LUMIA 530', price: 65, attr: {color: 'green', hasWifi: false}},
      {name: 'Iphone', price: 699, attr: {color: 'blue', hasWifi: false}},
      {name: 'NEXUS', price: 299, attr: {color: 'red', hasWifi: true}}, 
      {name: 'LUMIA 630', price: 69, attr: {color: 'green', hasWifi: true}},
      {name: 'LUMIA 600', price: 34, attr: {color: 'green', hasWifi: false}}
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
    let newOrder = fieldOrder === DESC ? ASC : DESC;
    _.set(this._orders, fieldName, newOrder);
    let sortedMethod = this[this._getMethodNameBy(fieldName)];
    this._phones = _.sortByOrder(this._phones, sortedMethod, newOrder.toLowerCase()); //TODO: should be changed
  }

  _getMethodNameBy(fieldName){
    return '_orderBy' + _.startCase(fieldName).split(' ').join('');
  }

  _orderByName(phone){
    return phone.name.toLowerCase();
  }

  _orderByPrice(phone){
    return phone.price;

  }

  _orderByAttrHasWifi(phone){
    return phone.attr.hasWifi;
  }

  _orderByAttrColor(phone){
    let orderArray = ['green', 'blue', 'red'];
    let color = phone.attr.color;
    let code = orderArray.indexOf(color);
    return code === -1 ? 9999 : code;
  }

  _fillterByName(phone){

  }

  _buildFilterFunction(filterMeta){
    console.log('build filter functon for phone by ', filterMeta);

  }

  getAll(){
    return this._phones;
  }

  clearFilters(){
    this._phones = phones;
  }

  applyFilter(filters){
    console.log('filters ', filters);
   
    // var f1 = function(phone){
    //   return phone.price >= 60;
    // };

    // var f2 = function(phone){
    //   return phone.price <= 70;
    // };


    // var f3 = function(phone){
    //   return phone.name === '1';
    // };

    // var compose = function(...filtersFunc){
    //   return function(phone){
    //     return _.every(filtersFunc, filterFunc => filterFunc.call(null, phone) );
    //   }
    // };

    // this._phones = _.filter(phones, function(phone){
    //   var hasIn = _.get(phone, filters.name.target).toUpperCase().indexOf(filters.name.value.toUpperCase())  > -1;
    //   return hasIn;
    // });
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

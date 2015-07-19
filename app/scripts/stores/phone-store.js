import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE} from '../constants/constants.js';


var CHANGE_EVENT = 'CHANGE';

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = [
      {name: 'NEXUS', price: 299, attr: {color: 'red'}}, 
      {name: 'Iphone', price: 699, attr: {color: 'blue'}},
      {name: 'LUMIA 630', price: 69, attr: {color: 'green'}},
    ];
    
      AppDispatcher.register(payload => {
        let action = payload.action;
          switch (action.actionType) {
              case FILTER_PHONE:
                  this.applyFilters(action.filter);
                  break;
          }
          this.emitChange();
      });
  }

  getAll(){
    return this._phones;
  }

  applyFilters(filters){
    console.log('filter phones by ', filters);
    this._phones = [this._phones[0]];
    console.log(this._phones);
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


// AppDispatcher.register(function(action){
//   switch(action.actionType){
//     case ADDED_QUESTION:
//       console.log('ADDED_QUESTION');
//     break;
//   }
// });

export default store;

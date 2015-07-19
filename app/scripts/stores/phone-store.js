import AppDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import {FILTER_PHONE} from '../constants/constants.js';


var CHANGE_EVENT = 'CHANGE';

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = [
      {name: 'NEXUS', price: 299, attr: {color: 'red'}}, 
      {name: 'АЙФОНІЙ', price: 699, attr: {color: 'blue'}},
      {name: 'LUMIA 630', price: 69, attr: {color: 'green'}},
    ];
      AppDispatcher.register(payload => {
          switch (payload.actionType) {
              case FILTER_PHONE:
                  this.applyFilters(payload.filter);
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

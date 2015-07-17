import {AppDispatcher} from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';
import {FILTER_PHONE} from '../constants/constants.js';

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = [
    {name: 'NEXUS', price: 299, attr: {color: 'red'}}, 
    {name: 'АЙФОНІЙ', price: 699, attr: {color: 'blue'}},
    {name: 'LUMIA 630', price: 69, attr: {color: 'green'}},
    ];
  }

  getAll(){
    return this._phones;
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

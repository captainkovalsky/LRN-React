import {AppDispatcher} from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';
import  '../constants/constants.js';

class PhoneStore extends EventEmitter{

  constructor(){
    super();
    this._phones = [{
      "name" : "Nexus 5"
    }];
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

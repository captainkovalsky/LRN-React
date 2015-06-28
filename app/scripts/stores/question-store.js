var AppDispatcher = import {AppDispatcher} from '../dispatcher/dispatcher.js';
var EventEmitter = import {EventEmitter} from 'events';
console.log('EventEmitter ', EventEmitter);
const CHANGE_EVENT = 'change';

var _questions = {};

class QuestionStore{

}

AppDispatcher.register(function(action){
  switch(action.actionType){
    case 'CREATED':
      console.log('create question');
    break;
  }
});

export default new QuestionStore();

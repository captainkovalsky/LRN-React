import {AppDispatcher} from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';
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

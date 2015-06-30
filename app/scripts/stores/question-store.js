import {AppDispatcher} from '../dispatcher/dispatcher';
import {Question} from '../components/Question.js';
import {EventEmitter} from 'events';
import {ADDED_QUESTION, DELETED_QUESTION} from '../constants/constants.js';

class QuestionStore extends EventEmitter{

  constructor(){
    super();
    this._questions = [];
  }

  addQuestion(title){
    this._questions.push(new Question(title));
  }
}
var store = new QuestionStore;

AppDispatcher.register(function(action){
  switch(action.actionType){
    case ADDED_QUESTION:
      console.log('ADDED_QUESTION');
    break;
  }
});
store.addQuestion("What\'s your name?");
export default store;

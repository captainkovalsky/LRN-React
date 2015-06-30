import {AppDispatcher} from '../dispatcher/dispatcher';
import {Question} from '../components/Question.js';
import {EventEmitter} from 'events';
const ADDED_QUESTION = 'ADDED_QUESTION';

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
    case 'ADDED_QUESTION':
      console.log('ADDED_QUESTION');
    break;
  }
});
store.addQuestion("What\'s your name?");

export default store;

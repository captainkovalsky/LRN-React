import {AppDispatcher} from '../dispatcher/dispatcher';
import {ADDED_QUESTION, DELETED_QUESTION} from '../constants/constants.js';

class QuestionActions{
  create(text) {
   AppDispatcher.handleViewAction({
     actionType: ADDED_QUESTION,
     text: text
   });
 }
}

export default new QuestionActions;

import {AppDispatcher} from '../dispatcher/dispatcher';
import {FILTER_PHONE} from '../constants/constants.js';

class PhoneAction{
  create(text) {
   AppDispatcher.handleViewAction({
     actionType: FILTER_PHONE,
     text: text
   });
 }
}

export default new PhoneAction;

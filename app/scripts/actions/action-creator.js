import AppDispatcher from '../dispatcher/dispatcher.js';
import ApiRequest from '../api/api-request.js';

import {LOAD_PHONES} from '../constants/action-constants.js';

class ActionCreator{
    getPhones(){
        ApiRequest.get('/phones')
        .then(function(phones){
            console.log('phones: ', phones);
            console.log('dispatch event here');
             Dispatcher.handleViewAction({
                    actionType: LOAD_PHONES,
                    phones: phones
                });
        });
    }
}

exports default new ActionCreator;
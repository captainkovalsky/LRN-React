import AppDispatcher from '../dispatcher/dispatcher';
import {FILTER_PHONE, CLEAR_FILTERS} from '../constants/constants.js';

class PhoneAction{

filterPhones(filters) {
	AppDispatcher.handleViewAction({
		actionType: FILTER_PHONE,
		filters: filters
	});
}

clearFilters(){
	AppDispatcher.handleViewAction({
		actionType: CLEAR_FILTERS
	});
}
}

export default new PhoneAction;

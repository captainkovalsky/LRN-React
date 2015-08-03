import AppDispatcher from '../dispatcher/dispatcher';
import {FILTER_PHONE, CLEAR_FILTERS, ORDER_PHONES, CHANGE_PAGE} from '../constants/constants.js';

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

changeOrderFor(name){
	AppDispatcher.handleViewAction({
		actionType: ORDER_PHONES,
		field: name
	});
}

changePage(selectedPage, perPage){
	AppDispatcher.handleViewAction({
		actionType: CHANGE_PAGE,
		page: selectedPage,
		perPage: perPage
	});
}
}

export default new PhoneAction;

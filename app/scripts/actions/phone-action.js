import {AppDispatcher} from '../dispatcher/dispatcher';
import {FILTER_PHONE} from '../constants/constants.js';

class PhoneAction{

filterPhones(filters) {
	AppDispatcher.handleViewAction({
		actionType: FILTER_PHONE,
		filters: filters
	});
}
}

export default new PhoneAction;

import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}

var _AppDispatcher = new AppDispatcher();
export default _AppDispatcher;
import _ from 'lodash';
class LogicFilter { //todo should use simple object, don't classes
  constructor(filter){
    this._filter = filter;
  }

  isActive(){
    return this._filter.value === true;
  }

  filter(phone){
    return _.get(phone, this._filter.target) === this._filter.value;
  }
  
}

export default LogicFilter;
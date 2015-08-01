import _ from 'lodash';
class TextFilter {
  constructor(filter){
    this._filter = filter;
  }

  isActive(){
    return this._filter.value.length > 0;
  }

  filter(phone){
    return _.get(phone, this._filter.target).toUpperCase().indexOf(this._filter.value.toUpperCase()) > -1;
  }

}

export default TextFilter;
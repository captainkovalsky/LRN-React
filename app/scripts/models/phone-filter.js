import _ from 'lodash';
class PhoneFilter {

    construct(){
        this._filters = [];
    }

    setFilters(filters){
        for(var name in filters){
            console.log('construct new filter by type ', filters[name].type);  //TODO: filter definition structure should be changed !!!       
        }
        // and set filter object after all this._filters = filters;
    }

  isActive(filter){
   switch(filter.type){
      case 'bool':  return filter.value === true;
      case 'text': return filter.value.length > 0;
      default: return false;
    }

  }

    _buildFilterFunction(filterMeta){
    switch(filterMeta.type){
      case 'bool': return function(phone){
        return _.get(phone, filterMeta.target) === filterMeta.value;
      }
      case 'text': return function(phone){
        return _.get(phone, filterMeta.target).toUpperCase().indexOf(filterMeta.value.toUpperCase()) > -1;
      }
      default: return function(phone){
        return true;
      }
    }

  }

  applyFilter(phones, filters){

    if(_.isEmpty(filters)){
      return phones;
    }

    let funcs = [];


    for(var name in filters){
      if(this.isActive(filters[name])){
        funcs.push(this._buildFilterFunction(filters[name]));
      }
    }

    if(_.isEmpty(funcs)){
      this._phones = phones;
      return;
    }

    var compose = filtersFunc => phone => _.every(filtersFunc, f => f.call(null, phone));

    var commonFilterFunc = compose(funcs);

    this._phones = _.filter(phones, commonFilterFunc);
  }
}

export default PhoneFilter;
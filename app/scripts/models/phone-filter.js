import _ from 'lodash';
class PhoneFilter {

    constructor() {
        this._filters = [];
        this.compose = filtersFunc => phone => _.every(filtersFunc, f => f.call(null, phone));
    }

    clearFilters(){
        this._filters = [];
    }

    setFilters(filters) {
        this.clearFilters();
        for (var name in filters) {
            let filterObj = this._buildFilter(filters[name]);
            
            if(filterObj.isActive()){
                this._filters.push(filterObj);
            }
        }
    }

    /// USED BUILDING FILTERS
    _getIsActiveFn(type) {
        switch (type) {
            case 'bool':
                return function() {
                    return this.value === true;
                }
            case 'text':
                return function() {
                    return this.value.length > 0
                };
            default:
                return () => false;
        }
    }

    _getFilterFn(type) {
        switch (type) {
            case 'bool':
                return function(phone) {
                    return _.get(phone, this.target) === this.value
                };
            case 'text':
                return function(phone) {
                    return _.get(phone, this.target).toUpperCase().indexOf(this.value.toUpperCase()) !== -1;
                   
                }
            default: return () => true;
        }
    }

        _buildFilter(filterMeta) {
            var baseFilter = {
                value: filterMeta.value,
                target: filterMeta.target
            };

            let filterType = filterMeta.type;

            var filterFn = this._getFilterFn(filterType).bind(baseFilter);
            var isActiveFn = this._getIsActiveFn(filterType).bind(baseFilter);
            var filterObj = _.merge({}, baseFilter, {
                filter: filterFn,
                isActive: isActiveFn
            });
            return filterObj;
        }
        /// END BUILDING FILTERS

        applyFilters(phones) {
            let isEmptyFilters = this._filters.length === 0;

            if(isEmptyFilters){
                return phones;
            }

            let funcs = [];
            for (let name in this._filters) {
                let filter = this._filters[name];
                funcs.push(this._filters[name].filter);
            }

            return _.filter(phones, this.compose(funcs));
        }
    }

    export default PhoneFilter;
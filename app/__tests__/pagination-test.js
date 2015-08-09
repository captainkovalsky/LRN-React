jest.dontMock('../scripts/models/pagination.js');
var Pagination = require('../scripts/models/pagination.js');

describe('Pagination', function() {
    let pagination;

    beforeEach(function(){
        pagination = new Pagination;
    });

    it('should be run', function(){
        expect(1 + 1).toBe(2);
    });

    it('should return 1 when testMethod is invoked ', function(){
        expect(pagination.test()).toBe(1);
    });
});
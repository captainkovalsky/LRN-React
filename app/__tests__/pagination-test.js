jest.dontMock('../scripts/models/pagination.js');
var Pagination = require('../scripts/models/pagination.js');

describe('Pagination', function() {
    let pagination;
    let onPage = 3;

    describe('onPage property', function() {

        beforeEach(function() {
            pagination = new Pagination(onPage);
        });

        it('should set onPage property', function() {
            expect(pagination.getOnPage()).toBe(onPage);
        });

        it('should set default value of onPage property', function() {
            expect(new Pagination().getOnPage()).toBe(10);
        });

        it('should set onPage property', () => {
            pagination.setOnPage(434);
            expect(pagination.getOnPage()).toBe(434);
        });
    });

    describe('setItems method', function() {
        beforeEach(function() {
            pagination = new Pagination(onPage);
        });

        it('should throw error when not array is passed to method', function() {
            expect(() => pagination.setItems(true)).toThrow(new Error('Must only arrays to be passed.'));
        });

        it('should set new items', function() {
            let testItems = [1, 2, 3, 4];
            pagination.setItems(testItems);
            expect(pagination.items.length).toBe(testItems.length);
        });

    });

    describe('activePage', function(){
         beforeEach(function() {
            pagination = new Pagination;
        });

        it('should set default value of activePage property to one', function() {
            expect(pagination.getActivePage()).toBe(1);
        });

        it('should has changePage method', () => {
            expect(pagination.changePage).toBeDefined();
            expect(typeof pagination.changePage).toBe('function');
        });

        it('should change active page', () => {
            pagination.changePage(2);
            expect(pagination.getActivePage()).toBe(2);
        });
    });

    describe('pages count', () => {
        let onPage = 2;

        beforeEach(() => {
            pagination = new Pagination(onPage);
        });

        it('should return pages count', () => {
            pagination.setItems([1,2,3]);
            let pageItems = pagination.getPagesCount();
            expect(pageItems).toBe(2);
        });

        it('should change page items when onPage is changed', () => {
            pagination.setItems([1,2,3]);
            pagination.setOnPage(1);
            let pageItems = pagination.getPagesCount();
            expect(pageItems).toBe(3);
        });

    });

});
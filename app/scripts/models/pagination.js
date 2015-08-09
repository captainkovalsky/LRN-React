import {DISPLAY_ON_PAGE} from '../constants/constants.js';

export default class Pagination{
    constructor(onPage = 10){
        this.onPage = onPage;
        this.page = 1;
    }

    setOnPage(onPage){
        this.onPage = onPage;
    }

    getOnPage(){
        return this.onPage;
    }

    setItems(items = []){
        if(!(items instanceof Array)){
            throw new Error('Must only arrays to be passed.');
        }
        this.items = items.slice();
    }

    getActivePage(){
        return this.page;
    }

    changePage(page){
        this.page = page;
    }

    getPagesCount(){
        return Math.ceil(this.items.length / this.onPage);
    }

    getPagedItems(){
       let startFrom = (this.page - 1) * this.onPage;
       return this.items.slice(startFrom, startFrom + this.onPage);
    }
}
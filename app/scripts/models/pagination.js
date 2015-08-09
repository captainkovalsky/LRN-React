export default class Pagination{
    constructor(onPage = 10){
        this.onPage = onPage;
        this.page = 1;
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
}
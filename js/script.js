class Inventory{
    constructor(){
        //initializing an empty array called items
        this.items=[];
    }

     //creating an add method
     addItems(ProductName, Quantity){
        let item = { ProductName, Quantity };
        this.items.push(item);
        this.renderInventory();
    }

    //creating a delete method to remove one item from the items array
    deleteItems(i){
        this.items.splice(i, 1);
        this.renderInventory();
    }
}



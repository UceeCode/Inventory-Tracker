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
}
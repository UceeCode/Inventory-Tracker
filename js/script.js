class Inventory{
    constructor(){
        //initializing an empty array called items
        this.items=[];
    }

     //creating an add method
     addItems(ProductName, Quantity, Price){
        let item = { ProductName, Quantity, Price };
        this.items.push(item);
        this.renderInventory();
    }

    //creating a delete method to remove one item from the items array
    deleteItems(i){
        this.items.splice(i, 1);
        this.renderInventory();
    }

    //creating a method to display the items in the table body
    renderInventory(){
        const TableBody = document.querySelector('#Table tbody');
        TableBody.innerHTML = '';

        this.items.forEach((item, i) =>{
            const row = TableBody.insertRow();
            row.insertCell(0).textContent = item.ProductName;
            row.insertCell(1).textContent = item.Quantity;
            row.insertCell(2).textContent = item.Price


            const DeleteBtn = document.createElement('button');
            DeleteBtn.textContent = 'Delete';
            DeleteBtn.onclick = () => this.deleteItems(i);

            row.insertCell(3).appendChild(DeleteBtn);;
        });
    }
}

const inventory = new Inventory();   

const addItems = () => {
    const ProductName = document.getElementById('productName').value;
    const ProductQuantity = document.getElementById('productQuantity').value;
    const ProductPrice = document.getElementById('productPrice').value

    if (ProductName && ProductQuantity && ProductPrice){
        inventory.addItems(ProductName, ProductQuantity, ProductPrice);

        //to clear inputs after adding an item
        document.getElementById('productName').value = '';
        document.getElementById('productQuantity').value = '';
        document.getElementById('productPrice').value = '';
    }
}
 



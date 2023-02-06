let shoppingListItems = ["milk", "eggs", "bread"];
//to display each item on the page
let listElement = document.getElementById("shopping-list-items");

function clearItems() {
    //clears all items in list
    listElement.innerHTML = "";
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    clearItems()
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
  });
}

function addItem() {
    //add items to the list
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    updateItems();
}

updateItems();


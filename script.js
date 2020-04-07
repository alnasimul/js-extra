var items = document.getElementsByClassName("list");

for (let i = 0; i <items.length; i++) {
    let item =items[i];
    item.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    });
}

var addBtn = document.getElementById("addNew");

addBtn.addEventListener('click',function(event){
    let itemParent = document.getElementById("myList");
    let newEl = document.createElement('li');

    newEl.innerText = "Add New Item";

    itemParent.appendChild(newEl);
});

let parent = document.getElementById("myList");

parent.addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
});
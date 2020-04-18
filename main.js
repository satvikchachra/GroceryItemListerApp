let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

// Form submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter Event
filter.addEventListener('keyup',filterItem);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.querySelector('#ipitem');
    
    // Create new li element
    let li = document.createElement('li');

    // Add class name
    li.className = 'list-group-item';

    // Add text node
    li.appendChild(document.createTextNode(newItem.value));

    // Create delete button
    let delBtn = document.createElement('button');

    // Add class name
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Create text node
    delBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(delBtn);

    // Append li to itemList
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter item
function filterItem(e){
    // Convert text to lower case
    let text = e.target.value.toLowerCase();
    // Get list items
    let items = itemList.getElementsByTagName('li');
    // Convert HTML Collection to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

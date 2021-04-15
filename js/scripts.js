const newItem = () => {
    // Add a new item to the list:
    
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    $('#list').append(li);
    
    // Cross an item out:
    let crossOut = () => li.toggleClass("strike");
    li.on("dblclick", crossOut = () => li.toggleClass("strike"));
    
    // Add a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // Delete an item
    
    let deleteListItem = () => li.addClass("delete");
    crossOutButton.on("click", deleteListItem);

    // Make list sortable

    $('#list').sortable();
}

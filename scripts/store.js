/* eslint-disable strict */

const store = (function () {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false },
  ];
  let hideCheckedItems = false;
  let searchTerm = ''
  
  function findById(id) {
    return store.items.find(id => store.items.id === id);
  }

  function addItem(name){
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch (err) {
      console.log('Cannot add item: ' + err.message);
    }
  }

  function findAndToggleChecked(id){
    let checkedId = this.findById(id)
    return checkedId.checked = !checkedId.checked;
    }
  

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      let updateNewName = findById(id);
      this.items.push(create(newName));
      updateNewName.items.name = newName;
    } catch (err) {
      console.log(`Cannot update name: {error.message}`);
    }
  }
  

  function findAndDelete(id) {
    console.log(`findAndDelete running:  attempting to delete item with id: ${id}`);
    let targetIndex;
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i].id === id){
        targetIndex = i;
      }
    }
    this.items.splice(targetIndex, 1);
  }


  return {
    items : items,
    hideCheckedItems: hideCheckedItems,
    searchTerm : searchTerm,
    findById : findById,
    addItem : addItem,
    findAndToggleChecked : findAndToggleChecked,
    findAndUpdateName : findAndUpdateName,
    findAndDelete : findAndDelete
  }
})();
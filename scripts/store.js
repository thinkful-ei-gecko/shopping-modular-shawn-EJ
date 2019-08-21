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
  
  function findById(item){
    return $(item).closest('.js-item-element').data('item-id');
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
    console.log(id);
    const foundItem = store.items.find(item => item.id === id);
    foundItem.checked = !foundItem.checked;
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
    let targetIndex = store.items.findIndex(item => item.id === id);
    this.items.splice(targetIndex, 1);
  }

  function toggleCheckedFilter() {
    store.hideCheckedItems = !store.hideCheckedItems;
  }

  function setSearchTerm (val) {
    this.searchTerm = val;
  }


  return {
    items : items,
    hideCheckedItems: hideCheckedItems,
    searchTerm : searchTerm,
    findById : findById,
    addItem : addItem,
    findAndToggleChecked : findAndToggleChecked,
    findAndUpdateName : findAndUpdateName,
    findAndDelete : findAndDelete,
    toggleCheckedFilter : toggleCheckedFilter,
    setSearchTerm : setSearchTerm
  }
})();
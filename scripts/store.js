/* eslint-disable strict */

const store = (function () {
  // const foo = 'bar';
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
      this.items.push(create(name));
    } catch (err) {
      console.log('Cannot add item: ' + err.message);
    }
  }

  return {
    items : items,
    hideCheckedItems: hideCheckedItems,
    searchTerm : searchTerm
  }


})();
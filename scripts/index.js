/* eslint-disable no-undef */
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

'use strict';


// const store = {
//   items: [
//     { id: cuid(), name: 'apples', checked: false },
//     { id: cuid(), name: 'oranges', checked: false },
//     { id: cuid(), name: 'milk', checked: true },
//     { id: cuid(), name: 'bread', checked: false }
//   ],
//   hideCheckedItems: false,
//   searchTerm: ''
// };

const itemNames = [ '', 'apples', 'pears' ];
itemNames.forEach(name => {
try {
  Item.validateName(name);
  store.items.push(Item.create(name));
  console.log(Item);
} catch(error) {
  console.log('Cannot add item: ' + error.message);
}
});
shoppingList.render();

// function main() {
//   shoppingList.bindEventListeners();
//   shoppingList.render();
// }

// $(main);
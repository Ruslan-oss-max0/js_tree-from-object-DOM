'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const goodsList = document.createElement('ul');

  if (Object.keys(data).length === 0) {
    return;
  }

  for (const good in data) {
    const goodItem = document.createElement('li');

    goodItem.textContent = good;

    goodsList.appendChild(goodItem);

    createTree(goodItem, data[good]);
  }

  element.appendChild(goodsList);
}

createTree(tree, food);

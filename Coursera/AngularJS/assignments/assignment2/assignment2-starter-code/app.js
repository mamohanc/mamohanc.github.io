(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);
ShoppingListAddController.$inject = ['ShoppingListService'];

ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;
  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";
  itemAdder.itemsBought = [];
  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  };

  itemAdder.processBuy = function (index) {
    ShoppingListService.processBuy(index);
  };

    itemAdder.processRemove = function (index) {
      ShoppingListService.processRemove(index);
    };
  itemAdder.removeItem = function (index) {
    ShoppingListService.removeItem(index);
  };
    itemAdder.items = //function () {
      ShoppingListService.getItems();
    itemAdder.itemsBought = //function () {
      ShoppingListService.getItemsBought();


    //};
}
function ShoppingListBoughtController(ShoppingListService) {
  var itemBuyer = this;
  itemBuyer.itemName = "";
  itemBuyer.itemQuantity = "";
  itemBuyer.itemsBought = [];

  itemBuyer.processBuy = function (index) {
    ShoppingListService.processBuy(index);
  };

    itemBuyer.processRemove = function (index) {
      ShoppingListService.processRemove(index);
    };
    itemBuyer.itemsBought = //function () {
      ShoppingListService.getItemsBought();


    //};
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [ {"name":"Cookie", "quantity":"100"},
                {"name":"Pepsi", "quantity":"1"},
                {"name":"Orange", "quantity":"3"},
                {"name":"Apple", "quantity":"2"},
                {"name":"HoneyDew", "quantity":"1"}
              ];
var itemsBought = [];
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };
  service.processBuy = function (index) {
    var item = {
      name: items[index].name,
      quantity:items[index].quantity
    };
    itemsBought.push(item);
    items.splice(index,1);
  };
  service.processRemove = function (index) {
    console.log(items.length);
    var item = {
      name: itemsBought[index].name,
      quantity:itemsBought[index].quantity
    };
    items.push(item);
    itemsBought.splice(index,1);
  };



  service.getItems = function () {
    return items;
  };

    service.getItemsBought = function () {
      return itemsBought;
    };

  service.removeItem = function (index) {
if(items.length <=5)
{
    alert("Cannot Go <= 5, add items and then delete");
}
else {
  console.log(items.length);
  items.splice(index, 1);
  console.log(index);
  console.log(items.length);
}
};
}

})();

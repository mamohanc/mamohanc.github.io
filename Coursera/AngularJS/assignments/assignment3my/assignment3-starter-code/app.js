(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var items = this;
    items.title = "Found Items";
    items.findMenuItems = function() {

      var promise = MenuSearchService.getMatchedMenuItems(items.searchText);
promise.then(function(response){
  items.fItems  = response;
  console.log("aa");
  console.log(items.fItems);
});


  //     promise2.then(function(response) {
  //         items.fItems = response;
  //         })
  //         .catch(function(error) {
  //         console.log("Something went terribly wrong", error);
  //         });
  //
};
}

function FoundItems() {
  var ddo = {
        templateUrl : "template.html",
        scope: {
        fItems: '<',
        myTitle: '@title',
        onRemove: '&'
      },
      controller : NarrowItDownDirectiveController,
      controllerAs: 'list',
      bindToController: true
};
return ddo;
}

NarrowItDownDirectiveController.$inject = ['MenuSearchService'];
function NarrowItDownDirectiveController(){
  var items = this;
}

MenuSearchService.inject= ['$http', 'ApiBasePath'];

function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];
  service.getMatchedMenuItems = function (searchTerm) {
    console.log(searchTerm);
    if (searchTerm != undefined && searchTerm === ""){
      return foundItems;
    }
    var promise  = service.getAllMenuItems();
    promise.then( function(response) {
        //service.items = response.data.menu_items;
        searchTerm = "chicken";
        console.log("all items");
        console.log(response.data.menu_items.length);
        for (var i=0; i < response.data.menu_items.length; i++) {
          if (response.data.menu_items[i].description.indexOf( searchTerm) >= 0)
            foundItems.push(response.data.menu_items[i]);
        }
        console.log("foundItems");
        console.log(foundItems.length);
        return foundItems ;

    })
        .catch(function(error) {
        console.log("Something went terribly wrong", error);
        });
return foundItems;
  };
    service.getAllMenuItems = function () {
      var response = $http({
        method: "GET",
        url: ( ApiBasePath + '/menu_items.json'),
      });
      return response;
    };
}


})();

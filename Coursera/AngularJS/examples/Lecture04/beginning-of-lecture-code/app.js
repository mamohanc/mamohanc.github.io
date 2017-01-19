(
  function() {
'use strict';
var x = 'hello';
    angular.module('myFirstApp',[])
    .controller('MyFirstController',function($scope){
$scope.name ="Mohan";
$scope.sayHello = function () {
return "Hello Coursera";

};
});
})();

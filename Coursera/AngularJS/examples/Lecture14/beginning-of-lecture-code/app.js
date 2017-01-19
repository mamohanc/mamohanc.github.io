(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
$scope.onceCounter = 0;
$scope.counter = 0;
$scope.Name = "Mohan";
  $scope.showNumberOfWatchers = function () {
console.log("Watchers Count " , $scope.$$watchersCount)
  };

$scope.countOnce = function () {
  $scope.onceCounter=1;
};
$scope.UpCount = function () {
  setTimeout(function(){
    $scope.$apply(function(){
      $scope.counter++;
      console.log("CounterIncremented");
  $scope.counter++;

    });
//    $scope.$digest();

  },2000);


  $scope.onceCounter = 2;
};

$scope.$watch( function() {
  console.log("Digest Loop Fired!");
})
//
// $scope.$watch('onceCounter', function(newvalue, oldvalue){
//   console.log("old", oldvalue);
//   console.log("new", newvalue);
// });
//
//
// $scope.$watch('counter', function(newvalue, oldvalue){
//   console.log("old c", oldvalue);
//   console.log("new c", newvalue);
// });
//

}

})();

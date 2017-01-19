(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";

  $scope.sayMessage = function() {
    return "Yaakov likes to eat healthy snacks at night!";
  };
  $scope.feedYaakov = function ()
  {
    if($scope.stateOfBeing =="fed")
{
  $scope.stateOfBeing = "hungry";
}
  else {
  $scope.stateOfBeing = "fed";
}

  };
}

})();

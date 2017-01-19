(function () {
'use strict';
angular.module('NameCalculator', [])
  .controller('NameCalculatorController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function() {
      var totalnamevalue = calcularenum($scope.name);
      $scope.totalValue = 0;
      $scope.totalValue =  totalnamevalue;

    };
    function calcularenum (string)
    {
      var totalstringval = 0;
       for (var i = 0; i < string.length; i++)       {
         totalstringval +=  string.charCodeAt(i);
       }
       return totalstringval;
    };
});

})();

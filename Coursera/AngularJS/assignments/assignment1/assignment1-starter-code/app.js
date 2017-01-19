(function () {
'use strict';

angular.module('CheckLunchItemCount', [])
.controller('CheckLunchItemCountController', LunchController ) ;
LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunch = "";
  $scope.checkLunch =function () {
    // if (!angular.isDefined($scope.lunch) ||)
    // {
    //   alert("Please enter data first 3");
    //
    // }
    if (!angular.isDefined($scope.lunch) || $scope.lunch == "" )
    {
    alert("Please enter data first");
    }
  else {
//    alert($scope.lunch);

  var string = $scope.lunch;
    var cnt = string.split(',').length ;
//console.log(string.split(','));
    //alert(cnt.toString());
if (cnt >3 )
{
  alert("Too much!");

}
else {
  alert("Enjoy!");
}
  }
  };


};
})();

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.message = "Lunch not Checked!";

  $scope.CheckLunch = function () {
    console.log("Checking Lunch started...");
    // Checking is string is empty or undefined
    if (typeof $scope.Lunch != 'undefined' && $scope.Lunch) {
      console.log(typeof $scope.Lunch)
      var LunchItems = $scope.Lunch.split(',')
      console.log(LunchItems)
      // Checing number of items
      if (LunchItems.length <= 3) {
        console.log("You ate " + LunchItems.length + " items!")
        console.log("You are Ok!")
        $scope.message = "Enjoy!"
      } else if (LunchItems.length >= 4) {
        console.log("You ate " + LunchItems.length + " items!")
        console.log("You are NOT Ok!")
        $scope.message = "Too much!"
      }
      console.log("Checking Lunch...")
    } else {
      // Items was empty
      console.log("Lunch is empty!");
      $scope.message = "Please enter data first";
    }
  };


}

})();

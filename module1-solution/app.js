(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  var isNotEmptyString = function (string) {
    if (typeof string == 'undefined') {
      // string is undefined
      return false;
    } else if (string.trim().length == 0) {
      // string has only spaces
      return false;
    } else {
      // console.log("String: " + string + " is empty!")
      return true;
    }
  }

  var hasEmptyItems = function (array) {
    var emptyItems = 0
    for (var j = 0; j < array.length; j++){
      if (!isNotEmptyString(array[j])) {
        emptyItems += 1;
      }
    }
    return emptyItems
  }

  var NumberOfLunchItems = 0;

  $scope.CheckLunch = function () {
    console.log("Checking Lunch started...");
    // Checking is string is empty or undefined
    if (isNotEmptyString($scope.Lunch)) {
      var LunchItems = $scope.Lunch.split(',')
      NumberOfLunchItems = LunchItems.length - hasEmptyItems(LunchItems)
      // Checking number of items
      if (NumberOfLunchItems <= 3) {
        $scope.message = "Enjoy!"
      } else if (NumberOfLunchItems >= 4) {
        $scope.message = "Too much!"
      }
    } else {
      // Items is empty
      $scope.message = "Please enter data first";
    }
  };


}

})();

angular.module('myApp')
.controller('mainController', function($scope) {
  $scope.name = 'Steven';

  $scope.changeName = function(name) {
    $scope.name = name;
    $scope.newName = '';
  }

})

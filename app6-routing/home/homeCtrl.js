angular.module('app6')
.controller('homeCtrl', function($scope, petsSrv) {
  $scope.title = "Home!";

  $scope.pets = petsSrv.getPets().then(function(response) {
    $scope.pets = response.data;
  })
})

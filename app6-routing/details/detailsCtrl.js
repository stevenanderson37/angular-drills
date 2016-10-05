angular.module('app6')
.controller('detailsCtrl', function($scope, petsSrv, $stateParams) {
  $scope.title = "Details!";

  petsSrv.getOnePet($stateParams.id).then(function(response) {
    $scope.pet = response.data;
  })
})

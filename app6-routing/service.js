angular.module('app6')
.service('petsSrv', function($http) {
  var baseUrl = 'http://practiceapi.devmountain.com';

  // Make a function
  // Get all pets from the API
  // Return them to the controller

  this.getPets = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/pets'
    })
  }

  this.getOnePet = function(id) {
    // Do an http request
    // Get one pet by id
    // return it to the controller

    return $http({
      method: 'GET',
      url: baseUrl + '/pets/' + id
    })
  }
})

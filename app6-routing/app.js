angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('signup', {
      templateUrl: 'signup/signup.html',
      controller: 'signupCtrl',
      url: '/signup'
    })
    .state('details', {
      templateUrl: 'details/details.html',
      controller: 'detailsCtrl',
      url: '/details/:id'
    })

});

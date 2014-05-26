'use strict';

angular
  .module('barcampPrizeAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
        .when('/tombola',{
            templateUrl : 'views/tombola.html',
            controller: 'TombolaController'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);

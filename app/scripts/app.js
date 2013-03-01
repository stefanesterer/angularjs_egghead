'use strict';

var myApp= angular.module('angularjsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

myApp.factory('Data', function (){
  return {message:"Data from the service!"};
}
);
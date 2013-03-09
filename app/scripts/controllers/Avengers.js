'use strict';

angular.module('angularjsApp')
  .controller('AvengersCtrl', function ($scope, Avengers) {
    
    $scope.avengers = Avengers;
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
  });

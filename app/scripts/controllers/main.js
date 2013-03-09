'use strict';

var myApp = angular.module('angularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
  });
  
myApp.factory('Data', function(){
    return {message:"I'm data from a service"};
}
);  

myApp.filter('reverse', function(){
  return function(text){
      return text.split("").reverse().join("");
  }
}
);

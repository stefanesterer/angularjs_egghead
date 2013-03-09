'use strict';

angular.module('angularjsApp')
  .directive('enter', function () {
    return function (scope, element){
      element.bind("mouseenter", function(){
	console.log("I'm here")
      })
    }
      
  });

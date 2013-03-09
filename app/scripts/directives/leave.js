'use strict';

angular.module('angularjsApp')
  .directive('leave', function () {
    return function (scope, element, attrs){
      element.bind("mouseleave", function(){
	element.removeClass(attrs.enter);
      })
    }
      
  });
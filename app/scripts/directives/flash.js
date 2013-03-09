'use strict';

angular.module('angularjsApp')
  .directive('flash', function () {
    return {
      restrict: 'A',
      link: function(){
	alert("I'm working faster")
      }
    };
  });

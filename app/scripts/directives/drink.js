'use strict';

angular.module('angularjsApp')
  .directive('drink', function () {
    return {
      template: '<div>{{flavor}}</div>',
      restrict: 'E',
      link: function (scope) {
	scope.flavor="cherry";
      }
    };
  });

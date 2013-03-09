'use strict';

angular.module('angularjsApp')
  .directive('superman', function () {
    return {
      template: '<div>Here I am to save the day</div>',
      restrict: 'E',
    };
  });

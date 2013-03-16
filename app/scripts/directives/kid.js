'use strict';

angular.module('angularjsApp')
  .directive('kid', function () {
    return {
      template: '<input type="text" ng-model="chore"> {{chore}} <div ng-click="done({chore:chore})">Button</div>',
      scope:{
	done:"&"
      },
      restrict: 'E'
    };
  });

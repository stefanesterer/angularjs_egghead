'use strict';

angular.module('angularjsApp')
  .controller('FirstCtrl', function ($scope, Data) {
   $scope.data = Data;
  });

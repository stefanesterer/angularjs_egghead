'use strict';

angular.module('angularjsApp')
  .controller('SecondCtrl', function ($scope, Data) {
    $scope.data = Data;
    
    $scope.reversedMessage = function(message) {
      return message.split("").reverse().join("");
    }

  });

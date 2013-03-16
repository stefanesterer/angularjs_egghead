'use strict';

angular.module('angularjsApp')
  .controller('ChoreCtrl', function ($scope) {
   
    $scope.logChore = function(chore){
      alert(chore + "is done");
    }
    
  });

'use strict';

angular.module('angularjsApp')
  .controller('AppCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
    
    $scope.callHome = function(message){
      alert(message);
    }
  });

  
  angular.module('angularjsApp').directive("phone", function(){
    return {
      scope:{
	dial:"&"
      },
      template:'<input type="text" ng-model="value"/><div class="button" ng-click="dial({message:value})">Call home!</div>'
    }
  });
  
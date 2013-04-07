'use strict';

angular.module('angularjsApp')
  .controller('AppCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
    
    $scope.ctrlFlavor = "blackBerry";
    
  });

  
  angular.module('angularjsApp').directive("drink", function(){
    return {
      scope:{
	flavor:"="
      },
      template:'<input type="text" ng-model="flavor" />'
    }
  })
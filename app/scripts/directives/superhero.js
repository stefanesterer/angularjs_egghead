'use strict';

angular.module('angularjsApp')
  .directive('superhero', function () {
    return {
      restrict: 'E',
      scope: {},
      
      controller: function($scope){
	
	$scope.abilities = [];
	
	  this.addStrength = function()
	  {
	    $scope.abilities.push("strength");
	  }
	  
	   this.addSpeed = function()
	  {
	    $scope.abilities.push("speed");
	  }
	  
	  this.addFlight = function()
	  {
	    $scope.abilities.push("flight");
	  }
	  
      },
      
      link: function(scope, element) {
        element.bind("mouseenter", function(){
	  console.log(scope.abilities);
	});
      }
    };
  });
  
  angular.module('angularjsApp')
  .directive('strength', function () {
    return {
      require: "superhero",
      link: function(scope, element, attrs, superheroCtrl){
	  superheroCtrl.addStrength();
      }
    }
  });
  
   angular.module('angularjsApp')
  .directive('speed', function () {
    return {
      require: "superhero",
      link: function(scope, element, attrs, superheroCtrl){
	  superheroCtrl.addSpeed();
      }
    }
  });
  
  angular.module('angularjsApp')
  .directive('flight', function () {
    return {
      require: "superhero",
      link: function(scope, element, attrs, superheroCtrl){
	  superheroCtrl.addFlight();
      }
    }
  });

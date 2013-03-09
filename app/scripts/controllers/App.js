'use strict';

angular.module('angularjsApp')
  .controller('AppCtrl', function ($scope) {
   
    $scope.loadMoreTweets = function(){
      alert("Loading tweets!");
    }
    
    $scope.deleteTweets = function(){
      alert("Deleting tweets!");
    }
    
  });

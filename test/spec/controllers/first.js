'use strict';

describe('Controller: FirstCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsApp'));

  var FirstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    FirstCtrl = $controller('FirstCtrl', {
      $scope: scope
    });
  }));

 
});

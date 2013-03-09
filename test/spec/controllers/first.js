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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: ChoreCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsApp'));

  var ChoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ChoreCtrl = $controller('ChoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

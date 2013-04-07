'use strict';

describe('Directive: drink', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<drink></drink>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the drink directive');
  }));
});

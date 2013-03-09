'use strict';

describe('Directive: superman', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<superman></superman>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the superman directive');
  }));
});

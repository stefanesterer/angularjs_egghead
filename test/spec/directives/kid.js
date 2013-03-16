'use strict';

describe('Directive: kid', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<kid></kid>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the kid directive');
  }));
});

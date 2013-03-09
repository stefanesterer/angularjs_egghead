'use strict';

describe('Directive: enter', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<enter></enter>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the enter directive');
  }));
});

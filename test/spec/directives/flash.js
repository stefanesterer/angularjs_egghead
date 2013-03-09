'use strict';

describe('Directive: flash', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<flash></flash>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the flash directive');
  }));
});

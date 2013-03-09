'use strict';

describe('Directive: leave', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<leave></leave>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the leave directive');
  }));
});

'use strict';

describe('Directive: superhero', function () {
  beforeEach(module('angularjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<superhero></superhero>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the superhero directive');
  }));
});

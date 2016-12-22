(function(){
  'use strict';

  var app = angular.module('app');

  function todoAutofocus(){
    return{
      scope: false,
      restrict: 'AE',
      link: function ($scope, $element, $attrs) {
        $scope.$watch($attrs.todoAutofocus, function (newValue, oldValue) {
          if (!newValue) {
            return;
          }
          setTimeout(function () {
            $element[0].focus();
          }, 0);
        });
      }
    }
  }

  app.directive('todoAutofocus', todoAutofocus)
})();

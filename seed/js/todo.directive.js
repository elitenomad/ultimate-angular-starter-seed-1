function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    templateUrl: 'js/tmpls/todos.html'
  };
}

angular
  .module('app')
  .directive('todoApp', todoApp);

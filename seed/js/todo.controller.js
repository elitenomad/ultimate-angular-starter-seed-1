(function(){
  'use strict';

  var app = angular.module('app');


  function TodoController(TodoService){
    var self = this;

    self.newTodo = '';
    self.list = [];

    function getTodos() {
      TodoService
        .fetch()
        .then(function (response) {
          self.list = response;
        });
    }

    getTodos();



    self.addTodo = function(){
      self.list.unshift({
        title: self.newTodo,
        completed: false
      });

      /*
        Clear the input text after you add it to the list
       */

      self.clearNewTodoAfterSubmit();
    };

    self.removeTodo = function(index){
      self.list.splice(index, 1);
    };

    self.updateTodo = function(item, index){
      self.list[index].title = item.title;
    };

    self.clearNewTodoAfterSubmit = function(){
      self.newTodo = '';
    };

    self.getRemaining = function(){
      return self.list.filter(function(item){
        return !item.completed;
      });
    };

  };

  /*
    Inject dependencies
    Multiple ways of injecting dependencies
      another) Inject $scope in the initialization part
      e.g app.controller('MainController',['$scope', MainController])
   */
  TodoController.$inject = ['$scope', 'TodoService'];

  app.controller('TodoController', TodoController)
})();

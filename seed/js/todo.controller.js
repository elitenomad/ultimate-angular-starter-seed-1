(function(){
  'use strict';

  var app = angular.module('app');


  function TodoController(TodoService){
    var ctrl = this;

    ctrl.newTodo = '';
    ctrl.list = [];

    function getTodos() {
      TodoService
        .fetch()
        .then(function (response) {
          ctrl.list = response;
        });
    }

    getTodos();

    ctrl.addTodo = function () {
      if (!ctrl.newTodo) {
        return;
      }
      TodoService
        .create({
          title: ctrl.newTodo,
          completed: false
        })
        .then(function (response) {
          ctrl.list.unshift(response);
          ctrl.newTodo = '';
        });
    };
    ctrl.removeTodo = function (item, index) {
      TodoService
        .remove(item)
        .then(function (response) {
          ctrl.list.splice(index, 1);
        });
    };
    ctrl.updateTodo = function (item, index) {
      if (!item.title) {
        ctrl.removeTodo(item, index);
        return;
      }
      TodoService
        .update(item);
    };
    ctrl.getRemaining = function () {
      return ctrl.list.filter(function (item) {
        return !item.completed;
      });
    };
    ctrl.toggleState = function (item) {
      TodoService
        .update(item)
        .then(function () {

        }, function () {
          item.completed = !item.completed;
        });
    };

  };

  app.controller('TodoController', TodoController)
})();

(function(){
  'use strict';

  var app = angular.module('app');

  function TodoService($http){

    var API_ENDPOINT = "//jsonplaceholder.typicode.com/todos/";

    function create(todo) {
      return $http.post(API_ENDPOINT, todo).then(function (response) {
        return response.data;
      });
    }

    function fetch() {
      return $http.get(API_ENDPOINT).then(function (response) {
        return response.data.splice(0, 10);
      });
    }

    function update(todo) {
      return $http.put(API_ENDPOINT + todo.id).then(function (response) {
        return response.data;
      });
    }

    function remove(todo) {
      return $http.delete(API_ENDPOINT + todo.id).then(function (response) {
        return response.data;
      });
    }


    return {
      create: create,
      fetch: fetch,
      update: update,
      remove: remove
    };
  }

  app.factory('TodoService', TodoService);
})();

app.controller("MainCtrl", ['$scope',function($scope){

  $scope.todos = ['Görev 1', 'Görev 2', 'Görev 3'];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
$scope.addTodo = function () {
  $scope.todos.push($scope.todo);
  $scope.todo = '';
};
  
 $scope.removeTodo = function (index) {
  $scope.todos.splice(index, 1);
};

$scope.removeAllTodo = function (index) {
  $scope.todos=[];
};



}]);


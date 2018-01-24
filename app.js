var app = angular.module("ToDoList", []);
app.controller("ToDoController", function($scope){
	$scope.doings = [{text: 'Test'}];
	$scope.insert = function(){
		$scope.doings.push({text: $scope.textToDo});
		$scope.textToDo = '';
	}
	$scope.clear = function(i){
		$scope.doings.splice(i, 1);
	}

	$scope.clearAll = function(){
		len = $scope.doings.length;
		$scope.doings.splice(0, len);
	}

	$scope.total = function(){
		return $scope.doings.length;
	}
})
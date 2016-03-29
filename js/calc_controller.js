var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){

	$scope.multiplyValues = function(){
		$scope.newValue = $scope.value_one * $scope.value_two;
	}
});
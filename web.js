var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('matrixEditorController', function($scope) {
	$scope.width=4;
	$scope.height=4;
	$scope.a = [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1]
	];
	$scope.aaaa = JSON.stringify($scope.a);

});
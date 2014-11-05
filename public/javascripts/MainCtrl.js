angular.module('FYS.MainCtrl' , [])
	.controller("MainCtrl", function ($scope, $http) {
		$scope.test = function() {
			console.log("Button Press");
		}
	})
angular.module('FYS.MainCtrl' , [])
	.controller("MainCtrl", function ($scope, $http) {
		$scope.show = false;

		$scope.sseLab = "The SSE Lab is an organization on Campus to mentor students in computer science and software engineering."

		$scope.showMsg = function(id) {
			switch (id) {
				case 1:
					$scope.show = true;
					$scope.details = {
						desc: $scope.sseLab,
						hours: "10AM - 6PM",
						type: "Academic"
					}
					break
				default: 
					$scope.details = {
						desc: "Something else"
					}
				}
		}
	})
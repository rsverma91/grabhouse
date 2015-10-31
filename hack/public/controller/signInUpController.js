var signInUp = angular.module('signinupController',[]);

signInUp.controller('signinCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.usrType = 'buyer';
	$scope.signInForm = function(userData){
	userDetail.isValidUser(userData).success(function(response){
		console.log(response);
	});
	}
}]);

signInUp.controller('signupCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.usrType = 'buyer';
	$scope.signUpForm = function(userData){
	userDetail.signUpDetail(userData).success(function(response){
		$scope.result = 'ss';
	});
	}
}]);

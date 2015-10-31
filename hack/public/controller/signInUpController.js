var signInUp = angular.module('signinupController',[]);

signInUp.controller('signinCtrl', ['$scope', function($scope){
	$scope.signInForm = function(userData){
	userData.uName,userData.uPwd;
	userDetail.isValidUser(userData).success(function(response){
		
	});
	}
}]);

signInUp.controller('signupCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.signUpForm = function(userData){
	userData.uName,userData.uPhn,userData.uEmail,userData.uPwd;
	userDetail.signUpDetail(userData).success(function(response){

	});
	}
}]);

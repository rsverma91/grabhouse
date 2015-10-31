var signInUp = angular.module('signinupController',[]);

signInUp.controller('signinCtrl', ['$scope', function($scope){

}]);

signInUp.controller('signupCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.submitForm = function(userData){
	userData.uName,userData.uPhn,userData.uEmail,userData.uPwd;
	}
}]);

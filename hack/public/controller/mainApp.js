var myapp = angular.module('mainApp',['ngRoute','mainController','signinupController'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/signin',{
		title:'SignIn',
		templateUrl:'signin',
		controller:'signinCtrl'
	}).when('/signup',{
		title:'SignUp',
		templateUrl:'signup',
		controller:'signupCtrl'
	}).when('/',{
		title: 'Home',
        templateUrl: 'home',
        controller: 'indexCtrl'
	});
}]).factory('userDetail', ['', function(){
	return function name(){
		
	};
}]);
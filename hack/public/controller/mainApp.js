var myapp = angular.module('myApp',['ngRoute','mainController']);
myapp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		title: 'Home',
        templateUrl: 'home',
        controller: 'tryCtrl'
	});
}]);
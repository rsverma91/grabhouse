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
	}).when('/addProperty',{
		title:'AddProperty',
		templateUrl:'addProperty',
		controller:'addPropertyCtrl'
	}).when('/',{
		title: 'Home',
        templateUrl: 'home',
        controller: 'indexCtrl'
	});
}]).factory('userDetail', ['$http', function($http){
	var hGrabHouseApi = {};
	hGrabHouseApi.isValidUser = function(userData) {
      return $http.post('/getUser',{"email": userData.uName,
        "pwd": userData.uPwd
      });
    }
    hGrabHouseApi.signUpDetail = function(userData) {
      return $http.post('/addUser',{
        "name":userData.uName,
        "mob":userData.uPhn,
        "email": userData.uEmail,
        "pwd": userData.uPwd
      });
    }
    hGrabHouseApi.addProperty = function(propertyData) {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }
	return hGrabHouseApi;
}]);
var myapp = angular.module('mainApp',['ngRoute','mainController','signinupController','propertyController'])
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
	}).when('/sellerDefault',{
    title:'SellerDefault',
    templateUrl:'sellerDefault',
    controller:'sellerDefaultCtrl'
  }).when('/',{
		title: 'Home',
        templateUrl: 'home',
        controller: 'indexCtrl'
	});
}]).factory('userDetail', ['$http', function($http){
	var hGrabHouseApi = {};
	hGrabHouseApi.isValidUser = function(userData) {
      return $http.post('/userInfo/get',{
        "email": userData.uName,
        "pwd": userData.uPwd,
        "type": userData.Type
      });
    }
    hGrabHouseApi.signUpDetail = function(userData) {
      return $http.post('/userInfo/set',{
        "type": userData.Type,
        "name":userData.uName,
        "mob":userData.uPhn,
        "email": userData.uEmail,
        "pwd": userData.uPwd
      });
    }
    hGrabHouseApi.addProperty = function(propertyData) {
      return $http.post('/sellerPropertyInfo',{
      
      });
    }
	return hGrabHouseApi;
}]);

myapp.controller('signinupChngCtrl', ['$scope','$location', function($scope,$location){
  $scope.setLocation = function(loc){
    $location.path(loc);
  }
}]);
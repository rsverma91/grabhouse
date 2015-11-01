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
  }).when('/searchResult',{
    title:'SearchResult',
    templateUrl:'searchResult',
    controller:'searchResultCtrl'
  }).when('/',{
		title: 'Home',
        templateUrl: 'home',
        controller: 'indexCtrl'
	});
}]).factory('userDetail', ['$http', function($http){
	var hGrabHouseApi = {};
  var locn = '',rType = '';
    hGrabHouseApi.locationRetive = function(loc){
      if(loc == 'undefined')
          return locn;
      else
          locn = loc;
        console.log(loc);
    };
    hGrabHouseApi.retiveType = function(rtype){
      if(rtype == 'undefined')
          return rType;
      else
          rType = rtype;
        console.log(rtype);
    };
	hGrabHouseApi.isValidUser = function(userData) {
      return $http.post('/userInfo/get',{
        "email": userData.uName,
        "pwd": userData.uPwd,
        "type": userData.Type
      });
    };
    hGrabHouseApi.signUpDetail = function(userData) {
      return $http.post('/userInfo/set',{
        "type": userData.Type,
        "name":userData.uName,
        "mob":userData.uPhn,
        "email": userData.uEmail,
        "pwd": userData.uPwd
      });
    };
    hGrabHouseApi.getByLocation = function(userSearch) {
      return $http.post('/sellerPropertyInfo/getLocation',{
          "location":userSearch
      });
    };
    hGrabHouseApi.addProperty = function(propertyData) {
      return $http.post('/sellerPropertyInfo/set',{
        "email": 'sa@d',
        "ohTYpe": propertyData.oHProperyType,
        "purchaseType": propertyData.addProperyType,
        "propertyType": propertyData.propertyType,
        "houseType": propertyData.houseType,
        "areaInFt": propertyData.area,
        "location": propertyData.location,
        "bidStartFare": propertyData.cost,
        "bidDate":propertyData.date,
        "bidStartTime": propertyData.sTime,
        "bidEndTime": propertyData.eTime,
        "facilitys": {
          "balcony": propertyData.bAvailable,
          "parking": propertyData.pFacility
        }
      });
    };
    hGrabHouseApi.getAllByLocation = function(loca,prcType) {
      console.log(loca+" " +prcType);
      return $http.post('/sellerPropertyInfo/getByLocPurType',{
          "location":loca,
          "purchaseType":prcType
      });
    };
	return hGrabHouseApi;
}]);

myapp.controller('signinupChngCtrl', ['$scope','$location', function($scope,$location){
  $scope.setLocation = function(loc){
    $location.path(loc);
  }
}]);
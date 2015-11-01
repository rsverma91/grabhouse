var property = angular.module('propertyController',[]);
property.controller('sellerDefaultCtrl',['$scope','$location',function($scope,$location){
	$scope.setPropLoc = function(loc){
		$location.path('/addProperty');
	}
}]);
property.controller('addPropertyCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.oHProperyType = 'open';
	$scope.addProperyType = 'sell';
	$scope.propertyType = 'flat';
	$scope.houseType = '1RK';
	$scope.opHouse = false;
	$scope.showHidePic = function(){
		$scope.opHouse = !$scope.opHouse;
	};
	propertyData.email = cookie('login');
	$scope.addProperty = function(propertyData){
	propertyData.oHProperyType = $scope.oHProperyType;
	propertyData.addProperyType = $scope.addProperyType;
	propertyData.propertyType = $scope.propertyType;
	propertyData.houseType = $scope.houseType;
	userDetail.addProperty(propertyData).success(function(response){
		$scope.result = 'Open House Property Added';
	}).error(function(response){
		$scope.result = 'Fill All Details Properly';
	});
	}
}]);
property.controller('bidingCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.bidStart2 = false;
	$scope.bidStart = true;
	$scope.lstBiding = false;
	$scope.startBid = function(){
		$scope.bidStart = false;
		/*userDetail.getByUniqueId().success(function(response){
		if(response != '')
		$scope.bidStart2 = true;
	});*/
$scope.bidStart2 = true;
	};
	$scope.userName = cookie('login');
	/*$scope.submitBid = function(){
		userDetail.bitOpenHouse($scope.userName,$scope.bidAmnt).success(function(response){
		
		});
	};*/
	$scope.showBeding = function(){
		$scope.lstBiding = true;
		/*userDetail.addProperty().success(function(response){
		if(response != '')
		$scope.bidStart2 = true;
	});*/
	};
}]);
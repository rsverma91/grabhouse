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
	$scope.addProperty = function(propertyData){
	propertyData.oHProperyType = $scope.oHProperyType;
	propertyData.addProperyType = $scope.addProperyType;
	propertyData.propertyType = $scope.propertyType;
	propertyData.houseType = $scope.houseType;
	userDetail.addProperty(propertyData).success(function(response){
	});
	}
}])
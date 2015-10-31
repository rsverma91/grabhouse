var property = angular.module('propertyController',[]);

property.controller('addPropertyCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.oHProperyType = 'open';
	$scope.addProperyType = 'sell';
	$scope.propertyType = 'flat';
	$scope.houseType = '1RK';
	$scope.addProperty = function(propertyData){
	propertyData.oHProperyType = $scope.oHProperyType;
	propertyData.addProperyType = $scope.addProperyType;
	propertyData.propertyType = $scope.propertyType;
	propertyData.houseType = $scope.houseType;
	userDetail.addProperty(propertyData).success(function(response){
	for (var i = 0; i < $files.length; i++) {
      var $file = $files[i];
      Upload.upload({
        url: 'my/upload/url',
        file: $file,
        progress: function(e){}
      }).then(function(data, status, headers, config) {
        }); 
    }
	});
	}
}])
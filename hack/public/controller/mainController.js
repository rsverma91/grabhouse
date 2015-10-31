var myApp = angular.module('mainController',[]);

myApp.controller('indexCtrl', ['$scope','$location', function($scope,$location){
	$scope.searchType = 'buy';
	$scope.setLocation = function(loc){
		$location.path(loc);
	}
}]);
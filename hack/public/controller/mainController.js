var myApp = angular.module('mainController',[]);

myApp.controller('tryCtrl', ['$scope', function($scope){
	$scope.searchType = 'buy';
}])
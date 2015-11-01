var myApp = angular.module('mainController',[]);

myApp.controller('indexCtrl', ['$scope','userDetail','$location', function($scope,userDetail,$location){
	$scope.searchType = 'buy';
	
	$scope.changeSearchItem = function(itemValue){
			$scope.searchItem = itemValue;
	};

	$scope.getLocation = function(){
		userDetail.getByLocation($scope.searchItem).success(function(response){
			$scope.searchItems = response;
		});
	};
	$scope.searchData = function(){
		userDetail.locationRetive($scope.searchItems);
		userDetail.retiveType($scope.searchType);
		$location.path('/searchResult');
	};
    var loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/init.js';
        document.body.appendChild(script);
    }
    loadScript();
    
}]);
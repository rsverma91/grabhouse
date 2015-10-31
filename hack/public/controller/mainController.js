var myApp = angular.module('mainController',[]);

myApp.controller('indexCtrl', ['$scope', function($scope){
	$scope.searchType = 'buy';
	
	$scope.changeSearchItem = function(itemValue){
			$scope.searchItem = itemValue.points;
	};
	$scope.searchItems = [
      {
          points: 322,
          nationality: "German"
      },
      {
      	  points: 207,
          nationality: "Spanish"
      }
    ];
    var loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/init.js';
        document.body.appendChild(script);
    }
    loadScript();
    
}]);
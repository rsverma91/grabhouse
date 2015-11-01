var signInUp = angular.module('signinupController',[]);

signInUp.controller('signinCtrl', ['$scope','$location','userDetail', function($scope,$location,userDetail){
	$scope.usrType = 'buyer';
	$scope.signInForm = function(userData){
	userData.Type = $scope.usrType;
	userDetail.isValidUser(userData).success(function(response){
		if(response == "")
			$scope.result = 'Invalid UserName or Password';
		else if($scope.usrType == 'seller'){
			cookie("login",response.email);
			$location.path('/sellerDefault');
		}
		else{
			cookie("login",response.email);
			$location.path('/');
		}
	});
  };
  var loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/init.js';
        document.body.appendChild(script);
    }
    loadScript();
}]);

signInUp.controller('signupCtrl', ['$scope','userDetail', function($scope,userDetail){
	$scope.usrType = 'buyer';
	$scope.signUpForm = function(userData){
	userData.Type = $scope.usrType;
	userDetail.signUpDetail(userData).success(function(response){
		$scope.result = 'Registration Successfull';
	}).error(function(response){
		$scope.result = 'Fill All Details Properly';
	});
	}
}]);

signInUp.controller('searchResultCtrl', ['$scope','userDetail', function($scope,userDetail){
	userDetail.getAllByLocation(userDetail.locationRetive(),userDetail.retiveType()).success(function(response){
		$scope.result = userDetail.locationRetive();
	});
}]);
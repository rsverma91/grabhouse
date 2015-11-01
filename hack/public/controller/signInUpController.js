var signInUp = angular.module('signinupController',[]);
var loadScript = function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/init.js';
    document.body.appendChild(script);
}
signInUp.controller('signinCtrl', ['$scope','$location','userDetail', function($scope,$location,userDetail){
	$scope.usrType = 'buyer';
	$scope.signInForm = function(userData){
	userData.Type = $scope.usrType;
	userDetail.isValidUser(userData).success(function(response){
		if(response == "")
			$scope.result = 'Invalid UserName or Password';
		else if($scope.usrType == 'seller'){
			cookie("login",response.email);
			cookie("loginType",$scope.usrType);
			$location.path('/sellerDefault');
		}
		else{
			cookie("login",response.email);
			cookie("loginType",$scope.usrType);
			$location.path('/');
		}
	});
  };
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

signInUp.controller('searchResultCtrl', ['$scope','userDetail','$location', function($scope,userDetail,$location){
	$scope.bidUrl = function(){
		$location.path('/biding');
	};
	userDetail.getAllByLocation(userDetail.locationRetive(),userDetail.retiveType()).success(function(response){
		$scope.locationResult = userDetail.locationRetive();
		$scope.results = response;
	});
	$scope.generateUniqueId = function(sellerUId,bitEndTime,bidDate,email){
		userDetail.setUniqueID(sellerUId,cookie('login'),email,'false',bidDate+' '+bitEndTime).success(function(response){
			if(response.status==false)
				alert('You Already Registered With Id : '+response.uid);	
			else
			alert('Please Note Your Unique Id'+response._id);
	});
	};

}]);
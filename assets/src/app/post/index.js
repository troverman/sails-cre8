angular.module( 'sailng.post', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'post', {
		url: '/post/:memberID',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.memberID;

        },
		views: {
			"main": {
				controller: 'PostCtrl',
				templateUrl: 'post/index.tpl.html'
			}
		}
	});
})

.controller( 'PostCtrl', function PostController( $scope, titleService ) {
	titleService.setTitle('post');

	$scope.master = {};

	$scope.update = function(post) {
	$scope.master = angular.copy(post);
	};

	$scope.reset = function() {
	$scope.post = angular.copy($scope.master);
	};

	$scope.reset();


});
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

.controller( 'PostCtrl', function PostController( $scope, titleService, posts, PostModel) {
	titleService.setTitle('post');
	$scope.newPost = {};
    $scope.posts = posts;


    $sailsSocket.subscribe('post', function (envelope) {
	    switch(envelope.verb) {
	        case 'created':
	            $scope.posts.unshift(envelope.data);
	            break;
	        case 'destroyed':
	            lodash.remove($scope.posts, {id: envelope.id});
	            break;
	    }
    });




	$scope.master = {};

	$scope.createPost = function(newMessage) {
        newPost.user = config.currentUser.id;
        PostModel.create(newPost).then(function(model) {
            $scope.newPost = {};
        });
    };

	$scope.update = function(post) {
		$scope.master = angular.copy(post);
	};

	$scope.reset = function() {
		$scope.post = {};
	};

	$scope.reset();


});
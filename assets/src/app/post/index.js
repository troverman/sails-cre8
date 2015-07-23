angular.module( 'sailng.post', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'post', {
		url: '/post',
		views: {
			"main": {
				controller: 'PostCtrl',
				templateUrl: 'post/index.tpl.html'
			}
		},
		resolve: {
            posts: function() {}
        }
	});
})

.controller( 'PostCtrl', function PostController( $scope, $sailsSocket, lodash, titleService, config, PostModel) {
	titleService.setTitle('post');
	$scope.newPost = {};
    //$scope.posts = posts;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('post', function (envelope) {
	    switch(envelope.verb) {
	        case 'created':
	            //$scope.posts.unshift(envelope.data);
	            break;
	        case 'destroyed':
	            //lodash.remove($scope.posts, {id: envelope.id});
	            break;
	    }
    });

	$scope.createPost = function(newPost) {
        newPost.user = config.currentUser.id;
        PostModel.create(newPost).then(function(model) {
            $scope.newPost = {};
        });
    };

});

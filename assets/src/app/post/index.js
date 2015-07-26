/*angular.module( 'sailng.post', [
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
			posts: function(MessageModel) {
            	return MessageModel.getAll().then(function(models) {
                	return models;
            	});
        	}
		}
	});
})

.controller( 'PostCtrl', function PostController( $scope, $sailsSocket, lodash, titleService, config, MessageModel, posts) {
	titleService.setTitle('post');
	$scope.newPost = {};
    $scope.posts = posts;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('post', function (envelope) {
	    switch(envelope.verb) {
	        case 'created':
	        	console.log(envelope.data);
	            $scope.posts.unshift(envelope.data);
	            break;
	        case 'destroyed':
	            lodash.remove($scope.posts, {id: envelope.id});
	            break;
	    }
    });

    $scope.destroyPost = function(post) {
        // check here if this post belongs to the currentUser
        if (post.user.id === config.currentUser.id) {
            MessageModel.delete(post).then(function(model) {
                // post has been deleted, and removed from $scope.posts
            });
        }
    };

	$scope.createPost = function(newPost) {
		console.log(newPost);
        newPost.user = config.currentUser.id;
        MessageModel.create(newPost).then(function(model) {
        	console.log(newPost);
            $scope.newPost = {};
        });
    };

});*/

angular.module( 'sailng.post', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'post', {
        url: '/post',
        views: {
            "main": {
                controller: 'PostController',
                templateUrl: 'post/index.tpl.html'
            }
        },
        resolve: {
            posts: function(MessageModel) {
                return MessageModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
    });
})

.controller( 'PostController', function PostController( $scope, $sailsSocket, lodash, config, titleService, MessageModel, posts ) {
    titleService.setTitle('Messages');
    $scope.newPost = {};
    $scope.posts = posts;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('message', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                console.log(envelope.data);
                $scope.posts.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.posts, {id: envelope.id});
                break;
        }
    });

    $scope.destroyPost = function(message) {
        // check here if this message belongs to the currentUser
        console.log(message);
        if (message.user.id === config.currentUser.id) {
            MessageModel.delete(message).then(function(model) {
                // message has been deleted, and removed from $scope.messages
            });
        }
    };

    $scope.createPost = function(newPost) {
        console.log(newPost);
        newPost.user = config.currentUser.id;
        MessageModel.create(newPost).then(function(model) {
            $scope.newPost = {};
        });
    };
});










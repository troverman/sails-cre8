angular.module( 'sailng.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:memberID/:memberPage',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.memberID;
            $scope.location = $stateParams.memberPage; 
              
        },
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		}
	});
})

.controller( 'MemberCtrl', function MemberController( $scope, titleService ) {
	titleService.setTitle('member');
});
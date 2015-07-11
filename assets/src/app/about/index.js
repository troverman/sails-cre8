angular.module( 'sailng.about', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about1',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
})

.controller( 'AboutCtrl', function AboutController( $scope, titleService ) {
	titleService.setTitle('About');
});
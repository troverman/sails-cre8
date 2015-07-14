angular.module( 'sailng', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'angularMoment',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',

    'sailng.header',
    'sailng.home',
    'sailng.about',
    'sailng.member',
    'sailng.messages'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.otherwise(function ($injector, $location) {
        //if ($location.$$url === '/') {
            //window.location = '/home';
        //}
        //else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        //}
    });
    /*$routeProvider.when("/", {
        templateUrl: "/home/index.tpl.html",
        controller: "HomeCtrl"
    }).when("/about", {
        templateUrl: "/about/index.tpl.html",
        controller: "AboutCtrl"
    }).when("/messages", {
        templateUrl: "/messages/index.tpl.html",
        controller: "MessagesController"
    }).when("/member", {
        templateUrl: "/member/index.tpl.html",
        controller: "MemberCtrl"
    }).otherwise({
        redirectTo: "/"
    });*/
    $locationProvider.html5Mode(true);








})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});
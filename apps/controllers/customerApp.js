(function (){

    var app = angular.module("abcApp",['ngRoute','ngAnimate']);

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                controller : 'homePageCtrl',
                templateUrl : 'apps/views/homepage.html'
            })
            .when('/aboutUs',{
                controller : 'aboutUsCtrl',
                templateUrl : 'apps/views/aboutus.html'
            })
            .when('/services/',{
                controller : 'servicesCtrl',
                templateUrl : 'apps/views/servicesOverview.html'
            })
            .otherwise({redirectTo : '/'});
    }]);
}());
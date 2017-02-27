(function(){
    var servicesCtrl = ['$rootScope','$scope','$http',
                    function($rootScope,$scope,$http){
                        
        function init(){
            $scope.overview = {img:'', content:'',text:'test'};
            $scope.overview.img = 'img/step1s.gif';
            $scope.overview.text = 'Allied Business Consulting offers a range of services in diverse domains.';

        };
                        
        init();
    }];
    angular.module("abcApp").controller('servicesCtrl',servicesCtrl);
}());
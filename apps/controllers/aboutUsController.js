(function(){
    
//    $(".navBarMenuClass").removeClass("active");

    var aboutUsCtrl = ['$rootScope','$scope','$routeParams',
                      function($rootScope,$scope,$routeParams){
       
        $scope.aboutus = {name:'Srivalli Kurella',about1:'Cute Baby',img:'', content:'',text:''};
        function init(){
            $scope.aboutus.name='Allied Business Consultancy Inc.';
            $scope.aboutus.text='Meetings';
            
            $scope.aboutus.img1='img/conference1.jpg';
            $scope.aboutus.about1='IT Consulting is not all about providing manpower. It is about assisting clients with their IT needs, be it deploying skilled and trained programmers, consultants, team leads or managers, or providing total on site or off shore services.At Allied Business Consulting, we are conscious of this. And that is why we have been a reliable partner in IT for so many Fortune 500 companies.';
            
            $scope.aboutus.img2='img/meeting.gif';
            $scope.aboutus.about2='Apart from intense technology training, we also train our consultants on soft skills and work culture. When they are at a customer site, they work as an integral member of the company’s team, resulting in high standards of productivity. Promoted by IT professionals, Allied is built on over 10 years of IT industry experience. Our range of services includes staff augmentation, direct placements, on site application development and off shore application development across a range of domains from network R&D to enterprise and Internet applications. And we are adding new areas of expertise all the time to serve our clients better.';

        };
        init();
    }];
        angular.module("abcApp").controller('aboutUsCtrl',aboutUsCtrl);
}());
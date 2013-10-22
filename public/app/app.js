// Main application
var poc = angular.module('poc', []);

// Application configs
poc.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        });

    $routeProvider
        .when('/cok-satanlar', {
            templateUrl: 'app/views/bestSellerLayout.html',
            controller: 'BestSellingController'
        });

//    $routeProvider
//        .when('/uye/giris', {
//            templateUrl: 'app/views/login.html',
//            controller: 'LoginController'
//        });

    // Get device id
    window.deviceId = document.getElementById('deviceId').value;

    // Get forgery token
    window.forgeryToken = document.getElementById('forgeryToken').value;
});


// Product image directive
//poc.directive('productimage', function() {
//    return {
//        restrict: 'A',
//        link: function($directive, img) {
//            if (Array.isArray($directive.product.images) && $directive.product.images.length) {
//                img[0].src = $directive.product.images[0].path.replace('/{0}/', '/166/');
//            }
//        }
//    }
//});


// BestSellingController
function BestSellingController($scope, $http, $location) {
    $scope.products = [];

    $http.get('/api/get-best-selling').success(function(response, statusCode, headers, config) {
       $scope.products = response.products;
    });

};


// HomeController
function HomeController($scope, $http) {
//    $scope.products = [];
//
//    $http.get('/api/').success(function(response, statusCode, headers, config) {
//       $scope.products = response.products;
//    });

    $http.get('/get-homepage-promotions').success(function(data) {
        $scope.promotionsSlider = data;
    });

    $http.get('/get-best-selling').success(function(data) {
        
    });

};
























// Main application
var poc = angular.module('poc', []);

// Application configs
poc.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/homepage.html',
            controller: 'HomepageController'
        });

    $routeProvider
        .when('/bestSellers', {
            templateUrl: 'app/views/bestSeller.html',
            controller: 'BestSellingController'
        });
});

// Go home directive
poc.directive('go-home', function($location) {
    return {
        restrict: 'A',
        link: function() {
            debugger;
        }
    }
});

// BestSellingController
function BestSellingController($scope, $http) {
    $scope.products = [];

    $http.get('/api/get-best-selling').success(function(response, statusCode, headers, config) {
       $scope.products = response.products;
    });

    $scope.alert = function(){
        alert("clicked....")
    }
};


// HomepageController
function HomepageController($scope, $http) {
    $scope.products = [];

    $http.get('/api/get-best-selling').success(function(response, statusCode, headers, config) {
       $scope.products = response.products;

    });

    $scope.alert = function(){
        alert("clicked....")
    }
};


// HeaderController
function HeaderController($scope, $location) {
    $scope.goHome = function() {
        $location.path('home');
    }
};

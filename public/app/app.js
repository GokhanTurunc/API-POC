// Main application
var poc = angular.module('poc', []);

// Application configs
poc.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
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
};


// HeaderController
function HeaderController($scope, $location) {
    $scope.goHome = function() {
        $location.path('home');
    }
};

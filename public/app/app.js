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


//Product image directive
poc.directive('productimage', function() {
    return {
        restrict: 'A',
        link: function($directive, img) {

            if ($directive.banner.banner) {
                var mapping = $(img[0]).data("src-map");
                var src = $directive['item'].mapping.replace('{0}', 'org');
                $(img[0]).attr("src", src);
            }
        }
    }
});


// BestSellingController
function BestSellingController($scope, $http, $location) {
    $scope.products = [];

    $http.get('/api/get-best-selling').success(function(response, statusCode, headers, config) {
       $scope.products = response.products;
    });

}


// HomeController
function HomeController($scope, $http) {
    $http.get('/get-homepage-promotions').success(function(data) {
        $scope.promotionsSlider = data['homePagePromotions'];
        setTimeout(function(){$scope.initBannerCarousel();},1)
    });

    $http.get('/get-best-selling').success(function(response) {
       $scope.bestSellers = response.products;

    });

    $scope.initBannerCarousel = function(){
        var bullets = $('.banners .position').find('li');
        new Swipe($('.banners.swipe')[0], {
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {
                var i = bullets.length;
                while (i--) {
                    bullets[i].className = ' ';
                }
                bullets[index].className = 'on';
            },
            transitionEnd: function(index, elem) {}
        });
    };

}























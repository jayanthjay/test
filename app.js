(function(){
    angular.module('movieflix',['ngRoute'])
        .config(function ($routeProvider){

            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                    controller: 'MainController',
                    controllerAs: 'mVm'
                })
                .when('/TvShows', {
                    templateUrl: 'TvShows.html',
                    controller: 'MoviesController',
                    controllerAs: 'moviesVm'
                })
                .otherwise({redirectTo:'/'});
        });



})();

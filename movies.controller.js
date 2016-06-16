(function(){
    angular.module('movieflix')
        .controller('MoviesController',MoviesController)

    function MoviesController($routeParams,MoviesList){
        var moviesVm=this;
        MoviesList.getMovies()
            .then(function(movies){
                console.log(movies);
                moviesVm.movies=movies;
            });

        console.log($routeParams);
    }

})()
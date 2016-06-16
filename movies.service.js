(function(){

    angular.module('movieflix')
        .service('MoviesList',MoviesList)

    function MoviesList($http,$q){
        var self=this;
        self.getMovies=getMovies;

        function getMovies(){

            var defer=$q.defer();

            $http.get('https://goo.gl/GJ1YI2')
                .then(function(res){
                    console.log(res);
                    defer.resolve(res.data);
                },function(err){
                    defer.reject(err);
                })

            return defer.promise;
        }
    }
})()
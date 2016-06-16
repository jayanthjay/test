(function(){
    angular.module('movieflix')
        .controller('MainController',MainController);

    function MainController(){
        var mVm=this;

        mVm.name="Main test";
    }
})();

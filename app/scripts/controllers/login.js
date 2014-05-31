/**
 * Created by richardsiwady on 5/27/14.
 */
angular.module('barcampPrizeAppApp')
    .controller('LoginController', ['$scope','$location','$routeParams','UserService', function($scope,$location,$routeParams,UserService){

        var success = function(user){
            $location.path($routeParams.redirectPath);
            $scope.$apply();
        };

        var error = function(user, error){
            alert(error);
        };

        $scope.login = function(){

            if($scope.User.username == "" || $scope.User.password == ""){
                alert('fill in the fields');
                return;
            }

            var callbacks = {success: success, error: error};
            UserService.Login($scope.User, callbacks);
        };

    }]);
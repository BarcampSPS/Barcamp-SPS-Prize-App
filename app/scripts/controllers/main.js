'use strict';

angular.module('barcampPrizeAppApp')
  .controller('MainController', ['$scope','ParseService','RaffleUsersService',function ($scope,ParseService,RaffleUsersService) {

        var success = function(results) {
            $scope.raffleUsers = results;
            $scope.$apply();
        };

        var error = function(error) {
            alert(error);
        };

        var init = function(){
            var callbacks = {success: success, error: error};
            RaffleUsersService.populateRaffleUsers(callbacks);
        };

        init();
  }]);

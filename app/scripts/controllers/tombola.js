'use strict';

angular.module('barcampPrizeAppApp')
  .controller('TombolaController', ['$scope','$modal','ParseService','RaffleUsersService','CodeService',
        function ($scope,$modal,ParseService,RaffleUsersService,CodeService) {

            var init = function(){
                var callbacks = {success: success, error: error};
                RaffleUsersService.populateRaffleUsers(callbacks);
            };

            var success = function(results) {
                $scope.raffleUsers = results;
                $scope.$apply();
            };

            var error = function(error) {
                alert(error);
            };

            init();
      }]);

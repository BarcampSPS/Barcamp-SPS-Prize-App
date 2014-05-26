'use strict';

angular.module('barcampPrizeAppApp')
  .controller('TombolaController', ['$scope','$modal','ParseService','RaffleUsersService',
        function ($scope,$modal,ParseService,RaffleUsersService) {

            var getRandom = function(n){
                return Math.floor(Math.random()*n);
            };

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

            var raffleWinnerAdded = function(raffleWinner){
                alert('Ganador: User: ' + raffleWinner.attributes.Name + " && Email: " + raffleWinner.attributes.Email);
            };

            var raffleWinnerError = function(error){
                alert(error);
            };

            var raffleUserDeleted = function(user){
                var callbacks = {success: raffleWinnerAdded, error: raffleWinnerError};
                RaffleUsersService.AddRaffleWinner({
                    Name: user.attributes.Name,
                    Email : user.attributes.Email
                }, callbacks);
            };

            var raffleUserDeletionError = function(error){
                alert(error);
            };

            var raffleUserFound = function(raffleUserObject){
                var callbacks = {success: raffleUserDeleted, error: raffleUserDeletionError};
                RaffleUsersService.RemoveRaffleUser(raffleUserObject, callbacks);
            };

            var raffleUserNotFound = function(error){
                alert(error);
            };

            $scope.escogerGanador = function(){

                if($scope.raffleUsers.length == 0){
                    return;
                }

                var randomWinner = $scope.raffleUsers[ getRandom( $scope.raffleUsers.length ) ];
                var callbacks = {success: raffleUserFound, error:raffleUserNotFound };
                RaffleUsersService.FindRaffleUsers(randomWinner, callbacks);
            };

            init();
      }]);

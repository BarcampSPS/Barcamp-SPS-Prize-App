'use strict';

angular.module('barcampPrizeAppApp')
  .controller('MainController', ['$scope','$modal','ParseService','RaffleUsersService','CodeService',
        function ($scope,$modal,ParseService,RaffleUsersService,CodeService) {

            $scope.alerts = [];

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

        var ShowAlert = function(msg, type, interval){
            $scope.alerts.push({msg: msg,type: type});
            $scope.$apply();
            setTimeout(RemoveAllAlerts, interval);
        };

        var RemoveAllAlerts = function(){
            $scope.alerts = [];
            $scope.$apply();
        };

        var AddCodeSuccess = function(result){
            if(result == undefined ){
                $scope.code = '';
                ShowAlert('Codigo Invalido!', 'danger', 4000)
                return;
            }

            if(result.get('Used') == true){
                $scope.code = '';
                ShowAlert('Codigo ya ha sido utilizado!', 'danger',4000);
                $scope.$apply();
                return;
            }

            var modalInstance = $modal.open({
                templateUrl: 'views/modalContent.html',
                controller: function($scope,$modalInstance,RaffleUsersService,callbacks){

                    $scope.callbacks = callbacks;
                    $scope.RaffleUser = {Name: undefined, Email: undefined};

                    var success = function(){
                        RaffleUsersService.populateRaffleUsers(callbacks);
                        $modalInstance.dismiss('cancel');
                    };

                    var error = function(){
                        $modalInstance.dismiss('cancel');
                    };

                    $scope.guardar = function(){
                        if($scope.RaffleUser.Name == undefined && $scope.RaffleUser.Email == undefined){
                            return;
                        }
                        var callbacks = {success: success, error: error};
                        RaffleUsersService.AddRaffleUser($scope.RaffleUser,callbacks);
                    };

                    $scope.cancelar = function(){
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: 'lg',
                resolve: {
                    callbacks : function(){
                        return {success: success, error: error};
                    }
                }
            });

            $scope.code = '';
            result.set('Used',true);
            CodeService.MarkCodeAsUsed(result);
        };

        var ErrorCodeSuccess = function(error){

        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.AddCode = function(){
            $scope.alerts = [];
            var callbacks = {success : AddCodeSuccess, error: ErrorCodeSuccess};
            CodeService.CheckCode($scope.code, callbacks);
        };

        init();
  }]);

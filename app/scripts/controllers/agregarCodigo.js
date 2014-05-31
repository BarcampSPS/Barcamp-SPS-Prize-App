/**
 * Created by richardsiwady on 5/26/14.
 */
angular.module('barcampPrizeAppApp')
    .controller('AgregarCodigoController', ['$scope','$modal','$location','ParseService','CodeService','UserService',
        function($scope, $modal,$location, ParseService, CodeService,UserService){

            var init = function(){
                //Check if valid System user is logged In
                if(UserService.GetCurrentUser() == null){
                    $location.path('/login/agregarCodigo');
                }
            };

            var success = function(obj){
                alert('Code Added Successfully');
                $scope.Codigo.codigo = '';
                $scope.$apply();
            };

            var error = function(error){
                console.log(error);
                alert(error);
            };

            $scope.agregarCodigo = function(){
                var callbacks = {success: success, error: error};
                CodeService.AddCode($scope.Codigo, callbacks);
            };


            init();
        }]);
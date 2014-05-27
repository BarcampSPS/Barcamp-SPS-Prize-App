/**
 * Created by richardsiwady on 5/26/14.
 */
angular.module('barcampPrizeAppApp')
    .controller('AgregarCodigoController', ['$scope','$modal','ParseService','CodeService',
        function($scope, $modal, ParseService, CodeService){


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

        }]);
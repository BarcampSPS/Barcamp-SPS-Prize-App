/**
 * Created by richardsiwady on 5/27/14.
 */
angular.module('barcampPrizeAppApp')
        .controller('HeaderController', ['$scope', '$location', function($scope, $location){

            $scope.isActive = function(path){
                return $location.path() == path;
            }

    }]);
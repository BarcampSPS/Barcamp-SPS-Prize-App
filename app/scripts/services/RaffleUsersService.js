/**
 * Created by richardsiwady on 5/6/14.
 */
angular.module('barcampPrizeAppApp')
    .factory('RaffleUsersService', [function(){
        var factory = {};

        factory.populateRaffleUsers = function(callbacks){
            var RaffleUsers = Parse.Object.extend("RaffleUsers");
            var query = new Parse.Query(RaffleUsers);
            query.find({
                success: callbacks.success,
                error: callbacks.error
            });
        }

        return factory;
    }]);
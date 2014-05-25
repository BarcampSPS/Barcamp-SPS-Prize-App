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
        };

        factory.AddRaffleUser = function(RaffleUser, callbacks){
            var RaffleUsers = Parse.Object.extend("RaffleUsers");
            var user = new RaffleUsers();

            user.set('Name', RaffleUser.Name);
            user.set('Email', RaffleUser.Email);

            user.save(null,{
                success : callbacks.success,
                error : callbacks.error
            });
        };

        factory.FindRaffleUsers = function(RaffleUser, callbacks){
            var RaffleUsers = Parse.Object.extend("RaffleUsers");
            var query = new Parse.Query(RaffleUsers);

            query.equalTo("Name", RaffleUser.attributes.Name);
            query.equalTo("Email", RaffleUser.attributes.Email);

            query.first({
                success: callbacks.success,
                error: callbacks.error
            });
        };

        factory.RemoveRaffleUser = function(raffleUserObject, callbacks){
            raffleUserObject.destroy(
                {
                    success: callbacks.success,
                    error: callbacks.error
                }
            );
        };

        factory.AddRaffleWinner = function(RaffleUser,callbacks){
            var RaffleWinners = Parse.Object.extend("RaffleWinners");
            var raffleWinner = new RaffleWinners();

            raffleWinner.set('Name', RaffleUser.Name);
            raffleWinner.set('Email', RaffleUser.Email);

            raffleWinner.save(null,{
                success : callbacks.success,
                error : callbacks.error
            });
        };

        return factory;
    }]);
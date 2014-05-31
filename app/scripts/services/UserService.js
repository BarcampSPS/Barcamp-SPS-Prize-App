/**
 * Created by richardsiwady on 5/6/14.
 */
angular.module('barcampPrizeAppApp')
    .factory('UserService', [function(){
        var factory = {};

        factory.GetCurrentUser = function(){
            return Parse.User.current();
        };

        factory.Login = function(User,callbacks){
            Parse.User.logIn(User.username, User.password, {
                success: callbacks.success,
                error: callbacks.error
            });
        };

        return factory;
    }]);
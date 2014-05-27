/**
 * Created by richardsiwady on 5/6/14.
 */
angular.module('barcampPrizeAppApp')
    .factory('CodeService', [function(){
        var factory = {};

        factory.CheckCode = function(code,callbacks){
            var Codes = Parse.Object.extend("Codes");
            var query = new Parse.Query(Codes);
            query.equalTo("Code", code);
            query.first({
                success: callbacks.success,
                error: callbacks.error
            });
        };

        factory.MarkCodeAsUsed = function(Code){
            Code.save();
        };

        factory.AddCode = function(Codigo, callbacks){
            var Codes = Parse.Object.extend("Codes");
            var code = new Codes();

            code.set('Code', Codigo.codigo);
            code.set('Used', false);

            code.save(null, {
                success : callbacks.success,
                error : callbacks.error
            });
        };

        return factory;
    }]);
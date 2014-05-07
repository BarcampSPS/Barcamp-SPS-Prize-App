/**
 * Created by richardsiwady on 5/6/14.
 */
angular.module('barcampPrizeAppApp')
.service('ParseService',['ParseCredentialService',function(ParseCredentialService){
        var app_id = ParseCredentialService.getAppId();
        var js_key = ParseCredentialService.getJsKey();
        Parse.initialize(app_id, js_key);
    }]);
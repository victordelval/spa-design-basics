/**
 * Data connector manager (application controller).
 * @module managers/connector
 */

define([
    "core/api"

], function (api) {

    "use strict"


    var urls;
    var develRoot = '/spa';
    var configUrl = develRoot + '/api/user-config/';


    function init(config) {
        urls = config;
    }


    function getUserConfig() {
        var requestConfig = {
            url: configUrl,
        }

        var promise;

        try {
            promise = api.ajax(requestConfig);
            promise.fail(function (e) {
                // TODO - Handle error with manager
                throw new Error("[Connector Manager] Error requesting the user configuration data (HTTP error " +
                e.status + " - " + e.statusText + ")");
            });

        } catch (e) {
            // TODO - Handle error with manager
            console.log(">>>>> catch error >> ", e)
        }
        return promise;
    }


    function getRealmStatus(realmType, realmName) {
        var requestConfig = {
            url: "/data/status/" + realmType + "/" + realmName + "/",
            // url: urls.global_page_data,
        }
        var promise = api.ajax(requestConfig);
        promise.fail(function (e) {
            // TODO - Handle error with manager
            throw "[Connector Manager] Error requesting the allowed realm list for the user (HTTP error " +
                e.status + " - " + e.statusText + ")";
        });
        return promise;
    }


    return {
        init: init,
        
        // get
        getUserConfig: getUserConfig, // setup
        getRealmStatus: getRealmStatus

        // post
        // put
        // delete
    }

});
/**
 * App setup and initializer.
 * @module setup
 */

define([
    "pace",
    "managers/connector",
    "managers/navigation",
    "managers/errors"

], function (pace, connector, navigation, errors) {

    "use strict"


    var config;

    /**
       config = {
            user: {},
            preferences: {},
            app: {},
            permissions: {
                ui_structure: {
                    realm: [],
                    realm_extra_apps: [],                
                    host: [],
                    host_extra_apps: [],
                },
                urls: {...},
                actions: [...],
            },
            preferences: {
                ...
            }
        }  
     */


    /**
     * Resolve the application config and initialize managers passing the corresponding config.
     */
    function init() {
        connector.getUserConfig()
            .done(function (data) {
                // store config data
                config = data
                // init managers, passing the corresponding config
                errors.init();
                connector.init(_getConnectorConfig());
                navigation.init(_getNavigationConfig());
            });
    }


    /**
     * Prepares the config for the navigation manager.
     */
    function _getNavigationConfig() {
        return {
            user: config.user,
            app: config.app,
            permissions: {
                realms: config.permissions.realms,
                ui: config.permissions.ui_structure
            }
        };
    }


    /**
     * Prepares the config for the connector manager.
     */
    function _getConnectorConfig() {
        return config.permissions.urls;
    }


    return {
        init: init,
    }

});
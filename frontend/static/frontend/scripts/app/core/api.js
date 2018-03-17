/**
 * Ajax API (core module).
 * @module config
 */

define(["jquery"], function ($) {

    "use strict"


    function ajax(config) {

        if (!config.url) {
            // var deferred = $.Deferred();
            // deferred.resolve([]);
            // return deferred.promise();
            
            throw "[API Core] Error calling ajax function because no url has been provided";
        }

        var url = config.url;
        var method = config.method || 'get';
        var data = config.data || '';

        return $.ajax({
            method: method,
            url: url,
            data: data,
            dataType: 'json'
        });
    }


    return {
        ajax: ajax
    };

});
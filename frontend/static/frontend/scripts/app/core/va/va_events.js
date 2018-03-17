/**
 * Module representing the Event Emitter core functionality
 * @module events
 */
define(["jquery", "eventemitter", "navigation"], function ($, EventEmitter, navigation) {

    // https://github.com/Olical/EventEmitter
    
    // javascript event system
    // https://netbasal.com/javascript-the-magic-behind-event-emitter-cce3abcbcef9
    // http://www.mikedoesweb.com/2013/custom-events-system-in-javascript-lightevents/
    // https://corcoran.online/2013/06/01/building-a-minimal-javascript-event-system/


    "use strict"

    var ee;

    // TODO - loose coupling rerfactor
    // split functions and facade for implementation (EventEmitter - Olical)

    function init() {
        ee = new EventEmitter();
        console.log(">>> ee")
        console.log(ee)

        console.log(">>> navigation")
        console.log(navigation)
        // var promise = addNavigationListeners();
        // return promise();
        // var deferred = $.Deferred();
        // addNavigationListeners(deferred)
        // return deferred.promise();
    }

    function addNavigationListeners(deferred) {

        // var deferred = new $.Deferred();

        var eventsList = [
            'goGlobalPage',
            'goRealmPage',
            'goHostPage',
            'goErrorPage'
        ];

        var eventsLength = eventsList.length;

        for (var i = 0; i < eventsLength; i++) {
            ee.addListener(eventsList[i], navigation[eventsList[i]]);
        }

        deferred.resolve()

        // return deferred.promise();
    }

    function getEventEmitter() {
        return ee;
    }


    return {
        init: init,
        getEventEmitter: getEventEmitter
    }

});
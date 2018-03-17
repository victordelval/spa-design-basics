/**
 * Errors handler (core module).
 * @module managers/errors
 */

define([], function () {

    "use strict"

    /**
     * This module could be a point of information output to the backend,
     * such as a sneak, in order to record and process the errors 
     * that users have in the wocu interface.
     * 
     * 
     * Links:
     * https://www.sitepoint.com/proper-error-handling-javascript/
     * 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
     * https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
     * https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onerror
     */


    function init() {

        // Throw uncaught errors
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            var completeMsg = {
                msg: msg,
                url: url,
                lineNo: lineNo,
                columnNo: columnNo,
                error: error
            }
            throw (new Error("Uncaught error >> " + JSON.stringify(completeMsg)))
        };

    }


    function handler(msg) {
        // TODO
        // manage errors depending on the nature.
        // Maybe a low severity error informed only to the user with an alertify or console log
        // or maybe a high severity informed to the backend and, additionally also to the user.
        throw (new Error("Handled error >> " + msg))

    }


    return {
        init: init,
        handler: handler,
    }

});
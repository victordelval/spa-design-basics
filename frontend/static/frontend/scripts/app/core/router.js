/**
 * Router instance (core module).
 * @module router
 */

define(["director"], function (director) {

    /**
     * Singleton pattern to instance just once the Director 'Router'.
     * 
     * https://github.com/flatiron/director
     */


    "use strict"

    var instance;


    /**
     * Public method that implement a Singleton to return an instance 
     * if one exists or create one if it doesn't.
     */
    function getInstance(config) {
        if (!instance) {
            instance = Router;
        }
        return instance;
    }


    return {
        getInstance: getInstance
    };

});
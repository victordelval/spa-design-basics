/**
 * ViewController interface (for prototypal inheritance)
 * @module core/interfaces/views/viewController
 */

require([], function () {

    var ViewController = {
        load: function () {
            throw new Error("[View Controller interface] Load method it's not implemented.")            
        },
        destroy: function() {
            throw new Error("[View Controller interface] Destroy method it's not implemented.")
        }
    }

    return ViewController;

});
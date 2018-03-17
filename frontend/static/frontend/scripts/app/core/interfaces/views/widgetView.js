/**
 * ViewController interface
 * @module core/interfaces/views/widgetView
 */

require([
    "core/interfaces/views/viewController"

], function (ViewController) {

    var WidgetView = function() {
        // specific attributes
    }
    
    // interface inheritance
    
    WidgetView.prototype = Object.create(ViewController);
    
    // implement interface methods

    WidgetView.prototype.load = function() {
        throw new Error("[Widget ViewController interface] Load method it's not implemented.")
    };
    
    WidgetView.prototype.destroy = function() {
        throw new Error("[Widget ViewController interface] Destroy method it's not implemented.")
    };
    
    // // Testing...
    // var w = new WidgetView();
    // console.log("the widget view controller")
    // console.log(w)
    
    // w.load = function() {
    //     console.log("Widget Load....")
    // }
    // w.destroy = function() {
    //     console.log("Widget Destroy....")
    // }
    
    // try {
    //     console.log(w.load())
    // } catch(e) {
    //     console.log(">> catch load")
    //     console.log(e)
    // }
    
    // try {
    //     console.log(w.destroy())
    // } catch(e) {
    //     console.log(">> catch destroy")
    //     console.log(e)
    // }
    

    return WidgetView;

});


/** 
pueden ser de dos tipos:
- data views
- no data views



¿qué deben poder hacer los Widget View Controllers?

- load() 
- render templates (with or without data)
- update templates (fill or replace gadget/component data)




- destroy() (remove all elements from inside)

*/
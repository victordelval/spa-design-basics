/**
 * Page constructor (class).
 * @module constructors/ui/page
 */
define(["handlebars"], function (Handlebars) {

    // access function to call the contructor function with 'new'
    var Page = function (elemId, config) {
        return new Page.init(elemId, config);
    };

    // prototype (methods shared for all objects of this type)
    Page.prototype = {

        validate: function () {
            // check that is a valid config
            // for now, just if empty
            if (!this.elemId) {
                throw "Invalid elemId param for Page... it's empty";
            }
            if (!this.config) {
                throw "Invalid config param for Page... it's empty";
            }
            // if (!Array.isArray(this.config)) {
            //     throw "Invalid config param for Page... it's not a list";
            // }
        },

        load: function (viewType, uiElem, data) {
            // TODO - load general page content / behavior
            // TODO - resolve true dynamic import
            // TODO - Keep imported modules within persistent list
            
            // console.log(">>> globalPage >> load >> data")
            // console.log(data)
            
            // load the view of the ui element (tab, section, widget..)
            var widgetFolder = uiElem.folder ? uiElem.folder + "/" : "";
            var uiElemView = require("views/" + viewType + "/" + uiElem.scope + "/" + widgetFolder + uiElem.name)
            uiElemView.load(uiElem, data);
            
        },

        // destroy: function () {
        //     console.log(">>> destroy...");
        // },

    };

    // constructor function
    Page.init = function (elemId, config) {
        // 'self' because this function constructor is called from the "new object" of the Page function
        var self = this;  
        
        self.elemId = elemId || '';
        self.config = config || {};

        self.validate();
    };

    // override constructor's prototype
    Page.init.prototype = Page.prototype;


    return Page;

});
/**
 * Widget constructor (class).
 * @module constructors/ui/widget
 */
define([
    "handlebars",
    "managers/connector",
    "core/dom"

], function (Handlebars, connector, DOM) {

    // access function to call the contructor function with 'new'
    var Widget = function (elemId, config) {
        return new Widget.init(elemId, config);
    };

    // prototype (methods shared for all objects of this type)
    Widget.prototype = {

        validate: function () {
            // check that is a valid config
            // for now, just if empty
            if (!this.elemId) {
                throw "Invalid elemId param for Widget... it's empty";
            }
            if (!this.config) {
                throw "Invalid config param for Widget... it's empty";
            }
            // if (!Array.isArray(this.config)) {
            //     throw "Invalid config param for Widget... it's not a list";
            // }
        },

        render: function (gadget, context) {

            // TODO - load general widget content / behavior
            // load the contents (gadgets..)

            var tmplRoot = "text!views/widgets/";

            // render the template of each gadget of the widget
            // TODO - Keep imported templates within persistent list

            // TODO - resolve true dynamic import
            var tmplName = gadget + ".html";
            var tmpl = require(tmplRoot + this.config.scope + "/" + 
                               this.config.folder + "/templates/" + tmplName);
            var template = Handlebars.compile(tmpl);

            var html;
            if (context) {
                html = template(context);
            } else {
                html = template();
            }

            // TODO - fix harcoded selector
            // Attach to dom
            // DOM.appendToId(this.elemId, html);
            DOM.appendToId(this.config.parent, html);

            // chainable method
            return this;
        },

        // destroy: function () {
        //     console.log(">>> destroy...");
        // },

    };

    // constructor function
    Widget.init = function (elemId, config) {
        // 'self' because this function constructor is called from the "new object" of the Widget function
        var self = this;

        self.elemId = elemId || '';
        self.config = config || {};

        self.validate();
    };

    // override constructor's prototype
    Widget.init.prototype = Widget.prototype;


    return Widget;

});
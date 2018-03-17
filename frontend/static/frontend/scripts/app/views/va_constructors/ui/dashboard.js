/**
 * Dashboard constructor (class).
 * @module constructors/ui/dashboard
 */

define([
    "handlebars",
    "core/dom"

], function (Handlebars, DOM) {

    // TODO - Singleton ?

    /**
     * Access function to call the contructor function with 'new'
     */
    var Dashboard = function (elemId, config) {
        return new Dashboard.init(elemId, config);
    };

    /**
     * Object methods (prototype)
     */
    Dashboard.prototype = {

        validate: function () {
            // check that is a valid config
            // for now, just if empty
            if (!this.elemId) {
                throw "Invalid elemId param for Dashboard... it's empty";
            }
            if (!this.config) {
                throw "Invalid config param for Dashboard... it's empty";
            }
            // if (!Array.isArray(this.config)) {
            //     throw "Invalid config param for Dashboard... it's not a list";
            // }
        },

        /**
         * Renders dashboard frame templates.
         * @param {ContextData} 
         */
        render: function () {
            /** Example template import path:
             *      "text!templates/dashboard/dashboard-menu.html"
             */ 

            // console.log(this.config)
            
            var widgets = this.config.permissions.ui.dashboard.widgets;
            var tmplRoot = "text!views/dashboard/templates/";
            
            // TODO - move iteration logic to dashboardView

            // render the template of each widget of the dashboard
            for (var i = 0, length = widgets.length; i < length; i++) {
                // TODO - Keep imported templates within persistent list

                // TODO - resolve true dynamic import
                // Dynamic template imports
                var tmplName = widgets[i].template + ".html";
                var tmpl = require(tmplRoot + tmplName);
                var template = Handlebars.compile(tmpl);

                var context = {
                    user: this.config.user,
                    app: this.config.app
                }
                var html = template(context);

                // Attach to dom
                DOM.prependToId(this.elemId, html);
            }
            
        },

        
        /**
         * Completely remove all childs from target DOM element identified by Id
         */
        cleanPage: function (page) {
            console.log(">>> cleanPage")            
            console.log(page)

            DOM.emptyId(page);
            
        },

    };

    // constructor function
    Dashboard.init = function (elemId, config) {
        // 'self' because this function constructor is called from the "new object" of the Page function
        var self = this;

        self.elemId = elemId || '';
        self.config = config || {};

        self.validate();
    };

    // override constructor's prototype
    Dashboard.init.prototype = Dashboard.prototype;


    return Dashboard;

});
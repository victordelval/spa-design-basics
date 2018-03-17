// Section class (IIFE)

(function(global, $) {
    
    // access function to call the contructor function with 'new'
    var Section = function(config) {
        return new Section.init(config);
    };

    // prototype (methods shared for all objects of this type)
    Section.prototype = {

        validate: function() {
            // check that is a valid config
            // for now, just if empty
             if (!this.config) {
                throw "Invalid config param for Section... it's empty";   
             }
             if (!Array.isArray(this.config)) {
                throw "Invalid config param for Section... it's not a list";   
             }
        },
        
        // show: function() {
        //     console.log("Show section");
        //     this.init();
        // },
        
        // hide: function() {
        //     console.log("Hide section");
        //     // destroy();
        // },
        
        init: function() {
            console.log(">>> init...");
            console.log(this.config);
        },
        
        destroy: function() {
            console.log(">>> destroy...");
        },
        
        disable: function() {
            console.log(">>> disabling (no data / error)...");
        },
        
        enable: function() {
            console.log(">>> enable (recovering data / no error)...");
        }
    };

    // constructor function
    Section.init = function(config) {
        var self = this;  // because this function constructor is called from the "new object" of the Section function
        self.config = config || '';

        self.validate();
    };

    // override constructor's prototype
    Section.init.prototype = Section.prototype;

    // namespace
    wocu.components.ui.Section = Section;

})(window, jQuery);

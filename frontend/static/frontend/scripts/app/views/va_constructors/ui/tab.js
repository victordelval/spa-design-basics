// Tab class (IIFE)

(function(global, $) {
    
    // access function to call the contructor function with 'new'
    var Tab = function(config) {
        return new Tab.init(config);
    };

    // prototype (methods shared for all objects of this type)
    Tab.prototype = {
        
        validate: function() {
            // check that is a valid config
            // for now, just if empty
             if (!this.config) {
                throw "Invalid config param for Tab... it's empty";   
             }
             if (!Array.isArray(this.config)) {
                throw "Invalid config param for Tab... it's not a list";   
             }
        },
        
        // show: function() {
        //     console.log("Show tab");
        //     this.init();
        // },
        
        // hide: function() {
        //     console.log("Hide tab");
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
    Tab.init = function(config) {
        var self = this;  // 'self' because this function constructor is called from the "new object" of the Tab function
        self.config = config || '';

        self.validate();
    };

    // override constructor's prototype
    Tab.init.prototype = Tab.prototype;

    // namespace
    wocu.components.ui.Tab = Tab;

})(window, jQuery);

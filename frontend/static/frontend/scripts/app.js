/**
 * RequireJS configuration of the application.
 */

requirejs.config({

    baseUrl: "/aggregator/static/frontend/scripts/",

    paths: {

        // Core Libraries
        "jquery": "lib/jquery/jquery-1.12.4",
        "text": "lib/require/text",
        "handlebars": "lib/templates/handlebars-v4.0.10",
        "director": "lib/router/director",
        // "eventemitter": "lib/events/EventEmitter",

        // Extra Libraries
        // "stats": "lib/debug/Stats",
        // "memory": "lib/debug/memory-stats",
        "pace": "lib/components/pace/pace.min",


        // Application Files

        "setup": "app/setup",

        "core": "app/core",
        "managers": "app/managers",
        "models": "app/models",
        "views": "app/views",
        // "templates": "app/templates",

    }

});


/**
 * Starting point of the application.
 */

require(['setup'], function (setup) {
    setup.init();
});

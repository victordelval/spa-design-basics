/**
 * Realm page (view controller).
 * @module views/pages/realm/realmPageView
 */

define([
    // "handlebars",
    // "views/constructors/ui/page",
    // TODO - resolve true dynamic import
    // "views/widgets/realm/..."
    // "core/dom",
    "views/pages/realm/components/realm-tabs/realmTabs"

], function (RealmTabs) {
    /**
     * The responsibility of this module is to represent the corresponding widgets appropriately.
     */

    "use strict"


    var config;
    var realmPageId = 'realmPage .container';


    function load(setup) {
        console.log(">>> realmPage view >> load")
        console.log(setup)
        // console.log(context)
        // console.log(config.ui)

        // cache config
        config = setup;

        // init page components
        var realmTabs = new RealmTabs("RealmTabs", realmPageId);

        var context = {
            tabs: config.ui,
            realm: config.realm
        };

        realmTabs.render(context);

        var ui = config.ui;
        for (var elem in ui) {
            console.log(">>> elem")
            if (ui[elem].hasOwnProperty('sections')) {
                console.log(">>> sections")
            } else if (ui[elem].hasOwnProperty('widgets')) {
                console.log(">>> widgets")
            }
        }


        // tab listeners ?.... not that way...

        // show the corresponding tab (subpage)

        // init the widgets

    }


    function changeTab() {
        console.log("##### cambia de Tab")
        console.log(config)
    }


    // function destroy() {
    //     globalPage.destroy();
    // }


    return {
        load: load,
        // destroy: destroy,
        changeTab: changeTab
    }

});
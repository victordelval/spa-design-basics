/**
 * Global page (view controller).
 * @module views/pages/globalPageView
 */

define([
    // "views/constructors/ui/page",
    // TODO - resolve true dynamic import
    "views/widgets/global/global-aggregator/globalAggregatorWidgetView"

], function (globalAggregatorWidgetView) {
    /**
     * The responsibility of this module is to represent the corresponding widgets appropriately.
     */

    "use strict"


    var globalPage;
    var globalPageId = 'globalPage';

    var globalAggregatorWidget = {
        'name': 'globalAggregatorWidgetView',
        // 'template': 'global-aggregator',
        'scope': 'global',
        'folder': 'global-aggregator',
        'parent': 'globalPage .container'
    };


    // init Global Page object
    // and load it (this means load the content, the widgets)
    function load(realmList) {
        // console.log(">>> globalPage view >> load")
        // console.log(realmList)

        // globalPage = Page(globalPageId);
        // globalPage.load("widgets", globalAggregatorWidget, realmList);

        // TODO - widget config (only using parent info)
        globalAggregatorWidgetView.load(globalAggregatorWidget, realmList);

    }


    function update() {
        console.log("##### actualiza los datos... del unico widget")        
    }


    // function destroy() {
    //     globalPage.destroy();
    // }


    return {
        load: load,
        update: update,
        // destroy: destroy,
    }

});
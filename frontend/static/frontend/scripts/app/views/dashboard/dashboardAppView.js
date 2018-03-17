/**
 * Dashboard frame (view controller).
 * @module view/dashboard/dashboardAppView
 */

define([
    "core/dom",    
    "views/dashboard/components/dashboard-menu/dashboardMenu",
    // TODO - resolve true dynamic import
    "views/pages/global/globalPageView",
    "views/pages/realm/realmPageView",
    "views/pages/host/hostPageView",
    "views/pages/error/errorPageView"

], function (DOM, DashboardMenu, globalPageView, realmPageView, hostPageView, errorPageView) {

    "use strict"

    /**
     * This view is responsible for the representation of the Dashboard 
     * controlling the behavior of the corresponding Dashboard object.
     * Only answers requests from the navigation manager.
     * Only talks to pages view controllers (lower level)
     * Has some components (dashboard menu)
     * Listen to global dashboard events 
     */


    var dashboard;
    var dashboardId = "main";

    var config;


    /**
     * Initialize the dashboard creating and setting up the object,
     * and rendering the dashboard frame templates.
     * @param {GlobalConfig} config 
     */
    function load(inputConfig) {

        config = inputConfig;

        // init dashboard components
        var dashboardMenu = new DashboardMenu("menu", dashboardId);

        var context = {
            user: config.user,
            app: config.app
        }
        dashboardMenu.render(context);


        // TODO - Modal user preferences component

        // TODO - Autorefresh component

    }


    /**
     * Calls the view controller of the target page passing the config..
     * 
     * @param {*} page 
     * @param {*} previousPage 
     * @param {*} context 
     */
    function loadPage(page, previousPage, context) {

        console.log("##### loadPage")
        console.log(previousPage, " >>> ", page)
        console.log(context)
        console.log("###############")
        
        // check to clean completely the previous page first
        // if the navigation its between subpages (tabs/section),
        // then page view controller takes care of it (realm/host pages)
        var insidePage = false;
        if (previousPage) {
            if (previousPage !== page) {
                DOM.emptyId(previousPage + 'Page .container');
            } else {
                insidePage = true;
            }
        }

        switch (page) {

            case "global":
                console.log(">>> va a llamar a globalPageView")
                // for global page the context is the list of active realms available
                if (insidePage) {
                    globalPageView.update(context);
                } else {
                    globalPageView.load(context);
                }
                break;

            case "realm":
                console.log(">>> va a llamar a realmPageView")
                // for realm page the context is the realmId and the tab or tab with section to navigate
                var realmConfig = {
                    realm: {
                        type: "realm",
                        name: context[0],
                        tab: context[1],
                        section: context[2]
                    },
                    ui: config.permissions.ui.realm
                }

                if (insidePage) {
                    // var context = {};
                    realmPageView.changeTab(realmConfig);

                } else {
                    realmPageView.load(realmConfig);
                }
            
                break;

            case "host":
                // hostPageView.load(uiConfig.host);
                break;

            case "error":
                console.log(">>> va a llamar a errorPageView")
                // errorPageView.load();
                break;

            default:
                return;
        }
    }


    return {
        load: load,
        loadPage: loadPage,
    }

});
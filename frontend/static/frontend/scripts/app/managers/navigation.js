/**
 * State navigation manager (application controller).
 * @module managers/navigation
 */

define([
    "views/dashboard/dashboardAppView",
    "core/router"

], function (dashboardView, router) {

    "use strict"


    var config;
    var router;
    var scope = {};

    // State cache
    // TODO - Provisional solution to clean page before render the current one...
    var previousPage;
    var currentPage;
    // var currentPage = "globalPage";

    /**
     * 
     * @param {*} setup
     */
    function init(setup) {
        // set config
        config = setup
        // start the dashboard (app) state
        _startDashboard();
    }

    /**
     * 
     */
    function _startDashboard() {
        // set dashboard page scope
        _setDashboardScope();
        // load dashboard templates
        dashboardView.load(config);
        // init the router
        _initRouter();
    }

    /**
     * 
     */
    function _setDashboardScope() {
        var numRealms = config.permissions.realms.realm_list.length;
        if (numRealms > 1) {
            scope.type = 'global';
        } else if (numRealms === 1) {
            scope.type = 'realm';
            scope.data = config.permissions.realms.realm_list[0].name;
        } else {
            scope.type = 'error';
        }
    }


    /**
     * Router setup and initialization
     * @returns {Router} Router
     */
    function _initRouter() {
        // // setup
        // var routes = _getRoutesMap();

        // var router = Router(routes);

        // // customization
        // var notFound = function () {
        //     router.setRoute('/');
        // };

        // var options = {
        //     notfound: notFound,
        //     // before: function() {
        //     //     console.log(router.getRoute())
        //     // }
        // }

        // router.configure(options);

        // // finally, init the navigation
        // router.init('/');

        // return router;

        // setup
        var router = Router();

        // customization
        var notFound = function () {
            router.setRoute('/');
        };

        var options = {
            notfound: notFound,
            // before: function() {
            //     console.log(router.getRoute())
            // }
        }

        router.configure(options);

        // finally, init the navigation
        router.init('/');


        _setRoutesMap(router);        

        return router;
    }


    /**
     * Maps the urls (pages or states) with the handlers
     */
    function _setRoutesMap(router) {
        // function _getRoutesMap() {

        var global = function () {
            if (scope.type === 'realm') {
                _navigateToPage('realm', scope.data);
            } else if (scope.type === 'error') {
                _navigateToPage('error');
            } else {
                _navigateToPage('global', config.permissions.realms.realm_list);
            }
        };

        var realm = function (realmId, realmTab, realmSection) {
            // console.log(">> url realm handler ")
            // console.log(arguments)

            // TODO - Array.from()
            // var args = Array.prototype.slice.call(arguments);

            var tabs = config.permissions.ui.realm;
            // console.log(tabs)

            // var defaultArgs = [args[0], tabs[0].name];
            var defaultRoute = "/realm/" + arguments[0] + "/" + tabs[0].name;

            // default "subpage" is status tab
            if (!realmTab) {
                // console.log(">>> no tab >> set first as default")
                // args = defaultArgs;
                router.setRoute(defaultRoute);
                return;
            }

            // console.log(realmTab);
            var tabValid = false;
            for (var t in tabs) {
                var tab = tabs[t];
                if (realmTab == tab.name) {
                    // console.log(">>> Yes!", tab.name)
                    tabValid = true;

                    var sections = tab.sections;
                    var firstSection = sections[0].name.replace(tab.name + "-", "");

                    if (realmSection) {
                        // console.log(realmSection);
                        var sectionValid = false;

                        if (sections.length <= 1) {
                            // console.log(">>> WARNING - HAS SECTION PARAM... BUT THE TAB IS JUST ONE SECTIONS")
                            router.setRoute("/realm/" + arguments[0] + "/" + arguments[1]);
                            return;
                        }

                        for (var s in sections) {
                            var section = sections[s];
                            if (tab.name + "-" + realmSection == section.name) {
                                // console.log(">>> Yes!", section.name)
                                sectionValid = true;
                                break;
                            }
                        }

                        if (!sectionValid) {
                            // console.log(">>> WARNING - SECTION NOT VALID")
                            router.setRoute("/realm/" + arguments[0] + "/" + arguments[1] + "/" + firstSection);
                            // router.setRoute(defaultRoute);
                            return;
                        }
                    
                    } else if (sections.length > 1) {
                        router.setRoute("/realm/" + arguments[0] + "/" + arguments[1] + "/" + firstSection);                        
                        return;
                    }

                    break;
                }
            }

            if (!tabValid) {
                // console.log(">>> WARNING - TAB NOT VALID")
                // args.splice();
                // args = defaultArgs;
                router.setRoute(defaultRoute);
                return;
            
            } else {
                // console.log("### Final args")
                // console.log(args)
                // _navigateToPage.apply(this, args);
                var context = [];
                for (var arg in arguments) {
                    context.push(arguments[arg]);
                }
                _navigateToPage("realm", context);
            }

        };

        var host = function (realmId, hostId) {
            _navigateToPage('host', arguments);
        };

        var error = function () {
            _navigateToPage('error');
        };

        // var urls = {
        //     // global page
        //     '/': global,
        //     // realm page
        //     '/realm/:realmId': realm,
        //     '/realm/:realmId/:realmTab': realm,
        //     '/realm/:realmId/:realmTab/:tabSection': realm,
        //     // '/realm/:realmId/status': realm,
        //     // // '/realm/:realmId/assets': realmAssets,
        //     // '/realm/:realmId/assets/hosts': realm,
        //     // '/realm/:realmId/assets/host-groups': realm,
        //     // '/realm/:realmId/assets/business-processes': realm,
        //     // '/realm/:realmId/geomap': realm,
        //     // host page
        //     '/realm/:realmId/host/:hostId': host,
        //     // error page
        //     '/error': error
        // };
        // return urls;

        // global page
        router.on('/', global);

        // realm page (subpages)
        router.on('/realm/:realmId', realm);
        router.on('/realm/:realmId/:realmTab', realm);
        router.on('/realm/:realmId/:realmTab/:tabSection', realm);

        // host page (subpages)
        router.on('/realm/:realmId/host/:hostId', host);
        
        // error page
        router.on('/error', error);
        
    }


    /**
     * App state changes (dashboard and pages)
     * @param {*} page 
     * @param {*} context 
     */

    function _navigateToPage(page, context) {

        // TODO - arguments
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        // console.log(">>> _navigateToPage")
        // console.log(page)
        // console.log(context)
        // console.log(arguments)
        
        if (!page) return;
        
        // update page state
        _updatePageState(page);
        
        // dashboard view controller
        dashboardView.loadPage(page, previousPage, context);

    }


    function _updatePageState(page) {
        previousPage = currentPage;
        currentPage = page;
        // currentPage = page + 'Page .container';
    }


    return {
        init: init
    }

});
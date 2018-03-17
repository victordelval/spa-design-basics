/**
 * Global Aggregator widget (view controller).
 * @module views/widgets/global/global-aggregator/globalAggregatorWidgetView
 */

define([
    // "views/constructors/ui/widget",
    // "jquery",
    // "handlebars",
    "managers/connector",
    
    // TODO - resolve true dynamic import
    "views/widgets/global/global-aggregator/components/aggregator-panel/aggregatorPanel",
    "views/widgets/global/global-aggregator/components/realm-filters/realmFilters",
    "views/widgets/global/global-aggregator/components/realm-list/realmList",

], function (connector, AggregatorPanel, RealmFilters, RealmList) {

    /**
    * The responsibility of this module is to represent the corresponding widgets appropriately.
    */

    "use strict"


    var widget;
    var widgetId = 'globalAggregatorWidget';

    // var widgetParent


    /**
     * Tasks when initializing the widget:
     *  . Setup del widget
     *      - State
     *      - Inicializa componentes (Crea los componentes y Renderiza templates)
     *  . Pide datos al backend
     *  . Actualiza templates correspondientes con datos
     *  . Escucha eventos del cliente (usuario/navegador) dentro del ambito del widget
     */
    function load(config, realms) {
        console.log(">>> globalAggregator widget View Controller [load]")
        console.log(config)
        console.log(realms)

        // TODO
        // widgets says to its controller (the pageView) that they subscribe to a data source

        // state
        var pending = false;

        // init widget components (gadgets) passing the parent html node of the widget
        var aggregatorPanel = new AggregatorPanel("aggregatorPanel", config.parent);
        var realmFilters = new RealmFilters("realmFilters", config.parent);
        var realmList = new RealmList("realmList", config.parent);

        // render templates
        aggregatorPanel.render(realms);
        realmFilters.render();
        realmList.render(realms);


        // TODO
        // implement a data source at page level to manage shared data needs between widgets
        // in the same page. Implement Pub/Sub pattern ?

        // request common status data for each realm
        for (var i = 0, len = realms.length; i < len; i++) {
            var realm = realms[i];
            var promise = connector.getRealmStatus(realm.type, realm.name);
            promise.done(function (data) {
                aggregatorPanel.updateItem(data);
                realmList.updateItem(data);
            });
        }

    }


    function destroy() {

    }


    return {
        load: load,
        destroy: destroy,
    }

});
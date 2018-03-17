/**
 * Aggregator Panel gadget constructor.
 * @module views/widgets/global/global-aggregator/components/aggregatorPanel
 */

define([
    "handlebars",
    "core/dom",
    "text!views/widgets/global/global-aggregator/components/aggregator-panel/aggregator-panel.html"    

], function (Handlebars, DOM, tmpl) {

    function AggregatorPanel(elemId, parentId) {
        this.elemId = elemId;
        this.parentId = parentId;
    }

    AggregatorPanel.prototype.render = function(realms) {
        // TODO - prepare realms data to create the button filters
        var template = Handlebars.compile(tmpl);
        var html = template()
        DOM.appendToId(this.parentId, html);
    }

    AggregatorPanel.prototype.updateItem = function(realm) {
        // console.log(">>> AggregatorPanel (" + this.elemId + ") >>> updateItem")
        // console.log(realm);
    }

    AggregatorPanel.prototype.filter = function () {
        console.log(">>> AggregatorPanel (#" + this.elemId + ") >>> filter")
    }

    return AggregatorPanel;

});
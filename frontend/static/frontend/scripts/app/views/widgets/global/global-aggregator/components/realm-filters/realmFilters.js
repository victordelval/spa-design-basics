/**
 * Realm Filters gadget constructor.
 * @module views/widgets/global/global-aggregator/components/realmFilters
 */

define([
    "handlebars",
    "core/dom",
    "text!views/widgets/global/global-aggregator/components/realm-filters/realm-filters.html"    

], function (Handlebars, DOM, tmpl) {

    function RealmFilters(elemId, parentId) {
        this.elemId = elemId;
        this.parentId = parentId;
    }

    RealmFilters.prototype.render = function() {
        var template = Handlebars.compile(tmpl);
        var html = template()
        DOM.appendToId(this.parentId, html);
    }

    RealmFilters.prototype.search = function (results) {
        console.log(">>> RealmFilters (" + this.elemId + ") >>> search")
    }

    RealmFilters.prototype.orderByName = function (results) {
        console.log(">>> RealmFilters (" + this.elemId + ") >>> orderByName")
    }

    RealmFilters.prototype.orderByProblems = function (results) {
        console.log(">>> RealmFilters (" + this.elemId + ") >>> orderByProblems")
    }

    RealmFilters.prototype.orderByAssets = function (results) {
        console.log(">>> RealmFilters (" + this.elemId + ") >>> orderByAssets")
    }

    return RealmFilters;

});
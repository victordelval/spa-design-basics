/**
 * Dashboard main menu constructor.
 * @module views/dashboard/components/dashboard-menu/dashboardMenu
 */

define([
    "handlebars",
    "core/dom",
    "text!views/dashboard/components/dashboard-menu/dashboard-menu.html"    

], function (Handlebars, DOM, tmpl) {

    function DashboardMenu(elemId, parentId) {
        this.elemId = elemId;
        this.parentId = parentId;
    }

    DashboardMenu.prototype.render = function(context) {
        var template = Handlebars.compile(tmpl);
        var html = template();
        DOM.prependToId(this.parentId, html);
    }

    return DashboardMenu;

});
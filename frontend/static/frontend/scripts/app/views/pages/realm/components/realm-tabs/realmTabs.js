/**
 * Realm main menu constructor.
 * @module views/pages/realm/components/realm-tabs/RealmTabs
 */

define([
    "handlebars",
    "core/dom",
    "text!views/pages/realm/components/realm-tabs/realm-tabs.html"

], function (Handlebars, DOM, tmpl) {

    function RealmTabs(elemId, parentId) {
        this.elemId = elemId;
        this.parentId = parentId;
    }

    RealmTabs.prototype.render = function(context) {
        // Custom Handlebars helper 'tabmenu' like each helper
        Handlebars.registerHelper('tabmenu', function (items, context, options) {
            var out = "";
            for (var i = 0, l = items.length; i < l; i++) {
                out += '<li id="' + items[i].name + '-tab" class="main-tab" role="presentation">' +
                    '<a href="#/' + context.type + '/' + context.name + '/' + items[i].name + '" aria-controls="' + items[i].name + '" role="tab" data-toggle="tab"' +
                    '<i class="fa fa-' + items[i].icon + ' tab-icon"></i> <span class="tab-text">' + items[i].name + '</span>' +
                    '</a>' +
                    '</li>';
            }

            return out;
        });

        // prepare template and append to DOM
        var template = Handlebars.compile(tmpl);
        var html = template(context);
        DOM.appendToId(this.parentId, html);
    }

    return RealmTabs;

});
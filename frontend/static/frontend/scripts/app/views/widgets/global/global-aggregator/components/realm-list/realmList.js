/**
 * Realm List gadget constructor.
 * @module views/widgets/global/global-aggregator/components/realmList
 */

define([
    "handlebars",
    "core/dom",
    "text!views/widgets/global/global-aggregator/components/realm-list/realm-list.html"    

], function (Handlebars, DOM, tmpl) {

    function RealmList(elemId, parentId) {
        this.elemId = elemId;
        this.parentId = parentId;
    }

    RealmList.prototype.render = function(realms) {
        var template = Handlebars.compile(tmpl);
        var html = template({realm_list: realms})
        DOM.appendToId(this.parentId, html);
    }

    RealmList.prototype.updateItem = function(realm) {
        // console.log(">>> RealmList (" + this.elemId + ") >>> updateItem")
        // console.log(realm);
    }

    return RealmList;

});
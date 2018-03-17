// AMD Module that returns public api
// ---------------------------------

// The define method is passed an array of file dependencies and a callback function
define([], function () {

    "use strict"

    function init() {
        // aqui se preparan los contenidos del dashboard comunes a todas las páginas (el menu principal de arriba del todo)
        console.log(">>> ui core [init]")
    }

    return {
        init: init
    }

});




// wocu.managers.ui = (function() {

//     // TODO - init spinner

//     var uiStructure;

//     function initUi() {
//         uiStructure = wocu.managers.config.getUiStructure();
//         console.log(uiStructure)
//         setTabListeners();
//         initNavigation();
//     }

//     function setTabListeners() {
//         // tab listeners (static)
//         for (index in uiStructure) {
//             var tab = uiStructure[index];
//             $('#' + tab.name + '-tab').click(function() {
//                 console.log(">> click en tab >> load / refresh")
//                 // Tab.load()
//             });
//         }
//     }

//     function initNavigation() {
//         // go to first tab -> section -> widget
//         var tab = uiStructure[0];  // first tab
//         var linkTabSelector = '#' + tab.name + '-tab a';
//         $(linkTabSelector).click();
//     }

//     return {
//         initUi: initUi
//     };

// }());

/**
 * IIFE to load the memory widget for debug mode on (core/debug module).
 * @module core/debug/memory
 */

;(function () {
    

    "use strict"

    // debug memory

    var memStats = new MemoryStats();
    memStats.domElement.style.position = 'fixed';
    memStats.domElement.style.right = '0px';
    memStats.domElement.style.bottom = '0px';
    document.body.appendChild(memStats.domElement);

    requestAnimationFrame(function rAFloop() {
        memStats.update();
        requestAnimationFrame(rAFloop);
    });

})();
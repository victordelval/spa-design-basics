/**
 * IIFE to load the stats widgets for debug mode on (core/debug module).
 * @module core/debug/stats
 */

;(function () {

    "use strict"

    // debug stats (ms)

    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

})();
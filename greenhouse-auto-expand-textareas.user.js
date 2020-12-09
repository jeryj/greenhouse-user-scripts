// ==UserScript==
// @name        Auto-expand Textareas
// @namespace   https://automattic.com
// @version     0.1
// @description Expand note textareas on scorecards to show the full contents on load.
// @author      Jerry Jones
// @match       https://app.greenhouse.io/guides/*/people/*?application_id=*
// @match       https://app.greenhouse.io/scorecards/*/edit
// @grant       none
// ==/UserScript==


(function() {
    'use strict';

    const notes = document.querySelectorAll('.scorecard-attribute-note');

    if( notes && notes.length > 0 ) {
        notes.forEach( n => n.style.height = `${ n.scrollHeight + 20 }px` );
    }

})();


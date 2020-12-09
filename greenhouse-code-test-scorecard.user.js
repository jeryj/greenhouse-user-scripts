// ==UserScript==
// @name        Code Test Scorecard
// @namespace   https://jerryjones.dev
// @version     0.1
// @description Show/Hide relevant sections of the code test only while on a code test scorecard.
// @author      Jerry Jones
// @match       https://app.greenhouse.io/guides/*/people/*?application_id=*
// @match       https://app.greenhouse.io/scorecards/*/edit
// @grant       none
// ==/UserScript==


/**
 * USAGE: Change this to the title of the page you have. 
 * The page title MUST also be in your Greenhouse section title. 
 * The script will only show the sections that have a match with the title.
 */
const pageTitles = [ 'Code Test' ];


(function() {
    'use strict';

    pageTitles.forEach( pageTitle => hideSections( pageTitle ));

})();


/**
 * Searches for a sepecific Greenhouse Title. If that string is also present in the section title of the scorecard, 
 * it will show/hide it based on the title match.
 * 
 * @param { string } query - Title of the page you want to show/hide sections for
 */
function hideSections( query ) {
    const step = document.querySelector( '#interview_kit_header .step' );

    const sections = document.querySelectorAll( '.scorecard-attributes-section' );

    const isMatch = step?.innerText === query;

    const isMatchSection = ( title ) => title.includes( query );

    sections.forEach( ( section ) => {
        const sectionTitle = section.querySelector( '.title' ).innerText;
        
        // If we're on a code test and the section is not a code test section, hide it. 
        // OR, if we're NOT on a code test, hide the code test sections
        if( isMatch && ! isMatchSection( sectionTitle ) || ! isMatch && isMatchSection( sectionTitle ) ) {
            section.style.display = 'none';
        }
    });
}
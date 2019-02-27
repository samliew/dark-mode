// ==UserScript==
// @name         General Dark Mode
// @description  A general dark theme for all websites
// @homepage     https://github.com/samliew/GeneralDarkMode
// @author       @samliew
// @version      0.1.3
//
// @include      *
//
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';


    const darkgreen = '#296538';
    const darkblue = '#035';


    const textColor = '#ccc';
    const textSelectionBgColor = darkgreen;
    const bgColor = '#222';
    const btnColor = '#333';
    const borderColor = '#555';


    GM_addStyle(`


/* Apply to all */
body {
    background-image: none;
}
*,
*:before,
*:after {
    background-color: ${bgColor};
    color: ${textColor};
    box-shadow: none;
    outline: none;
    text-shadow: none;
}
.btn,
.button,
button,
input[type="submit"],
input[type="button"],
input[type="reset"],
*:not(a):not(span) {
    background-image: none;
    border-color: ${borderColor};
}
a:hover {
    color: #fff;
}
iframe:hover,
a:hover img,
a:hover svg,
button:hover img,
button:hover svg {
    filter: none;
    background-color: inherit;
}
iframe,
img {
    filter: brightness(0.8) saturate(90%);
}
button:hover,
input[type="button"]:hover,
input[type="submit"]:hover,
.btn:hover,
.button:hover {
    background-color: ${btnColor};
    color: white;
}


/* Don't apply background to these elements */
video ~ *,
video ~ * * {
    background-color: transparent;
}


/* Try to override classes that uses !important */
body *[class*="open"],
body *[class*="close"],
body *[class*="act"],
body *[class*="sel"],
body *[class*="curr"],
body *[class*="white"],
body *[class*="gray"],
body *[class*="black"] {
    background-color: ${bgColor};
    color: ${textColor};
}


/* Selection */
::selection { background: ${textSelectionBgColor}; }
::-moz-selection { background: ${textSelectionBgColor}; }


/* Scrollbars */
::-webkit-scrollbar{ width:10px; height:10px; }
::-webkit-scrollbar-thumb{ background-color:rgb(196, 196, 196); border-radius: 5; }
::-webkit-scrollbar-thumb:hover{ background-color:rgb(196, 196, 196); }
::-webkit-scrollbar-track{ background-color:rgb(60, 60, 60); }


/* Specific elements opacity & hover */
body footer > *,
body *[id*="sidebar"] > *,
body *[id*="footer"] > *
body *[class*="sidebar"] > *,
body *[class*="footer"] > * {
    opacity: 0.6;
    transition: opacity 0.2s ease;
}
body footer:hover > *,
body *[id*="sidebar"]:hover > *,
body *[id*="footer"]:hover > *
body *[class*="sidebar"]:hover > *,
body *[class*="footer"]:hover > * {
    opacity: 1;
}


/* Code colours */
pre {
    background-color: #444;
}
pre * {
    background-color: inherit;
}
.str, .lit, .tag {
    color: #d68585;
}
.kwd, .dec {
    color: #7e7ef1;
}
.typ {
    color: #6dbcd5;
}


`.replace(/;/g, ' !important;'));


    // Custom stuff that requires JS goes here (element attribute changes, class additions/removals, etc.)
    document.addEventListener('DOMContentLoaded', function() {

    });


})();

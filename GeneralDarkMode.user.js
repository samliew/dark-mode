// ==UserScript==
// @name         General Dark Mode
// @description  A general dark theme for all websites
// @homepage     https://github.com/samliew/GeneralDarkMode
// @author       @samliew
// @version      0.1.1
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
    background-image: none;
    background-color: ${bgColor};
    color: ${textColor};
    box-shadow: none;
    outline: none;
    text-shadow: none;
}
*:not(span) {
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


/* Try to override classes that uses !important */
*[class*="open"],
*[class*="close"],
*[class*="act"],
*[class*="sel"],
*[class*="curr"],
*[class*="white"],
*[class*="gray"],
*[class*="black"] {
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
footer > *,
*[id*="sidebar"] > *,
*[id*="footer"] > *
*[class*="sidebar"] > *,
*[class*="footer"] > * {
    opacity: 0.6;
    transition: opacity 0.2s ease;
}
footer:hover > *,
*[id*="sidebar"]:hover > *,
*[id*="footer"]:hover > *
*[class*="sidebar"]:hover > *,
*[class*="footer"]:hover > * {
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

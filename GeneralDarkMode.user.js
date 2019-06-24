// ==UserScript==
// @name         General Dark Mode
// @description  A general dark theme for all websites
// @homepage     https://github.com/samliew/GeneralDarkMode
// @author       @samliew
// @version      0.2.1
//
// @include      *
//
// @exclude      https://*reddit.com/*
//
// @exclude      https://*stackexchange.com/*
// @exclude      https://*stackoverflow.com/*
// @exclude      https://*serverfault.com/*
// @exclude      https://*superuser.com/*
// @exclude      https://*askubuntu.com/*
// @exclude      https://*mathoverflow.net/*
// @exclude      https://*.stackexchange.com/*
//
// @exclude      https://stackapps.com/*
// @exclude      https://stackoverflow.blog/*
//
// @exclude      https://chat.stackoverflow.com/*
// @exclude      https://chat.stackexchange.com/*
// @exclude      https://chat.meta.stackexchange.com/*
//
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';


    const darkgreen = '#002200';
    const darkblue = '#001122';
    const darkred = '#220000';


    const textColor = '#ccc';
    const textSelectionBgColor = '#aaa';
    const bgColor = '#222';
    const btnColor = '#333';
    const borderColor = '#555';


    GM_addStyle(`


/* Apply to all */
body,
body > * {
    background-image: none;
    background-color: ${bgColor};
}
*,
*:before,
*:after {
    background-color: ${bgColor};
    box-shadow: none;
    outline: none;
    text-shadow: none;
}
* {
    color: ${textColor};
    border-color: ${borderColor};
}
header, .header {
    border-bottom: 1px solid ${borderColor};
}
.btn,
.button,
button,
input[type="submit"],
input[type="button"],
input[type="reset"] {
    background-image: none;
    border-color: ${borderColor};
}
input::placeholder,
textarea::placeholder {
    color: ${textColor};
}
hr {
    background-color: ${borderColor};
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
button,
button *,
a img ~ *,
img + div,
div[class*="gradient"] {
    background-color: transparent;
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
body *[id*="footer"] > *,
body *[class*="sidebar"] > *,
body *[class*="footer"] > * {
    opacity: 0.6;
    transition: opacity 0.2s ease;
}
body footer:hover > *,
body *[id*="sidebar"]:hover > *,
body *[id*="footer"]:hover > *,
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



/* ===== SITE-SPECIFIC ===== */


/* YouTube */
#masthead {
    border-bottom: 1px solid ${borderColor};
}
.yt-icon-container svg *:not(polygon) {
    fill: ${textColor};
}
.ytd-searchbox-spt,
ytd-thumbnail *,
.ytp-progress-bar-container *,
.ytp-chrome-bottom,
.ytp-chrome-bottom *,
.ytp-play-button:not(.ytp-play-button-playlist)::before,
.ytp-fullscreen-button:after {
    background-color: transparent;
}
.ytp-swatch-background-color {
    background-color: #f00;
}
.ytp-load-progress {
    background: rgba(255,255,255,.4);
}
.ytp-hover-progress,
.ytp-hover-progress-light {
    background: rgba(255,255,255,.5);
}
.ytd-app {
    background-color: ${bgColor};
}


/* Github */
.bg-blue-light {
    background-color: ${bgColor};
}
.list-topics-container .topic-tag {
    background-color: #444;
}
.dropdown-menu:after,
summary:before,
summary > *,
.blob-code-addition *,
.blob-code-deletion * {
    background-color: transparent;
}
.dropdown-caret {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
}
.blob-code-addition {
    background-color: ${darkgreen};
}
.blob-code-deletion {
    background-color: ${darkred};
}


`.replace(/;/g, ' !important;'));


    // Custom stuff that requires JS goes here (element attribute changes, class additions/removals, etc.)
    document.addEventListener('DOMContentLoaded', function() {

    });


})();

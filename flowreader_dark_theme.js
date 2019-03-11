// ==UserScript==
// @name         Flowreader dark theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Dark theme for flowreader.com
// @author       https://github.com/layderv
// @match        https://flowreader.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const selectors_map = [
        {name: "body", style: "backgroundColor", color: "#19252e"},
        {name: "#body", style: "backgroundColor", color: "#19252e"},
        {name: ".column>.heading", style: "backgroundColor", color: "#19252e"},
        {name: ".item", style: "backgroundColor", color: "#19252e"},
        {name: "#top-in", style: "backgroundColor", color: "#19252e"},
        {name: "#top", style: "backgroundColor", color: "#19252e"},
      	{name: ".column-inner", style: "backgroundColor", color: "#19252e"},
        {name: ".readabilityOpened .contentHolder", style: "backgroundColor", color: "#19252e"},
        {name: "#body.compact .column.primary .item:not(.focused):hover, #body.compact .column.single .item:not(.focused):hover", style: "backgroundColor", color: "#19252e"},
        {name: ".categories .category .context", style: "backgroundColor", color: "#19252e"},
        {name: "#body.compact .column.primary .item.rss .heading .title a:after, " +
         "#body.compact .column.single .item.rss .heading .title a:after, .external-link:after, .icon, .item.rss .body .item-title a:after, [class*=' icon-'], [class^=icon-]", style: "backgroundColor", color: "#19252e"},
        {name: ".form-control", style: "backgroundColor", color: "#ccc"},
        {name: ".btn", style: "backgroundColor", color: "#ccc"},
        
        {name: ".item .body", style: "color", color: "#999"},
        {name: ".item.rss .body .item-title a", style: "color", color: "#00a3ec"},
        {name: "#body.compact .column.primary .item:not(.focused) .heading .title a, #body.compact .column.single .item:not(.focused) .heading .title a", style: "color", color: "#7e8c9a"},
        {name: ".item.twitter .heading .username", style: "color", color: "#0077ad"},
        {name: ".suggestions .topic .channels .channels-box .addOrRemove", style: "color", color: "#999"},
        {name: ".suggestions .cover h2", style: "color", color: "#999"},
    ];

    function activate_colors() {
      for (let sel of selectors_map) {
        for (let el of document.querySelectorAll(sel.name)) {
             el.style[sel.style] = sel.color;
         }
      }
    }
    const interval = 2 * 1000;
    setInterval(activate_colors, interval);
    activate_colors();
})();

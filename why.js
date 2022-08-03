// ==UserScript==
// @name         we are losers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  actually, why use this???
// @author       You
// @match        https://asset.party/~get
// @icon         https://www.google.com/s2/favicons?sz=64&domain=asset.party
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();setInterval(takekey,100);
    let key = 0
    function takekey(){
        let buttons = document.getElementsByTagName("button")
        for( var i = 0; i < buttons.length; i++ ){
            if ( !buttons[i].disabled ) {
                buttons[i].setAttribute("id","claimthisbutton");
                var target = document.getElementById ("claimthisbutton");
                var event = document.createEvent ('MouseEvents');
                event.initEvent ('dblclick', true, true);
                target.dispatchEvent(event);
                buttons[i].click()
                buttons[i].click()
                key++;
            }
        }

        if ( key == 0) {
            console.log("key not found");
        }
    }
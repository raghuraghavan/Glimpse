﻿/*(import:jquery-1.6.3.min.js)*/

var glimpse = (function ($, scope) {
    var //Private
        elements = {},
        template = {},
        config = {
            path : '' 
        }
        settings = {
            height : 250
        },
/*(import:glimpse.core.util.js|2)*/,
/*(import:glimpse.core.pubsub.js|2)*/,
/*(import:glimpse.core.plugin.js|2)*/,
/*(import:glimpse.core.data.js|2)*/,
/*(import:glimpse.core.process.js|2)*/,
/*(import:glimpse.core.state.js|2)*/, 
/*(import:glimpse.core.template.js|2)*/,
/*(import:glimpse.controller.render.js|2)*/,
/*(import:glimpse.controller.shell.js|2)*/,
/*(import:glimpse.controller.sizer.js|2)*/,
/*(import:glimpse.controller.tollbar.js|2)*/, 
/*(import:glimpse.render.engine.js|2)*/, 
        init = function () {
            pubsub.publish('state.init'); 
            pubsub.publish('state.build');  
            pubsub.publish('state.render'); 
        };
        

    return { 
        init : init,
        pubsub : pubsub,
        plugin : plugin,
        elements : elements,
        render : renderEngine
    };
}($Glimpse, $Glimpse(document)));

$Glimpse(document).ready(function() {
    var start = new Date().getTime();

    glimpse.init();

    var end = new Date().getTime(); 
    console.log('Total execution time: ' + (end - start));
});
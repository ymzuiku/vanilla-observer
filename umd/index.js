!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).micoStore=t()}(this,function(){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};return function(e){var i={state:e,events:new Set,listen:function(e,t){return t&&(e.getMemo=t,e.lastMemo=t(i.state)),i.events.has(e)||i.events.add(e),function(){i.events.delete(e)}},unListen:function(e){i.events.delete(e)},setState:function(e){i.state=t({},i.state,e),i.update()},beforeUpdate:function(e){e&&e(i.state)},connectElement:function(e,t,n){if(document&&document.createElement){e.id||(e.id=Date.now().toString(32)+Math.random().toString(32).slice(2));var o=e.id;e.__micoStoreId=o;var a=i.listen(function(e,t){var n=document.getElementById(o);n?n.__micoStoreEvent(e,t):a()},n)}},update:function(e){i.beforeUpdate(e),i.events.forEach(function(e){if(e.getMemo&&e.lastMemo){for(var t=e.getMemo(i.state),n=!1,o=0;o<e.lastMemo.length;o++){if(e.lastMemo[o]!==t[o]){n=!0;break}}n&&e(i.state,e.lastMemo)}else e(i.state,e.lastMemo)})}};return i}});
//# sourceMappingURL=index.js.map
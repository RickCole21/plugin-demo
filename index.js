// myPlugin.js
(function (definition) {
  "use strict";
  // CommonJS
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = definition();
    // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(definition);
    // <script>
  } else if (typeof window !== "undefined" || typeof self !== "undefined") {
    // Prefer window over self for add-on scripts. Use self for
    // non-windowed contexts.
    var global = typeof window !== "undefined" ? window : self;

    // initialize myPlugin as a global.
    global.myPlugin = definition();

  } else {
    throw new Error("This environment was not anticipated by myPlugin,Please file a bug.");
  }
})(function () {

  function sleep(long) {
    var start = Date.now();
    while ((Date.now() - start) < long) {
    }
    console.log('finish!');
  }

  function myPlugin() {
    return {
      sleep: sleep
    }
  }

  return myPlugin();
})

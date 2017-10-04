// Swiper.js
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

    // initialize Swiper as a global.
    global.Swiper = definition();

  } else {
    throw new Error("This environment was not anticipated by Swiper,Please file a bug.");
  }
})(function () {

  function Swiper(element) {
    var startX,
      startY,
      startTime;

    element.addEventListener('touchstart', function (e) {
      var touch = e.targetTouches[0];
      startX = touch.screenX;
      startY = touch.screenY;
      startTime = new Date();
    })

    element.addEventListener('touchend', function (e) {
      var touch = e.changedTouches[0];
      var movedX = touch.screenX - startX;
      var movedY = touch.screenY - startY;

      var movedTime = new Date - startTime;
      movedXLength = movedX < 0 && -movedX || movedX;
      movedYLength = movedY < 0 && -movedY || movedY;

      if (!(movedXLength < 45 || movedYLength > 45))
        if (movedX > 0 && movedTime <= 200 && movedXLength >= 45) {
          alert('向右滑动')
          console.log("向右滑动");
        } else if (movedX < 0 && movedTime <= 200 && movedXLength >= 45) {
          alert('向左滑动')
          console.log('向左滑动');
        }

    })
  }

  return Swiper;
})

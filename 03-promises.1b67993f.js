!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a);var o=a("6JpON");function r(e,n){return new Promise((function(t,i){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(n.target.elements.delay.value),i=parseInt(n.target.elements.step.value),a=parseInt(n.target.elements.amount.value);if(t<=0||isNaN(t))e(o).Notify.warning("Invalid delay value: ".concat(t));else if(i<=0||isNaN(i))e(o).Notify.warning("Invalid delay value: ".concat(i));else if(a<=0||isNaN(a))e(o).Notify.warning("Invalid delay value: ".concat(a));else for(var l=t,s=1;s<=a;s++)r(s,l).then((function(n){var t=n.position,i=n.delay;e(o).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(i,"ms"))}),(function(n){var t=n.position,i=n.delay;e(o).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(i,"ms"))})),l+=i}))}();
//# sourceMappingURL=03-promises.1b67993f.js.map
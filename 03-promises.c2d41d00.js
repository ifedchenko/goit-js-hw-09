function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r);var o=r("7Y9D8");function a(e,t){return new Promise(((n,i)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const n=parseInt(t.target.elements.delay.value),i=parseInt(t.target.elements.step.value),r=parseInt(t.target.elements.amount.value);if(n<=0||isNaN(n))return void e(o).Notify.warning(`Invalid delay value: ${n}`);if(i<=0||isNaN(i))return void e(o).Notify.warning(`Invalid delay value: ${i}`);if(r<=0||isNaN(r))return void e(o).Notify.warning(`Invalid delay value: ${r}`);let l=n;for(let t=1;t<=r;t++)a(t,l).then((({position:t,delay:n})=>{e(o).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}),(({position:t,delay:n})=>{e(o).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),l+=i}));
//# sourceMappingURL=03-promises.c2d41d00.js.map

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>function(t){t.preventDefault();const o=Number(t.target.amount.value),n=Number(t.target.delay.value),r=Number(t.target.step.value);!function(t,o,n){let r=o;for(let o=1;o<=t;o+=1,r+=n)console.log(r),l(o,r).then((({position:t,delay:o})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`Rejected promise ${t} in ${o}ms`)}))}(o,n,r)}(t)));
//# sourceMappingURL=03-promises.56ee45da.js.map
const t={btnStartChangeColor:document.querySelector("[data-start]"),btnStopChangeColor:document.querySelector("[data-stop]")};t.btnStartChangeColor.addEventListener("click",(function(){const o=document.querySelector("body");e=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.btnStartChangeColor.setAttribute("disabled",!0),t.btnStopChangeColor.removeAttribute("disabled")})),t.btnStopChangeColor.setAttribute("disabled",!0),t.btnStopChangeColor.addEventListener("click",(function(){clearInterval(e),t.btnStartChangeColor.removeAttribute("disabled"),t.btnStopChangeColor.setAttribute("disabled",!0)}));let e=null;
//# sourceMappingURL=01-color-switcher.7a5ec8d1.js.map
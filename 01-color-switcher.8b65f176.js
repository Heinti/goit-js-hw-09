!function(){var t,o={startActiont:document.querySelector("[data-start]"),stopAction:document.querySelector("[data-stop]"),body:document.querySelector("body")};o.startActiont.addEventListener("click",(function(){o.startActiont.disabled=!0,o.stopAction.disabled=!1,t=setInterval((function(){o.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.stopAction.addEventListener("click",(function(){clearInterval(t),o.startActiont.disabled=!1,o.stopAction.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.8b65f176.js.map
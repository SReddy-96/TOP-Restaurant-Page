(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>g});var o=t(354),r=t.n(o),a=t(314),i=t.n(a),A=t(417),c=t.n(A),s=new URL(t(26),t.b),d=new URL(t(823),t.b),p=new URL(t(493),t.b),l=i()(r()),m=c()(s),u=c()(d),f=c()(p);l.push([n.id,`/* CSS reset */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\n/* --- */\n\n/* fonts */\n@font-face {\n    font-family: 'pacifico';\n    src: url(${m}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(${u}) format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* --- */\n\n:root {\n    --pastel-red: #C23B22;\n}\n\nbody {\n    background: url(${f}) rgba(0, 0, 0, 0.6);\n    background-size: cover;\n    background-position: center;\n    color: white;\n    background-blend-mode: multiply;\n    font-family: 'Montserrat', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n}\n\n/* nav */\nheader {\n    text-align: center;\n    height: 10vh;\n}\n\nnav {\n    padding: 2rem 2rem;\n}\n\n.nav-button {\n    border: none;\n    background: none;\n    color: white;\n    margin: 0rem 0.5rem;\n    cursor: pointer;\n}\n\n.nav-button:hover {\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-bottom: 0.5rem;\n}\n\n.nav-button:active {\n    font-weight: normal;\n    border-bottom: none;\n    padding-bottom: 0rem;\n}\n\n.active-page {\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-bottom: 0.5rem;\n}\n\n/* home page */\n.home {\n    height: 85vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    font-size: 3.6rem;\n    margin-bottom: 1rem;\n    font-family: 'pacifico';\n}\n\n.home p {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\n\n#order-now {\n    background-color: white;\n    color: var(--pastel-red);\n    border: 1px solid black;\n    border-radius: 12px;\n    padding: 0.5rem 1rem;\n    display: flex;\n    align-items: center;\n    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);\n    font-family: 'pacifico';\n    cursor: pointer;\n}\n\n#order-now:active {\n    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .8), inset -1px -1px 1px rgba(255, 255, 255, .4);\n}\n\n/* --- */\n\n/* menu */\n\n.menuContent {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 350px);\n    justify-content: center;\n    gap: 1rem;\n    padding: 1rem;\n    height: 100%;\n}\n\n.menuHeadings {\n    grid-column: -1/1;\n    text-align: center;\n    margin-top: 1rem;\n}\n\n.card {\n    background-color: white;\n    border: 1px solid rgba(0, 0, 0, 0.411);\n    border-radius: 10px;\n    color: black;\n    padding: 0.5rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.card h3 {\n    font-size: 1.6em;\n}\n\n.card p {\n    font-size: 1em;\n}\n\n.priceButton {\n    align-self: end;\n    padding: 5px 10px;\n    background-color: var(--pastel-red);\n    color: white;\n    border-radius: 10px;\n    border: none;\n    margin-top: 5px;\n    color: transparent;\n    text-shadow: 0 0 0 white;\n    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);\n    cursor: pointer;\n}\n\n.priceButton:active {\n    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .8), inset -1px -1px 1px rgba(255, 255, 255, .4);\n}\n\n/* --- */\n\n/* about */\n\n.aboutContent {\n    min-height: 90vh;\n    padding: 1rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.aboutTitle {\n    font-size: 4em;\n    font-family: 'pacifico';\n    margin: 1rem 0;\n}\n\n.aboutDescription {\n    width: 80%;\n    background-color: hsla(0, 0%, 0%, 0.75);\n    padding: 1rem;\n    border-radius: 20px;\n}\n\n/* --- */\n\n/* contact */\n\n.contactWrapper {\n    padding: 1rem;\n}\n\n.contactTitle {\n    font-size: 2em;\n    font-family: 'pacifico';\n    margin-bottom: 1rem;\n}\n\n.howWrapper,\n.whenWrapper {\n    background-color: hsla(0, 0%, 0%, 0.75);\n    padding: 1rem;\n    border-radius: 20px;\n    margin-top: 1rem;\n}\n\n/* -- */\n\n/* footer */\n\n.footer {\n    height: 5vh;\n    background-color: hsla(0, 0%, 0%, 0.75);\n    font-size: 0.8em;\n    padding: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* --- */\n\n/* desktop */\n\n@media only screen and (min-width: 700px) {\n    .contactWrapper {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        justify-items: center;\n        align-items: center;\n        gap: 100px;\n    }\n\nh1{\n    font-size: 7rem;\n    margin-bottom: 1rem;\n    font-family: 'pacifico';\n\n}\n}\n\n/* --- */`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["/* CSS reset */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\n/* --- */\n\n/* fonts */\n@font-face {\n    font-family: 'pacifico';\n    src: url('./fonts/Pacifico-Regular.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url('./fonts/Montserrat-VariableFont_wght.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* --- */\n\n:root {\n    --pastel-red: #C23B22;\n}\n\nbody {\n    background: url('./home-background.jpg') rgba(0, 0, 0, 0.6);\n    background-size: cover;\n    background-position: center;\n    color: white;\n    background-blend-mode: multiply;\n    font-family: 'Montserrat', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n}\n\n/* nav */\nheader {\n    text-align: center;\n    height: 10vh;\n}\n\nnav {\n    padding: 2rem 2rem;\n}\n\n.nav-button {\n    border: none;\n    background: none;\n    color: white;\n    margin: 0rem 0.5rem;\n    cursor: pointer;\n}\n\n.nav-button:hover {\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-bottom: 0.5rem;\n}\n\n.nav-button:active {\n    font-weight: normal;\n    border-bottom: none;\n    padding-bottom: 0rem;\n}\n\n.active-page {\n    font-weight: bold;\n    border-bottom: 1px solid white;\n    padding-bottom: 0.5rem;\n}\n\n/* home page */\n.home {\n    height: 85vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    font-size: 3.6rem;\n    margin-bottom: 1rem;\n    font-family: 'pacifico';\n}\n\n.home p {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\n\n#order-now {\n    background-color: white;\n    color: var(--pastel-red);\n    border: 1px solid black;\n    border-radius: 12px;\n    padding: 0.5rem 1rem;\n    display: flex;\n    align-items: center;\n    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);\n    font-family: 'pacifico';\n    cursor: pointer;\n}\n\n#order-now:active {\n    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .8), inset -1px -1px 1px rgba(255, 255, 255, .4);\n}\n\n/* --- */\n\n/* menu */\n\n.menuContent {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 350px);\n    justify-content: center;\n    gap: 1rem;\n    padding: 1rem;\n    height: 100%;\n}\n\n.menuHeadings {\n    grid-column: -1/1;\n    text-align: center;\n    margin-top: 1rem;\n}\n\n.card {\n    background-color: white;\n    border: 1px solid rgba(0, 0, 0, 0.411);\n    border-radius: 10px;\n    color: black;\n    padding: 0.5rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.card h3 {\n    font-size: 1.6em;\n}\n\n.card p {\n    font-size: 1em;\n}\n\n.priceButton {\n    align-self: end;\n    padding: 5px 10px;\n    background-color: var(--pastel-red);\n    color: white;\n    border-radius: 10px;\n    border: none;\n    margin-top: 5px;\n    color: transparent;\n    text-shadow: 0 0 0 white;\n    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);\n    cursor: pointer;\n}\n\n.priceButton:active {\n    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .8), inset -1px -1px 1px rgba(255, 255, 255, .4);\n}\n\n/* --- */\n\n/* about */\n\n.aboutContent {\n    min-height: 90vh;\n    padding: 1rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.aboutTitle {\n    font-size: 4em;\n    font-family: 'pacifico';\n    margin: 1rem 0;\n}\n\n.aboutDescription {\n    width: 80%;\n    background-color: hsla(0, 0%, 0%, 0.75);\n    padding: 1rem;\n    border-radius: 20px;\n}\n\n/* --- */\n\n/* contact */\n\n.contactWrapper {\n    padding: 1rem;\n}\n\n.contactTitle {\n    font-size: 2em;\n    font-family: 'pacifico';\n    margin-bottom: 1rem;\n}\n\n.howWrapper,\n.whenWrapper {\n    background-color: hsla(0, 0%, 0%, 0.75);\n    padding: 1rem;\n    border-radius: 20px;\n    margin-top: 1rem;\n}\n\n/* -- */\n\n/* footer */\n\n.footer {\n    height: 5vh;\n    background-color: hsla(0, 0%, 0%, 0.75);\n    font-size: 0.8em;\n    padding: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* --- */\n\n/* desktop */\n\n@media only screen and (min-width: 700px) {\n    .contactWrapper {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        justify-items: center;\n        align-items: center;\n        gap: 100px;\n    }\n\nh1{\n    font-size: 7rem;\n    margin-bottom: 1rem;\n    font-family: 'pacifico';\n\n}\n}\n\n/* --- */"],sourceRoot:""}]);const g=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=o.base?c[0]+o.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var l=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var u=r(m,o);o.byIndex=A,e.splice(A,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},823:(n,e,t)=>{n.exports=t.p+"7e687123cd4528224ce5.ttf"},26:(n,e,t)=>{n.exports=t.p+"c0d735fc04154e03a691.ttf"},493:(n,e,t)=>{n.exports=t.p+"e9a923f66572c6a01149.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),A=t(659),c=t.n(A),s=t(56),d=t.n(s),p=t(540),l=t.n(p),m=t(113),u=t.n(m),f=t(208),g={};function h(n){const e=document.createElement("div"),t=document.createElement("h1"),o=document.createElement("p"),r=document.createElement("button");t.textContent="Nonna's Pizza",o.innerHTML="Authentic Italian Flavors, <br/> Wood-Fired to Perfection.",r.id="order-now",r.textContent="Order Now",e.append(t,o,r),e.className="home",n.append(e)}g.styleTagTransform=u(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals;const B=[[{menuHeader:"Pizza"},{title:"Margherita",description:"Mozzarella cheese, tomato, oregano",price:"£8.00"},{title:"American",description:"Mozzarella cheese, tomato, pepperoni sausage",price:"£9.50"},{title:"Toscana",description:"Mozzarella cheese, tomato, goat's cheese, spinach, rocket",price:"£10.50"}],[{menuHeader:"Starters"},{title:"Garlic Bread",description:"Freshly baked garlic bread with butter",price:"£3.50"},{title:"Bruschetta",description:"Grilled bread topped with diced tomatoes, garlic, basil, and olive oil",price:"£4.00"},{title:"Mixed Olives",description:"A selection of marinated olives",price:"£3.00"}],[{menuHeader:"Pasta"},{title:"Spaghetti Carbonara",description:"Spaghetti with pancetta, egg, Parmesan cheese, and black pepper",price:"£9.00"},{title:"Penne Arrabbiata",description:"Penne pasta in a spicy tomato sauce with garlic and chili",price:"£8.50"},{title:"Lasagna",description:"Layers of pasta with beef ragu, béchamel sauce, and Parmesan cheese",price:"£10.00"}],[{menuHeader:"Desserts"},{title:"Tiramisu",description:"Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",price:"£5.50"},{title:"Panna Cotta",description:"Creamy vanilla dessert served with a berry coulis",price:"£5.00"},{title:"Gelato",description:"Assorted flavors of Italian ice cream",price:"£4.00"}],[{menuHeader:"Drinks"},{title:"Coca-Cola",description:"330ml can",price:"£1.50"},{title:"San Pellegrino",description:"Sparkling mineral water, 500ml",price:"£2.00"},{title:"Espresso",description:"Strong Italian coffee",price:"£2.50"}]];function C(n){n.classList.add("menuContent");const e=document.createElement("h1");e.textContent="Menu",e.classList.add("menuHeadings"),n.append(e);for(let e=0;e<B.length;e++)for(let t=0;t<B[e].length;t++)if(0!==t){const o=document.createElement("div"),r=document.createElement("h3"),a=document.createElement("p"),i=document.createElement("button");r.textContent=B[e][t].title,a.textContent=B[e][t].description,i.textContent=`${B[e][t].price}  ➕`,i.classList.add("priceButton"),o.append(r,a,i),o.classList.add("card"),n.append(o)}else if(0===t){const o=document.createElement("h2");o.textContent=B[e][t].menuHeader,o.classList.add("menuHeadings"),n.append(o)}}document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("content"),e=document.getElementById("home"),t=document.getElementById("menu"),o=document.getElementById("about");h(n),e.classList.add("active-page"),n.className="",function(){const n=document.querySelector(".footer"),e=document.createElement("p");e.innerHTML="Nonna's Pizza &#169; 2024 by Steven Reddy ",n.append(e)}(),e.addEventListener("click",(function(){n.innerHTML="",n.className="",h(n),e.classList.add("active-page"),t.classList.remove("active-page"),o.classList.remove("active-page")})),t.addEventListener("click",(function(){n.innerHTML="",n.className="menuContent",C(n),t.classList.add("active-page"),e.classList.remove("active-page"),o.classList.remove("active-page")})),o.addEventListener("click",(function(){n.innerHTML="",n.className="aboutContent",function(n){const e=document.createElement("h2");e.textContent="About",e.classList.add("aboutTitle");const t=document.createElement("div");t.classList.add("aboutDescription"),t.innerHTML="Welcome to Nonna's Pizza, where every slice is a taste of authentic Italian tradition.<br/> Our family-owned restaurant was born from Nonna's kitchen, carrying on her time-honored recipes that have been passed down for generations. Using only the freshest ingredients and imported Italian tomatoes, we craft each pizza with the same love and care that Nonna put into her cooking. <br/> From our signature Margherita with fresh basil and buffalo mozzarella, to classic favorites like the Pepperoni and Nonna's Special with Italian sausage and roasted peppers, our wood-fired oven creates that perfect crispy-yet-chewy crust. <br/> Stop in and experience a slice of Italy right here in our neighborhood pizzeria. <br/> At Nonna's, we don't just make pizza - we create edible memories with every bite.";const o=document.createElement("h2");o.textContent="Contact Us",o.classList.add("aboutTitle");const r=document.createElement("div");r.classList.add("contactWrapper");const a=document.createElement("div");a.classList.add("whereWrapper");const i=document.createElement("h3");i.textContent="Where ",i.classList.add("contactTitle");const A=document.createElement("iframe");A.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36921437.33508413!2d-78.50514259999999!3d55.61061599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889ce68dfd821cf%3A0x5be84e5691b595a7!2zTm9ubmHigJlzIEhvdXNl!5e0!3m2!1sen!2skr!4v1718948171352!5m2!1sen!2skr",A.loading="lazy",A.referrerPolicy="no-referrer-when-downgrade",A.width="300",A.height="300",A.style.border=0,A.style.borderRadius="20px",a.append(i,A);const c=document.createElement("div");c.classList.add("howWrapper");const s=document.createElement("h3");s.classList.add("contactTitle"),s.textContent="How";const d=document.createElement("p");d.innerHTML="Phone: 0123-456-789 <br/> Email: nonnaspizza@gmail.com",c.append(s,d);const p=document.createElement("div");p.classList.add("whenWrapper");const l=document.createElement("h3");l.classList.add("contactTitle"),l.textContent="When";const m=document.createElement("p");m.innerHTML="Monday - Thursday: 12:00 - 21:00 <br/> Friday - Sunday: 10:00 - 22:00",p.append(l,m),r.append(a,c,p),n.append(e,t,o,r)}(n),o.classList.add("active-page"),e.classList.remove("active-page"),t.classList.remove("active-page")}))}))})();
//# sourceMappingURL=index.bundle.js.map
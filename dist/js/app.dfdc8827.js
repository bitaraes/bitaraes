(function(){"use strict";var t={6299:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("AppHeader"),e("div",{staticClass:"container"},[e("transition",{attrs:{name:"pageSlide",mode:"out-in"}},[e("router-view")],1)],1),e("AppFooter")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-header"},[e("div",{staticClass:"app-header__container"},[e("router-link",{staticClass:"app-header__name",attrs:{to:"/"}},[t._v(" Igor Bitarães ")]),e("nav",{staticClass:"menu"},[e("ul",{staticClass:"list"},t._l(t.filteredMenu,(function(n,r){return e("li",{key:r,staticClass:"list-item"},[e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.name))])],1)})),0)])],1),e("div",{staticClass:"m-menu"},[e("button",{staticClass:"open-menu",on:{click:function(e){e.stopPropagation(),t.navOpen=!t.navOpen}}},[e("span",{staticClass:"top"}),e("span",{staticClass:"mid"}),e("span",{staticClass:"bottom"})]),e("transition",{attrs:{name:"translateX"}},[e("nav",{directives:[{name:"show",rawName:"v-show",value:t.navOpen,expression:"navOpen"}],on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"m-menu__wrapper"},[e("ul",{staticClass:"m-menu__list"},t._l(t.filteredMenu,(function(n,r){return e("li",{key:r,staticClass:"m-menu__item"},[e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.name))])],1)})),0)])])])],1)])},s=[],u={data(){return{menu:[{name:"Skills",link:"/skills"},{name:"Projetos",link:"/projetos"},{name:"Contato",link:"/contato"}],events:["click","scroll"],navOpen:!1}},created(){this.events.forEach((t=>window.addEventListener(t,this.toggle)))},destroyed(){this.events.forEach((t=>window.removeEventListener(t,this.toggle)))},computed:{filteredMenu(){return this.menu.filter((t=>"Projetos"!=t.name))}},methods:{toggle(){this.navOpen&&(this.navOpen=!1)}}},c=u,l=n(1001),f=(0,l.Z)(c,a,s,!1,null,null,null),d=f.exports,p=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-footer"},[t._v("Desenvolvido por Igor "),e("span",[t._v("♥")])])}],m={},h=m,g=(0,l.Z)(h,p,v,!1,null,"6d2fc5be",null),b=g.exports,_={components:{AppHeader:d,AppFooter:b}},y=_,C=(0,l.Z)(y,o,i,!1,null,"1da86cf0",null),k=C.exports,w=n(2631);r.ZP.use(w.ZP);const O=[{path:"/",component:()=>n.e(394).then(n.bind(n,5394))},{path:"/skills",component:()=>n.e(555).then(n.bind(n,4555))},{path:"/contato",component:()=>n.e(341).then(n.bind(n,4341))}],P=new w.ZP({routes:O});var j=P,E=n(3494),A=n(4551),S=n(8429),N=n(8539),T=n(7749);r.ZP.config.productionTip=!1,r.ZP.component("font-awesome-icon",T.GN),E.vI.add(A.vnX,S.NCV,N.mRB),new r.ZP({router:j,render:t=>t(k)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{341:"9b5bc87c",394:"5007f95d",555:"59037316"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{341:"bf9072a8",394:"8d4e6c67",555:"d34b3c8a"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return o();t(r,s,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={341:1,394:1,555:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6299)}));r=n.O(r)})();
//# sourceMappingURL=app.dfdc8827.js.map
/*!
 * Fotorama 4.0.2 | MIT License
 */
(function(t,e,n,o){function i(t){var e="bez_"+n.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof n.easing[e]){var o=function(t,e){var n=[null,null],o=[null,null],i=[null,null],a=function(a,r){return i[r]=3*t[r],o[r]=3*(e[r]-t[r])-i[r],n[r]=1-i[r]-o[r],a*(i[r]+a*(o[r]+a*n[r]))},r=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;14>++o&&(e=a(n,0)-t,!(.001>Math.abs(e)));)n-=e/r(n);return n};return function(t){return a(s(t),1)}};n.easing[e]=function(e,n,i,a,r){return a*o([t[0],t[1]],[t[2],t[3]])(n/r)+i}}return e}function a(){}function r(t,e,n){return Math.max("number"!=typeof e?-1/0:e,Math.min("number"!=typeof n?1/0:n,t))}function s(t,e){return t.match(/-?\d+/g)["left"===e?4:5]}function u(t,e){return hn?Number(s(t.css("transform"),e)):Number(t.css(e).replace("px",""))}function l(t,e){var n={};return hn?n.transform="left"===e?"translate3d("+t+"px,0,0)":"translate3d(0,"+t+"px,0)":(n[e]=t,n["left"===e?"top":"left"]=0),n}function c(t){return{"transition-duration":t+"ms"}}function d(t,e){return t=Number((t+"").replace(e||"px","")),isNaN(t)?!1:t}function f(t){var e=d(t,"%");return e&&/%$/.test(t)?e:!1}function h(t){return d(t)||d(t,"%")?t:!1}function m(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}function p(t,e,n,o){return(t-(o||0))*(e+(n||0))}function v(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function g(t,e){return Math.floor(Math.random()*(e-t+1))+t}function y(t){var e=t.data();if(!e.transEnd){var n=t[0],o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};n.addEventListener(o[B.prefixed("transition")],function(t){var n=e.transProp;(n.match(t.propertyName)||n.match("all"))&&(e.transProp=n.replace(t.propertyName,""),e.onEndFn.call(this))}),e.transEnd=!0}}function b(t,e,n){var o,i=t.data();i.transProp=t.css("transition-property"),i.onEndFn=function(){o=!0,e.call(this)},y(t),clearTimeout(i.transTimeout),n&&(i.transTimeout=setTimeout(function(){o||(t.data().onEndFn=a,e.call(t[0]))},1.1*n))}function w(t,e){hn?(t.css(c(0)),b(t,a)):t.stop();var n=u(t,e);return t.css(l(n,e)),n}function x(t,e){return Math.round(t+(e-t)/1.5)}function _(){return _.protocol=_.protocol||("https://"===location.protocol?"https://":"http://"),_.protocol}function T(t){var n=e.createElement("a");return n.href=t,n}function C(t,e){if(t!==o){t=T(t);var n,i;if(t.host.match("youtube.com")&&t.search){if(n=t.search.split("v=")[1]){var a=n.indexOf("&");-1!==a&&(n=n.substring(0,a)),i="youtube"}}else"youtube.com"===t.host||"youtu.be"===t.host?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),i="youtube"):("vimeo.com"===t.host||"player.vimeo.com"===t.host)&&(i="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&i||!e||(n=t.href,i="custom"),n?{id:n,type:i}:!1}}function F(t,e,o,i){var a,r,s=t.video;return"youtube"===s.type?(r=_()+"img.youtube.com/vi/"+s.id+"/default.jpg",a=r.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===s.type?n.ajax({url:_()+"vimeo.com/api/v2/video/"+s.id+".json",dataType:"jsonp",success:function(n){t.thumbsReady=!0,M(e,{img:n[0].thumbnail_large,thumb:n[0].thumbnail_small},o,i)}}):t.thumbsReady=!0,{img:a,thumb:r}}function M(t,e,n,o){for(var i=0,a=t.length;a>i;i++){var r=t[i];if(r.i===n&&r.thumbsReady){o.splice(i,1,{i:n,video:r.video,videoReady:!0,caption:r.caption,img:r.img||e.img,thumb:r.thumb||e.thumb});break}}}function k(t){function e(t,e){var n=t.data(),o=t.children("img").eq(0),i=t.attr("href"),a=t.attr("src"),r=o.attr("src"),s=n.video,u=e?C(i,s===!0):!1;return u?i=!1:e&&(u=C(a,s===!0),u?a=!1:u=C(s,s)),{video:u,img:i||a||r,thumb:r||a||i,full:t.attr("data-full")||o.attr("data-full"),caption:t.attr("title")||o.attr("title"),fit:n.fit||o.data("fit"),id:t.attr("id")||o.attr("id")}}var o=[];return t.children().each(function(){var t=n(this),i=t.data();if(t.is("a, img"))i=e(t,!0);else{if(t.is(":empty"))return;i.html=this,i.caption=i.caption||t.attr("title")}o.push(i)}),o}function S(t){return 0===t.offsetWidth&&0===t.offsetHeight}function E(t,e,n){t()?e():setTimeout(function(){E(t,e)},n||100)}function P(t,e,n){var o=t.data(),i=o.measures;if(i&&(!o.last||o.last.mw!==i.width||o.last.mh!==i.height||o.last.mr!==i.ratio||o.last.mfw!==e.width__||o.last.mfh!==e.height__||o.last.mm!==n)){var a=i.width,s=i.height,u=e.width_/e.height_,l=i.ratio>=u,c=n===!0,d="contain"===n,f="cover"===n;l&&(c||d)||!l&&f?(a=r(e.width_,0,c?a:1/0),s=a/i.ratio):(l&&f||!l&&(c||d))&&(s=r(e.height_,0,c?s:1/0),a=s*i.ratio),t.css({width:Math.round(a),height:Math.round(s),marginLeft:Math.round(-a/2),marginTop:Math.round(-s/2)}),o.last={mw:i.width,mh:i.height,mr:i.ratio,mfw:e.width_,mfh:e.height_,mm:n}}}function $(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function N(t,e,n){return e===n?!1:e>=t?"left":t>=n?"right":"left right"}function j(t,e,n){if(!n)return!1;var o=Number(t);if(!isNaN(o))return o-1;for(var i=0,a=e.length;a>i;i++){var r=e[i];if(r.id===t){o=i;break}}return o}function z(t,e){e||(z.on=!0,location.replace("#"+t),clearTimeout(z.timeout),z.timeout=setTimeout(function(){z.on=!1},100))}function L(t,e,o){o=o||{},t.each(function(){var t,i=n(this),r=i.data();r.clickOn||(r.clickOn=!0,n.extend(q(i,{onStart:function(e){t=e,(o.onStart||a).call(this,e)},onMove:o.onMove||a,onEnd:function(n){n.moved||o.tail.checked||e.call(this,t)}}),o.tail))})}function H(){return!1}function D(t){return t.each(function(){n(this).off("mousedown mousemove mouseup").on("mousedown mousemove mouseup",H),dn&&(this.removeEventListener("touchstart",H),this.removeEventListener("touchmove",H),this.removeEventListener("touchend",H),this.addEventListener("touchstart",H),this.addEventListener("touchmove",H),this.addEventListener("touchend",H))})}function W(t,e){var i=Math.round(e.pos),r=e.onEnd||a;e.overPos!==o&&e.overPos!==e.pos&&(i=e.overPos,r=function(){W(t,n.extend({},e,{overPos:e.pos,time:Math.max(vn,e.time/2)}))});var s=l(i,e._pos);hn?(t.css(c(e.time)).css(s),e.time>10?b(t,r,e.time):r()):t.stop().animate(s,e.time,Pn,r)}function A(t,e,o){var i=t,r=e,s="crossfade"===o.method;A.$el1=t=t||n(t),A.$el2=e=e||n(e);var u=function(){u.done||A.$el1!==t||A.$el2!==e||(t.removeClass(je),e.removeClass(Ne),(o.onEnd||a)(),u.done=!0)},l=c(o.time),d=c(0),f={opacity:0},h={opacity:1};t.stop().css(d).addClass(je).removeClass(Ne),e.stop().css(d).addClass(Ne).removeClass(je),hn?(r&&t.css(s?f:h),setTimeout(function(){t.css(l).css(h),e.css(l).css(f)},4),o.time>10&&(i||r)?i?b(t,u,o.time):r&&b(e,u,o.time):u()):(r&&t.stop().fadeTo(0,s?0:1),t.stop().fadeTo(o.time,1,u),e.stop().fadeTo(o.time,0,u),i||r||u())}function I(t,e){t._x=e?t.touches[0].pageX:t.pageX,t._y=e?t.touches[0].pageY:t.pageY}function q(t,e){function i(t){return h=n(t.target),v=!1,u||d||t.touches&&t.touches.length>1||t.which>1||y.prevent||Z&&Z.type!==t.type&&ee||(v=e.select&&h.is(e.select,g))?y.prevent!==!0||v:(p=t.type.match("touch"),I(t,p),y.checked=l=f=!1,Z=t,te=t.type.replace(/down|start/,"move"),c=t,m=y.control,(e.onStart||a).call(g,t,{control:m,$target:h}),u=d=!0,p||t.preventDefault(),o)}function r(t){if(!u||t.touches&&t.touches.length>1)return s(),o;if(te===t.type){I(t,p);var n=Math.abs(t._x-c._x),i=Math.abs(t._y-c._y),r=n-i,d=r>=3,h=-3>=r;f||(f=!(y.noMove||!d&&!h)),p&&!y.checked?((d||h)&&(y.checked=!0,l=d),(!y.checked||l)&&t.preventDefault()):!p||l?(t.preventDefault(),(e.onMove||a).call(g,t)):u=!1,y.checked=y.checked||d||h}}function s(t){d=y.control=!1,u&&(t&&t.preventDefault&&t.preventDefault(),ee=!0,clearTimeout(ne),ne=setTimeout(function(){ee=!1},1e3),(e.onEnd||a).call(g,{moved:!!f,$target:h,control:m,startEvent:c}),u=!1)}var u,l,c,d,f,h,m,p,v,g=t[0],y={};return dn&&(g.addEventListener("touchstart",i),g.addEventListener("touchmove",r),g.addEventListener("touchend",s)),t.on("mousedown",i),cn.on("mousemove",r).on("mouseup",s),t.on("click","a",function(t){y.checked&&t.preventDefault()}),y}function O(t,e){function o(n){c=d=n[Tn],p=[[(new Date).getTime(),c]],f=h=w(t,xn),(e.onStart||a).call(F,n,{pos:f})}function i(t,e){g=M.minPos,y=M.maxPos,b=M.snap,_=t.altKey,C=!1,T=e.control,T||o(t)}function s(n){T&&(T=!1,o(n)),d=n[Tn],p.push([(new Date).getTime(),d]),h=f-(c-d),m=N(h,g,y),g>=h?h=x(h,g):h>=y&&(h=x(h,y)),k.noMove||(t.css(l(h,xn)),C||(C=!0,J.addClass("grabbing"))),(e.onMove||a).call(F,n,{pos:h,edge:m})}function u(t){if(!T){J.removeClass("grabbing"),v=(new Date).getTime();for(var n,o,i,s,u,l,c,m,w,x=v-pn,C=null,M=vn,k=e.friction,S=p.length-1;S>=0;S--){if(n=p[S][0],o=Math.abs(n-x),null===C||i>o)C=n,s=p[S][1];else if(C===x||o>i)break;i=o}c=r(h,g,y);var E=s-d,P=E>=0,$=v-C,N=pn>=$&&h!==f&&c===h;b&&(c=r(Math[N?P?"floor":"ceil":"round"](h/b)*b,g,y),g=y=c),N&&(b||c===h)&&(w=-(E/$),M*=r(Math.abs(w),e.timeLow,e.timeHigh),u=Math.round(h+w*M/k),b||(c=u),(!P&&u>y||P&&g>u)&&(l=P?g:y,m=u-l,b||(c=l),m=r(c+.03*m,l-50,l+50),M=Math.abs((h-m)/(w/k)))),M*=_?10:1,(e.onEnd||a).call(F,{pos:h,newPos:c,overPos:m,time:M,moved:t.moved,$target:t.$target,startEvent:t.startEvent})}}var c,d,f,h,m,p,v,g,y,b,_,T,C,F=t[0],M=t.data(),k={};return k=n.extend(q(e.$wrap,{onStart:i,onMove:s,onEnd:u,select:e.select,control:e.control}),k)}var R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},K=RegExp("[&<>\"'/]","g"),V={escape:function(t){return null==t?"":(""+t).replace(K,function(t){return R[t]})}},B=function(t,e,n){function o(t){g.cssText=t}function i(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var o in t){var i=t[o];if(!a(i,"-")&&g[i]!==n)return"pfx"==e?i:!0}return!1}function s(t,e,o){for(var a in t){var r=e[t[a]];if(r!==n)return o===!1?t[a]:i(r,"function")?r.bind(o||e):r}return!1}function u(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+w.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?r(a,e):(a=(t+" "+x.join(o+" ")+o).split(" "),s(a,e,n))}var l,c,d,f="2.6.2",h={},m=e.documentElement,p="modernizr",v=e.createElement(p),g=v.style,y=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),b="Webkit Moz O ms",w=b.split(" "),x=b.toLowerCase().split(" "),_={},T=[],C=T.slice,F=function(t,n,o,i){var a,r,s,u,l=e.createElement("div"),c=e.body,d=c||e.createElement("body");if(parseInt(o,10))for(;o--;)s=e.createElement("div"),s.id=i?i[o]:p+(o+1),l.appendChild(s);return a=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),l.id=p,(c?l:d).innerHTML+=a,d.appendChild(l),c||(d.style.background="",d.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),r=n(l,t),c?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=u),!!r},M={}.hasOwnProperty;d=i(M,"undefined")||i(M.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return M.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=C.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var a=new i,r=e.apply(a,n.concat(C.call(arguments)));return Object(r)===r?r:a}return e.apply(t,n.concat(C.call(arguments)))};return o}),_.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:F(["@media (",y.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},_.csstransforms3d=function(){var t=!!u("perspective");return t&&"webkitPerspective"in m.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},_.csstransitions=function(){return u("transition")};for(var k in _)d(_,k)&&(c=k.toLowerCase(),h[c]=_[k](),T.push((h[c]?"":"no-")+c));return h.addTest=function(t,e){if("object"==typeof t)for(var o in t)d(t,o)&&h.addTest(o,t[o]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(m.className+=" "+(e?"":"no-")+t),h[t]=e}return h},o(""),v=l=null,h._version=f,h._prefixes=y,h._domPrefixes=x,h._cssomPrefixes=w,h.testProp=function(t){return r([t])},h.testAllProps=u,h.testStyles=F,h.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},h}(this,this.document),X={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},U="webkit moz o ms khtml".split(" ");if(e.cancelFullScreen!==o)X.ok=!0;else for(var Q=0,Y=U.length;Y>Q;Q++)if(X.prefix=U[Q],e[X.prefix+"CancelFullScreen"]!==o){X.ok=!0;break}X.ok&&(X.event=X.prefix+"fullscreenchange",X.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},X.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},X.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var G,J,Z,te,ee,ne,oe,ie="fotorama",ae="fullscreen",re=ie+"__wrap",se=re+"--not-ready",ue=re+"--css3",le=re+"--video",ce=re+"--fade",de=re+"--slide",fe=re+"--touch",he=ie+"__stage",me=he+"__frame",pe=me+"--video",ve=he+"__shaft",ge=he+"--only-active",ye=ie+"__arr",be=ye+"--disabled",we=ye+"--prev",xe=ye+"--next",_e=ye+"__arr",Te=ie+"__nav",Ce=Te+"-wrap",Fe=Te+"__shaft",Me=Te+"--dots",ke=Te+"--thumbs",Se=Te+"__frame",Ee=Se+"--dot",Pe=Se+"--thumb",$e=ie+"__fade",Ne=$e+"-front",je=$e+"-rear",ze=ie+"__shadow",Le=ze+"--left",He=ze+"--right",De=ze+"s",We=De+"--left",Ae=De+"--right",Ie=ie+"__active",qe=ie+"__select",Oe=ie+"--hidden",Re=ie+"--fullscreen",Ke=ie+"__fullscreen-icon",Ve=ie+"__error",Be=ie+"__loading",Xe=ie+"__loaded",Ue=Xe+"--full",Qe=Xe+"--img",Ye=ie+"__load",Ge=ie+"__img",Je=Ge+"--full",Ze=ie+"__dot",tn=ie+"__thumb",en=tn+"-border",nn=ie+"__html",on=ie+"__video",an=on+"-play",rn=on+"-close",sn=ie+"__caption",un=sn+"__inner",ln=n(t),cn=n(e),dn=B.touch,fn="quirks"===e.location.hash.replace("#",""),hn=B.csstransforms3d&&B.csstransitions&&!fn,mn=X.ok,pn=300,vn=333,gn="#777",yn=5e3,bn=2,wn=64,xn="left",_n="top",Tn="_x",Cn="width",Fn=Cn+"_",Mn="height",kn=Mn+"_",Sn=500,En=333,Pn=i([.1,0,.25,1]),$n="{{X}}",Nn='<div class="fotorama__video"><iframe src="'+$n+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>',jn={vimeo:"http://player.vimeo.com/video/"+$n+"?autoplay=1&amp;badge=0",youtube:"http://www.youtube.com/embed/"+$n+"?autoplay=1",custom:$n};(function(t,e,n){function o(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function i(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function a(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),a=.01+100*(n/o),r=Math.max(1-(1-t)/e*(100-a),t),s=c.substring(0,c.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return f[i]||(h.insertRule("@"+u+"keyframes "+i+"{"+"0%{opacity:"+r+"}"+a+"%{opacity:"+t+"}"+(a+.01)+"%{opacity:1}"+(a+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+r+"}"+"}",h.cssRules.length),f[i]=1),i}function r(t,e){var o,i,a=t.style;if(a[e]!==n)return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),i=0;d.length>i;i++)if(o=d[i]+e,a[o]!==n)return o}function s(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function u(t){for(var e=1;arguments.length>e;e++){var o=arguments[e];for(var i in o)t[i]===n&&(t[i]=o[i])}return t}function l(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var c,d=["webkit","Moz","ms","O"],f={},h=function(){var t=o("style",{type:"text/css"});return i(e.getElementsByTagName("head")[0],t),t.sheet||t.styleSheet}(),m={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"};oe=function(t){return this.spin?(this.opts=u(t||{},oe.defaults,m),n):new oe(t)},oe.defaults={},u(oe.prototype,{spin:function(t){this.stop();var e,n,i=this,a=i.opts,r=i.el=s(o(0,{className:a.className}),{position:"relative",width:0,zIndex:a.zIndex}),u=a.radius+a.length+a.width;if(t&&(t.insertBefore(r,t.firstChild||null),n=l(t),e=l(r),s(r,{left:("auto"==a.left?n.x-e.x+(t.offsetWidth>>1):parseInt(a.left,10)+u)+"px",top:("auto"==a.top?n.y-e.y+(t.offsetHeight>>1):parseInt(a.top,10)+u)+"px"})),r.setAttribute("aria-role","progressbar"),i.lines(r,i.opts),!c){var d=0,f=a.fps,h=f/a.speed,m=(1-a.opacity)/(h*a.trail/100),p=h/a.lines;(function v(){d++;for(var t=a.lines;t;t--){var e=Math.max(1-(d+t*p)%h*m,a.opacity);i.opacity(r,a.lines-t,e,a)}i.timeout=i.el&&setTimeout(v,~~(1e3/f))})()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=n),this},lines:function(t,e){function n(t,n){return s(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*u+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var r,u=0;e.lines>u;u++)r=s(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:c&&a(e.opacity,e.trail,u,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&i(r,s(n("#000","0 0 4px #000"),{top:"2px"})),i(t,i(r,n(e.color,"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(t,e,n){t.childNodes.length>e&&(t.childNodes[e].style.opacity=n)}}),function(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=s(o("group"),{behavior:"url(#default#VML)"});!r(e,"transform")&&e.adj?(h.addRule(".spin-vml","behavior:url(#default#VML)"),oe.prototype.lines=function(e,n){function o(){return s(t("group",{coordsize:l+" "+l,coordorigin:-u+" "+-u}),{width:l,height:l})}function a(e,a,r){i(d,i(s(o(),{rotation:360/n.lines*e+"deg",left:~~a}),i(s(t("roundrect",{arcsize:n.corners}),{width:u,height:n.width,left:n.radius,top:-n.width>>1,filter:r}),t("fill",{color:n.color,opacity:n.opacity}),t("stroke",{opacity:0}))))}var r,u=n.length+n.width,l=2*u,c=2*-(n.width+n.length)+"px",d=s(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(r=1;n.lines>=r;r++)a(r,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(r=1;n.lines>=r;r++)a(r);return i(e,d)},oe.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&i.childNodes.length>e+o&&(i=i.childNodes[e+o],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):c=r(e,"animation")}()})(t,e),jQuery.Fotorama=function(i,a){function s(){n.each(Xn,function(t,e){if(!e.i){e.i=Fo++;var n="string"==typeof e.video&&C(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=F(e,Xn,Fo,xo),M(Xn,{img:o.img,thumb:o.thumb},Fo,xo)}}})}function u(){Xn=xo.data=a.data&&"object"==typeof a.data?a.data:Xn||k(i),Un=xo.size=Xn.length,s(),Yo=H(Yo),ne.done=!1,Un?u.called||(u.called=!0,i.html(Eo)):xo.destroy()}function y(){ei.noMove=2>Un||Gn||co}function b(t){t===!0&&(t=""),a.autoplay=Math.max(Number(t)||yn,3*a.transitionDuration)}function x(t){return t?"add":"remove"}function _(){io=a.loop&&Un>2,co="crossfade"===a.transition||"dissolve"===a.transition;var t={add:[],remove:[]};Un>1?(ao=a.nav,ro="top"===a.navPosition,so=a.arrows,t.remove.push(qe)):ao=so=!1,a.autoplay&&b(a.autoplay),fo=d(a["thumb"+m(Cn)])||wn,ho=d(a["thumb"+m(Mn)])||wn,y(),zn(a),$(ko,n.Fotorama.jst.style({thumbWidth:fo,thumbHeight:ho,thumbMargin:bn,stamp:To})),ao===!0||"dots"===ao?(Do.addClass(Me).removeClass(ke),Y(Un,"navDot")):"thumbs"===ao?(Do.addClass(ke).removeClass(Me),Y(Un,"navThumb")):(ao=!1,Do.removeClass(ke+" "+Me)),uo=a.allowFullScreen,i.insertAfter(So).removeClass(Oe),ao&&ro?Ho.insertBefore(Po):Ho.insertAfter(Po),uo?(Uo.appendTo(Po),lo=mn&&"native"===uo):(Uo.detach(),lo=!1),t[x(co)].push(ce),t[x(!co)].push(de),so?(Lo.show(),$e()):Lo.hide(),hn&&t.add.push(ue),dn&&t.add.push(fe),ti.stop&&ti.stop(),ti=new oe({length:8,radius:6,width:2,color:gn,rotate:15}),Eo.addClass(t.add.join(" ")).removeClass(t.remove.join(" ")),Jo=n.extend({},a)}function T(t){return 0>t?(Un+t%Un)%Un:t>=Un?t%Un:t}function H(t){return r(t,0,Un-1)}function I(t){return t>0||io?t-1:!1}function q(t){return Un-1>t||io?t+1:!1}function R(){Ko.minPos=io?-1/0:-p(Un-1,Zo[Fn],bn,Zn),Ko.maxPos=io?1/0:-p(0,Zo[Fn],bn,Zn),Ko.snap=Zo[Fn]+bn}function K(){Vo.minPos=Math.min(0,Zo[Fn]-Wo[Cn]()),Vo.maxPos=0,ni.noMove=Vo.minPos===Vo.maxPos}function V(t,e,i){if("number"==typeof t){t=Array(t);var a=!0}return n.each(t,function(t,n){if(a&&(n=t),"number"==typeof n){var r=Xn[T(n)],s="$"+e+"Frame",u=r[s];i.call(this,t,n,r,u,s,u?u.data():o)}})}function B(t,e,n,o){(!mo||"*"===mo&&o===Go)&&(t=h(a.width)||h(t)||Sn,e=h(a.height)||h(e)||En,xo.resize({width:t,ratio:a.ratio||n||t/e},0,o===Go?!0:"*"))}function U(t,e,r,s,u){V(t,e,function(t,l,c,d,f,h){function m(){b.remove(),n.Fotorama.cache[_]="error",c.html&&"stage"===e||!C||C===_?(_&&!h.html?d.trigger("f:error").removeClass(Be).addClass(Ve):"stage"===e&&(d.trigger("f:load").removeClass(Be+" "+Ve).addClass(Xe),B()),h.state="error",!(Un>1)||c.html||c.deleted||c.video||g||(c.deleted=!0,xo.splice(l,1))):(c[x]=_=C,U([l],e,r,s,!0))}function p(){var t=b.width(),o=b.height(),u=t/o;w.measures={width:t,height:o,ratio:u},B(t,o,u,l),b.off("load error").addClass(Ge+(g?" "+Je:"")).prependTo(d),P(b,r||Zo,s||c.fit||a.fit),n.Fotorama.cache[_]="loaded",h.state="loaded",setTimeout(function(){d.trigger("f:load").removeClass(Be+" "+Ve).addClass(Xe+" "+(g?Ue:Qe)),"stage"===e&&i.trigger("fotorama:load",Hn(T(l)))},5)}function v(){E(function(){return!S(y)},function(){p()})}if(d){var g=xo.fullScreen&&c.full&&!h.$full&&"stage"===e;if(!h.$img||u||g){var y=new Image,b=n(y),w=b.data();h[g?"$full":"$img"]=b;var x="stage"===e?g?"full":"img":"thumb",_=c[x],C=g?null:c["stage"===e?"thumb":"img"];if("navThumb"===e&&(d=h.$wrap),!_)return m(),o;n.Fotorama.cache[_]?function F(){"error"===n.Fotorama.cache[_]?m():"loaded"===n.Fotorama.cache[_]?v():setTimeout(F,100)}():(n.Fotorama.cache[_]="*",b.on("load",v).on("error",m)),y.src=_,b.appendTo(n.Fotorama.$load)}}})}function Q(){var t=xo.activeFrame[qo];t&&!t.data().state&&(ti.stop().spin(t[0]),t.on("f:load f:error",function(){t.off("f:load f:error"),ti.stop()}))}function Y(t,e){V(t,e,function(t,o,i,r,s,u){if(!r)if(r=i[s]=Eo[s].clone(),u=r.data(),u.data=i,"stage"===e){if(i.html&&n('<div class="'+nn+'"></div>').append(i.html).appendTo(r),a.captions&&i.caption){var l=n('<div class="'+sn+'"></div>').appendTo(r);n('<div class="'+un+'"></div>').append(i.caption).appendTo(l)}if(i.video){var c=Qo.clone();L(c,function(){xo.playVideo()},{onStart:function(t){Dn.call(this,t),ei.control=!0},tail:ei}),r.addClass(pe).append(c)}No=No.add(r)}else"navDot"===e?Ao=Ao.add(r):"navThumb"===e&&(u.$wrap=r.children(":first"),Io=Io.add(r),i.video&&r.append(Qo.clone()))})}function Z(t,e,n){return t&&t.length&&P(t,e,n)}function te(t){V(t,"stage",function(t,e,n,o,i,r){if(o){o.css(xn,co?0:p(e,Zo[Fn],bn,Zn)).css(_n,0).css(co?{}:c(0)).fadeTo(0,co&&e!==Yo?0:1),r.appended||(r.appended=!0,o.appendTo($o),On(n.$video));var s=n.fit||a.fit;Z(r.$img,Zo,s),Z(r.$full,Zo,s)}})}function ee(t,e){if("thumbs"===ao&&!isNaN(t)){var o=fo+bn,i=H(v(t+o,o)),a=H(v(t-Zo[Fn],o)),r={};r[Fn]=fo,r[kn]=ho,Io.each(function(){var t=n(this),o=t.data(),s=o.eq,u="cover";i>s||s>a||Z(o.$img,r,"cover")||e&&U([s],"navThumb",r,u)})}}function ne(t,e,o){ne.done||(t=t.filter(function(){for(var t,e=n(this),o=e.data(),i=0,a=Xn.length;a>i;i++){var r=Xn[i];if(o.data===r){t=!0,o.eq=i;break}}return t||e.remove(),t}).sort(function(t,e){return n(t).data().eq-n(e).data().eq}).appendTo(e),o&&K(),ne.done=!0)}function $e(){so&&Lo.each(function(t){n(this).toggleClass(be,!io&&(0===Yo&&0===t||Yo===Un-1&&1===t)&&!Gn)})}function on(t){return t.position()[xn]+fo/2}function fn(t){W(Xo,{time:.9*t,pos:on(xo.activeFrame[Yn]),_pos:xn})}function pn(t){if(Xn[t.guessIndex][Yn]){var e=r(t.coo-on(Xn[t.guessIndex][Yn]),Vo.minPos,Vo.maxPos),n=.9*t.time;W(Wo,{time:n,pos:e,_pos:xn,onEnd:function(){ee(e,!0)}}),n&&ee(e),qn(Do,N(e,Vo.minPos,Vo.maxPos))}}function vn(){if("thumbs"===ao)Qn=Io,Yn=Ro;else{if(!ao)return;Qn=Ao,Yn=Oo}ne(Qn,Wo,!0),Qn.removeClass(Ie),xo.activeFrame[Yn].addClass(Ie)}function Pn(){Zn=to=Yo;var t=xo.activeFrame,e=t[qo];e&&(No.not(xo.activeFrame[qo].addClass(Ie)).detach().data("appended",!1).removeClass(Ie+" "+Ne+" "+je),w($o,xn),$o.css(l(0,xn)),te([Yo,no,oo]),R(),K())}function zn(t){t&&n.extend(Zo,{width:t.width,height:t.height,minWidth:t.minWidth,maxWidth:t.maxWidth,minHeight:t.minHeight,maxHeight:t.maxHeight,ratio:function(t){if(t){var e=Number(t);return isNaN(e)?(e=t.split("/"),Number(e[0]/e[1])||o):e}}(t.ratio)})}function Hn(t){return Xn&&{index:t,frame:Xn[t]}}function Dn(){a.stopAutoplayOnTouch?xo.stopAutoplay():yo=!0}function Wn(){yo=!(!Gn&&!bo)}function An(){if(clearTimeout(An.timeout),!a.autoplay||yo)return xo.autoplay&&(xo.autoplay=!1,i.trigger("fotorama:stopautoplay")),o;xo.autoplay||(xo.autoplay=!0,i.trigger("fotorama:startautoplay"));var t=Yo;An.timeout=setTimeout(function(){var e=xo.activeFrame[qo].data();E(function(){return e.state||t!==Yo},function(){yo||t!==Yo||xo.show(T(Yo+1))})},a.autoplay)}function In(){xo.fullScreen&&(xo.fullScreen=!1,mn&&X.cancel(Co),J.removeClass(ae),i.removeClass(Re).insertAfter(So).trigger("fotorama:fullscreenexit"),Zo=n.extend({},wo),On(Gn,!0),xo.resize(),U([Yo,no,oo],"stage"),ln.scrollLeft(vo).scrollTop(po))}function qn(t,e){t.removeClass(We+" "+Ae),e&&!Gn&&t.addClass(e.replace(/^|\s/g," "+De+"--"))}function On(t,e,n){e&&(Eo.removeClass(le),Gn=!1,y()),t&&(t.remove(),i.trigger("fotorama:unloadvideo")),n&&(Wn(),An())}function Rn(t){Gn?On(Gn,!0,!0):xo.show({index:t.shiftKey||t[Tn]-Po.offset()[xn]<Zo[Fn]/3?"<":">",slow:t.altKey})}function Kn(t,e){var o=n(this).data().eq;xo.show({index:o,slow:t.altKey,coo:t[Tn]-Do.offset()[xn],time:e})}function Vn(){if(u(),_(),!Bn.done){if(a.hash&&location.hash&&(a.startIndex=j(location.hash.replace(/^#/,""),Xn,0===_o)||0),"random"===a.startIndex&&(a.startIndex=g(0,Un-1)),Go=io?T(a.startIndex):H(a.startIndex),isNaN(Go)){var t=j(a.startIndex,Xn,!0);Go=isNaN(t)?0:t}Yo=Zn=to=eo=Go}Un?(Gn&&On(Gn,!0),xo.show({index:Yo,time:0}),xo.resize()):xo.destroy()}function Bn(){Bn.done||(Bn.done=!0,Eo.removeClass(se),i.trigger("fotorama:ready"))}G=G||n("html"),J=J||n("body"),n.Fotorama.$load=n.Fotorama.$load||n('<div class="'+Ye+'"></div>').appendTo(J);var Xn,Un,Qn,Yn,Gn,Jn,Zn,to,eo,no,oo,io,ao,ro,so,uo,lo,co,fo,ho,mo,po,vo,go,yo,bo,wo,xo=this,_o=Ln,To=(new Date).getTime(),Co=i.addClass(ie+To)[0],Fo=1,Mo=i.data(),ko=n("<style></style>").insertBefore(i),So=n('<div style="display: none;"></div>').insertBefore(i),Eo=n('<div class="'+re+" "+se+'"></div>'),Po=n('<div class="'+he+'"></div>').appendTo(Eo),$o=(Po[0],n('<div class="'+ve+'"></div>').appendTo(Po)),No=n(),jo=n('<div class="'+ye+" "+we+'"><div class="'+_e+'"></div></div>'),zo=n('<div class="'+ye+" "+xe+'"><div class="'+_e+'"></div></div>'),Lo=jo.add(zo).appendTo(Po),Ho=n('<div class="'+Ce+'"></div>'),Do=n('<div class="'+Te+'"></div>').appendTo(Ho),Wo=n('<div class="'+Fe+'"></div>').appendTo(Do),Ao=n(),Io=n(),qo="$stageFrame",Oo="$navDotFrame",Ro="$navThumbFrame",Ko=$o.data(),Vo=Wo.data(),Bo=D(n('<div class="'+ze+" "+Le+'"></div><div class="'+ze+" "+He+'"></div>').appendTo(Po)),Xo=(D(Bo.clone().appendTo(Do)),n('<div class="'+en+'"></div>').appendTo(Wo)),Uo=n('<div class="'+Ke+'"></div>'),Qo=n('<div class="'+an+'"></div>'),Yo=(n('<div class="'+rn+'"></div>').appendTo(Po),!1),Go=!1,Jo={},Zo={},ti={},ei={},ni={};Eo[qo]=n('<div class="'+me+'"></div>'),Eo[Ro]=n('<div class="'+Se+" "+Pe+'"><div class="'+tn+'"></div></div>'),Eo[Oo]=n('<div class="'+Se+" "+Ee+'"><div class="'+Ze+'"></div></div>'),n.Fotorama.size++,Ln++,n.Fotorama.api[_o]=this,this.startAutoplay=function(t){return xo.autoplay?this:(yo=bo=!1,b(t||a.autoplay),An(),this)},this.stopAutoplay=function(){return xo.autoplay&&(yo=bo=!0,An()),this},this.show=function(t){function e(){Y([Yo,no,oo],"stage"),Q(),U([Yo,no,oo],"stage"),Pn(),i.trigger("fotorama:showend"),a.hash&&go&&z(Jn.id||Yo+1,xo.eq),Wn(),An(),go=!0}if(Xn){var n,s,u=a.transitionDuration;if("object"!=typeof t?n=t:(n=t.index,u="number"==typeof t.time?t.time:u,s=t.overPos),t.slow&&(u*=10),">"===n?n=to+1:"<"===n?n=to-1:"<<"===n?n=0:">>"===n&&(n=Un-1),isNaN(n)&&(n=j(n,Xn,!0)||Yo||0),xo.activeIndex=Yo=io?T(n):H(n),no=I(Yo),oo=q(Yo),to=io?n:Yo,xo.activeFrame=Jn=Xn[Yo],te([to]),On(!1,Jn.i!==Xn[T(Zn)].i),i.trigger("fotorama:show"),co){var l=Jn[qo],c=Yo!==eo?Xn[eo][qo]:null;A(l,c,{time:u,method:a.transition,onEnd:e})}else W($o,{pos:-p(to,Zo[Fn],bn,Zn),_pos:xn,overPos:s,time:u,onEnd:e});if($e(),vn(),ao){var d=H(Yo+r(to-eo,-1,1)),f=t.coo===o;(f||d!==Yo)&&pn({time:u,coo:f?Zo[Fn]/2:t.coo,guessIndex:f?Yo:d})}"thumbs"===ao&&fn(u),eo=Yo}return this},this.requestFullScreen=function(){return uo&&!xo.fullScreen&&(xo.fullScreen=!0,po=ln.scrollTop(),vo=ln.scrollLeft(),ln.scrollLeft(1).scrollTop(1),lo&&X.request(Co),setTimeout(function(){ln.scrollLeft(0).scrollTop(0),J.addClass(ae),i.addClass(Re).css({top:0}).appendTo(J).trigger("fotorama:fullscreenenter"),wo=n.extend({},Zo),On(Gn,!0),xo.resize(),U([Yo,no,oo],"stage")},5)),this},this.cancelFullScreen=function(){return lo&&X.is()?X.cancel(e):In(),this},e.addEventListener&&e.addEventListener(X.event,function(){X.is()||Gn||In()}),cn.on("keydown",function(t){Gn&&27===t.keyCode?(t.preventDefault(),On(Gn,!0,!0)):(xo.fullScreen||a.keyboard&&!_o)&&(27===t.keyCode?(t.preventDefault(),xo.cancelFullScreen()):39===t.keyCode||40===t.keyCode&&xo.fullScreen?(t.preventDefault(),xo.show({index:">",slow:t.altKey})):(37===t.keyCode||38===t.keyCode&&xo.fullScreen)&&(t.preventDefault(),xo.show({index:"<",slow:t.altKey})))}),_o||cn.on("keydown","textarea, input, select",function(t){xo.fullScreen||t.stopPropagation()}),this.resize=function(e){if(Xn){zn(xo.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:e);var n=arguments[1]||0,o=arguments[2],i=Zo.width,a=Zo.height,s=Zo.ratio,u=t.innerHeight-(ao?Do.height():0);h(i)&&(Eo.css({width:i,minWidth:Zo.minWidth,maxWidth:Zo.maxWidth}),i=Zo.width_=Eo.width(),a=f(a)/100*u||d(a),a=a||s&&i/s,a&&(a=Zo.height_=r(a,f(Zo.minHeight)/100*u||d(Zo.minHeight),f(Zo.maxHeight)/100*u||d(Zo.maxHeight)),Pn(),Po.addClass(ge).stop().animate({width:i,height:a},n,function(){Po.removeClass(ge)}),ao&&(Do.stop().animate({width:i},n).css({left:0,height:"auto"}),pn({guessIndex:Yo,time:n,coo:Zo[Fn]/2}),"thumbs"===ao&&ne.done&&fn(n)),mo=o||!0,Bn()))}return this},this.setOptions=function(t){return Xn&&(n.extend(a,t),Vn()),this},this.destroy=function(){return Xn&&(i.html(Mo.urtext),xo.data=Xn=o,n.Fotorama.size--),this},this.initialize=function(t){return Xn||(Mo.api=o,i.fotorama(t)),this},this.playVideo=function(){var t=xo.activeFrame,e=t.video,o=Yo;return"object"==typeof e&&t.videoReady&&(lo&&xo.fullScreen&&xo.cancelFullScreen(),E(function(){return!X.is()||o!==Yo},function(){o===Yo&&(t.$video=t.$video||n(Nn.replace($n,jn[e.type].replace($n,e.id))),t.$video.appendTo(t[qo]),Eo.addClass(le),Gn=t.$video,ei.noMove=!0,i.trigger("fotorama:loadvideo"))})),this},this.stopVideo=function(){return On(Gn,!0,!0),this},ei=O($o,{onStart:Dn,onMove:function(t,e){qn(Po,e.edge)},onEnd:function(t){if(qn(Po),t.moved){var e=v(t.newPos,Zo[Fn],bn,Zn);xo.show({index:e,time:t.time,overPos:t.overPos})}else Rn(t.startEvent)},timeLow:1,timeHigh:1,friction:2,select:"."+qe+", ."+qe+" *",$wrap:Po}),ni=O(Wo,{onStart:Dn,onMove:function(t,e){qn(Do,e.edge)},onEnd:function(t){function e(){Wn(),An(),ee(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(W(Wo,{time:t.time,pos:t.newPos,_pos:xn,overPos:t.overPos,onEnd:e}),ee(t.newPos),qn(Do,N(t.newPos,Vo.minPos,Vo.maxPos))):e();else{var n=t.$target.closest("."+Se,Wo)[0];n&&Kn.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Do}),L(Lo,function(t){t.preventDefault(),Gn?On(Gn,!0,!0):xo.show({index:Lo.index(this)?">":"<",slow:t.altKey})},{onStart:function(t){Dn.call(this,t),ei.control=!0},tail:ei}),L(Uo,function(){xo.fullScreen?xo.cancelFullScreen():xo.requestFullScreen(),Wn(),An()
},{onStart:function(t){Dn.call(this,t),ei.control=!0},tail:ei}),n.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){xo[e]=function(){return"load"!==e?Array.prototype[e].apply(Xn,arguments):arguments[0]&&"object"==typeof arguments[0]&&(a.data=arguments[0]),Vn(),xo}}),ln.on("resize",this.resize).resize(),Vn()};var zn={};n.each("show resize load push pop shift unshift reverse sort splice setOptions requestFullScreen cancelFullScreen startAutoplay stopAutoplay playVideo stopVideo destroy".split(" "),function(t,e){zn[e]=function(){var t=arguments;return this.each(function(o){if(!o||"load"!==e&&"push"!==e&&"unshift"!==e&&"splice"!==e){o&&"setOptions"===e&&"object"==typeof t[0]&&(t[0].data=null);var i=n(this),a=i.data().api;a&&a[e].apply(a,t)}})}}),n.fn.fotorama=function(t){if(zn[t])return zn[t].apply(this,Array.prototype.slice.call(arguments,1));var e="initialize"===t?arguments[1]:t;return this.each(function(){var t=this,o=n(this),i=o.data();i.api||E(function(){return!S(t)},function(){i.urtext=o.html(),i.api=new n.Fotorama(o,n.extend({},{loop:!1,data:null,startIndex:0,transition:"slide",arrows:!0,keyboard:!1,fit:"contain",nav:"dots",navPosition:"bottom",hash:!1,allowFullScreen:!1,transitionDuration:vn,captions:!0,autoplay:!1,stopAutoplayOnTouch:!0,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,thumbWidth:wn,thumbHeight:wn},n.extend({},e,i))),"object"==typeof e&&(e.data=null)})})},n.Fotorama.cache={};var Ln=0;n.Fotorama.size=0,n.Fotorama.api=[],n(function(){n(".fotorama").fotorama()}),this.$=this.$||{},this.$.Fotorama=this.$.Fotorama||{},this.$.Fotorama.jst=this.$.Fotorama.jst||{},this.$.Fotorama.jst.style=function(t){var e,n="";return V.escape,n+=".fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame {\n  padding: "+(null==(e=t.thumbMargin)?"":e)+"px "+(null==(e=t.thumbMargin/2)?"":e)+"px;\n  width: "+(null==(e=t.thumbWidth)?"":e)+"px;\n  height: "+(null==(e=t.thumbHeight)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__thumb {\n  width: "+(null==(e=t.thumbWidth)?"":e)+"px;\n  height: "+(null==(e=t.thumbHeight)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__thumb-border {\n  width: "+(null==(e=t.thumbWidth-2*t.thumbMargin)?"":e)+"px;\n  height: "+(null==(e=t.thumbHeight-2*t.thumbMargin)?"":e)+"px;\n  border-width: "+(null==(e=t.thumbMargin)?"":e)+"px;\n  margin-top: "+(null==(e=t.thumbMargin)?"":e)+"px;\n  margin-left: "+(null==(e=-t.thumbWidth/2+t.thumbMargin/2)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__wrap--vertical .fotorama__nav--thumbs {\n  width: "+(null==(e=t.thumbWidth+2*t.thumbMargin)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__wrap--vertical .fotorama__nav__frame {\n  padding: "+(null==(e=t.thumbMargin/2)?"":e)+"px "+(null==(e=t.thumbMargin)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__wrap--vertical .fotorama__thumb-border {\n  margin-left: "+(null==(e=t.thumbMargin)?"":e)+"px;\n  margin-top: "+(null==(e=-t.thumbHeight/2+t.thumbMargin/2)?"":e)+"px;\n}\n"}})(window,document,jQuery);
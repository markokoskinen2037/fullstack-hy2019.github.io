(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w}),n.d(t,"partInfoQuery",function(){return b});n(73),n(423);var r=n(188),a=n.n(r),o=n(173),i=n.n(o),s=n(167),l=n.n(s),u=n(0),c=n.n(u),f=n(174),p=n(175),d=n(176),m=n(140),h=n(145),v=n(151),g=n(192);function w(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.html,o=n.mainImage,s=n.title,u=n.partColor,w=n.part,b=n.navigation,y={replace:function(e){var t=e.type,n=e.attribs,r=e.children;if("tag"===t&&"intro"===n.class)return c.a.createElement("div",{className:"col-7"},l()(r,y))}},E=b?b.split("@"):[];return c.a.createElement(v.a,null,c.a.createElement(d.a,{style:{backgroundImage:"url("+a.a.resolve(o.publicURL)+")",backgroundPosition:"center right",backgroundSize:"80%",backgroundRepeat:"no-repeat",backgroundColor:f[u]},className:"spacing spacing--after"},c.a.createElement(m.a,{className:"container"},c.a.createElement(p.a,{upperCase:!0,content:[{backgroundColor:f[u],text:"Fullstack",link:"/about"},{backgroundColor:"black",text:s}]}),c.a.createElement("div",{className:"part-intro col-7"},i()(r,y)),c.a.createElement(p.a,{className:"spacing",stack:!0,content:E.map(function(e){var t=e.split("|");return{letter:t[0],path:t[1],text:t[2]}})}))),c.a.createElement(g.a,{prev:w>0?w-1:void 0,next:w<8?w+1:void 0}),c.a.createElement(h.a,null))}var b="2519141011"},139:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(141)),o=r(n(168)),i=r(n(6)),s=r(n(46)),l=r(n(47)),u=r(n(4)),c=r(n(0)),f=n(19),p=n(138);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=d(n);return c.default.createElement(f.Link,(0,o.default)({to:v,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},141:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},145:function(e,t,n){"use strict";var r=n(138),a=n(0),o=n.n(a),i=n(148),s=n.n(i),l=n(149),u=n.n(l),c=n(146);t.a=function(){return o.a.createElement("div",{id:"footer",className:"container spacing--after",style:{justifyContent:"space-between"}},o.a.createElement("div",{className:"col-4",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("a",{href:"https://www.helsinki.fi/",className:"image--large image--contain",style:{width:"100%"}},o.a.createElement(c.a,{className:"image--large image--contain",src:s.a})),o.a.createElement("a",{href:"https://www.houston-inc.com/",className:"push-right-2",style:{width:"100%"}},o.a.createElement(c.a,{className:"image--large image--contain",src:u.a}))),o.a.createElement("div",{className:"col-2",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o.a.createElement(r.Link,{to:"/about",className:"nav-item-hover",style:{marginLeft:"4.5rem"}},"KURSSISTA"),o.a.createElement(r.Link,{to:"/faq",className:"nav-item-hover"},"FAQs")))}},154:function(e,t,n){var r=n(21),a=n(23),o=n(24),i=/"/g,s=function(e,t,n,r){var a=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},157:function(e,t,n){"use strict";n(154)("small",function(e){return function(){return e(this,"small","","")}})},168:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},188:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return r.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=n(o(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===i(e,-1);return(e=n(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),o=r(n.split("/")),i=Math.min(a.length,o.length),s=i,l=0;l<i;l++)if(a[l]!==o[l]){s=l;break}var u=[];for(l=s;l<a.length;l++)u.push("..");return(u=u.concat(o.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return a(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(189))},189:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,u=[],c=!1,f=-1;function p(){c&&l&&(c=!1,l.length?u=l.concat(u):f=-1,u.length&&d())}function d(){if(!c){var e=s(p);c=!0;for(var t=u.length;t;){for(l=u,u=[];++f<t;)l&&l[f].run();f=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||c||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},192:function(e,t,n){"use strict";var r=n(138),a=n(4),o=n(0),i=n.n(o),s=n(140),l=function(e){var t=e.prev,n=e.next;return i.a.createElement(s.a,{className:"container spacing spacing--after-large"},void 0!==t?i.a.createElement(r.Link,{to:"/osa"+t,className:"push-right-1"},i.a.createElement(s.a,{flex:!0,dirColumn:!0},i.a.createElement("p",{style:{textAlign:"right"}},"Osa ",t),i.a.createElement("b",null,"Edellinen osa"))):i.a.createElement(s.a,{className:"push-right-1"}),void 0!==n?i.a.createElement(r.Link,{to:"/osa"+n,className:"push-left-1"},i.a.createElement(s.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,"Osa ",n),i.a.createElement("b",null,"Seuraava osa"))):i.a.createElement(s.a,{className:"push-left-1"}))};l.defaultProps={prev:void 0,next:void 0},l.propTypes={prev:a.PropTypes.number,next:a.PropTypes.number},t.a=l},423:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-fb13bf43df31b8fcadfe.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return b}));n(181);var r=n(1),a=n(10),o=n(0),c=n.n(o),i=n(206),u=n(260),s=n(406),l={id:"installation",title:"Installation"},p={id:"installation",title:"Installation",description:"import CodeSection from '../website/components/CodeSection';",source:"@site/../docs/installation.mdx",permalink:"/docs/installation",sidebar:"docs",previous:{title:"Comparison matrix",permalink:"/docs/compare-matrix"},next:{title:"FAQ",permalink:"/docs/faq"}},f=[],m={rightToc:f};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Core package first."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install uniforms\n")),Object(i.b)("p",null,"Now the schema package."),Object(i.b)(s.b,{group:"bridge",tabs:[{name:"GraphQL"},{name:"JSON-Schema"},{name:"Simple-Schema"},{name:"Simple-Schema-2"}],mdxType:"Tabs"},(function(e){var t=e.name;return Object(i.b)(c.a.Fragment,null,Object(i.b)(u.a,{language:"shell",source:"npm install uniforms-bridge-"+t.toLowerCase(),mdxType:"CodeSection"}),Object(i.b)("p",null,"Finally, pick your theme."),Object(i.b)(s.b,{group:"theme",tabs:[{name:"Semantic"},{name:"Material"},{name:"Bootstrap3"},{name:"Bootstrap4"},{name:"AntD"},{name:"Unstyled"}],mdxType:"Tabs"},(function(e){var n=e.name;return Object(i.b)(c.a.Fragment,null,Object(i.b)(u.a,{language:"shell",source:"npm install uniforms-"+n.toLowerCase(),mdxType:"CodeSection"}),Object(i.b)("p",null,"TL;DR; Just let me copy it!"),Object(i.b)(u.a,{language:"shell",source:"npm install uniforms uniforms-bridge-"+t.toLowerCase()+" uniforms-"+n.toLowerCase(),mdxType:"CodeSection"}))})))})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you are going to use a themed package - remember to include correct styles!"))}b.isMDXComponent=!0},181:function(e,t,n){var r=n(29).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(14)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(28),n(75);var r=n(0),a={},o={};function c(e){var t=Object(r.useState)(a[e]||0),n=t[0],c=t[1],i=Object(r.useCallback)((function(t){return function(e,t){a[e]=t,o[e].forEach((function(e){e(t)}))}(e,t)}),[e]);return Object(r.useEffect)((function(){return function(e,t){return void 0===o[e]&&(a[e]=0,o[e]=[]),o[e].push(t),function(){o[e].splice(o[e].indexOf(t),1)}}(e,c)}),[e]),{activeTab:n,onTab:i}}},255:function(e,t,n){var r=n(8),a=n(91)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(27),n(21),n(20),n(255),n(77),n(57),n(400),n(184);var r=n(0),a=n.n(r),o=n(435);function c(e){var t=e.language,n=e.replace,r=e.section,c=e.source;if("object"==typeof c&&"default"in c&&(c=c.default),r){var i=new RegExp("// <"+r+">\\s([\\s\\S]*?)\\s// </"+r+">\\s","g");c=c.split(i).reduce((function(e,t,n){return n%2==0?e:e+"\n\n"+t}),"")}if(c=c.replace(/\/\/ <.*?\n/g,""),n)for(var u=0,s=Object.entries(n);u<s.length;u++){var l=s[u],p=l[0],f=l[1];c=c.replace(new RegExp(p,"g"),f)}return a.a.createElement(o.a.pre,null,a.a.createElement(o.a.code,{children:c,className:"language-"+t,mdxType:"code",originalType:"code",parentName:"pre"}))}},400:function(e,t,n){var r=n(6),a=n(420),o=n(29).f,c=n(421).f,i=n(79),u=n(80),s=r.RegExp,l=s,p=s.prototype,f=/a/g,m=/a/g,b=new s(f)!==f;if(n(14)&&(!b||n(15)((function(){return m[n(2)("match")]=!1,s(f)!=f||s(m)==m||"/a/i"!=s(f,"i")})))){s=function(e,t){var n=this instanceof s,r=i(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(b?new l(r&&!o?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&o?u.call(e):t),n?this:p,s)};for(var d=function(e){e in s||o(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=c(l),v=0;g.length>v;)d(g[v++]);p.constructor=s,s.prototype=p,n(16)(r,"RegExp",s)}n(82)("RegExp")},406:function(e,t,n){"use strict";var r=n(13),a=n.n(r),o=n(0),c=n.n(o),i=(n(181),n(74),n(183)),u=n.n(i),s=n(133),l=n.n(s);function p(e){var t=e.children,n=e.active,r=e.onClick;return c.a.createElement("span",{className:u()(l.a.item,n&&l.a.active),onClick:r},t)}function f(e){var t=e.items,n=e.activeTab,r=e.onTab;return c.a.createElement("div",{className:l.a.tabs},t.map((function(e,t){var a=e.name;return c.a.createElement(p,{active:n===t,key:t,onClick:function(){return r(t)}},a)})))}f.propTypes={items:a.a.arrayOf(a.a.shape({name:a.a.string.isRequired})).isRequired,activeTab:a.a.number.isRequired,onTab:a.a.func.isRequired};var m=f,b=n(254);function d(e){var t=e.children,n=e.group,r=e.tabs,a=Object(b.a)(n),o=a.activeTab,i=a.onTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{activeTab:o,items:r,onTab:i}),t(r[o]))}d.propTypes={children:a.a.func,group:a.a.string.isRequired,tabs:a.a.arrayOf(a.a.shape({name:a.a.string.isRequired})).isRequired};var g=d;n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return m}))},420:function(e,t,n){var r=n(11),a=n(557).set;e.exports=function(e,t,n){var o,c=t.constructor;return c!==n&&"function"==typeof c&&(o=c.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},421:function(e,t,n){var r=n(90),a=n(63).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},514:function(e,t,n){var r=n(88),a=n(60),o=n(33),c=n(83),i=n(32),u=n(89),s=Object.getOwnPropertyDescriptor;t.f=n(14)?s:function(e,t){if(e=o(e),t=c(t,!0),u)try{return s(e,t)}catch(n){}if(i(e,t))return a(!r.f.call(e,t),e[t])}},557:function(e,t,n){var r=n(11),a=n(9),o=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(23)(Function.call,n(514).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}}}]);
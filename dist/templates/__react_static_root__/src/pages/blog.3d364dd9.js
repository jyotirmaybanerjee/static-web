(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(t,e,n){"use strict";var a=n(51);n.d(e,"a",(function(){return a.Link}))},54:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var a=n(0),l=n.n(a),o=n(20),r=n(136);function c(){var t=Object(o.useRouteData)().posts;return l.a.createElement("div",null,l.a.createElement("h1",null,"It's blog time."),l.a.createElement("div",null,l.a.createElement("a",{href:"#bottom",id:"top"},"Scroll to bottom!")),l.a.createElement("br",null),"All Posts:",l.a.createElement("ul",null,t.map((function(t){return l.a.createElement("li",{key:t.id},l.a.createElement(r.a,{to:"/blog/post/".concat(t.id,"/")},t.title))}))),l.a.createElement("a",{href:"#top",id:"bottom"},"Scroll to top!"))}}}]);
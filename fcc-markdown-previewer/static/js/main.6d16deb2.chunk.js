(this["webpackJsonp02-markdown-previewer"]=this["webpackJsonp02-markdown-previewer"]||[]).push([[0],{162:function(e,n,t){},166:function(e,n,t){"use strict";t.r(n);var o=t(4),a=t.n(o),i=t(46),r=t.n(i),s=(t(56),t(50)),c=t(47),l=t.n(c),d=t(48),u=t.n(d),h=t(49),b=t.n(h),m=t(29),f=t(51),j=(t(162),t(163),t(164),t(3));function g(e){return Object(j.jsx)("div",{className:"resizable-box",children:Object(j.jsx)("div",{className:"container-editor-area",children:Object(j.jsx)(b.a,{value:e.code,onValueChange:function(n){return e.setCode(n)},highlight:function(e){return Object(m.highlight)(e,m.languages.markdown).split("\n").map((function(e){return'<span class="container-editor-line-number">'.concat(e,"</span>")})).join("\n")},padding:10,style:{fontFamily:'"Roboto Mono", monospace',fontSize:12},className:"container-editor"})})})}function p(e){return Object(j.jsx)("div",{className:"resizable-box",children:Object(j.jsx)(l.a,{className:"markdown-rendered-box",plugins:[u.a],children:e.code})})}var w="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",x=function(){var e=Object(o.useState)(w),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(f.a,{sizes:[50,50],direction:"horizontal",cursor:"col-resize",children:[Object(j.jsx)(g,{code:t,setCode:a,className:"resizable-box"}),Object(j.jsx)(p,{code:t,className:"resizable-box"})]})})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,167)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()},56:function(e,n,t){}},[[166,1,2]]]);
//# sourceMappingURL=main.6d16deb2.chunk.js.map
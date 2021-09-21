(this["webpackJsonpk6-star-wars-challenge-ts"]=this["webpackJsonpk6-star-wars-challenge-ts"]||[]).push([[0],{35:function(n,e,t){},62:function(n,e,t){"use strict";t.r(e);var r,a,c,i,s,o,u,l,d,f,j,b,p,h,m,x=t(1),O=t.n(x),g=t(23),v=t.n(g),w=(t(35),t(13)),y=t(5),k=t(3),S=t.p+"static/media/logo.0489f5cd.png",F=t.p+"static/media/starfield-bg.ac306ea2.png",U=t.p+"static/media/StarJedi.13d540eb.woff",C=t.p+"static/media/StarJedi.74a9f1ff.woff2",N=t(0),z={yellow:"#dba90d",bg:"#000",jediFont:"Star Jedi",textFont:"Libre Franklin"},J=Object(k.b)(r||(r=Object(y.a)(["\n  @font-face {\n    font-family: 'Star Jedi';\n    src: url(",") format('woff2'),\n        url({","}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  body {\n    background: #000 url(",");\n  }\n"])),U,C,F),D=k.c.div(a||(a=Object(y.a)(["\n  width: 800px;\n  margin: 0 auto;\n"]))),E=k.c.img(c||(c=Object(y.a)(["\n  max-width: 100%;\n  margin: 50px 0;\n"]))),P=k.c.div(i||(i=Object(y.a)(["\n  font-size: 18px;\n  * {\n    color: ",";\n    font-family: ",";\n  }\n"])),(function(n){return n.theme.yellow}),(function(n){return n.theme.textFont})),A=function(n){var e=n.children;return Object(N.jsx)(k.a,{theme:z,children:Object(N.jsxs)(D,{children:[Object(N.jsx)(J,{}),Object(N.jsx)(E,{src:S,alt:"logo"}),Object(N.jsx)(P,{children:e})]})})},R=t(9),Y=k.c.button(s||(s=Object(y.a)(["\n  background: ",";\n  color: ",";\n  border: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-family: ",";\n"])),(function(n){return n.theme.yellow}),(function(n){return n.theme.bg}),(function(n){return n.theme.jediFont})),_=k.c.form(o||(o=Object(y.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),W=k.c.input(u||(u=Object(y.a)(["\n  border: 4px solid ",";\n  background: transparent;\n  font-weight: bold;\n  font-size: 22px;\n  &:focus {\n    outline: none;\n  }\n  flex-grow: 1;\n  text-align: center;\n"])),(function(n){return n.theme.yellow})),q=Object(k.c)(Y)(l||(l=Object(y.a)(["\n  font-size: 24px;\n"]))),T=function(n){return function(e){e.preventDefault();var t=e.target;n(t.query.value.trim())}},I=function(n){var e=n.setQuery;return Object(N.jsxs)(_,{onSubmit:T(e),children:[Object(N.jsx)(W,{name:"query",placeholder:"Search Star Wars Characters"}),Object(N.jsx)(q,{style:{fontSize:"24px"},children:"Submit"})]})},L=function(n,e){var t=Object(w.b)(n,e),r=t.data,a=t.error;if(a)throw a;return{data:r}},B=t(7),M=t.n(B),Q=t(8),H=t(4),G=H.Record({name:H.String,films:H.Array(H.String),url:H.String,homeworld:H.String,species:H.Array(H.String)}),K=H.Record({count:H.Number,results:H.Array(G)}),V=function(){var n=Object(Q.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,cn("".concat("https://swapi.dev/api","/people/?").concat(e));case 2:return t=n.sent,n.abrupt("return",K.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),X=H.Record({name:H.String,population:H.String}),Z=function(){var n=Object(Q.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,cn(e);case 2:return t=n.sent,n.abrupt("return",X.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),$=H.Record({title:H.String,release_date:H.String,opening_crawl:H.String,url:H.String}),nn=function(){var n=Object(Q.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,cn(e);case 2:return t=n.sent,n.abrupt("return",$.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),en=function(){var n=Object(Q.a)(M.a.mark((function n(e){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map((function(n){return nn(n)}))));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),tn=H.Record({name:H.String}),rn=function(){var n=Object(Q.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,cn(e);case 2:return t=n.sent,n.abrupt("return",tn.check(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),an=function(){var n=Object(Q.a)(M.a.mark((function n(e){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map((function(n){return rn(n)}))));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),cn=function(){var n=Object(Q.a)(M.a.mark((function n(e){var t,r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Failed to fetch ".concat(e));case 5:return n.next=7,t.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),sn=k.c.div(d||(d=Object(y.a)(["\n  margin: ",";\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n\n  > div {\n    background-color: ",";\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    margin: 0 3px 0 0;\n\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  }\n\n  .rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n  }\n\n  .rect3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n\n  .rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n  }\n\n  .rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n  }\n\n  @-webkit-keyframes sk-stretchdelay {\n    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n    20% { -webkit-transform: scaleY(1.0) }\n  }\n\n  @keyframes sk-stretchdelay {\n    0%, 40%, 100% {\n      transform: scaleY(0.4);\n      -webkit-transform: scaleY(0.4);\n    }  20% {\n      transform: scaleY(1.0);\n      -webkit-transform: scaleY(1.0);\n    }\n  }\n"])),(function(n){return n.inline?"5px":"100px auto"}),(function(n){return n.theme.yellow})),on=function(n){var e=n.inline;return Object(N.jsxs)(sn,{inline:e,children:[Object(N.jsx)("div",{className:"rect1"}),Object(N.jsx)("div",{className:"rect2"}),Object(N.jsx)("div",{className:"rect3"}),Object(N.jsx)("div",{className:"rect4"}),Object(N.jsx)("div",{className:"rect5"})]})},un=function(n){var e=n.title,t=n.releaseDate,r=n.openingCrawl;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h3",{children:[e," (",t,")"]}),Object(N.jsx)("p",{children:dn(r,150)})]})},ln=function(n){return n.sort((function(n,e){return new Date(e.release_date).getTime()-new Date(n.release_date).getTime()}))},dn=function(n,e){return n.substring(0,e)+(n.length>e?"...":"")},fn=function(n){var e=n.movieUrls,t=L(JSON.stringify(e),(function(){return en(e)})).data;if(!t)return Object(N.jsx)(on,{inline:!0});var r=ln(t).map((function(n){return Object(N.jsx)(un,{title:n.title,releaseDate:n.release_date,openingCrawl:n.opening_crawl},n.url)}));return Object(N.jsx)("div",{children:r})},jn=k.c.div(f||(f=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  vertical-align: middle;\n  align-items: center;\n"]))),bn=k.c.div(j||(j=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  margin-right: 10px;\n  align-items: center;\n"]))),pn=k.c.h2(b||(b=Object(y.a)(["\n  font-size: 24px;\n  margin: 0;\n  span {\n    font-size: 16px;\n    font-weight: 300;\n  }\n"]))),hn=function(n){var e=n.homeWorldUrl,t=L(e,Z).data;return t?Object(N.jsxs)("div",{children:[t.name,", pop.: ",t.population]}):null},mn=function(n){var e=n.speciesUrls,t=L(JSON.stringify(e),(function(){return an(e)})).data;return t?0===t.length?Object(N.jsx)(N.Fragment,{children:"Human"}):Object(N.jsx)(N.Fragment,{children:t.map((function(n){return n.name})).join(" ")}):null},xn=function(n){var e=n.name,t=n.homeWorldUrl,r=n.movieUrls,a=n.species,c=Object(x.useState)(!1),i=Object(R.a)(c,2),s=i[0],o=i[1];return Object(N.jsxs)("div",{children:[Object(N.jsxs)(jn,{children:[Object(N.jsxs)(bn,{children:[Object(N.jsxs)(pn,{children:[e," ",Object(N.jsx)("span",{children:Object(N.jsx)(mn,{speciesUrls:a})})]}),Object(N.jsx)(hn,{homeWorldUrl:t})]}),Object(N.jsx)(Y,{onClick:function(){return o(!s)},children:"show movies"})]}),s&&Object(N.jsx)(fn,{movieUrls:r})]})},On=k.c.div(p||(p=Object(y.a)(["\n  margin: 10px 0;\n  text-align: center;\n"]))),gn=k.c.button(h||(h=Object(y.a)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n\n  &:disabled {\n    text-decoration: underline;\n    cursor: default;\n  }\n"]))),vn=function(n){var e=n.count,t=n.page,r=n.setPage,a=n.perPage,c=void 0===a?10:a,i=Math.ceil(e/c);if(1===i)return null;var s=Array.from(Array(i)).map((function(n,e){var a=e+1;return Object(N.jsx)(gn,{onClick:function(){return r(a)},disabled:t===a,children:a},a)}));return Object(N.jsx)(On,{children:s})},wn=k.c.div(m||(m=Object(y.a)(["\n  border-bottom: 2px solid ",";\n  padding: 10px 0;\n  &:last-child {\n    border: none;\n  }\n"])),(function(n){return n.theme.yellow})),yn=function(n){var e=n.query,t=Object(x.useState)(1),r=Object(R.a)(t,2),a=r[0],c=r[1],i=L("search=".concat(e,"&page=").concat(a),V).data;if(Object(x.useEffect)((function(){c(1)}),[e,c]),!i)return Object(N.jsx)(on,{});if(0===i.results.length)return Object(N.jsx)("div",{children:"No results - try different keyword"});var s=i.results.map((function(n){return Object(N.jsx)(wn,{children:Object(N.jsx)(xn,{name:n.name,homeWorldUrl:n.homeworld,movieUrls:n.films,species:n.species})},n.url)}));return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:s}),Object(N.jsx)("div",{children:Object(N.jsx)(vn,{count:i.count,setPage:c,page:a})})]})},kn=function(){var n=Object(x.useState)(""),e=Object(R.a)(n,2),t=e[0],r=e[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(I,{setQuery:r}),t&&Object(N.jsx)(yn,{query:t})]})},Sn=t(27),Fn=t(28),Un=t(30),Cn=t(29),Nn=function(n){Object(Un.a)(t,n);var e=Object(Cn.a)(t);function t(){var n;Object(Sn.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=e.call.apply(e,[this].concat(a))).state={hasError:!1},n}return Object(Fn.a)(t,[{key:"render",value:function(){return this.state.hasError?Object(N.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(O.a.Component),zn=Nn,Jn={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1},Dn=function(){return Object(N.jsx)(w.a,{value:Jn,children:Object(N.jsx)(A,{children:Object(N.jsx)(zn,{children:Object(N.jsx)(kn,{})})})})},En=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};v.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(Dn,{})}),document.getElementById("root")),En()}},[[62,1,2]]]);
//# sourceMappingURL=main.e296a0d6.chunk.js.map
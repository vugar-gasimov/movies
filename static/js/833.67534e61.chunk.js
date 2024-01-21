"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[833],{9456:function(n,r,t){t.d(r,{p:function(){return a},y:function(){return e}});var e=function(n){return"".concat(n.slice(0,11),"...")},a=function(n){return"".concat(n.slice(0,35))}},1336:function(n,r,t){t.d(r,{i:function(){return i}});var e=t(9439),a=t(2791),i=function(n,r){var t=(0,a.useState)(null),i=(0,e.Z)(t,2),o=i[0],u=i[1],c=(0,a.useState)(null),s=(0,e.Z)(c,2),p=s[0],d=s[1];return(0,a.useEffect)((function(){n(r).then((function(n){return u(n)})).catch((function(n){return d(n.message)}))}),[r,n]),[o,u,{error:p}]}},8833:function(n,r,t){t.r(r),t.d(r,{default:function(){return _}});var e,a,i,o,u,c=t(9439),s=t(4476),p=t(2791),d=t(7689),f=t(1087),l=t(1336),v=t(1376),m=t(9456),h=t(168),x=t(5867),g=x.ZP.div(e||(e=(0,h.Z)(["\n  gap: 16px;\n  display: flex;\n\n  gap: 16px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),Z=x.ZP.div(a||(a=(0,h.Z)(["\n  border-radius: 20px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n\n  > a {\n    text-decoration: none;\n  }\n  &:hover {\n    transform: scale(1.07);\n    background-color: #0000004f;\n    box-shadow: 0 0 5px black;\n  }\n"]))),b=x.ZP.h3(i||(i=(0,h.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),k=x.ZP.main(o||(o=(0,h.Z)(["\n  grid-area: main;\n  display: grid;\n  align-items: center;\n\n  padding: 10px 20px;\n  color: #fff;\n\n  background-position: center;\n  background-size: cover;\n  font-size: 1rem;\n"]))),w=x.ZP.h2(u||(u=(0,h.Z)(["\n  padding: 8px 16px;\n  background-color: #0000004d;\n  border-radius: 30px;\n\n  margin-top: 8px;\n  margin: 0 auto;\n  color: #fdd03b;\n"]))),y=t(8722),j=t(184),_=function(){var n=(0,p.useContext)(y.S).user,r=(0,l.i)(s.vw),t=(0,c.Z)(r,1)[0],e=(0,d.TH)();return(0,j.jsxs)(k,{children:[(0,j.jsxs)(w,{children:["Welcome to Go",(0,j.jsx)(v.Z,{size:28,color:"black"}),"Watch ",n&&n.name?", ".concat(n.name):""]}),(0,j.jsx)(w,{children:"Choose a movie from Today's trendings"}),(0,j.jsx)(g,{children:t&&(null===t||void 0===t?void 0:t.map((function(n){var r,t,a,i;return(0,j.jsx)(Z,{children:(0,j.jsxs)(f.rU,{state:{from:e},to:"/movies/".concat(n.id),children:[(0,j.jsx)("img",{width:200,height:350,src:null!==n&&void 0!==n&&n.poster_path?"https://image.tmdb.org/t/p/w500".concat(null===n||void 0===n?void 0:n.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU",alt:null!==(r=null!==(t=n.original_title)&&void 0!==t?t:n.title)&&void 0!==r?r:n.name}),(0,j.jsx)(b,{children:(0,m.y)(null!==(a=null!==(i=n.original_title)&&void 0!==i?i:n.title)&&void 0!==a?a:n.name)})]})},n.id)})))})]})}},4476:function(n,r,t){t.d(r,{IV:function(){return d},Mc:function(){return p},mv:function(){return l},vw:function(){return s},wH:function(){return f}});var e=t(1413),a=t(5861),i=t(7757),o=t.n(i),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="3d5790bdd3fdeefaeb5478f646385f38",s=function(){var n=(0,a.Z)(o().mark((function n(r){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day",{params:(0,e.Z)((0,e.Z)({},r),{},{api_key:c})});case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(r),{params:{api_key:c}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(o().mark((function n(r,t){var a,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie",{params:(0,e.Z)((0,e.Z)({query:r},t),{},{api_key:c})});case 2:return a=n.sent,i=a.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=833.67534e61.chunk.js.map
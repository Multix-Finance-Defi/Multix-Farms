(this["webpackJsonpMansaMusa-frontend"]=this["webpackJsonpMansaMusa-frontend"]||[]).push([[11],{714:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"i",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return b})),t.d(n,"j",(function(){return f})),t.d(n,"f",(function(){return l})),t.d(n,"c",(function(){return j})),t.d(n,"b",(function(){return h})),t.d(n,"g",(function(){return m})),t.d(n,"h",(function(){return x}));var r=t(2),a=t.n(r),c=t(13),i=t(5),o=t.n(i),s=t(725),u=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,s.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r,c){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="null"!==localStorage.getItem("ref")?localStorage.getItem("ref"):"0x0000000000000000000000000000000000000000",e.abrupt("return",n.methods.deposit(t,new o.a(r).times(new o.a(10).pow(18)).toString(),i).send({from:c}).on("transactionHash",(function(e){return e.transactionHash})));case 2:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(new o.a(t).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:r,value:new o.a(t).times(new o.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new o.a(r).times(new o.a(10).pow(18)).toString()).send({from:c}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==n.options.address){e.next=2;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==n.options.address){e.next=4;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 4:return e.abrupt("return",n.methods.withdraw(new o.a(t).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,"0","0x0000000000000000000000000000000000000000").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,value:new o.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},720:function(e,n,t){"use strict";var r=t(0),a=t(721),c=t(53),i=t(16);n.a=function(e){var n=e.value,t=e.decimals,o=e.fontSize,s=void 0===o?"40px":o,u=e.prefix,d=Object(a.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),p=d.countUp,b=d.update,f=Object(r.useRef)(b);return Object(r.useEffect)((function(){f.current(n)}),[n,f]),Object(i.jsxs)(c.D,{bold:!0,fontSize:s,style:{color:"#FFFFFF"},children:[u,p]})}},724:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(2),a=t.n(r),c=t(13),i=t(142),o=t.n(i),s=t(43),u=function(e,n){return new(new o.a(e).eth.Contract)(s,n)},d=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u(n,t),e.prev=1,e.next=4,c.methods.balanceOf(r).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},727:function(e,n,t){"use strict";t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return j}));var r=t(42),a=t(2),c=t.n(a),i=t(13),o=t(0),s=t(72),u=t(50),d=t(115),p=t(714),b=t(716),f=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(b.d)();return{onReward:Object(o.useCallback)(Object(i.a)(c.a.mark((function a(){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(p.b)(r,e,t);case 2:return i=a.sent,n(Object(d.c)(t)),a.abrupt("return",i);case 5:case"end":return a.stop()}}),a)}))),[t,n,e,r])}},l=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(b.a)();return{onReward:Object(o.useCallback)(Object(i.a)(c.a.mark((function a(){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(p.b)(r,e,t);case 2:return i=a.sent,n(Object(d.b)(t)),a.abrupt("return",i);case 5:case"end":return a.stop()}}),a)}))),[t,n,e,r])}},j=function(e){var n=Object(s.m)().account,t=Object(b.d)();return{onReward:Object(o.useCallback)(Object(i.a)(c.a.mark((function a(){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=e.reduce((function(e,a){return[].concat(Object(r.a)(e),[Object(p.b)(t,a,n)])}),[]),a.abrupt("return",Promise.all(i));case 2:case"end":return a.stop()}}),a)}))),[n,e,t])}}},763:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return me}));var r,a,c,i,o,s,u,d,p,b,f,l,j,h,m,x=t(63),O=t(0),g=t(4),v=t(53),w=t(712),k=t(185),y=t(2),F=t.n(y),S=t(13),z=t(23),H=t(72),B=t(5),E=t.n(B),C=t(727),D=t(14),R=t(26),M=t(28),T=t(60),N=t(734),P=t(141),A=function(){var e=Object(O.useState)([]),n=Object(z.a)(e,2),t=n[0],r=n[1],a=Object(H.m)().account,c=Object(P.a)().fastRefresh;return Object(O.useEffect)((function(){a&&function(){var e=Object(S.a)(F.a.mark((function e(){var n,t,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N.a.map((function(e){return{address:Object(M.e)(),name:"pendingMLX",params:[e.pid,a]}})),e.next=3,Object(R.a)(T,n);case 3:t=e.sent,c=N.a.map((function(e,n){return Object(D.a)(Object(D.a)({},e),{},{balance:new E.a(t[n])})})),r(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,c]),t},I=t(722),L=t(721),Q=t(16),W=function(e){var n=e.value,t=e.decimals,r=e.fontSize,a=void 0===r?"20px":r,c=e.prefix,i=Object(L.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),o=i.countUp,s=i.update,u=Object(O.useRef)(s);return Object(O.useEffect)((function(){u.current(n)}),[n,u]),Object(Q.jsx)("div",{style:{color:"#FABE41",backgroundImage:"url('/images/textBg1.png')",backgroundRepeat:"no-repeat",lineHeight:"1",padding:"10px",backgroundSize:"250px"},children:Object(Q.jsxs)(v.D,{bold:!0,fontSize:a,style:{color:"#FFFFFF",backgroundRepeat:"no-repeat",lineHeight:"1"},children:[c,o]})})},U=function(e){var n=e.earningsSum,t=Object(w.a)();return Object(H.m)().account?Object(Q.jsx)(W,{value:n}):Object(Q.jsx)(v.D,{color:"failure",style:{lineHeight:"2px",padding:"1rem 0 0 0",fontSize:"20px",backgroundImage:"url('/images/textBg1.png')",backgroundRepeat:"no-repeat"},children:t(298,"Locked")})},V=function(e){var n=e.cakeBalance,t=Object(w.a)();return Object(H.m)().account?Object(Q.jsx)(W,{value:n,fontSize:"20px"}):Object(Q.jsx)(v.D,{color:"failure",style:{lineHeight:"2px",paddingTop:"1rem",fontSize:"20px",backgroundImage:"url('/images/textBg1.png')",backgroundRepeat:"no-repeat"},children:t(298,"Locked")})},G=t(113),$=t(284),J=t(93),X=t(724),q=function(e){var n=Object(O.useState)(new E.a(0)),t=Object(z.a)(n,2),r=t[0],a=t[1],c=Object(H.m)(),i=c.account,o=c.ethereum,s=Object(P.a)().fastRefresh;return Object(O.useEffect)((function(){i&&o&&function(){var n=Object(S.a)(F.a.mark((function n(){var t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(X.b)(o,e,i);case 2:t=n.sent,a(new E.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[i,o,e,s]),r},K=function(){var e=Object(O.useState)([]),n=Object(z.a)(e,2),t=n[0],r=n[1],a=Object(H.m)().account,c=Object(P.a)().fastRefresh;return Object(O.useEffect)((function(){a&&function(){var e=Object(S.a)(F.a.mark((function e(){var n,t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N.a.map((function(e){return{address:Object(M.e)(),name:"pendingMLX",params:[e.pid,a]}})),e.next=3,Object(R.a)(T,n);case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,c]),t},Y=t(713),Z=Object(g.e)(v.h)(r||(r=Object(x.a)(["\n  background-repeat: no-repeat;\n min-height: 550px;\n  background-size:100% 100%;\n // padding:40px 0px;\n  background-image:url('/images/Block1.png');\n  background-color: !important;\n"]))),_=g.e.div(a||(a=Object(x.a)(["\n//  margin-bottom: 16px;\n"]))),ee=(g.e.img(c||(c=Object(x.a)(["\n // margin-bottom: 16px;\n"]))),g.e.div(i||(i=Object(x.a)(["\n  color: ",";\n  // background:url('images/textBg2.png');\n  // padding:10px;\n  // font-size: 22px;\n  // font-weight:bold;\n  // background-repeat:no-repeat;\n"])),(function(e){return e.theme.colors.text}))),ne=g.e.div(o||(o=Object(x.a)(["\n  width: 80%;\n  \n"]))),te=g.e.div(s||(s=Object(x.a)(["\n ","{\n  padding: 1rem 1rem 0 0;\n  color:  ",";\n  font-size: 40px;\n }\n  padding: 2rem 1rem 0 0;\n  font-size: 30px;\n  color:  ",";\n  "])),(function(e){return e.theme.mediaQueries.mm}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),re=g.e.div(u||(u=Object(x.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n// background: yellow;\n height: 20rem;  \n width: 100%;  \n justify-content: space-between;\n"]))),ae=function(){var e=Object(O.useState)(!1),n=Object(z.a)(e,2),t=n[0],r=n[1],a=Object(H.m)().account,c=Object(w.a)(),i=A(),o=Object(Y.a)(q(Object(M.b)())),s=Object(G.i)().toNumber(),u=K().reduce((function(e,n){return e+new E.a(n).div(new E.a(10).pow(18)).toNumber()}),0),d=i.filter((function(e){return e.balance.toNumber()>0})),p=Object(C.a)(d.map((function(e){return e.pid}))).onReward,b=Object(O.useCallback)(Object(S.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,p();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[p]);return Object(Q.jsx)(Z,{children:Object(Q.jsxs)(v.i,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"550px"},children:[Object(Q.jsxs)(re,{children:[Object(Q.jsx)(te,{children:c(542,"Farms & Staking")}),Object(Q.jsxs)(v.n,{style:{width:"85%",display:"flex",justifyContent:"space-between"},children:[Object(Q.jsxs)(_,{children:[Object(Q.jsx)(ee,{children:c(544,"PRV to Harvest")}),Object(Q.jsx)(U,{earningsSum:u}),Object(Q.jsxs)(v.D,{style:{color:"#FFFFFF",paddingTop:"0.2rem"},children:["~$",(s*u).toFixed(2)]})]}),Object(Q.jsxs)(_,{children:[Object(Q.jsx)(ee,{children:c(546,"PRV in Wallet")}),Object(Q.jsx)(V,{cakeBalance:o}),Object(Q.jsxs)(v.D,{style:{color:"#FFFFFF",paddingTop:"0.2rem"},children:["~$",(s*o).toFixed(2)]})]})]})]}),Object(Q.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"6rem"},children:Object(Q.jsx)(ne,{children:a?Object(Q.jsx)(v.d,{id:"harvest-all",disabled:d.length<=0||t,onClick:b,fullWidth:!0,style:{background:"linear-gradient(180deg, #00ECEC 0%, #6E318E 77.6%, #6E318E 100%)"},children:t?c(548,"Collecting EGG"):c(999,"Harvest all (".concat(d.length,")"))}):Object(Q.jsx)(I.a,{fullWidth:!0})})})]})})},ce=t(732),ie=t(720),oe=Object(g.e)(v.h)(d||(d=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  background-repeat: no-repeat;\n  background-size:100% 100%;\n  padding:30px 0px;\n  background-image:url('/images/Block3.png');\n  min-height: 580px;\n"]))),se=g.e.div(p||(p=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n // margin-bottom: 8px;\n  padding-top: 1rem;\n"]))),ue=function(){var e=Object(w.a)(),n=function(){var e=Object(P.a)().slowRefresh,n=Object(O.useState)(),t=Object(z.a)(n,2),r=t[0],a=t[1];return Object(O.useEffect)((function(){function e(){return(e=Object(S.a)(F.a.mark((function e(){var n,t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(J.a)($,Object(M.b)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,a(new E.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r}(),t=function(e){var n=Object(O.useState)(new E.a(0)),t=Object(z.a)(n,2),r=t[0],a=t[1],c=Object(P.a)().slowRefresh;return Object(O.useEffect)((function(){!function(){var e=Object(S.a)(F.a.mark((function e(){var n,t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(J.a)($,Object(M.b)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,a(new E.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,c]),r}(Object(M.b)()),r=Object(G.f)(),a=Object(G.i)(),c=n?n.minus(t):new ce.a(0),i=Object(Y.a)(c),o=a.times(c),s=0;return r&&r[0]&&r[0].raPerBlock&&(s=new ce.a(r[0].raPerBlock).div(new ce.a(10).pow(18)).toNumber()),Object(Q.jsx)(oe,{children:Object(Q.jsxs)(v.i,{style:{padding:"20px 60px 0px 60px"},children:[Object(Q.jsx)(v.o,{size:"xl",mb:"24px",children:e(534,"PRV Stats")}),Object(Q.jsxs)("div",{style:{paddingTop:"60px"},children:[Object(Q.jsxs)(se,{children:[Object(Q.jsx)(v.D,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(Q.jsx)(ie.a,{fontSize:"14px",value:Object(Y.a)(o),decimals:0,prefix:"$"})]}),Object(Q.jsxs)(se,{children:[Object(Q.jsx)(v.D,{fontSize:"14px",children:e(536,"Total Minted")}),n&&Object(Q.jsx)(ie.a,{fontSize:"14px",value:Object(Y.a)(n),decimals:0})]}),Object(Q.jsxs)(se,{children:[Object(Q.jsx)(v.D,{fontSize:"14px",children:e(538,"Total Burned")}),Object(Q.jsx)(ie.a,{fontSize:"14px",value:Object(Y.a)(t),decimals:0})]}),Object(Q.jsxs)(se,{children:[Object(Q.jsx)(v.D,{fontSize:"14px",children:e(10004,"Circulating Supply")}),Object(Q.jsxs)(v.D,{color:"#FFFFFF",children:[i&&Object(Q.jsx)(ie.a,{fontSize:"14px",value:i,decimals:0})," "]})]}),Object(Q.jsxs)(se,{children:[Object(Q.jsx)(v.D,{fontSize:"14px",children:e(540,"New EGG/block")}),Object(Q.jsx)(v.D,{bold:!0,fontSize:"14px",style:{color:"#FFFFFF"},children:s})]}),Object(Q.jsxs)(se,{children:[Object(Q.jsx)(v.D,{fontSize:"14px",children:e(541,"Max Supply")}),Object(Q.jsx)(v.D,{bold:!0,fontSize:"14px",style:{color:"#FFFFFF"},children:s})]})]})]})})},de=Object(g.e)(v.h)(b||(b=Object(x.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  background-size:100% 100%;\n  padding: 80px 0px;\n // background-image:url('/images/16.png');\n  background-image:url('/images/Block4.png');\n  background-color: !important;\n  z-index: 1;\n  height: 430px;\n  ","{\n    padding-left: 0px;\n  }\n  padding-left: 20px;\n"])),(function(e){return e.theme.mediaQueries.sm})),pe=function(){Object(w.a)();var e=Object(G.j)();return Object(Q.jsx)(de,{children:Object(Q.jsxs)(v.i,{children:[Object(Q.jsx)(v.o,{size:"xl",mb:"24px",children:"Total Value Locked (TVL)"}),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ie.a,{value:e.toNumber(),prefix:"$",decimals:2}),Object(Q.jsx)(v.D,{children:"Across All Farms & Pools"})]})]})})},be=t(758),fe=Object(g.e)(v.h)(f||(f=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  background-size:100% 100%;\n//  padding:40px 0px;\n//  background-image:url('/images/16.png');\n  background-image:url('/images/Block2.png');\n  background-color: !important;\n  min-height: 550px;\n"]))),le=(g.e.div(l||(l=Object(x.a)(["\n  // align-items: center;\n  // display: flex;\n  // font-size: 14px;\n  // justify-content: space-between;\n  // margin-bottom: 8px;\n"]))),g.e.div(j||(j=Object(x.a)(["\n  ","{\n     font-size: 40px;\n     padding: 1.5rem 0 0 2rem;\n   }\n   font-size:  30px;\n   color: #00ECEC;\n   padding: 1.5rem 0 0 1rem;\n  "])),(function(e){return e.theme.mediaQueries.mm}))),je=function(){Object(w.a)();return Object(Q.jsx)(fe,{children:Object(Q.jsxs)(v.i,{children:[Object(Q.jsx)(le,{children:"Announcements"}),Object(Q.jsx)("div",{style:{paddingTop:"25px"},children:Object(Q.jsx)(be.a,{dataSource:{sourceType:"profile",screenName:"dev"},options:{height:"320",chrome:"noheader, nofooter",width:"100%"}})})]})})},he=(g.e.div(h||(h=Object(x.a)(["\n  align-items: center;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 50px;\n  text-align: center;\n  background-size:100%;\n\n  "," {\n    background-image: url('/images/leftMain.png');\n    background-position:  left center, right center;\n    height: 305px;\n    background-repeat:no-repeat;\n    background-size:400px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Object(g.e)(v.b)(m||(m=Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}))),me=function(){Object(w.a)();return Object(Q.jsx)(k.a,{children:Object(Q.jsx)("div",{children:Object(Q.jsxs)(he,{children:[Object(Q.jsx)(ae,{}),Object(Q.jsx)(je,{}),Object(Q.jsx)(ue,{}),Object(Q.jsx)(pe,{})]})})})}}}]);
//# sourceMappingURL=11.6e8df3a2.chunk.js.map
(this["webpackJsonpMansaMusa-frontend"]=this["webpackJsonpMansaMusa-frontend"]||[]).push([[4],{714:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"i",(function(){return f})),e.d(t,"d",(function(){return p})),e.d(t,"e",(function(){return d})),e.d(t,"j",(function(){return b})),e.d(t,"f",(function(){return l})),e.d(t,"c",(function(){return h})),e.d(t,"b",(function(){return j})),e.d(t,"g",(function(){return m})),e.d(t,"h",(function(){return v}));var r=e(2),a=e.n(r),c=e(13),u=e(5),o=e.n(u),i=e(725),s=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.approve(e.options.address,i.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r,c){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u="null"!==localStorage.getItem("ref")?localStorage.getItem("ref"):"0x0000000000000000000000000000000000000000",n.abrupt("return",t.methods.deposit(e,new o.a(r).times(new o.a(10).pow(18)).toString(),u).send({from:c}).on("transactionHash",(function(n){return n.transactionHash})));case 2:case"end":return n.stop()}}),n)})));return function(t,e,r,a){return n.apply(this,arguments)}}(),p=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(new o.a(e).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),d=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit().send({from:r,value:new o.a(e).times(new o.a(10).pow(18)).toString()}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),b=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.withdraw(e,new o.a(r).times(new o.a(10).pow(18)).toString()).send({from:c}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r,a){return n.apply(this,arguments)}}(),l=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==t.options.address){n.next=2;break}return n.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==t.options.address){n.next=4;break}return n.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 4:return n.abrupt("return",t.methods.withdraw(new o.a(e).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),h=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),j=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(e,"0","0x0000000000000000000000000000000000000000").send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),m=function(){var n=Object(c.a)(a.a.mark((function n(t,e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit("0").send({from:e}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),v=function(){var n=Object(c.a)(a.a.mark((function n(t,e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit().send({from:e,value:new o.a(0)}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},723:function(n,t,e){"use strict";t.a=function(n){var t=n.quoteTokenAdresses,e=n.quoteTokenSymbol,r=n.tokenAddresses,a="BNB"===e?"ETH":t[97],c=r[97];return"".concat(a,"/").concat(c)}},724:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"b",(function(){return f}));var r=e(2),a=e.n(r),c=e(13),u=e(142),o=e.n(u),i=e(43),s=function(n,t){return new(new o.a(n).eth.Contract)(i,t)},f=function(){var n=Object(c.a)(a.a.mark((function n(t,e,r){var c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=s(t,e),n.prev=1,n.next=4,c.methods.balanceOf(r).call();case 4:return u=n.sent,n.abrupt("return",u);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return","0");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t,e,r){return n.apply(this,arguments)}}()},726:function(n,t,e){"use strict";e.d(t,"b",(function(){return d}));var r=e(2),a=e.n(r),c=e(13),u=e(0),o=e(72),i=e(50),s=e(115),f=e(714),p=e(716),d=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(p.a)();return{onStake:Object(u.useCallback)(function(){var u=Object(c.a)(a.a.mark((function c(u){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("useBoosterStake",u),a.next=3,Object(f.i)(r,n,u,e);case 3:o=a.sent,t(Object(s.b)(e)),console.info(o);case 6:case"end":return a.stop()}}),c)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}};t.a=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(p.d)();return{onStake:Object(u.useCallback)(function(){var u=Object(c.a)(a.a.mark((function c(u){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.i)(r,n,u,e);case 2:o=a.sent,t(Object(s.c)(e)),console.info(o);case 5:case"end":return a.stop()}}),c)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}}},727:function(n,t,e){"use strict";e.d(t,"c",(function(){return b})),e.d(t,"b",(function(){return l})),e.d(t,"a",(function(){return h}));var r=e(42),a=e(2),c=e.n(a),u=e(13),o=e(0),i=e(72),s=e(50),f=e(115),p=e(714),d=e(716),b=function(n){var t=Object(s.b)(),e=Object(i.m)().account,r=Object(d.d)();return{onReward:Object(o.useCallback)(Object(u.a)(c.a.mark((function a(){var u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(p.b)(r,n,e);case 2:return u=a.sent,t(Object(f.c)(e)),a.abrupt("return",u);case 5:case"end":return a.stop()}}),a)}))),[e,t,n,r])}},l=function(n){var t=Object(s.b)(),e=Object(i.m)().account,r=Object(d.a)();return{onReward:Object(o.useCallback)(Object(u.a)(c.a.mark((function a(){var u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(p.b)(r,n,e);case 2:return u=a.sent,t(Object(f.b)(e)),a.abrupt("return",u);case 5:case"end":return a.stop()}}),a)}))),[e,t,n,r])}},h=function(n){var t=Object(i.m)().account,e=Object(d.d)();return{onReward:Object(o.useCallback)(Object(u.a)(c.a.mark((function a(){var u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=n.reduce((function(n,a){return[].concat(Object(r.a)(n),[Object(p.b)(e,a,t)])}),[]),a.abrupt("return",Promise.all(u));case 2:case"end":return a.stop()}}),a)}))),[t,n,e])}}},728:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var r,a,c,u=e(63),o=e(0),i=e.n(o),s=e(4),f=e(16),p=s.e.div(r||(r=Object(u.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(n){return n.size}),(function(n){return n.size})),d=function(n){var t,e=n.size,r=void 0===e?"md":e,a=Object(o.useContext)(s.a).spacing;switch(r){case"lg":t=a[6];break;case"sm":t=a[2];break;case"md":default:t=a[4]}return Object(f.jsx)(p,{size:t})},b=s.e.div(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),l=s.e.div(c||(c=Object(u.a)(["\n  flex: 1;\n  text-align: center;\n"]))),h=function(n){var t=n.children,e=i.a.Children.toArray(t).length;return Object(f.jsx)(b,{children:i.a.Children.map(t,(function(n,t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l,{children:n}),t<e-1&&Object(f.jsx)(d,{})]})}))})}},729:function(n,t,e){"use strict";e.d(t,"a",(function(){return y}));var r,a,c,u,o,i,s,f=e(63),p=(e(0),e(4)),d=e(732),b=e(53),l=e(712),h=e(16),j=p.e.div(r||(r=Object(f.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),m=p.e.input(a||(a=Object(f.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(n){return n.theme.colors.primary})),v=function(n){var t=n.endAdornment,e=n.onChange,r=n.placeholder,a=n.startAdornment,c=n.value;return Object(h.jsxs)(j,{children:[!!a&&a,Object(h.jsx)(m,{placeholder:r,value:c,onChange:e}),!!t&&t]})},O=p.e.div(c||(c=Object(f.a)([""]))),x=p.e.div(u||(u=Object(f.a)(["\n  width: ","px;\n"])),(function(n){return n.theme.spacing[3]})),w=p.e.div(o||(o=Object(f.a)(["\n  align-items: center;\n  display: flex;\n"]))),g=p.e.div(i||(i=Object(f.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(n){return n.theme.colors.primary})),k=p.e.span(s||(s=Object(f.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.colors.primary})),y=function(n){var t=n.max,e=n.symbol,r=n.onChange,a=n.onSelectMax,c=n.value,u=n.depositFeeBP,o=void 0===u?0:u,i=Object(l.a)();return Object(h.jsxs)(O,{children:[Object(h.jsxs)(g,{children:[t.toLocaleString()," ",e," ",i(526,"Available")]}),Object(h.jsx)(v,{endAdornment:Object(h.jsxs)(w,{children:[Object(h.jsx)(k,{children:e}),Object(h.jsx)(x,{}),Object(h.jsx)("div",{children:Object(h.jsx)(b.d,{size:"sm",onClick:a,children:i(452,"Max")})})]}),onChange:r,placeholder:"0",value:c}),o>0?Object(h.jsxs)(g,{children:[i(10001,"Deposit Fee"),": ",new d.a(c||0).times(o/1e4).toString()," ",e]}):null]})}},735:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(732);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var a=new r.a(10512e3)},736:function(n,t,e){"use strict";var r,a=e(63),c=e(4).e.div(r||(r=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));t.a=c},737:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));e(0);var r=e(53),a=e(16),c=function(){return Object(a.jsx)(r.C,{variant:"success",outline:!0,startIcon:Object(a.jsx)(r.F,{}),children:"No Fees"})}},738:function(n,t,e){"use strict";e.d(t,"a",(function(){return d})),e.d(t,"b",(function(){return b}));var r=e(2),a=e.n(r),c=e(13),u=e(0),o=e(72),i=(e(725),e(50)),s=e(115),f=e(714),p=e(716),d=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(p.d)();return{onApprove:Object(u.useCallback)(Object(c.a)(a.a.mark((function c(){var u;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(f.a)(n,r,e);case 3:return u=a.sent,t(Object(s.c)(e)),a.abrupt("return",u);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",!1);case 11:case"end":return a.stop()}}),c,null,[[0,8]])}))),[e,t,n,r])}},b=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(p.a)();return{onApprove:Object(u.useCallback)(Object(c.a)(a.a.mark((function c(){var u;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(f.a)(n,r,e);case 3:return u=a.sent,t(Object(s.b)(e)),a.abrupt("return",u);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",!1);case 11:case"end":return a.stop()}}),c,null,[[0,8]])}))),[e,t,n,r])}}},739:function(n,t,e){"use strict";var r=e(2),a=e.n(r),c=e(13),u=e(0),o=e(72),i=e(50),s=e(115),f=e(714),p=e(716);t.a=function(n){var t=Object(i.b)(),e=Object(o.m)().account,r=Object(p.d)();return{onUnstake:Object(u.useCallback)(function(){var u=Object(c.a)(a.a.mark((function c(u){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.j)(r,n,u,e);case 2:o=a.sent,t(Object(s.c)(e)),console.info(o);case 5:case"end":return a.stop()}}),c)})));return function(n){return u.apply(this,arguments)}}(),[e,t,r,n])}}},740:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return a}));var r=function(n){var t,e=n.numberOfDays,r=n.farmApy/100,a=e/365,c=1e3/n.cakePrice,u=c*Math.pow(1+r/365,365*a);return t=u-c,Math.round(100*t)/100},a=function(n){return(n.amountEarned/n.amountInvested*100).toFixed(2)}},741:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r,a=e(63),c=(e(0),e(4)),u=e(53),o=e(16),i=c.e.div(r||(r=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.primary})),s=function(n){var t=n.onClick,e=n.expanded;return Object(o.jsxs)(i,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(o.jsx)(u.D,{color:"primary",bold:!0,children:e?"Hide":"Details"}),e?Object(o.jsx)(u.l,{}):Object(o.jsx)(u.k,{})]})};s.defaultProps={expanded:!1};var f=s}}]);
//# sourceMappingURL=4.8b46ac0d.chunk.js.map
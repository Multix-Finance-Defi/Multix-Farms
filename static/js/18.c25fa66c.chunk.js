(this["webpackJsonpMansaMusa-frontend"]=this["webpackJsonpMansaMusa-frontend"]||[]).push([[18],{761:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Be}));var c,r,a,s,o,i,b,l,j,d,x,u,O,p,m,h,f,k,g=n(14),y=n(23),v=n(0),S=n(30),T=n(50),D=n(5),w=n.n(D),C=n(72),A=n(53),q=n(735),I=n(736),P=n(185),B=n(113),L=n(141),z=n(115),M=n(32),F=n(712),N=n(63),E=n(4),X=n(741),R=n(723),Q=n(16),W=E.e.div(c||(c=Object(N.a)(["\n  margin-top: 24px;\n"]))),G=Object(E.e)(A.t)(r||(r=Object(N.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),V=function(e){var t=e.isTokenOnly,n=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,s=e.quoteTokenAdresses,o=e.quoteTokenSymbol,i=e.tokenAddresses,b=Object(F.a)(),l=Object(R.a)({quoteTokenAdresses:s,quoteTokenSymbol:o,tokenAddresses:i});return Object(Q.jsxs)(W,{children:[Object(Q.jsxs)(A.n,{justifyContent:"space-between",children:[Object(Q.jsxs)(A.D,{children:[b(316,"Stake"),":"]}),Object(Q.jsx)(G,{href:t?"https://exchange.pancakeswap.finance/#/swap/".concat(i[97]):"https://exchange.pancakeswap.finance/#/add/".concat(l),children:a})]}),!c&&Object(Q.jsxs)(A.n,{justifyContent:"space-between",children:[Object(Q.jsxs)(A.D,{children:[b(23,"Total Liquidity"),":"]}),Object(Q.jsx)(A.D,{children:r})]}),Object(Q.jsx)(A.n,{justifyContent:"flex-start",children:Object(Q.jsx)(A.s,{external:!0,href:n,bold:!1,children:b(356,"View on BscScan")})})]})},J=n(737),U=Object(E.e)(A.n)(a||(a=Object(N.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),$=Object(E.e)(A.C)(s||(s=Object(N.a)(["\n  margin-left: 4px;\n"]))),H=function(e){var t=e.lpLabel,n=e.multiplier,c=e.bonusMultiplier,r=(e.risk,e.farmImage),a=e.tokenSymbol,s=e.depositFee;return Object(Q.jsxs)(U,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(Q.jsx)(A.q,{src:"/images/farms/".concat(r,".png"),alt:a,width:64,height:64}),Object(Q.jsxs)(A.n,{flexDirection:"column",alignItems:"flex-end",children:[Object(Q.jsx)(A.o,{mb:"4px",children:t}),Object(Q.jsxs)(A.n,{justifyContent:"center",children:[0===s?Object(Q.jsx)(J.a,{}):null,Object(Q.jsx)($,{variant:"secondary",children:n}),Object(Q.jsxs)($,{variant:"primary",children:[" + Bonus ","".concat(c,"X")]})]})]})]})},K=n(2),Y=n.n(K),Z=n(13),_=n(724),ee=n(713),te=n(722),ne=n(738),ce=n(726),re=n(739),ae=n(728),se=n(729),oe=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,s=e.depositFeeBP,o=void 0===s?0:s,i=Object(v.useState)(""),b=Object(y.a)(i,2),l=b[0],j=b[1],d=Object(v.useState)(!1),x=Object(y.a)(d,2),u=x[0],O=x[1],p=Object(F.a)(),m=Object(v.useMemo)((function(){return Object(ee.b)(t)}),[t]),h=Object(v.useCallback)((function(e){j(e.currentTarget.value)}),[j]),f=Object(v.useCallback)((function(){j(m)}),[m,j]);return Object(Q.jsxs)(A.x,{title:"".concat(p(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(Q.jsx)(se.a,{value:l,onSelectMax:f,onChange:h,max:m,symbol:a,depositFeeBP:o}),Object(Q.jsxs)(ae.a,{children:[Object(Q.jsx)(A.d,{variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(Q.jsx)(A.d,{disabled:u,onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(l);case 3:O(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},ie=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,s=Object(v.useState)(""),o=Object(y.a)(s,2),i=o[0],b=o[1],l=Object(v.useState)(!1),j=Object(y.a)(l,2),d=j[0],x=j[1],u=Object(F.a)(),O=Object(v.useMemo)((function(){return Object(ee.b)(c)}),[c]),p=Object(v.useCallback)((function(e){b(e.currentTarget.value)}),[b]),m=Object(v.useCallback)((function(){b(O)}),[O,b]);return Object(Q.jsxs)(A.x,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(Q.jsx)(se.a,{onSelectMax:m,onChange:p,value:i,max:O,symbol:a}),Object(Q.jsxs)(ae.a,{children:[Object(Q.jsx)(A.d,{variant:"secondary",onClick:n,children:u(462,"Cancel")}),Object(Q.jsx)(A.d,{disabled:d,onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,t(i);case 3:x(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:d?u(488,"Pending Confirmation"):u(464,"Confirm")})]})]})},be=E.e.div(o||(o=Object(N.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),le=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,s=Object(F.a)(),o=Object(ce.b)(r).onStake,i=Object(re.a)(r).onUnstake,b=Object(ee.a)(t),l=b.toLocaleString(),j=Object(A.I)(Object(Q.jsx)(oe,{max:n,onConfirm:o,tokenName:c,depositFeeBP:a})),d=Object(y.a)(j,1)[0],x=Object(A.I)(Object(Q.jsx)(ie,{max:t,onConfirm:i,tokenName:c})),u=Object(y.a)(x,1)[0];return Object(Q.jsxs)(A.n,{justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsx)(A.o,{color:0===b?"textDisabled":"text",children:l}),0===b?Object(Q.jsx)(A.d,{onClick:d,children:s(999,"Stake")}):Object(Q.jsxs)(be,{children:[Object(Q.jsx)(A.p,{variant:"tertiary",onClick:u,mr:"6px",children:Object(Q.jsx)(A.w,{color:"primary"})}),Object(Q.jsx)(A.p,{variant:"tertiary",onClick:d,children:Object(Q.jsx)(A.a,{color:"primary"})})]})]})},je=n(727),de=E.e.div(i||(i=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),xe=function(e){var t=e.earnings,n=e.pid,c=Object(F.a)(),r=Object(v.useState)(!1),a=Object(y.a)(r,2),s=a[0],o=a[1],i=Object(je.b)(n).onReward,b=Object(ce.b)(n).onStake,l=Object(ee.a)(t),j=l.toLocaleString();return Object(Q.jsxs)(A.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsx)(A.o,{color:0===l?"textDisabled":"text",children:j}),Object(Q.jsxs)(de,{children:[12===n?Object(Q.jsx)(A.d,{disabled:0===l||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,b(l.toString());case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(Q.jsx)(A.d,{disabled:0===l||s,onClick:Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,i();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},ue=E.e.div(b||(b=Object(N.a)(["\n  padding-top: 16px;\n"]))),Oe=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(F.a)(),a=Object(v.useState)(!1),s=Object(y.a)(a,2),o=s[0],i=s[1],b=Object(B.b)(t.pid),l=b.pid,j=b.lpAddresses,d=b.tokenAddresses,x=b.isTokenOnly,u=b.depositFeeBP,O=Object(B.c)(l),p=O.allowance,m=O.tokenBalance,h=O.stakedBalance,f=O.earnings,k=O.bonusEarning,g=O.normalEarning,S=j[97],T=d[97],D=t.lpSymbol.toUpperCase(),w=c&&p&&p.isGreaterThan(0),C=Object(v.useMemo)((function(){return x?Object(_.a)(n,T):Object(_.a)(n,S)}),[n,S,T,x]),q=Object(ne.b)(C).onApprove,I=Object(v.useCallback)(Object(Z.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,q();case 4:i(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[q]);return Object(Q.jsxs)(ue,{children:[Object(Q.jsxs)(A.n,{children:[Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"Normal MLX"}),Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Reward"})]}),Object(Q.jsx)(A.n,{children:Object(Q.jsx)(A.D,{bold:!0,style:{fontSize:"24px"},children:Object(ee.a)(g).toFixed(2)})}),Object(Q.jsxs)(A.n,{children:[Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"Bonus MLX"}),Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Reward"})]}),Object(Q.jsx)(A.n,{children:Object(Q.jsx)(A.D,{bold:!0,style:{fontSize:"24px"},children:Object(ee.a)(k).toFixed(2)})}),Object(Q.jsxs)(A.n,{children:[Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"Total MLX"}),Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(Q.jsx)(xe,{earnings:f,pid:l}),Object(Q.jsxs)(A.n,{children:[Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:D}),Object(Q.jsx)(A.D,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?w?Object(Q.jsx)(le,{stakedBalance:h,tokenBalance:m,tokenName:D,pid:l,depositFeeBP:u}):Object(Q.jsx)(A.d,{mt:"8px",fullWidth:!0,disabled:o,onClick:I,children:r(999,"Approve Contract")}):Object(Q.jsx)(te.a,{mt:"8px",fullWidth:!0})]})},pe=n(740),me=E.e.div(l||(l=Object(N.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),he=E.e.div(j||(j=Object(N.a)(["\n  margin-bottom: '10px';\n"]))),fe=Object(E.e)(A.D)(d||(d=Object(N.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),ke=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,o=e.apy,i=Object(F.a)(),b=Object(R.a)({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),l=o.times(new w.a(100)).toNumber(),j=1e3/s.toNumber(),d=Object(pe.b)({numberOfDays:1,farmApy:l,cakePrice:s}),x=Object(pe.b)({numberOfDays:7,farmApy:l,cakePrice:s}),u=Object(pe.b)({numberOfDays:30,farmApy:l,cakePrice:s}),O=Object(pe.b)({numberOfDays:365,farmApy:l,cakePrice:s});return Object(Q.jsxs)(A.x,{title:"ROI",onDismiss:t,children:[Object(Q.jsxs)(me,{children:[Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"MLX per $1000")})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:"1d"})}),Object(Q.jsx)(he,{children:Object(Q.jsxs)(A.D,{children:[Object(pe.a)({amountEarned:d,amountInvested:j}),"%"]})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:d})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:"7d"})}),Object(Q.jsx)(he,{children:Object(Q.jsxs)(A.D,{children:[Object(pe.a)({amountEarned:x,amountInvested:j}),"%"]})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:x})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:"30d"})}),Object(Q.jsx)(he,{children:Object(Q.jsxs)(A.D,{children:[Object(pe.a)({amountEarned:u,amountInvested:j}),"%"]})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:u})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:"365d(APY)"})}),Object(Q.jsx)(he,{children:Object(Q.jsxs)(A.D,{children:[Object(pe.a)({amountEarned:O,amountInvested:j}),"%"]})}),Object(Q.jsx)(he,{children:Object(Q.jsx)(A.D,{children:O})})]}),Object(Q.jsx)(fe,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(Q.jsx)(A.n,{justifyContent:"center",children:Object(Q.jsxs)(A.t,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[i(999,"Get")," ",n]})})]})},ge=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,s=e.apy,o=Object(A.I)(Object(Q.jsx)(ke,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:s})),i=Object(y.a)(o,1)[0];return Object(Q.jsx)(A.p,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(Q.jsx)(A.g,{})})},ye=Object(E.f)(x||(x=Object(N.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),ve=E.e.div(u||(u=Object(N.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),ye),Se=E.e.div(O||(O=Object(N.a)(["\n  align-self: baseline;\n  background: ;\n  background-size:100% 100%;\n  padding:50px 20px;\n  background-image:url('/images/16.png');\n  background-color: !important;\n  border-radius: 0px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]))),Te=E.e.div(p||(p=Object(N.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),De=E.e.div(m||(m=Object(N.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),we=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,s=e.account,o=Object(F.a)(),i=Object(v.useState)(!1),b=Object(y.a)(i,2),l=b[0],j=b[1],d=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),x=Object(B.c)(t.pid).bonusMultiplier,u=Object(v.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===M.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===M.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),O=u?"$".concat(Number(u).toLocaleString(void 0,{maximumFractionDigits:0})):"-",p=t.lpSymbol,m=t.apy&&t.apy.times(new w.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),h=t.quoteTokenAdresses,f=t.quoteTokenSymbol,k=t.tokenAddresses,g=t.risk;return Object(Q.jsxs)(Se,{children:["MLX"===t.tokenSymbol&&Object(Q.jsx)(ve,{}),Object(Q.jsx)(H,{lpLabel:p,multiplier:t.multiplier,risk:g,bonusMultiplier:x,depositFee:t.depositFeeBP,farmImage:d,tokenSymbol:t.tokenSymbol}),!n&&Object(Q.jsxs)(A.n,{justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsxs)(A.D,{children:[o(352,"APR"),":"]}),Object(Q.jsx)(A.D,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ge,{lpLabel:p,quoteTokenAdresses:h,quoteTokenSymbol:f,tokenAddresses:k,cakePrice:c,apy:t.apy}),m,"%"]}):Object(Q.jsx)(A.A,{height:24,width:80})})]}),Object(Q.jsxs)(A.n,{justifyContent:"space-between",children:[Object(Q.jsxs)(A.D,{children:[o(318,"Earn"),":"]}),Object(Q.jsx)(A.D,{bold:!0,children:"MLX"})]}),Object(Q.jsxs)(A.n,{justifyContent:"space-between",children:[Object(Q.jsxs)(A.D,{style:{fontSize:"24px"},children:[o(10001,"Deposit Fee"),":"]}),Object(Q.jsxs)(A.D,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(Q.jsx)(Oe,{farm:t,ethereum:a,account:s}),Object(Q.jsx)(Te,{}),Object(Q.jsx)(X.a,{onClick:function(){return j(!l)},expanded:l}),Object(Q.jsx)(De,{expanded:l,children:Object(Q.jsx)(V,{removed:n,isTokenOnly:t.isTokenOnly,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.tokenAddresses[97]):"https://bscscan.com/token/".concat(t.lpAddresses[97]),totalValueFormated:O,lpLabel:p,quoteTokenAdresses:h,quoteTokenSymbol:f,tokenAddresses:k})})]})},Ce=n(75),Ae=function(e){var t=e.stakedOnly,n=e.setStakedOnly,c=Object(S.g)(),r=c.url,a=c.isExact,s=Object(F.a)();return Object(Q.jsxs)(qe,{children:[Object(Q.jsxs)(Ie,{children:[Object(Q.jsx)(A.E,{checked:t,onChange:function(){return n(!t)}}),Object(Q.jsxs)(A.D,{children:[" ",s(699,"Staked only")]})]}),Object(Q.jsxs)(A.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(Q.jsx)(A.f,{as:Ce.b,to:"".concat(r),children:s(698,"Active")}),Object(Q.jsx)(A.f,{as:Ce.b,to:"".concat(r,"/history"),children:s(700,"Inactive")})]})]})},qe=E.e.div(h||(h=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ie=E.e.div(f||(f=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),A.D),Pe=E.e.div(k||(k=Object(N.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Be=function(e){var t=Object(S.g)().path,n=Object(F.a)(),c=Object(B.a)(),r=Object(B.i)(),a=Object(B.h)(),s=Object(C.m)(),o=s.account,i=s.ethereum,b=Object(T.b)(),l=Object(L.a)().fastRefresh;Object(v.useEffect)((function(){o&&b(Object(z.b)(o))}),[o,b,l]);var j=Object(v.useState)(!1),d=Object(y.a)(j,2),x=d[0],u=d[1],O=c.filter((function(e){return!0===!!e.isTokenOnly&&"0X"!==e.multiplier})),p=c.filter((function(e){return!0===!!e.isTokenOnly&&"0X"===e.multiplier})),m=O.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)})),h=Object(v.useCallback)((function(e,t){return e.map((function(e){var t=new w.a(e.eggPerBlock||1).times(new w.a(e.poolWeight)).div(new w.a(10).pow(18)).times(q.a),n=r.times(t),c=new w.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===M.b.BNB&&(c=c.times(a)),c.comparedTo(0)>0&&(n=n.div(c)),Object(g.a)(Object(g.a)({},e),{},{apy:n})})).map((function(e){return Object(Q.jsx)(we,{farm:e,removed:t,bnbPrice:a,cakePrice:r,ethereum:i,account:o},e.pid)}))}),[a,o,r,i]);return Object(Q.jsxs)(P.a,{children:[Object(Q.jsx)(A.o,{as:"h1",size:"lg",color:"text",mb:"50px",style:{textAlign:"center"},children:n(10002,"Stake tokens to earn MLX")}),Object(Q.jsx)(A.o,{as:"h2",color:"text",mb:"50px",style:{textAlign:"center"},children:n(1e4,"Deposit Fee will be used to buyback MLX")}),Object(Q.jsx)(Ae,{stakedOnly:x,setStakedOnly:u}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(Pe,{}),Object(Q.jsxs)(I.a,{children:[Object(Q.jsx)(S.a,{exact:!0,path:"".concat(t),children:h(x?m:O,!1)}),Object(Q.jsx)(S.a,{exact:!0,path:"".concat(t,"/history"),children:h(p,!0)})]})]})]})}}}]);
//# sourceMappingURL=18.c25fa66c.chunk.js.map
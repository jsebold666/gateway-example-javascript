(this["webpackJsonpmerchant-example-react-js"]=this["webpackJsonpmerchant-example-react-js"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a,c,r,i,l,o,u,s=n(0),j=n.n(s),d=n(30),b=n.n(d),h=n(46),O=n.n(h),x=n(16),f=n(59),p=n(7),m=n(191),v=n(5),g=n(182),y=n(15),w=n(18),k=w.a.div(a||(a=Object(y.a)(["\n  width: 45%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),S=w.a.div(c||(c=Object(y.a)(["\n  width: 100%;\n  height: ",";\n"])),(function(e){var t=e.height;return t?"".concat(t,"px"):0})),C=w.a.div(r||(r=Object(y.a)(["\n  width: 100%;\n  flex-direction: row;\n  height: auto;\n"]))),_=w.a.h2(i||(i=Object(y.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),P=w.a.div(l||(l=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"]))),R=w.a.div(o||(o=Object(y.a)(["\n  width: ",";\n  flex-direction: row;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"])),(function(e){var t=e.widthPercent;return t?"".concat(t,"%"):"100%"})),L=n(184),U=Object(w.a)(L.a)(u||(u=Object(y.a)(["\n  width: 100%;\n"]))),I=n(1);var T=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(I.jsx)(U,{value:n,id:"outlined-basic",label:t,size:"small",variant:"outlined",onChange:function(e){return a(e.target.value)}})},V=n(64),B=n(4),D=n(94),G=n(183),E=n(185),N=n(186),F=["defaultCheckedValue"],A=Object(B.a)((function(e){return Object(I.jsx)(E.a,Object(x.a)({},e))}))((function(e){var t=e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:t.palette.primary.main}}}));function W(e){var t=e.defaultCheckedValue,n=Object(V.a)(e,F),a=!1;return Object(D.a)()&&(a=t===n.value),Object(I.jsx)(A,Object(x.a)({checked:a},n))}function J(e){var t=e.labelGroup,n=e.checkData,a=void 0===n?[]:n,c=e.defaultCheckedValue,r=e.setChecked,i=e.direction||"row";return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(g.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:t}),Object(I.jsx)(G.a,{defaultValue:"first",name:"use-radio-group",onChange:function(e){return r(e.target.value)},style:{flexDirection:i},children:a.map((function(e){return Object(I.jsx)(W,{defaultCheckedValue:c,value:e.value,label:e.label,control:Object(I.jsx)(N.a,{})},e.value)}))})]})}var M=n(192),X=n(151),z=n(188);function q(e){var t=e.isChecked,n=e.setChecked,a=e.label;return Object(I.jsx)(M.a,{sx:{m:0,mr:3},component:"fieldset",variant:"standard",children:Object(I.jsx)(X.a,{children:Object(I.jsx)(E.a,{style:{userSelect:"none"},label:a||"",control:Object(I.jsx)(z.a,{checked:t,onChange:function(e){return n(e.target.checked)},name:"gilad"})})})})}var K={WIRETRANFER:0,BILLET:1,PIX:4,WALLET:5};var Z="0",H="2",Q="3",Y=n(189);function $(){return Object(Y.a)().replace(/-/g,"").substring(0,10)}function ee(){return Object(Y.a)().replace(/-/g,"").substring(0,6)}var te,ne,ae=function(e){var t,n=e.setData,a=e.setGateway_token,c=e.gateway_token,r=e.setUrlGenerated,i=e.base_url,l=e.setBaseUrl,o=e.typeFormSelected,u=j.a.useState("19"),d=Object(p.a)(u,2),b=d[0],h=d[1],O=j.a.useState($()),f=Object(p.a)(O,2),y=f[0],w=f[1],L=j.a.useState("person_user_gateway@test.com"),U=Object(p.a)(L,2),V=U[0],B=U[1],D=j.a.useState("60712326006"),G=Object(p.a)(D,2),E=G[0],N=G[1],F=j.a.useState(ee()),A=Object(p.a)(F,2),W=A[0],M=A[1],X=j.a.useState("BRL"),z=Object(p.a)(X,2),Y=z[0],te=z[1],ne=j.a.useState("0"),ae=Object(p.a)(ne,2),ce=ae[0],re=ae[1],ie=j.a.useState("500"),le=Object(p.a)(ie,2),oe=le[0],ue=le[1],se=j.a.useState("https://www.merchant.com"),je=Object(p.a)(se,2),de=je[0],be=je[1],he=j.a.useState("https://www.merchant_to_you.com"),Oe=Object(p.a)(he,2),xe=Oe[0],fe=Oe[1],pe=j.a.useState((t={},Object(v.a)(t,K.WIRETRANFER,!1),Object(v.a)(t,K.BILLET,!1),Object(v.a)(t,K.PIX,!0),Object(v.a)(t,K.WALLET,!1),t)),me=Object(p.a)(pe,2),ve=me[0],ge=me[1],ye=j.a.useState("1"),we=Object(p.a)(ye,2),ke=we[0],Se=we[1],Ce=j.a.useState("4"),_e=Object(p.a)(Ce,2),Pe=_e[0],Re=_e[1],Le=j.a.useState([]),Ue=Object(p.a)(Le,2),Ie=Ue[0],Te=Ue[1],Ve=j.a.useState(Z),Be=Object(p.a)(Ve,2),De=Be[0],Ge=Be[1],Ee=j.a.useState("60712326006"),Ne=Object(p.a)(Ee,2),Fe=Ne[0],Ae=Ne[1];function We(e,t){var n=Object(x.a)(Object(x.a)({},ve),{},Object(v.a)({},e,t));ge(n);var a=function(e){var t=e[4]?"1":"0",n=e[1]?"1":"0",a=e[0]?"1":"0",c=e[5]?"1":"0";return parseInt(c+a+n+t,2).toString()}(n);Se(a)}return Object(s.useEffect)((function(){!function(){var e=[];ve[4]&&e.push({value:K.PIX.toString(),label:"Pix"}),ve[1]&&e.push({value:K.BILLET.toString(),label:"Billet"}),ve[0]&&e.push({value:K.WIRETRANFER.toString(),label:"Wire Transfer"}),ve[5]&&e.push({value:K.WALLET.toString(),label:"Paylivre Wallet"}),Te(e)}()}),[ve]),Object(s.useEffect)((function(){r(!1);var e="5"===ce;n((function(t){return Object(x.a)(Object(x.a)({},t),{},{account_id:W,amount:oe,auto_approve:"1",callback_url:de,currency:Y,document_number:E,email:V,merchant_id:b,operation:ce,merchant_transaction_id:y,redirect_url:xe,selected_type:Pe,type:ke,pix_key_type:e?De:"",pix_key:e?Fe:""})}))}),[n,b,y,V,E,W,Y,ce,oe,de,xe,r,c,i,ke,Pe,De,Fe]),Object(I.jsxs)(k,{children:[Object(I.jsxs)(P,{style:{marginBottom:20,height:50,alignItems:"center"},children:[Object(I.jsx)(R,{widthPercent:48,children:Object(I.jsx)(_,{style:{margin:0},children:"Merchant Data:"})}),Object(I.jsx)(R,{widthPercent:50,style:{},children:Object(I.jsx)(m.a,{onClick:function(){return w($()),void M(ee())},style:{width:"100%",textTransform:"none"},variant:"outlined",children:"Reload Random Data"})})]}),Object(I.jsxs)(P,{children:[Object(I.jsxs)(R,{widthPercent:48,children:[Object(I.jsx)(T,{value:b,setValue:function(e){return h(e)},label:"Merchant ID:"}),Object(I.jsx)(S,{height:15})]}),Object(I.jsx)(R,{widthPercent:45,children:Object(I.jsx)(T,{value:y,setValue:function(e){return w(e)},label:"Merchant Transaction ID:"})})]}),Object(I.jsx)(S,{height:5}),Object(I.jsx)(T,{value:c,setValue:function(e){return a(e)},label:"Gateway Token:"}),Object(I.jsx)(_,{children:"User Data:"}),Object(I.jsx)(T,{value:V,setValue:function(e){return B(e)},label:"User Email:"}),Object(I.jsx)(S,{height:20}),Object(I.jsxs)(P,{children:[Object(I.jsx)(R,{widthPercent:48,children:Object(I.jsx)(T,{value:E,setValue:function(e){return N(e)},label:"User Document Number (CPF/CNPJ):"})}),Object(I.jsx)(R,{widthPercent:48,children:Object(I.jsx)(T,{value:W,setValue:function(e){return M(e)},label:"User Account ID in Merchant:"})})]}),Object(I.jsx)(_,{children:"Transaction Data:"}),Object(I.jsxs)(P,{children:[Object(I.jsx)(R,{widthPercent:48,children:Object(I.jsx)(T,{value:oe,setValue:function(e){return ue(e)},label:"Amount:"})}),Object(I.jsx)(R,{widthPercent:48,children:Object(I.jsx)(J,{defaultCheckedValue:Y,setChecked:function(e){return te(e)},labelGroup:"Currency",checkData:[{value:"BRL",label:"BRL"},{value:"USD",label:"USD"}]})})]}),Object(I.jsx)(S,{height:15}),Object(I.jsx)(J,{defaultCheckedValue:ce,setChecked:function(e){return re(e)},labelGroup:"Operation",checkData:[{value:"0",label:"Deposit"},{value:"5",label:"Withdraw"}]}),Object(I.jsx)(S,{height:15}),Object(I.jsx)(g.a,{component:"legend",children:"Type passed by merchant"}),Object(I.jsx)(C,{children:Object(I.jsx)(q,{label:"PIX",isChecked:ve[K.PIX],setChecked:function(e){return We(K.PIX,e)}})}),"json"===o&&"5"===ce&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(S,{height:15}),Object(I.jsx)(J,{defaultCheckedValue:Pe,setChecked:function(e){return Re(e)},labelGroup:"User selected type",checkData:Ie})]}),"json"===o&&"5"===ce&&Object(I.jsxs)(P,{children:[Object(I.jsxs)(R,{widthPercent:48,children:[Object(I.jsx)(S,{height:25}),Object(I.jsx)(J,{defaultCheckedValue:De,setChecked:function(e){return Ge(e)},labelGroup:"Pix Key Type",checkData:[{value:Z,label:"CPF/CNPJ"},{value:H,label:"Phone"},{value:Q,label:"Email"}]})]}),Object(I.jsxs)(R,{widthPercent:48,children:[Object(I.jsx)(S,{height:30}),Object(I.jsx)(T,{value:Fe,setValue:function(e){return Ae(e)},label:"User Pix Key"})]})]}),Object(I.jsx)(S,{height:15}),Object(I.jsx)(T,{value:de,setValue:function(e){return be(e)},label:"Callback URL:"}),Object(I.jsx)(S,{height:20}),Object(I.jsx)(T,{value:xe,setValue:function(e){return fe(e)},label:"Redirect URL:"}),Object(I.jsx)(S,{height:15}),Object(I.jsx)(_,{children:"Environment:"}),Object(I.jsx)(T,{value:i,setValue:function(e){return l(e)},label:"Base URL"})]})},ce=n(124);function re(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.hash({pass:t,salt:"dZk8N6kUaA32XCsS",time:2,mem:16,parallelism:1,hashLen:16,type:ce.ArgonType.Argon2i}).then((function(e){return e.encoded})).catch((function(e){return console.error(e.message,e.code)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return window.btoa(unescape(encodeURIComponent(e)))}var oe,ue,se,je=w.a.div(te||(te=Object(y.a)(["\n  display: flex;\n  flex: 1;\n  padding: 10px;\n  background: #fff;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n"]))),de=w.a.div(ne||(ne=Object(y.a)(["\n  width: 40%;\n  margin-left: 20px;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),be=n(76),he=n.n(be),Oe=n(97),xe=n.n(Oe),fe=(n(137),n(95)),pe=n.n(fe),me=n(75),ve=n(96),ge=n.n(ve),ye=(n(142),w.a.div(oe||(oe=Object(y.a)(["\n  background: #292929;\n  width: auto;\n  height: auto;\n  min-height: 100px;\n  justify-content: center;\n  padding: 0 20px 20px 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"])))),we=w.a.p(ue||(ue=Object(y.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 14px;\n  word-break: break-all;\n  font-family: "Courier New", Courier, monospace;\n'])),(function(e){return e.color||"#fff"})),ke=w.a.h2(se||(se=Object(y.a)(['\n  font-size: 18px;\n  color: white;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),Se=["dataRequest","url","urlGateway","label","textButton","type"];var Ce=function(e){var t=e.dataRequest,n=e.url,a=e.urlGateway,c=e.label,r=e.textButton,i=e.type,l=Object(V.a)(e,Se);function o(){var e=JSON.stringify(Object(x.a)(Object(x.a)({},t),{},{url:n})),c="url"===i?a:e;pe()(c);var r="url"===i?"Copied URL":"JSON Copied";me.NotificationManager.success(r,"",1e3)}var u="url"===i?xe.a:he.a;function s(){"url"===i?window.open(a):o()}return Object(I.jsxs)(ye,Object(x.a)(Object(x.a)({},l),{},{children:[Object(I.jsxs)(P,{style:{alignItems:"center",paddingTop:10,marginBottom:10},children:[Object(I.jsx)(R,{widthPercent:50,children:Object(I.jsx)(ke,{children:c})}),Object(I.jsx)(R,{widthPercent:50,children:Object(I.jsx)(m.a,{endIcon:Object(I.jsx)(u,{}),onClick:function(){return s()},style:{width:"100%",textTransform:"none"},variant:"contained",children:r})}),"url"===i&&Object(I.jsx)(R,{widthPercent:50,style:{marginLeft:20,maxWidth:140},children:Object(I.jsx)(m.a,{endIcon:Object(I.jsx)(he.a,{}),onClick:function(){return o()},style:{width:"100%",textTransform:"none",background:"#fff"},variant:"outlined",children:"Copy URL"})})]}),Object(I.jsx)(me.NotificationContainer,{}),t&&Object(I.jsx)(ge.a,{id:"json-pretty",data:Object(x.a)(Object(x.a)({},t),{},{url:n})}),a&&Object(I.jsx)(we,{color:"#ffff80",children:a})]}))};var _e=function(){var e=j.a.useState("https://dev.gateway.paylivre.com"),t=Object(p.a)(e,2),n=t[0],a=t[1],c=j.a.useState({}),r=Object(p.a)(c,2),i=r[0],l=r[1],o=j.a.useState("teste"),u=Object(p.a)(o,2),s=u[0],d=u[1],b=j.a.useState(!1),h=Object(p.a)(b,2),v=h[0],g=h[1],y=j.a.useState(""),w=Object(p.a)(y,2),k=w[0],S=w[1],C=j.a.useState(""),_=Object(p.a)(C,2),P=_[0],R=_[1],L=j.a.useState("url"),U=Object(p.a)(L,2),T=U[0];function V(e,t){var a="merchant_transaction_id=".concat(e.merchant_transaction_id),c="merchant_id=".concat(e.merchant_id),r="account_id=".concat(e.account_id),i="amount=".concat(e.amount),l="currency=".concat(e.currency),o="operation=".concat(e.operation),u="callback_url=".concat(e.callback_url),s="redirect_url=".concat(e.redirect_url),j="type=".concat(e.type),d="auto_approve=".concat(e.auto_approve),b=t?"&signature=".concat(t):"",h=e.email?"&email=".concat(e.email):"",O=e.document_number?"&document_number=".concat(e.document_number):"";return"".concat(n,"?").concat(a,"&").concat(c,"&").concat(o).concat(h).concat(O,"&").concat(i,"&").concat(l,"&").concat(j,"&").concat(r,"&").concat(u,"&").concat(s,"&").concat(d).concat(b)}function B(){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(O.a.mark((function e(){var t,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V(i),n=s+t,e.next=4,re(n);case 4:a=e.sent,c=le(a),S(t),R(V(i,c)),l((function(e){return Object(x.a)(Object(x.a)({},e),{},{signature:c})})),g(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return U[1],Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(je,{children:[Object(I.jsx)(ae,{base_url:n,setBaseUrl:a,gateway_token:s,setGateway_token:d,data:i,setUrlGenerated:g,handleGenerateURL:function(){return B()},setData:l,typeFormSelected:T}),Object(I.jsxs)(de,{children:[v&&Object(I.jsxs)(I.Fragment,{children:["url"===T&&Object(I.jsx)(Ce,{type:T,style:{marginBottom:20},urlGateway:P,label:"URL to Gateway Web:",textButton:"Open URL Gateway"}),"json"===T&&Object(I.jsx)(Ce,{type:T,style:{marginBottom:20},dataRequest:i,url:k,label:"JSON Post Request:",textButton:"Copy JSON"})]}),Object(I.jsx)(m.a,{size:"large",onClick:function(){return B()},style:{width:"100%",textTransform:"none"},variant:"contained",children:"Generate ".concat(T.toUpperCase())})]})]})})};b.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(_e,{})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.fae40205.chunk.js.map
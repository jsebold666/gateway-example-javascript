(this["webpackJsonpmerchant-example-react-js"]=this["webpackJsonpmerchant-example-react-js"]||[]).push([[0],{148:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,l,s,u,j=n(0),d=n.n(j),b=n(30),h=n.n(b),x=n(33),O=n(193),m=n(48),f=n.n(m),p=n(18),g=n(61),w=n(7),y=n(5),v=n(201),k=n(191),_=n(15),C=n(16),S=C.a.div(a||(a=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"]))),P=C.a.div(c||(c=Object(_.a)(["\n  width: ",";\n  flex-direction: row;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"])),(function(e){var t=e.widthPercent;return t?"".concat(t,"%"):"100%"})),L=C.a.div(r||(r=Object(_.a)(["\n  width: 45%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n    padding: 10px;\n  }\n"]))),R=C.a.div(i||(i=Object(_.a)(["\n  width: 100%;\n  height: ",";\n  min-height: ",";\n"])),(function(e){var t=e.height;return t?"".concat(t,"px"):0}),(function(e){var t=e.height;return t?"".concat(t,"px"):0})),T=C.a.div(o||(o=Object(_.a)(["\n  width: 100%;\n  flex-direction: row;\n  height: auto;\n"]))),I=C.a.h2(l||(l=Object(_.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),U=Object(C.a)(P)(s||(s=Object(_.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),E=n(194),B=Object(C.a)(E.a)(u||(u=Object(_.a)(["\n  width: 100%;\n"]))),V=n(1);var N=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(V.jsx)(B,{value:n,style:{marginBottom:5,marginTop:5},id:"outlined-basic",label:t,size:"small",variant:"outlined",onChange:function(e){return a(e.target.value)}})},D=n(66),W=n(4),A=n(99),G=n(192),F=n(195),J=n(196),M=["defaultCheckedValue"],X=Object(W.a)((function(e){return Object(V.jsx)(F.a,Object(p.a)({},e))}))((function(e){var t=e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:t.palette.primary.main}}}));function q(e){var t=e.defaultCheckedValue,n=Object(D.a)(e,M),a=!1;return Object(A.a)()&&(a=t===n.value),Object(V.jsx)(X,Object(p.a)({checked:a},n))}function z(e){var t=e.labelGroup,n=e.checkData,a=void 0===n?[]:n,c=e.defaultCheckedValue,r=e.setChecked,i=e.direction||"row";return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(k.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:t}),Object(V.jsx)(G.a,{defaultValue:"first",name:"use-radio-group",onChange:function(e){return r(e.target.value)},style:{flexDirection:i},children:a.map((function(e){return Object(V.jsx)(q,{defaultCheckedValue:c,value:e.value,label:e.label,control:Object(V.jsx)(J.a,{})},e.value)}))})]})}var K=n(202),Q=n(160),Y=n(197);function H(e){var t=e.isChecked,n=e.setChecked,a=e.label;return Object(V.jsx)(K.a,{sx:{m:0,mr:3},component:"fieldset",variant:"standard",children:Object(V.jsx)(Q.a,{children:Object(V.jsx)(F.a,{style:{userSelect:"none"},label:a||"",control:Object(V.jsx)(Y.a,{checked:t,onChange:function(e){return n(e.target.checked)},name:"gilad"})})})})}var Z={WIRETRANFER:0,BILLET:1,PIX:4,WALLET:5};var $="0",ee="2",te="3",ne=n(198);function ae(e){return Object(ne.a)().replace(/-/g,"").substring(0,e)}function ce(){return ae(10)}var re=function(e){var t,n=e.setData,a=e.setGateway_token,c=e.gateway_token,r=e.setUrlGenerated,i=e.base_url,o=e.setBaseUrl,l=e.typeFormSelected,s=e.dataDefault,u=d.a.useState(s.merchant_id),b=Object(w.a)(u,2),h=b[0],x=b[1],O=d.a.useState(ce()),m=Object(w.a)(O,2),f=m[0],g=m[1],_=d.a.useState("person_user_gateway@test.com"),C=Object(w.a)(_,2),P=C[0],E=C[1],B=d.a.useState("60712326006"),D=Object(w.a)(B,2),W=D[0],A=D[1],G=d.a.useState("123654asd"),F=Object(w.a)(G,2),J=F[0],M=F[1],X=d.a.useState("BRL"),q=Object(w.a)(X,2),K=q[0],Q=q[1],Y=d.a.useState("0"),ne=Object(w.a)(Y,2),ae=ne[0],re=ne[1],ie=d.a.useState("500"),oe=Object(w.a)(ie,2),le=oe[0],se=oe[1],ue=d.a.useState("https://www.google.com"),je=Object(w.a)(ue,2),de=je[0],be=je[1],he=d.a.useState("https://www.merchant_to_you.com"),xe=Object(w.a)(he,2),Oe=xe[0],me=xe[1],fe=d.a.useState((t={},Object(y.a)(t,Z.WIRETRANFER,!1),Object(y.a)(t,Z.BILLET,!1),Object(y.a)(t,Z.PIX,!0),Object(y.a)(t,Z.WALLET,!1),t)),pe=Object(w.a)(fe,2),ge=pe[0],we=pe[1],ye=d.a.useState("1"),ve=Object(w.a)(ye,2),ke=ve[0],_e=ve[1],Ce=d.a.useState("4"),Se=Object(w.a)(Ce,2),Pe=Se[0],Le=Se[1],Re=d.a.useState([]),Te=Object(w.a)(Re,2),Ie=Te[0],Ue=Te[1],Ee=d.a.useState($),Be=Object(w.a)(Ee,2),Ve=Be[0],Ne=Be[1],De=d.a.useState("60712326006"),We=Object(w.a)(De,2),Ae=We[0],Ge=We[1],Fe=d.a.useState("person_user_gateway@test.com"),Je=Object(w.a)(Fe,2),Me=Je[0],Xe=Je[1],qe=d.a.useState("123123123"),ze=Object(w.a)(qe,2),Ke=ze[0],Qe=ze[1],Ye=d.a.useState("https://github.com/paylivre/gateway-example-react-js/blob/master/assets/logo_jackpot_new.png?raw=true"),He=Object(w.a)(Ye,2),Ze=He[0],$e=He[1];function et(e,t){var n=Object(p.a)(Object(p.a)({},ge),{},Object(y.a)({},e,t));we(n);var a=function(e){var t=e[4]?"1":"0",n=e[1]?"1":"0",a=e[0]?"1":"0",c=e[5]?"1":"0";return parseInt(c+a+n+t,2).toString()}(n);_e(a)}Object(j.useEffect)((function(){!function(){var e=[];ge[4]&&e.push({value:Z.PIX.toString(),label:"Pix"}),ge[1]&&e.push({value:Z.BILLET.toString(),label:"Billet"}),ge[0]&&e.push({value:Z.WIRETRANFER.toString(),label:"Wire Transfer"}),ge[5]&&e.push({value:Z.WALLET.toString(),label:"Paylivre Wallet"}),Ue(e)}()}),[ge]);var tt="json"===l&&"0"===ae&&"5"===Pe;return Object(j.useEffect)((function(){r(!1);var e="5"===ae;function t(){if("5"===ae){var e=Number(ke);return Number.isNaN(e)?"0":e>1?"1":ke}return ke}n((function(n){return Object(p.a)(Object(p.a)({},n),{},{account_id:J,amount:le,auto_approve:"1",callback_url:de,currency:K,document_number:W,email:P,merchant_id:h,operation:ae,merchant_transaction_id:f,redirect_url:Oe,selected_type:"0"===ke?"":Pe,type:t(),login_email:tt?Me:"",password:tt?Ke:"",pix_key_type:e?Ve:"",pix_key:e?Ae:"",logo_url:Ze})}))}),[n,h,f,P,W,J,K,ae,le,de,Oe,r,c,i,ke,Pe,Ve,Ae,Ze]),Object(V.jsxs)(L,{children:[Object(V.jsxs)(S,{style:{marginBottom:20,height:50,alignItems:"center"},children:[Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(I,{style:{margin:0},children:"Merchant Data:"})}),Object(V.jsx)(U,{widthPercent:50,style:{},children:Object(V.jsx)(v.a,{onClick:function(){g(ce())},style:{width:"100%",textTransform:"none"},variant:"outlined",children:"Reload Random Data"})})]}),Object(V.jsxs)(S,{children:[Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(N,{value:h,setValue:function(e){return x(e)},label:"Merchant ID:"}),Object(V.jsx)(R,{height:15})]}),Object(V.jsx)(U,{widthPercent:45,children:Object(V.jsx)(N,{value:f,setValue:function(e){return g(e)},label:"Merchant Transaction ID:"})})]}),Object(V.jsx)(R,{height:5}),Object(V.jsx)(N,{value:c,setValue:function(e){return a(e)},label:"Gateway Token:"}),Object(V.jsx)(I,{children:"User Data:"}),Object(V.jsx)(N,{value:P,setValue:function(e){return E(e)},label:"User Email: (OPTIONAL)"}),Object(V.jsx)(R,{height:20}),Object(V.jsxs)(S,{children:[Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(N,{value:W,setValue:function(e){return A(e)},label:"User Document - CPF/CNPJ: (OPTIONAL)"})}),Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(N,{value:J,setValue:function(e){return M(e)},label:"User Account ID in Merchant:"})})]}),Object(V.jsx)(I,{children:"Transaction Data:"}),Object(V.jsxs)(S,{children:[Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(N,{value:le,setValue:function(e){return se(e)},label:"Amount:"})}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(U,{widthPercent:48,children:Object(V.jsx)(z,{defaultCheckedValue:K,setChecked:function(e){return Q(e)},labelGroup:"Currency",checkData:[{value:"BRL",label:"BRL"},{value:"USD",label:"USD"}]})})]}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(z,{defaultCheckedValue:ae,setChecked:function(e){return re(e)},labelGroup:"Operation",checkData:[{value:"0",label:"Deposit"},{value:"5",label:"Withdraw"}]}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(k.a,{component:"legend",children:"Type passed by merchant"}),Object(V.jsxs)(T,{children:[Object(V.jsx)(H,{label:"PIX",isChecked:ge[Z.PIX],setChecked:function(e){return et(Z.PIX,e)}}),"0"===ae&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(H,{label:"Billet",isChecked:ge[Z.BILLET],setChecked:function(e){return et(Z.BILLET,e)}}),Object(V.jsx)(H,{label:"Wire Transfer",isChecked:ge[Z.WIRETRANFER],setChecked:function(e){return et(Z.WIRETRANFER,e)}}),Object(V.jsx)(H,{label:"Paylivre Wallet",isChecked:ge[Z.WALLET],setChecked:function(e){return et(Z.WALLET,e)}})]})]}),"json"===l&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(R,{height:15}),Object(V.jsx)(z,{defaultCheckedValue:Pe,setChecked:function(e){return Le(e)},labelGroup:"User selected type",checkData:Ie})]}),tt&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(R,{height:15}),Object(V.jsxs)(S,{children:[Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(N,{value:Me,setValue:function(e){return Xe(e)},label:"Email Login Paylivre"}),Object(V.jsx)(R,{height:15})]}),Object(V.jsx)(U,{widthPercent:45,children:Object(V.jsx)(N,{value:Ke,setValue:function(e){return Qe(e)},label:"Password Login Paylivre"})})]})]}),"json"===l&&"5"===ae&&"4"===Pe&&Object(V.jsxs)(S,{children:[Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(R,{height:25}),Object(V.jsx)(z,{defaultCheckedValue:Ve,setChecked:function(e){return Ne(e)},labelGroup:"Pix Key Type",checkData:[{value:$,label:"CPF/CNPJ"},{value:ee,label:"Phone"},{value:te,label:"Email"}]})]}),Object(V.jsxs)(U,{widthPercent:48,children:[Object(V.jsx)(R,{height:30}),Object(V.jsx)(N,{value:Ae,setValue:function(e){return Ge(e)},label:"User Pix Key"})]})]}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(N,{value:de,setValue:function(e){return be(e)},label:"Callback URL:"}),Object(V.jsx)(R,{height:20}),Object(V.jsx)(N,{value:Oe,setValue:function(e){return me(e)},label:"Redirect URL: (OPTIONAL)"}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(I,{children:"Environment:"}),Object(V.jsx)(N,{value:i,setValue:function(e){return o(e)},label:"Base URL:"}),Object(V.jsx)(R,{height:15}),Object(V.jsx)(N,{value:Ze,setValue:function(e){return $e(e)},label:"Logo URL: (OPTIONAL)"})]})},ie=n(131);function oe(e){return le.apply(this,arguments)}function le(){return(le=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.hash({pass:t,salt:ae(14),time:2,mem:16,parallelism:1,hashLen:16,type:ie.ArgonType.Argon2i}).then((function(e){return e.encoded})).catch((function(e){return console.error(e.message,e.code)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return window.btoa(unescape(encodeURIComponent(e)))}var ue,je,de,be,he,xe,Oe,me,fe,pe={base_url:"https://dev.gateway.paylivre.com",gateway_token:"q1aUW4KuyOcAUJdvWS4K1xuwU2k27KXu",merchant_id:"19",merchant_transaction_id:"",email:"person_user_gateway@test.com",document_number:"60712326006"},ge={base_url:"https://playground.gateway.paylivre.com",gateway_token:"2eWC24I78sCxhPn3AkO9naGQKBePiBYu",merchant_id:"1287",merchant_transaction_id:"",email:"person_user_gateway@test.com",document_number:"60712326006"},we=C.a.div(ue||(ue=Object(_.a)(["\n  display: flex;\n  width: 100%;\n  padding: 10px;\n  background: #fff;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n  @media (max-width: 930px) {\n    flex-direction: column;\n    padding: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),ye=C.a.div(je||(je=Object(_.a)(["\n  width: 40%;\n  margin-left: 20px;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  @media (max-width: 930px) {\n    width: 100%;\n    margin-left: 0px;\n  }\n"]))),ve=Object(C.a)(v.a)(de||(de=Object(_.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),ke=Object(C.a)(P)(be||(be=Object(_.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),_e=n(78),Ce=n.n(_e),Se=n(102),Pe=n.n(Se),Le=(n(143),n(100)),Re=n.n(Le),Te=n(77),Ie=n(101),Ue=n.n(Ie),Ee=(n(148),C.a.div(he||(he=Object(_.a)(["\n  display: flex;\n  background: #292929;\n  flex-wrap: nowrap;\n  width: auto;\n  height: auto;\n  min-height: 100px;\n  justify-content: center;\n  padding: 0 20px 20px 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"])))),Be=C.a.p(xe||(xe=Object(_.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 14px;\n  word-break: break-all;\n  font-family: "Courier New", Courier, monospace;\n'])),(function(e){return e.color||"#fff"})),Ve=C.a.h2(Oe||(Oe=Object(_.a)(['\n  font-size: 18px;\n  color: white;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),Ne=Object(C.a)(P)(me||(me=Object(_.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n    margin: 5px 0;\n  }\n"]))),De=Object(C.a)(v.a)(fe||(fe=Object(_.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),We=["dataRequest","url","urlGateway","label","textButton","type"];var Ae=function(e){var t=e.dataRequest,n=e.url,a=e.urlGateway,c=e.label,r=e.textButton,i=e.type,o=Object(D.a)(e,We);function l(){var e=JSON.stringify(Object(p.a)(Object(p.a)({},t),{},{url:n})),c="url"===i?a:e;Re()(c);var r="url"===i?"Copied URL":"JSON Copied";Te.NotificationManager.success(r,"",1e3)}var s="url"===i?Pe.a:Ce.a;function u(){"url"===i?window.open(a):l()}return Object(V.jsxs)(Ee,Object(p.a)(Object(p.a)({},o),{},{children:[Object(V.jsxs)(S,{style:{alignItems:"center",paddingTop:10,marginBottom:10},children:[Object(V.jsx)(Ne,{widthPercent:50,children:Object(V.jsx)(Ve,{children:c})}),Object(V.jsx)(Ne,{widthPercent:50,children:Object(V.jsx)(De,{endIcon:Object(V.jsx)(s,{}),onClick:function(){return u()},style:{width:"100%",textTransform:"none"},variant:"contained",children:r})}),"url"===i&&Object(V.jsx)(Ne,{widthPercent:50,style:{marginLeft:20,maxWidth:140},children:Object(V.jsx)(De,{endIcon:Object(V.jsx)(Ce.a,{}),onClick:function(){return l()},style:{width:"100%",textTransform:"none",background:"#fff"},variant:"outlined",children:"Copy URL"})})]}),Object(V.jsx)(Te.NotificationContainer,{}),t&&Object(V.jsx)(Ue.a,{id:"json-pretty",data:Object(p.a)(Object(p.a)({},t),{},{url:n})}),a&&Object(V.jsx)(Be,{color:"#ffff80",children:a})]}))};var Ge=function(){var e=new URLSearchParams(Object(O.d)().search),t="1"===e.get("dev"),n="1"===e.get("playground"),a=t?n?ge:pe:ge,c=d.a.useState(a.base_url),r=Object(w.a)(c,2),i=r[0],o=r[1],l=d.a.useState({}),s=Object(w.a)(l,2),u=s[0],j=s[1],b=d.a.useState(a.gateway_token),h=Object(w.a)(b,2),x=h[0],m=h[1],y=d.a.useState(!1),v=Object(w.a)(y,2),k=v[0],_=v[1],C=d.a.useState(""),P=Object(w.a)(C,2),L=P[0],R=P[1],T=d.a.useState(""),I=Object(w.a)(T,2),U=I[0],E=I[1],B=d.a.useState("url"),N=Object(w.a)(B,2),D=N[0],W=N[1];function A(e,t){var n="merchant_transaction_id=".concat(e.merchant_transaction_id),a="merchant_id=".concat(e.merchant_id),c="account_id=".concat(e.account_id),r="amount=".concat(e.amount),o="currency=".concat(e.currency),l="operation=".concat(e.operation),s="callback_url=".concat(e.callback_url),u="redirect_url=".concat(e.redirect_url),j="type=".concat(e.type),d="auto_approve=".concat(e.auto_approve),b=t?"&signature=".concat(t):"",h=e.logo_url?"&logo_url=".concat(e.logo_url):"",x=e.email?"&email=".concat(e.email):"",O=e.document_number?"&document_number=".concat(e.document_number):"";return"".concat(i,"?").concat(n,"&").concat(a,"&").concat(l).concat(x).concat(O,"&").concat(r,"&").concat(o,"&").concat(j,"&").concat(c,"&").concat(s,"&").concat(u,"&").concat(d).concat(b).concat(h)}function G(){return F.apply(this,arguments)}function F(){return(F=Object(g.a)(f.a.mark((function e(){var t,n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A(u),n=x+t,e.next=4,oe(n);case 4:a=e.sent,c=se(a),R(t),E(A(u,c)),j((function(e){return Object(p.a)(Object(p.a)({},e),{},{signature:c})})),_(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(V.jsxs)(V.Fragment,{children:[t&&Object(V.jsxs)(S,{style:{justifyContent:"center"},children:[Object(V.jsx)(ke,{widthPercent:20,style:{marginRight:20,marginBottom:20},children:Object(V.jsx)(ve,{onClick:function(){return W("url")},style:{width:"100%",textTransform:"none",background:"url"===D?"#1976d2":"#c4c4c4"},variant:"contained",children:"Selected Form to URL"})}),Object(V.jsx)(ke,{widthPercent:20,children:Object(V.jsx)(ve,{onClick:function(){return W("json")},style:{width:"100%",textTransform:"none",background:"json"===D?"#1976d2":"#c4c4c4"},variant:"contained",children:"Select Form to Request JSON"})})]}),Object(V.jsxs)(we,{children:[Object(V.jsx)(re,{dataDefault:a,base_url:i,setBaseUrl:o,gateway_token:x,setGateway_token:m,data:u,setUrlGenerated:_,handleGenerateURL:function(){return G()},setData:j,typeFormSelected:D}),Object(V.jsxs)(ye,{children:[k&&Object(V.jsxs)(V.Fragment,{children:["url"===D&&Object(V.jsx)(Ae,{type:D,style:{marginBottom:20},urlGateway:U,label:"URL to Gateway Web:",textButton:"Open URL Gateway"}),"json"===D&&Object(V.jsx)(Ae,{type:D,style:{marginBottom:20},dataRequest:u,url:L,label:"JSON Post Request:",textButton:"Copy JSON"})]}),Object(V.jsx)(ve,{size:"large",onClick:function(){return G()},style:{width:"100%",textTransform:"none",minWidth:"100%",marginRight:0},variant:"contained",children:"Generate ".concat(D.toUpperCase())})]})]})]})},Fe=function(e){var t=e.history;return Object(V.jsx)(O.b,{history:t,children:Object(V.jsxs)(O.c,{children:[Object(V.jsx)(O.a,{exact:!0,path:"/",component:Ge}),Object(V.jsx)(O.a,{path:"*",component:Ge})]})})},Je=Object(x.a)();h.a.render(Object(V.jsx)(d.a.StrictMode,{children:Object(V.jsx)(Fe,{history:Je})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.37cbbce3.chunk.js.map
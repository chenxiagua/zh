"use strict";(self.webpackChunkTealstreet=self.webpackChunkTealstreet||[]).push([[0],{77445:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(72791);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"password1",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password2";return r=>a=>{const{form:l}=a,[o,c]=(0,n.useState)(!1);return n.createElement(r,Object.assign({handleConfirmBlur:e=>{const{value:t}=e.target;c((e=>e||!!t))},compareToFirstPassword:(t,r,n)=>{r&&r!==l.getFieldValue(e)?n("Passwords don't match"):n()},validateToNextPassword:(e,r,n)=>{r&&o&&l.validateFields([t],{force:!0}),n()}},a))}}},1275:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(11632),a=r(9806),l=r(34387),o=r(90887),c=r(60438),i=r.n(c),s=r(72791),d=r(34867),u=r(91523),m=r(68379);let g;const p=()=>{const[e,t]=(0,o.Z)();(0,s.useEffect)((()=>{g||fetch("https://www.tealstreet.io/wp-json/wp/v2/posts?categories=23").then((e=>e.json())).then((e=>{g=e,t()})).catch((e=>{g=[]}))}));return s.createElement(l.Zb,{bodyStyle:{maxHeight:"85vh",height:900,overflowY:"auto"}},s.createElement(u.rU,{to:m.PK},s.createElement("span",{style:f.liveTradingLinkStyle},"View Live Trading"),s.createElement(a.G,{icon:n.Stf,style:f.widgetChartIconStyle})),s.createElement(l.iz,null),(()=>{if(g&&g.length>0)return s.createElement(s.Fragment,null,s.createElement("h4",{style:f.widgetHeaderStyle},"Updates \xa0"," ",s.createElement("span",{style:f.widgetLinksStyle}," ","[",s.createElement("a",{href:"https://blog.tealstreet.io/category/tealstreet/",target:"_blank",rel:"noopener noreferrer"}," ","All"," "),"]"," ")),[...Array(Math.min(2,g.length)).keys()].map((e=>{const t=g[e];return s.createElement(s.Fragment,{key:e},s.createElement("h4",null,s.createElement("i",null,s.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},(0,d.ZP)(t.title.rendered)))," ","\xa0 | \xa0"," ",s.createElement("span",{style:f.blogPostDateStyle}," ",i()(t.date).local().format("MMM DD, YYYY"))),s.createElement("div",{style:f.widgetLinksStyle},(0,d.ZP)(t.content.rendered)),e<Math.min(2,g.length-1)&&s.createElement(l.iz,null))})))})())};let f={widgetHeaderStyle:{paddingBottom:10},widgetLinksStyle:{fontSize:16},blogPostDateStyle:{fontSize:14},liveTradingLinkStyle:{fontSize:24,paddingRight:12},widgetChartIconStyle:{fontSize:"33px",marginBottom:-6}};const y=p},99e3:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var n=r(1275),a=r(90887),l=r(72791),o=r(34867);let c;const i=()=>{const[e,t]=(0,a.Z)();return(0,l.useEffect)((()=>{c||fetch("https://blog.tealstreet.io/?rest_route=/wp/v2/pages/941").then((e=>e.json())).then((e=>{c=e,t()})).catch((e=>{c=null}))})),l.createElement("div",null,l.createElement("h1",null," Terms of service "),c&&c.content&&c.content.rendered&&(0,o.ZP)(c.content.rendered))};var s=r(51290),d=r(18025),u=(r(33601),r(29529)),m=r(38999),g=r(11632),p=r(9806),f=r(34387),y=r(49813),h=r(91277),v=r(77445),S=r(60364),E=r(64880),w=r(91523),b=r(57046),k=r(48289),R=r(4245);function I(e){let{form:t,register:r,loading:n,brand:a,backgroundImageUrl:o,backgroundImageUrlLowRes:c,signInPageRoute:i,handleConfirmBlur:s,compareToFirstPassword:y,validateToNextPassword:h,termsOfService:v,registerValidate:S,sideWidget:b,location:k,successRedirectRoute:I,overrideRedirectRoute:Z,onSuccess:x}=e;const C=(0,E.k6)(),[B,U]=(0,l.useState)(!1);let{ref:F}=R.parse(k.search);F=F&&F.toLowerCase();const L=k.pathname.replaceAll("/","").toLowerCase();"register"!==L&&(F=L);const z=e=>{e&&e.preventDefault(),t.validateFields(((e,t)=>{e||(v&&!B?S({value:{...t,ref_code:F},onSuccess:()=>U(!0)}):r({value:{...t,ref_code:F},successRedirectRoute:Z}))}))},{getFieldDecorator:W}=t,A=l.createElement(f.Zb,{title:"Register",hidden:B,style:P.registerCardStyle,extra:F?l.createElement(f.Vp,{style:{fontSize:18,padding:4},color:"gold"},"ref: ",F):l.createElement(f.zx,{style:P.toLoginRedirectButtonStyle,onClick:()=>C.push(i)},l.createElement(p.G,{style:P.toLoginArrowIconStyle,icon:g.eFW})," Login")},l.createElement(d.Z,{onSubmit:z,className:"login-form",style:P.registerFormStyle},l.createElement(d.Z.Item,null,W("email",{rules:[{required:!0,message:"Please input an email"},{type:"email",message:"Please input a valid email"}]})(l.createElement(f.II,{prefix:l.createElement(u.Z,{className:"form-icon"}),placeholder:"Email"}))),l.createElement(d.Z.Item,{hasFeedback:!0},W("password1",{rules:[{required:!0,message:"Please input your password!"},{validator:h}]})(l.createElement(f.II.Password,{prefix:l.createElement(m.Z,null),type:"password",placeholder:"Password"}))),l.createElement(d.Z.Item,{hasFeedback:!0},W("password2",{rules:[{required:!0,message:"Please confirm your password!"},{validator:y}]})(l.createElement(f.II.Password,{prefix:l.createElement(m.Z,null),type:"confirm",placeholder:"Confirm Password",onBlur:s}))),l.createElement(d.Z.Item,null,l.createElement(f.zx,{type:"primary",htmlType:"submit",loading:n,style:P.doRegisterButtonStyle},"Register"),l.createElement("div",null,"Already have an account? ",l.createElement(w.rU,{to:i},"Log In"))))),O=l.createElement(f.Zb,null,l.createElement(d.Z,{className:"login-form",style:P.outerFormWrapperStyle},l.createElement(d.Z.Item,null,v),l.createElement(f.X2,{type:"flex",justify:"space-around"},l.createElement(f.zx,{onClick:z,type:"primary",htmlType:"submit",loading:n,style:P.acceptToSButtonStyle},"Accept"))));return l.createElement(j,{type:"flex",justify:"space-around",align:"middle",backgroundImageUrl:c},l.createElement(j,{type:"flex",justify:"space-around",align:"middle",backgroundImageUrl:o},l.createElement(f.X2,{hidden:B,type:"flex",justify:"space-around",style:P.registerOuterBodyWrapperStyle,align:"middle"},b?l.createElement(l.Fragment,null,l.createElement("span",{style:P.registerBodyWrapperStyle},A),l.createElement("span",{style:P.registerSideWidgetStyle},b)):A),l.createElement(f.X2,{hidden:!B,type:"flex",justify:"space-around",style:P.registerOuterBodyWrapperStyle,align:"middle"},O)))}const Z=d.Z.create()((0,v.Z)()((0,E.EN)(I))),x=(0,S.connect)((e=>({loading:e.auth.loading})),((e,t)=>{let{successRedirectRoute:r,onSuccess:n}=t;return{register:t=>{let{value:a,successRedirectRoute:l}=t;e((0,y.z2)({value:a,successRedirectRoute:l||r,onSuccess:n}))},registerValidate:t=>{let{value:r,onSuccess:n}=t;e((0,y.o5)({value:r,onSuccess:n}))}}}))(Z);I.defaultProps={backgroundImageUrl:"/images/analytics-chart-data-min_md.jpg",onSuccess:h.ZT,signInPageRoute:"/login",successRedirectRoute:"/"};const j=(0,k.ZP)((e=>{let{backgroundImageUrl:t,...r}=e;return l.createElement(f.X2,r)}))`
  && {
    height: 100vh;
    width: 100vw;
    background-image: ${e=>`url(${(0,b.R)("PUBLIC_URL")}${e.backgroundImageUrl})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
  }
`,P={registerCardStyle:{margin:20},toLoginRedirectButtonStyle:{backgroundColor:"#237804"},toLoginArrowIconStyle:{marginLeft:-5,marginRight:5},registerFormStyle:{minWidth:300},doRegisterButtonStyle:{width:"100%"},outerFormWrapperStyle:{width:"70vw",maxWidth:1e3,height:"88vh",overflowY:"scroll",paddingRight:20,marginRight:-20},acceptToSButtonStyle:{width:300},registerBodyWrapperStyle:{paddingBottom:40},registerSideWidgetStyle:{width:"60%",minWidth:350,maxWidth:1e3,paddingBottom:40},registerOuterBodyWrapperStyle:{width:"100%",maxWidth:1400,margin:"auto"}};var C=r(98293);const B=()=>l.createElement(x,{backgroundImageUrl:s.sW,backgroundImageUrlLowRes:s.fU,termsOfService:l.createElement(i,null),sideWidget:l.createElement(n.Z,null),onSuccess:e=>{let{data:t}=e;const{user:r}=t,{username:n}=r;C.av({username:n})}})},38999:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(72791);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};var l=r(92023),o=function(e,t){return n.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="LockOutlined";const c=n.forwardRef(o)},29529:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(72791);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var l=r(92023),o=function(e,t){return n.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="UserOutlined";const c=n.forwardRef(o)},4245:(e,t,r)=>{var n=r(40499),a=r(31725);function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function o(e){return Array.isArray(e)?e.sort():"object"===typeof e?o(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=a({arrayFormat:"none"},t)),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),l=t.length>0?t.join("="):void 0;l=void 0===l?null:decodeURIComponent(l),r(decodeURIComponent(a),l,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=o(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[l(t,e),"[",n,"]"].join(""):[l(t,e),"[",l(n,e),"]=",l(r,e)].join("")};case"bracket":return function(t,r){return null===r?l(t,e):[l(t,e),"[]=",l(r,e)].join("")};default:return function(t,r){return null===r?l(t,e):[l(t,e),"=",l(r,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var a=e[n];if(void 0===a)return"";if(null===a)return l(n,t);if(Array.isArray(a)){var o=[];return a.slice().forEach((function(e){void 0!==e&&o.push(r(n,e,o.length))})),o.join("&")}return l(n,t)+"="+l(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},40499:e=>{e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
//# sourceMappingURL=0.8229317c.chunk.js.map
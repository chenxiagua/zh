"use strict";(self.webpackChunkTealstreet=self.webpackChunkTealstreet||[]).push([[276],{1275:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(11632),a=n(9806),o=n(34387),l=n(90887),u=n(60438),s=n.n(u),i=n(72791),c=n(34867),p=n(91523),d=n(68379);let f;const g=()=>{const[e,t]=(0,l.Z)();(0,i.useEffect)((()=>{f||fetch("https://www.tealstreet.io/wp-json/wp/v2/posts?categories=23").then((e=>e.json())).then((e=>{f=e,t()})).catch((e=>{f=[]}))}));return i.createElement(o.Zb,{bodyStyle:{maxHeight:"85vh",height:900,overflowY:"auto"}},i.createElement(p.rU,{to:d.PK},i.createElement("span",{style:y.liveTradingLinkStyle},"View Live Trading"),i.createElement(a.G,{icon:r.Stf,style:y.widgetChartIconStyle})),i.createElement(o.iz,null),(()=>{if(f&&f.length>0)return i.createElement(i.Fragment,null,i.createElement("h4",{style:y.widgetHeaderStyle},"Updates \xa0"," ",i.createElement("span",{style:y.widgetLinksStyle}," ","[",i.createElement("a",{href:"https://blog.tealstreet.io/category/tealstreet/",target:"_blank",rel:"noopener noreferrer"}," ","All"," "),"]"," ")),[...Array(Math.min(2,f.length)).keys()].map((e=>{const t=f[e];return i.createElement(i.Fragment,{key:e},i.createElement("h4",null,i.createElement("i",null,i.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},(0,c.ZP)(t.title.rendered)))," ","\xa0 | \xa0"," ",i.createElement("span",{style:y.blogPostDateStyle}," ",s()(t.date).local().format("MMM DD, YYYY"))),i.createElement("div",{style:y.widgetLinksStyle},(0,c.ZP)(t.content.rendered)),e<Math.min(2,f.length-1)&&i.createElement(o.iz,null))})))})())};let y={widgetHeaderStyle:{paddingBottom:10},widgetLinksStyle:{fontSize:16},blogPostDateStyle:{fontSize:14},liveTradingLinkStyle:{fontSize:24,paddingRight:12},widgetChartIconStyle:{fontSize:"33px",marginBottom:-6}};const m=g},16805:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(72791),a=n(70004);const o=r.forwardRef(((e,t)=>{let{inputStyle:n,containerStyle:o,...u}=e;return r.createElement(a.Z,Object.assign({inputStyle:l.otpInputStyle(n),containerStyle:l.otpContainerStyle(o),numInputs:6,separator:r.createElement("span",null,"-"),ref:t},u))})),l={otpInputStyle:e=>({width:36,height:38,margin:"0 5px",fontSize:12,borderRadius:4,border:"1px solid rgb(23, 23, 31)",backgroundColor:"#3b3b4d",...e}),otpContainerStyle:e=>({justifyContent:"center",...e})},u=o},83276:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var r=n(98293),a=n(1275),o=n(51290),l=n(18025),u=(n(33601),n(29529)),s=n(38999),i=n(11632),c=n(9806),p=n(34387),d=n(49813),f=n(67927),g=n(91277),y=n(16805),m=n(7218),h=n(72791),v=n(60364),b=n(64880),S=n(91523),I=n(57046),w=n(48289);const E={labelCol:{span:24},wrapperCol:{xs:{span:24}}},k=e=>{let{form:t,backgroundImageUrl:n,backgroundImageUrlLowRes:r,signUpPageRoute:a,resetPasswordPageRoute:o,sideWidget:g,location:I,onSuccess:w}=e;const k=(0,b.k6)(),{loading:O}=(0,v.useSelector)(f._9,v.shallowEqual),[x,j]=(0,h.useState)(!1),R=e=>{"2FA enabled but token not provided."===e?j(!0):m.Rt.error("Error",e)},D=(0,v.useDispatch)(),{getFieldDecorator:F}=t,Z=h.createElement(p.Zb,{title:"Login",style:C.loginCardStyle,extra:h.createElement(p.zx,{style:C.registerButtonStyle,onClick:()=>k.push(a)},h.createElement(c.G,{style:C.toRegisterArrowStyle,icon:i.eFW})," Register")},h.createElement(l.Z,Object.assign({onSubmit:e=>{e.preventDefault(),t.validateFields(((e,t)=>{e||(e=>{let{value:t,successRedirectRoute:n}=e;D((0,d.x4)({value:t,successRedirectRoute:n,onSuccess:w,handleLoginFieldError:R}))})({value:t})}))},className:"login-form",style:C.loginFormStyle},E),h.createElement("span",{hidden:x},h.createElement(l.Z.Item,null,F("email",{rules:[{required:!0,message:"Please input an email"},{type:"email",message:"Please input a valid email"}]})(h.createElement(p.II,{prefix:h.createElement(u.Z,{className:"form-icon"}),placeholder:"Email"}))),h.createElement(l.Z.Item,null,F("password",{rules:[{required:!0,message:"Please input your Password!"}]})(h.createElement(p.II,{prefix:h.createElement(s.Z,{className:"form-icon"}),type:"password",placeholder:"Password"})))),h.createElement("span",{hidden:!x},h.createElement(l.Z.Item,{label:"Two-Factor Token"},F("totp",{})(h.createElement(y.Z,null)))),h.createElement(l.Z.Item,null,h.createElement("a",{href:"https://www.tealstreet.io/contact-us/",target:"_blank",rel:"noopener noreferrer",tabIndex:"-1"},"Forgot 2FA"),h.createElement("div",{style:C.forgotPassLinkStyle,tabIndex:"-1"},h.createElement(S.rU,{to:o},"Forgot Password")),h.createElement(p.zx,{type:"primary",htmlType:"submit",loading:O,style:C.submitFormButtonStyle},x?"Confirm":"Log In"),h.createElement("div",null,"Don't have an account yet? ",h.createElement(S.rU,{to:a},"Register")))));return h.createElement(P,{type:"flex",justify:"space-around",align:"middle",backgroundImageUrl:r},h.createElement(P,{type:"flex",justify:"space-around",align:"middle",backgroundImageUrl:n},h.createElement(p.X2,{type:"flex",justify:"space-around",align:"middle",style:C.loginOuterBodyWrapperStyle},g?h.createElement(h.Fragment,null,h.createElement("span",{style:C.loginBodyWrapperStyle},Z),h.createElement("span",{style:C.loginSideWidgetStyle},g)):Z)))},O=l.Z.create()((0,b.EN)(k));k.defaultProps={backgroundImageUrl:"/images/analytics-chart-data-min_md.jpg",onSuccess:g.ZT,resetPasswordPageRoute:"/forgot-password",signUpPageRoute:"/login",successRedirectRoute:"/"};const P=(0,w.ZP)((e=>{let{backgroundImageUrl:t,...n}=e;return h.createElement(p.X2,n)}))`
  && {
    height: 100vh;
    width: 100vw;
    background-image: ${e=>`url(${(0,I.R)("PUBLIC_URL")}${e.backgroundImageUrl})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
  }
`,C={loginCardStyle:{margin:20},registerButtonStyle:{backgroundColor:"#237804"},toRegisterArrowStyle:{marginLeft:-5,marginRight:5},loginFormStyle:{width:300},forgotPassLinkStyle:{float:"right"},submitFormButtonStyle:{width:"100%"},loginBodyWrapperStyle:{paddingBottom:40},loginSideWidgetStyle:{width:"60%",minWidth:350,maxWidth:1e3,paddingBottom:40},loginOuterBodyWrapperStyle:{width:"100%",maxWidth:1400,margin:"auto"}};var x=n(91578);const j=()=>h.createElement(O,{backgroundImageUrl:o.sW,backgroundImageUrlLowRes:o.fU,sideWidget:h.createElement(a.Z,null),signUpPageRoute:x.O$,onSuccess:e=>{let{data:t}=e;const{user:n}=t,{username:a}=n;r.av({username:a})}})},38999:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(72791);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};var o=n(92023),l=function(e,t){return r.createElement(o.Z,Object.assign({},e,{ref:t,icon:a}))};l.displayName="LockOutlined";const u=r.forwardRef(l)},29529:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(72791);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var o=n(92023),l=function(e,t){return r.createElement(o.Z,Object.assign({},e,{ref:t,icon:a}))};l.displayName="UserOutlined";const u=r.forwardRef(l)},70004:(e,t,n)=>{t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==v(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=a?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(72791)),a=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}var b=function(e){return"object"===v(e)},S=function(e){p(n,e);var t=f(n);function n(e){var a;return s(this,n),h(y(a=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!b(e)&&!1!==e})).join(" ")})),h(y(a),"getType",(function(){var e=a.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),a.input=r.default.createRef(),a}return c(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,o=e.isLastChild,s=e.inputStyle,i=e.focus,c=e.isDisabled,p=e.hasErrored,d=e.errorStyle,f=e.focusStyle,g=e.disabledStyle,y=(e.shouldAutoFocus,e.isInputNum),m=e.index,h=e.value,v=e.className,S=(e.isInputSecure,u(e,a));return r.default.createElement("div",{className:v,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",l({"aria-label":"".concat(0===m?"Please enter verification code. ":"").concat(y?"Digit":"Character"," ").concat(m+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},b(s)&&s,i&&b(f)&&f,c&&b(g)&&g,p&&b(d)&&d),placeholder:t,className:this.getClasses(s,i&&f,c&&g,p&&d),type:this.getType(),maxLength:"1",ref:this.input,disabled:c,value:h||""},S)),!o&&n)}}]),n}(r.PureComponent),I=function(e){p(n,e);var t=f(n);function n(){var e;s(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return h(y(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),h(y(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),h(y(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),h(y(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),h(y(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),h(y(e),"focusInput",(function(t){var n=e.props.numInputs,r=Math.max(Math.min(n-1,t),0);e.setState({activeInput:r})})),h(y(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),h(y(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),h(y(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)})),h(y(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,a=r.numInputs;if(!r.isDisabled){for(var o=e.getOtpValue(),l=n,u=t.clipboardData.getData("text/plain").slice(0,a-n).split(""),s=0;s<a;++s)s>=n&&u.length>0&&(o[s]=u.shift(),l++);e.setState({activeInput:l},(function(){e.focusInput(l),e.handleOtpChange(o)}))}})),h(y(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),h(y(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),h(y(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),h(y(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,a=n.numInputs,o=n.inputStyle,l=n.focusStyle,u=n.separator,s=n.isDisabled,i=n.disabledStyle,c=n.hasErrored,p=n.errorStyle,d=n.shouldAutoFocus,f=n.isInputNum,g=n.isInputSecure,y=n.className,m=[],h=e.getOtpValue(),v=e.getPlaceholderValue(),b=e.props["data-cy"],I=e.props["data-testid"],w=function(n){m.push(r.default.createElement(S,{placeholder:v&&v[n],key:n,index:n,focus:t===n,value:h&&h[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:u,inputStyle:o,focusStyle:l,isLastChild:n===a-1,isDisabled:s,disabledStyle:i,hasErrored:c,errorStyle:p,shouldAutoFocus:d,isInputNum:f,isInputSecure:g,className:y,"data-cy":b&&"".concat(b,"-").concat(n),"data-testid":I&&"".concat(I,"-").concat(n)}))},E=0;E<a;E++)w(E);return m})),e}return c(n,[{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},b(e)&&e),className:b(e)?"":e},this.renderInputs())}}]),n}(r.Component);h(I,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var w=I;t.Z=w}}]);
//# sourceMappingURL=276.bc081c2d.chunk.js.map
System.register(["./index-legacy-525eae1c.js","./feeRate-legacy-e339cecd.js"],(function(a,o){"use strict";var r,e,n,i,d,l,c,t,v,s,u,b,m,g;return{setters:[a=>{r=a.f,e=a.j,n=a.G,i=a.w,d=a.aV,l=a.C,c=a.n,t=a.a0,v=a.D,s=a._,u=a.aa,b=a.a9},a=>{m=a.c,g=a.s}],execute:function(){var o=document.createElement("style");o.textContent=".van-radio-group--horizontal{display:flex;flex-wrap:wrap}:root{--van-radio-size: .53333rem;--van-radio-border-color: var(--van-gray-5);--van-radio-duration: var(--van-duration-fast);--van-radio-label-margin: var(--van-padding-xs);--van-radio-label-color: var(--van-text-color);--van-radio-checked-icon-color: var(--van-primary-color);--van-radio-disabled-icon-color: var(--van-gray-5);--van-radio-disabled-label-color: var(--van-text-color-3);--van-radio-disabled-background: var(--van-border-color)}.van-radio{display:flex;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.van-radio--disabled{cursor:not-allowed}.van-radio--label-disabled{cursor:default}.van-radio--horizontal{margin-right:var(--van-padding-sm)}.van-radio__icon{flex:none;height:1em;font-size:var(--van-radio-size);line-height:1em;cursor:pointer}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:1.25;text-align:center;border:.02667rem solid var(--van-radio-border-color);transition-duration:var(--van-radio-duration);transition-property:color,border-color,background-color}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:var(--van-white);background-color:var(--van-radio-checked-icon-color);border-color:var(--van-radio-checked-icon-color)}.van-radio__icon--disabled{cursor:not-allowed}.van-radio__icon--disabled .van-icon{background-color:var(--van-radio-disabled-background);border-color:var(--van-radio-disabled-icon-color)}.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:var(--van-radio-disabled-icon-color)}.van-radio__label{margin-left:var(--van-radio-label-margin);color:var(--van-radio-label-color);line-height:var(--van-radio-size)}.van-radio__label--left{margin:0 var(--van-radio-label-margin) 0 0}.van-radio__label--disabled{color:var(--van-radio-disabled-label-color)}\n",document.head.appendChild(o);const[p,h]=r("radio-group"),_={disabled:Boolean,iconSize:c,direction:String,modelValue:t,checkedColor:String},f=Symbol(p);var k=e({name:p,props:_,emits:["change","update:modelValue"],setup(a,{emit:o,slots:r}){const{linkChildren:e}=n(f);return i((()=>a.modelValue),(a=>o("change",a))),e({props:a,updateValue:a=>o("update:modelValue",a)}),d((()=>a.modelValue)),()=>{var o;return l("div",{class:h([a.direction]),role:"radiogroup"},[null==(o=r.default)?void 0:o.call(r)])}}});a("a",v(k));const[x,y]=r("radio");var V=e({name:x,props:m,emits:["update:modelValue"],setup(a,{emit:o,slots:r}){const{parent:e}=s(f),n=()=>{e?e.updateValue(a.name):o("update:modelValue",a.name)};return()=>l(g,b({bem:y,role:"radio",parent:e,checked:(e?e.props.modelValue:a.modelValue)===a.name,onToggle:n},a),u(r,["default","icon"]))}});a("R",v(V))}}}));

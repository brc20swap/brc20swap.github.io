import{f as _e,q as qe,E as Ue,j as fe,_ as We,l as ie,w as z,H as Oe,aV as He,C as d,aa as Ge,a9 as ze,D as Ke,ah as K,ai as a,aq as s,aj as v,ak as t,al as x,am as xe,ao as ke,ax as oe,as as ne,a4 as F,a5 as V,ae as Xe,an as T,aw as C,ap as D,au as _,ar as Ye,a6 as $e,aJ as Be,aK as we,aL as Ce,ag as Je,af as Ze,aO as Qe,aW as et,a as u,aX as tt,aY as ge,aB as L,aI as at,av as G,aZ as st,aC as O,a_ as lt,a$ as ot,b0 as nt,b1 as it,aH as rt,aG as ct}from"./index-46f2f6cb.js";import{c as ut,s as dt,A as pt,F as pe}from"./feeRate-d9442ab5.js";import{E as ft}from"./index-8a184c1c.js";const[mt,Ya]=_e("checkbox-group"),bt=Symbol(mt),[vt,yt]=_e("checkbox"),ht=qe({},ut,{bindGroup:Ue});var gt=fe({name:vt,props:ht,emits:["change","update:modelValue"],setup(f,{emit:l,slots:y}){const{parent:m}=We(bt),X=i=>{const{name:h}=f,{max:S,modelValue:$}=m.props,b=$.slice();if(i)!(S&&b.length>=+S)&&!b.includes(h)&&(b.push(h),f.bindGroup&&m.updateValue(b));else{const r=b.indexOf(h);r!==-1&&(b.splice(r,1),f.bindGroup&&m.updateValue(b))}},q=ie(()=>m&&f.bindGroup?m.props.modelValue.indexOf(f.name)!==-1:!!f.modelValue),p=(i=!q.value)=>{m&&f.bindGroup?X(i):l("update:modelValue",i)};return z(()=>f.modelValue,i=>l("change",i)),Oe({toggle:p,props:f,checked:q}),He(()=>f.modelValue),()=>d(dt,ze({bem:yt,role:"checkbox",parent:m,checked:q.value,onToggle:p},f),Ge(y,["default","icon"]))}});const _t=Ke(gt);const xt="/assets/icon-h-7f009a82.svg",kt=f=>(Be("data-v-2d0d2ac0"),f=f(),we(),f),$t={class:"bg-#fff"},Bt={class:"flex items-center justify-between p-12px pl-16px pr-16px text-12px mt-10px van-hairline--bottom"},wt={class:"text-14px color-#333 font-500"},Ct={class:"pb-30px min-h-200px"},Ft=["onClick"],Vt=kt(()=>a("img",{class:"w-40px h-40px mr-5px",style:{"border-radius":"50%"},src:xt,alt:"",srcset:""},null,-1)),Tt={class:"flex-1"},At={class:"flex items-center justify-between text-14px color-#333 font-400"},Rt={class:"flex items-center justify-between text-12px color-#999 font-400 mt-5px"},It=fe({__name:"inscribeHistory",props:{tableList:{},loading:{type:Boolean},isCurrent:{type:Boolean}},emits:["update:isCurrent","refresh","openDetail","update:error","update:loading"],setup(f,{emit:l}){const y=f,m=ie({get(){return y.isCurrent},set(p){l("update:isCurrent",p)}}),X=ie({get(){return y.loading},set(p){l("update:loading",p)}});function q(p){l("openDetail",p)}return(p,i)=>{var b;const h=_t,S=Xe,$=ft;return T(),K("div",$t,[a("div",Bt,[a("span",wt,s(p.$t("operationRecord")),1),d(h,{modelValue:t(m),"onUpdate:modelValue":i[0]||(i[0]=r=>x(m)?m.value=r:null),shape:"square","icon-size":"var(--base-size)"},{default:v(()=>[C(s(p.$t("currentToken")),1)]),_:1},8,["modelValue"])]),a("ul",Ct,[(T(!0),K(xe,null,ke(p.tableList,(r,Q)=>(T(),K("li",{key:Q,class:"flex items-center pl-16px pr-16px pt-10px pb-10px van-hairline--bottom",onClick:D(be=>q(r),["stop"])},[Vt,a("div",Tt,[a("div",At,[a("span",null,s((r==null?void 0:r.ave_op_name)||""),1),a("span",null,s(t(_)(r.amt))+" "+s(r.tick),1)]),a("div",Rt,[a("span",null,s(t(Ye)(r.createtime)),1),a("span",{class:$e(["tag status-1",{"status-2":r.status==="minted","status-1":r.status==="pending","status-3":r.status==="closed"}])},s((r==null?void 0:r.status)||""),3)])])],8,Ft))),128)),((b=p.tableList)==null?void 0:b.length)===0&&p.loading?(T(),oe(S,{key:0,style:{"margin-top":"0.5rem","text-align":"center"},size:"0.5333rem","text-size":"0.36rem"},{default:v(()=>[C(s(p.$t("loading")),1)]),_:1})):ne("",!0),F(d($,{class:"empty",description:p.$t("empty")},null,8,["description"]),[[V,p.tableList&&p.tableList.length===0&&!t(X)]])])])}}});const Dt=Ce(It,[["__scopeId","data-v-2d0d2ac0"]]),me=f=>(Be("data-v-40ad284b"),f=f(),we(),f),St={class:"page-container"},jt={class:"page-content"},Mt={class:"tabs"},Nt=["onClick"],Et={class:"mb-5px"},Pt={class:"mb-5px mt-20px"},Lt={class:"mb-5px"},qt={class:"mb-5px mt-20px"},Ut={class:"mb-5px mt-20px"},Wt={class:"mb-5px"},Ot={class:"mb-5px mt-20px"},Ht=["onClick","disabled"],Gt={class:"flex items-center justify-between text-12px mt-10px"},zt={class:"color-#999"},Kt={class:"color-#333"},Xt={class:"flex items-center justify-between text-12px mt-10px"},Yt={class:"color-#999"},Jt={class:"color-#333"},Zt={class:"pop-content text-14px color-#333"},Qt={class:"mb-10px"},ea={class:"bg-#F8F8F8 p-10px rd-4px overflow-x-auto",style:{"word-break":"break-all"}},ta={class:"flex items-center justify-between mt-10px text-14px"},aa={class:"color-#999 text-14px"},sa={class:"pop-content text-14px color-#333"},la={class:"mb-10px"},oa={class:"bg-#F8F8F8 p-10px rd-4px overflow-x-auto",style:{"word-break":"break-all"}},na={class:"flex items-center justify-between mt-10px"},ia=me(()=>a("span",{class:"color-#999"},"Fee Rate",-1)),ra={class:"flex items-center justify-between mt-10px"},ca={class:"color-#999"},ua={class:"flex items-center justify-between mt-10px"},da={class:"color-#999"},pa={class:"flex items-center justify-between mt-10px text-14px"},fa={class:"color-#999 text-14px"},ma={class:"pop-content text-14px color-#333"},ba={class:"mb-10px"},va={class:"bg-#F8F8F8 p-10px rd-4px overflow-x-auto",style:{"word-break":"break-all"}},ya={class:"flex items-center justify-between mt-10px text-14px"},ha={class:"color-#999 text-14px"},ga={class:"pop-content text-14px color-#333"},_a={class:"mb-10px"},xa={class:"bg-#F8F8F8 p-10px rd-4px overflow-x-auto",style:{"word-break":"break-all"}},ka={class:"flex items-center justify-between mt-10px"},$a=me(()=>a("span",{class:"color-#999"},"Fee Rate",-1)),Ba={class:"flex items-center justify-between mt-10px"},wa={class:"color-#999"},Ca={class:"flex items-center justify-between mt-10px"},Fa={class:"color-#999"},Va={class:"flex items-center justify-between mt-10px text-14px"},Ta={class:"color-#999 text-14px"},Aa={class:"pop-content text-14px color-#333"},Ra={class:"mb-10px"},Ia={class:"bg-#F8F8F8 p-10px rd-4px overflow-x-auto",style:{"word-break":"break-all"}},Da={class:"flex items-center justify-between mt-10px text-14px"},Sa={class:"color-#999 text-14px"},ja={class:"pop-content text-14px color-#333"},Ma={class:"mb-10px"},Na={class:"bg-#F8F8F8 p-10px rd-4px overflow-x-auto",style:{"word-break":"break-all"}},Ea={class:"flex items-center justify-between mt-10px"},Pa=me(()=>a("span",{class:"color-#999"},"Fee Rate",-1)),La={class:"flex items-center justify-between mt-10px"},qa={class:"color-#999"},Ua={class:"flex items-center justify-between mt-10px"},Wa={class:"color-#999"},Oa={class:"flex items-center justify-between mt-10px text-14px"},Ha={class:"color-#999 text-14px"},Ga=fe({__name:"inscribe",setup(f){const l=Je(),{t:y}=Ze(),m=Qe(),X=et();let q=[{value:"mint",title:y("mint")},{value:"deploy",title:y("deploy")},{value:"transfer",title:y("transfer")}],p=u(m.params.type||m.query.op||"mint"),i=u(m.query.tick||""),h=u(m.query.amt||"1"),S=u(1);z(S,e=>{e>1e3&&(S.value=1e3)});let $=u(m.query.max||"21000000"),b=u(Number(m.query.lim)||1),r=u("");function Q(){return Number(r.value)>Number(l.brc20Balance.availableBalanceSafe)?y("insufficientBalance"):""}function be(){Number(l.brc20Balance.availableBalanceSafe)>0&&(r.value=l.brc20Balance.availableBalanceSafe)}z(i,e=>{e.length===4&&ve()},{immediate:!0});function ve(){i.value&&i.value.length===4&&(l.walletAddress?l.getBrc20Balance(i.value):setTimeout(()=>{ve()},3e3))}function Fe(e){p.value=e.value,X.replace({name:"Inscribe",params:{type:e.value},query:{...m.query}})}let A=u(!1),U=u(""),j=u(!1),B=u({});function M(){return""}let re=u(!1),ce=u(""),R=u(!1),Y=u(""),N=u(!1),k=u({});function Ve(){l.checkWallet()&&(re.value=!0,ge(i.value).then(e=>{if(console.log("getBrc20Info",e),e.ticker)if(Number(e.totalMinted)+Number(h.value)>Number(e.max)){L({message:i.value+" "+y("has0LeftToMint"),position:"top"});return}else if(Number(h.value)>Number(e.limit))L({message:i.value+" "+y("has0LeftToLimit"),position:"top"});else{R.value=!0,te();let o=`{"p":"brc-20","op":"mint","tick":"${i.value}","amt":"${h.value}"}`;ce.value=o}else L({message:i.value+" "+y("doesNotExistPleaseDeployFirst"),position:"top"})}).catch(e=>{console.log("err",e),L({message:i.value+" "+y("doesNotExistPleaseDeployFirst"),position:"top"})}).finally(()=>{re.value=!1}))}z(R,e=>{e||(k.value={...k.value,payAddress:""})});function Te(){l.checkWallet()&&(N.value=!0,st({receiveAddress:l.walletAddress,feeRate:Number(Y.value)||l.fees.hourFee,outputValue:546,devAddress:"",devFee:0,brc20Ticker:i.value,brc20Amount:h.value,count:S.value}).then(e=>{N.value=!1,l.getBtcPrice(),k.value=e}).catch(e=>{O(e),N.value=!1}))}function Ae(){var o;if(!l.checkWallet())return;let e=k.value;N.value=!0,(o=l.provider)==null||o.sendBitcoin(e.payAddress,e.amount).then(c=>{console.log(c),N.value=!1,k.value={...k.value,payAddress:""},L({message:y("inscribeMintHasBeenSubmitted"),type:"success"}),R.value=!1,le()}).catch(c=>{N.value=!1,O(c)})}let ue=u(!1),ee=u("");function Re(){l.checkWallet()&&(ue.value=!0,ge(i.value).then(e=>{if(console.log("getBrc20Info",e),e.ticker)L({message:e.ticker+" "+y("alreadyExists"),position:"top"});else{A.value=!0,te();let o=`{"p":"brc-20","op":"deploy","tick":"${i.value}","max":"${$.value}","lim": "${b.value}"}`;ee.value=o}}).catch(e=>{console.log("err",e),A.value=!0;let o=`{"p":"brc-20","op":"deploy","tick":"${i.value}","max":"${$.value}","lim": "${b.value}"}`;ee.value=o,te()}).finally(()=>{ue.value=!1}))}function te(){l.getFees().then(e=>{U.value=l.fees.halfHourFee||""})}z(A,e=>{e||(B.value={...B.value,payAddress:""})});function Ie(){l.checkWallet()&&(j.value=!0,lt({receiveAddress:l.walletAddress,feeRate:Number(U.value)||l.fees.hourFee,outputValue:546,devAddress:"",devFee:0,brc20Ticker:i.value,brc20Max:$.value,brc20Limit:String(b.value)}).then(e=>{l.getBtcPrice(),B.value=e,j.value=!1}).catch(e=>{j.value=!1,O(e)}))}function De(){var o;if(!l.checkWallet())return;let e=B.value;j.value=!0,(o=l.provider)==null||o.sendBitcoin(e.payAddress,e.amount).then(c=>{console.log(c),j.value=!1,L({message:y("inscribeDeployHasBeenSubmitted"),type:"success"}),A.value=!1,le()}).catch(c=>{j.value=!1,O(c)})}let W=u(!1),Se=u(!1),de=u(""),ae=u(""),E=u(!1);function je(){let e=`{"p":"brc-20","op":"transfer","tick":"${i.value}","amt":"${r.value}"}`;de.value=e,te(),W.value=!0}z(R,e=>{e||(w.value={...w.value,payAddress:""})});let w=u({});function Me(){l.checkWallet()&&(E.value=!0,ot({receiveAddress:l.walletAddress,feeRate:Number(U.value)||l.fees.hourFee,outputValue:546,devAddress:"",devFee:0,brc20Ticker:i.value,brc20Amount:r.value}).then(e=>{l.getBtcPrice(),w.value=e,E.value=!1}).catch(e=>{E.value=!1,O(e)}))}function Ne(){var o;if(!l.checkWallet())return;let e=w.value;E.value=!0,(o=l.provider)==null||o.sendBitcoin(e.payAddress,e.amount).then(c=>{console.log(c),E.value=!1,L({message:y("inscribeTransferSubmitted"),type:"success"}),W.value=!1,le()}).catch(c=>{E.value=!1,O(c)})}let se=u(!1),J=u([]),Z=u(!1);function le(){l.walletAddress&&(se.value=!0,nt(l.walletAddress).then(e=>{console.log(e),J.value=e,se.value=!1,he()}).catch(e=>{se.value=!1,O(e)}))}let Ee=ie(()=>{var e,o;if(Z.value){if(((e=i.value)==null?void 0:e.length)===4)return(o=J.value)==null?void 0:o.filter(c=>{var g,H,P,n;return((H=(g=c==null?void 0:c.tick)==null?void 0:g.toLowerCase)==null?void 0:H.call(g))===((n=(P=i.value)==null?void 0:P.toLowerCase)==null?void 0:n.call(P))})}else return J.value;return J.value});function ye(e){return new Promise(o=>{setTimeout(o,e)})}async function he(){try{let e=J.value;if(e.length>0)for(let o=0;o<e.length;o++){let c=e[o];if(c.status==="pending"||c.status==="inscribing"){let g=await it(c.orderid);c.status=g.status,await ye(5e3)}}}catch(e){console.log(e)}finally{await ye(6e4),he()}}function Pe(e){console.log(e)}function Le(){le(),l.getFees()}return tt(()=>{Le()}),(e,o)=>{const c=rt,g=ct,H=at,P=pt;return T(),K("div",St,[a("div",jt,[a("div",Mt,[(T(!0),K(xe,null,ke(t(q),n=>(T(),K("button",{class:$e(["tab-item",{active:t(p)===n.value}]),key:n.value,onClick:D(I=>Fe(n),["stop"])},s(n.title),11,Nt))),128))]),F(d(H,{class:"text-14px color-#333 font-400 mt-20px",onSubmit:Ve},{default:v(()=>[a("div",Et,s(e.$t("token")),1),d(c,{class:"input-box",name:"tick",modelValue:t(i),"onUpdate:modelValue":o[0]||(o[0]=n=>x(i)?i.value=n:i=n),border:!1,placeholder:e.$t("fourCharacters"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")},{pattern:/^.{4}$/,message:e.$t("tickRule")}]},null,8,["modelValue","placeholder","rules"]),a("div",Pt,s(e.$t("amount")),1),d(c,{class:"input-box",name:"amount",modelValue:t(h),"onUpdate:modelValue":o[1]||(o[1]=n=>x(h)?h.value=n:h=n),type:"digit",border:!1,placeholder:e.$t("enterMintAmount"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")}]},null,8,["modelValue","placeholder","rules"]),d(g,{class:"submit-btn",block:"",type:"primary","native-type":"submit",loading:t(re),"loading-text":e.$t("confirm")},{default:v(()=>[C(s(e.$t("confirm")),1)]),_:1},8,["loading","loading-text"])]),_:1},512),[[V,t(p)==="mint"]]),F(d(H,{class:"text-14px color-#333 font-400 mt-20px",onSubmit:Re},{default:v(()=>[a("div",Lt,s(e.$t("token")),1),d(c,{class:"input-box",name:"tick",modelValue:t(i),"onUpdate:modelValue":o[2]||(o[2]=n=>x(i)?i.value=n:i=n),border:!1,placeholder:e.$t("fourCharacters"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")},{pattern:/^.{4}$/,message:e.$t("tickRule")}]},null,8,["modelValue","placeholder","rules"]),a("div",qt,s(e.$t("totalSupply")),1),d(c,{class:"input-box",name:"total",modelValue:t($),"onUpdate:modelValue":o[3]||(o[3]=n=>x($)?$.value=n:$=n),type:"digit",border:!1,placeholder:e.$t("enter"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")}]},null,8,["modelValue","placeholder","rules"]),a("div",Ut,s(e.$t("limitPerMint")),1),d(c,{class:"input-box",name:"limit",modelValue:t(b),"onUpdate:modelValue":o[4]||(o[4]=n=>x(b)?b.value=n:b=n),modelModifiers:{number:!0},type:"digit",max:"1000",border:!1,placeholder:"1000",clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")}]},null,8,["modelValue","rules"]),d(g,{class:"submit-btn",block:"",type:"primary","native-type":"submit",loading:t(ue),"loading-text":e.$t("confirm")},{default:v(()=>[C(s(e.$t("confirm")),1)]),_:1},8,["loading","loading-text"])]),_:1},512),[[V,t(p)==="deploy"]]),F(d(H,{class:"text-14px color-#333 font-400 mt-20px",onSubmit:je},{default:v(()=>[a("div",Wt,s(e.$t("token")),1),d(c,{class:"input-box",name:"tick",modelValue:t(i),"onUpdate:modelValue":o[5]||(o[5]=n=>x(i)?i.value=n:i=n),border:!1,placeholder:e.$t("fourCharacters"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")},{pattern:/^.{4}$/,message:e.$t("tickRule")}]},null,8,["modelValue","placeholder","rules"]),a("div",Ot,s(e.$t("amount")),1),d(c,{class:"input-box",name:"total",modelValue:t(r),"onUpdate:modelValue":o[6]||(o[6]=n=>x(r)?r.value=n:r=n),type:"digit",border:!1,placeholder:e.$t("enter"),clearable:"",rules:[{required:!0,message:e.$t("cannotBeEmpty")}]},{button:v(()=>[a("button",{class:"btn-max clickable",type:"button",onClick:D(be,["stop"]),disabled:!Number(t(l).brc20Balance.availableBalanceSafe)},"最大",8,Ht)]),_:1},8,["modelValue","placeholder","rules"]),a("div",Gt,[a("span",zt,s(e.$t("transferableBalance")),1),a("span",Kt,s(t(l).brc20Balance.transferableBalance)+" "+s(t(i)),1)]),a("div",Xt,[a("span",Yt,s(e.$t("availableBalance")),1),a("span",Jt,s(t(l).brc20Balance.availableBalanceSafe)+" "+s(t(i)),1)]),d(g,{class:"submit-btn",block:"",type:"primary","native-type":"submit",loading:t(Se),disabled:Q()!=="","loading-text":e.$t("confirm")},{default:v(()=>[C(s(Q()||e.$t("confirm")),1)]),_:1},8,["loading","disabled","loading-text"])]),_:1},512),[[V,t(p)==="transfer"]])]),d(Dt,{tableList:t(Ee),loading:t(se),isCurrent:t(Z),"onUpdate:isCurrent":o[7]||(o[7]=n=>x(Z)?Z.value=n:Z=n),onOpenDetail:Pe},null,8,["tableList","loading","isCurrent"]),d(P,{show:t(R),"onUpdate:show":o[9]||(o[9]=n=>x(R)?R.value=n:R=n),title:e.$t("mintConfirm")},{default:v(()=>{var n;return[F(a("div",Zt,[a("div",Qt,s(e.$t("youWillInscribe"))+" "+s(t(h))+" "+s(t(i)),1),a("div",ea,s(t(ce)),1),t(R)?(T(),oe(pe,{key:0,feeRate:t(Y),"onUpdate:feeRate":o[8]||(o[8]=I=>x(Y)?Y.value=I:Y=I)},null,8,["feeRate"])):ne("",!0),a("div",ta,[a("span",aa,s(e.$t("availableBalance")),1),a("span",null,s(t(_)(t(G)(t(l).balance.confirmed)))+" BTC",1)]),d(g,{class:"buy-btn",block:"",type:"primary",loading:t(N),"loading-text":e.$t("confirm"),disabled:M()!=="",onClick:D(Te,["stop"])},{default:v(()=>[C(s(e.$t("confirm")),1)]),_:1},8,["loading","loading-text","disabled","onClick"])],512),[[V,!t(k).payAddress]]),F(a("div",sa,[a("div",la,s(e.$t("youWillInscribe"))+" "+s(t(h))+" "+s(t(i)),1),a("div",oa,s(t(ce)),1),a("div",na,[ia,a("span",null,s(t(k).feeRate||0)+" sats/vB",1)]),a("div",ra,[a("span",ca,s(e.$t("serviceFee")),1),a("span",null,s(t(k).serviceFee||0)+" sats ≈ $"+s(t(_)((t(k).serviceFee||0)*(t(l).btcPrice||0)/10**8)),1)]),a("div",ua,[a("span",da,s(e.$t("payAmount")),1),a("span",null,s(t(_)(t(k).amount/10**8))+" BTC ≈ $"+s(t(_)((((n=t(k))==null?void 0:n.amount)||0)*(t(l).btcPrice||0)/10**8)),1)]),a("div",pa,[a("span",fa,s(e.$t("availableBalance")),1),a("span",null,s(t(_)(t(G)(t(l).balance.confirmed)))+" BTC",1)]),d(g,{class:"buy-btn",block:"",type:"primary",loading:t(N),"loading-text":e.$t("confirm"),disabled:M()!=="",onClick:D(Ae,["stop"])},{default:v(()=>[C(s(e.$t("payBtc")),1)]),_:1},8,["loading","loading-text","disabled","onClick"])],512),[[V,t(k).payAddress]])]}),_:1},8,["show","title"]),d(P,{show:t(A),"onUpdate:show":o[11]||(o[11]=n=>x(A)?A.value=n:A=n),title:e.$t("deployConfirm")},{default:v(()=>{var n;return[F(a("div",ma,[a("div",ba,s(e.$t("youWillInscribe"))+" 1 brc-20 ",1),a("div",va,s(t(ee)),1),t(A)?(T(),oe(pe,{key:0,feeRate:t(U),"onUpdate:feeRate":o[10]||(o[10]=I=>x(U)?U.value=I:U=I)},null,8,["feeRate"])):ne("",!0),a("div",ya,[a("span",ha,s(e.$t("availableBalance")),1),a("span",null,s(t(_)(t(G)(t(l).balance.confirmed)))+" BTC",1)]),d(g,{class:"buy-btn",block:"",type:"primary",loading:t(j),"loading-text":e.$t("confirm"),disabled:M()!=="",onClick:D(Ie,["stop"])},{default:v(()=>[C(s(M()||e.$t("confirm")),1)]),_:1},8,["loading","loading-text","disabled","onClick"])],512),[[V,!t(B).payAddress]]),F(a("div",ga,[a("div",_a,s(e.$t("youWillInscribe"))+" 1 brc-20 ",1),a("div",xa,s(t(ee)),1),a("div",ka,[$a,a("span",null,s(t(B).feeRate||0)+" sats/vB",1)]),a("div",Ba,[a("span",wa,s(e.$t("serviceFee")),1),a("span",null,s(t(B).serviceFee||0)+" sats ≈ $"+s(t(_)((t(B).serviceFee||0)*(t(l).btcPrice||0)/10**8)),1)]),a("div",Ca,[a("span",Fa,s(e.$t("payAmount")),1),a("span",null,s(t(_)(t(B).amount/10**8))+" BTC ≈ $"+s(t(_)((((n=t(B))==null?void 0:n.amount)||0)*(t(l).btcPrice||0)/10**8)),1)]),a("div",Va,[a("span",Ta,s(e.$t("availableBalance")),1),a("span",null,s(t(_)(t(G)(t(l).balance.confirmed)))+" BTC",1)]),d(g,{class:"buy-btn",block:"",type:"primary",loading:t(j),"loading-text":e.$t("payBtc"),disabled:M()!=="",onClick:D(De,["stop"])},{default:v(()=>[C(s(e.$t("payBtc")),1)]),_:1},8,["loading","loading-text","disabled","onClick"])],512),[[V,t(B).payAddress]])]}),_:1},8,["show","title"]),d(P,{show:t(W),"onUpdate:show":o[13]||(o[13]=n=>x(W)?W.value=n:W=n),title:e.$t("transferConfirm")},{default:v(()=>{var n;return[F(a("div",Aa,[a("div",Ra,s(e.$t("youWillInscribe"))+" transfer "+s(t(r))+" "+s(t(i)),1),a("div",Ia,s(t(de)),1),t(W)?(T(),oe(pe,{key:0,feeRate:t(ae),"onUpdate:feeRate":o[12]||(o[12]=I=>x(ae)?ae.value=I:ae=I)},null,8,["feeRate"])):ne("",!0),a("div",Da,[a("span",Sa,s(e.$t("availableBalance")),1),a("span",null,s(t(_)(t(G)(t(l).balance.confirmed)))+" BTC",1)]),d(g,{class:"buy-btn",block:"",type:"primary",loading:t(E),"loading-text":e.$t("confirm"),disabled:M()!=="",onClick:D(Me,["stop"])},{default:v(()=>[C(s(M()||e.$t("confirm")),1)]),_:1},8,["loading","loading-text","disabled","onClick"])],512),[[V,!t(w).payAddress]]),F(a("div",ja,[a("div",Ma,s(e.$t("youWillInscribe"))+" transfer "+s(t(r))+" "+s(t(i)),1),a("div",Na,s(t(de)),1),a("div",Ea,[Pa,a("span",null,s(t(w).feeRate||0)+" sats/vB",1)]),a("div",La,[a("span",qa,s(e.$t("serviceFee")),1),a("span",null,s(t(w).serviceFee||0)+" sats ≈ $"+s(t(_)((t(w).serviceFee||0)*(t(l).btcPrice||0)/10**8)),1)]),a("div",Ua,[a("span",Wa,s(e.$t("payAmount")),1),a("span",null,s(t(_)(t(w).amount/10**8))+" BTC ≈ $"+s(t(_)((((n=t(w))==null?void 0:n.amount)||0)*(t(l).btcPrice||0)/10**8)),1)]),a("div",Oa,[a("span",Ha,s(e.$t("availableBalance")),1),a("span",null,s(t(_)(t(G)(t(l).balance.confirmed)))+" BTC",1)]),d(g,{class:"buy-btn",block:"",type:"primary",loading:t(E),"loading-text":e.$t("payBtc"),disabled:M()!=="",onClick:D(Ne,["stop"])},{default:v(()=>[C(s(e.$t("payBtc")),1)]),_:1},8,["loading","loading-text","disabled","onClick"])],512),[[V,t(w).payAddress]])]}),_:1},8,["show","title"])])}}});const Ja=Ce(Ga,[["__scopeId","data-v-40ad284b"]]);export{Ja as default};

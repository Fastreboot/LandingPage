import{R as U,j as J}from"./index-C_DuXPrL.js";var fe=e=>e.type==="checkbox",se=e=>e instanceof Date,L=e=>e==null;const Ze=e=>typeof e=="object";var m=e=>!L(e)&&!Array.isArray(e)&&Ze(e)&&!se(e),gr=e=>m(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vr=(e,s)=>e.has(hr(s)),br=e=>{const s=e.constructor&&e.constructor.prototype;return m(s)&&s.hasOwnProperty("isPrototypeOf")},Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function C(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(t||m(e)))if(s=t?[]:{},!t&&!br(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=C(e[l]));else return e;return s}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,d=(e,s,t)=>{if(!s||!m(e))return t;const l=ce(s.split(/[,[\].]+?/)).reduce((u,n)=>L(u)?u:u[n],e);return F(l)||l===e?F(e[s])?t:e[s]:l},K=e=>typeof e=="boolean";const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};U.createContext(null);var _r=(e,s,t,l=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const g=n;return s._proxyFormState[g]!==P.all&&(s._proxyFormState[g]=!l||P.all),t&&(t[g]=!0),e[g]}});return u},M=e=>m(e)&&!Object.keys(e).length,xr=(e,s,t,l)=>{t(e);const{name:u,...n}=e;return M(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(g=>s[g]===(!l||P.all))},ke=e=>Array.isArray(e)?e:[e];function Vr(e){const s=U.useRef(e);s.current=e,U.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var j=e=>typeof e=="string",wr=(e,s,t,l,u)=>j(e)?(l&&s.watch.add(e),d(t,e,u)):Array.isArray(e)?e.map(n=>(l&&s.watch.add(n),d(t,n))):(l&&(s.watchAll=!0),t),Te=e=>/^\w*$/.test(e),er=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,s,t)=>{let l=-1;const u=Te(s)?[s]:er(s),n=u.length,g=n-1;for(;++l<n;){const h=u[l];let B=t;if(l!==g){const q=e[h];B=m(q)||Array.isArray(q)?q:isNaN(+u[l+1])?{}:[]}e[h]=B,e=e[h]}return e},Fr=(e,s,t,l,u)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[l]:u||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const oe=(e,s,t,l)=>{for(const u of t||Object.keys(e)){const n=d(e,u);if(n){const{_f:g,...h}=n;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],u)&&!l)break;if(g.ref&&s(g.ref,g.name)&&!l)break;oe(h,s)}else m(h)&&oe(h,s)}}};var Ar=(e,s,t)=>{const l=ce(d(e,t));return w(l,"root",s[t]),w(e,t,l),e},Oe=e=>e.type==="file",Q=e=>typeof e=="function",be=e=>{if(!Le)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>j(e),Ne=e=>e.type==="radio",_e=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:ze}return ze};const Je={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||K(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var te=e=>m(e)&&!_e(e)?e:{value:e,message:""},Xe=async(e,s,t,l,u)=>{const{ref:n,refs:g,required:h,maxLength:B,minLength:q,min:A,max:b,pattern:de,validate:z,name:T,valueAsNumber:we,mount:G,disabled:ie}=e._f,_=d(s,T);if(!G||ie)return{};const H=g?g[0]:n,W=v=>{l&&H.reportValidity&&(H.setCustomValidity(K(v)?"":v||""),H.reportValidity())},D={},Z=Ne(n),ye=fe(n),X=Z||ye,ee=(we||Oe(n))&&F(n.value)&&F(_)||be(n)&&n.value===""||_===""||Array.isArray(_)&&!_.length,N=Fr.bind(null,T,t,D),ge=(v,x,k,p=$.maxLength,I=$.minLength)=>{const R=v?x:k;D[T]={type:v?p:I,message:R,ref:n,...N(v?p:I,R)}};if(u?!Array.isArray(_)||!_.length:h&&(!X&&(ee||L(_))||K(_)&&!_||ye&&!rr(g).isValid||Z&&!tr(g).isValid)){const{value:v,message:x}=ve(h)?{value:!!h,message:h}:te(h);if(v&&(D[T]={type:$.required,message:x,ref:H,...N($.required,x)},!t))return W(x),D}if(!ee&&(!L(A)||!L(b))){let v,x;const k=te(b),p=te(A);if(!L(_)&&!isNaN(_)){const I=n.valueAsNumber||_&&+_;L(k.value)||(v=I>k.value),L(p.value)||(x=I<p.value)}else{const I=n.valueAsDate||new Date(_),R=ne=>new Date(new Date().toDateString()+" "+ne),ae=n.type=="time",le=n.type=="week";j(k.value)&&_&&(v=ae?R(_)>R(k.value):le?_>k.value:I>new Date(k.value)),j(p.value)&&_&&(x=ae?R(_)<R(p.value):le?_<p.value:I<new Date(p.value))}if((v||x)&&(ge(!!v,k.message,p.message,$.max,$.min),!t))return W(D[T].message),D}if((B||q)&&!ee&&(j(_)||u&&Array.isArray(_))){const v=te(B),x=te(q),k=!L(v.value)&&_.length>+v.value,p=!L(x.value)&&_.length<+x.value;if((k||p)&&(ge(k,v.message,x.message),!t))return W(D[T].message),D}if(de&&!ee&&j(_)){const{value:v,message:x}=te(de);if(_e(v)&&!_.match(v)&&(D[T]={type:$.pattern,message:x,ref:n,...N($.pattern,x)},!t))return W(x),D}if(z){if(Q(z)){const v=await z(_,s),x=Qe(v,H);if(x&&(D[T]={...x,...N($.validate,x.message)},!t))return W(x.message),D}else if(m(z)){let v={};for(const x in z){if(!M(v)&&!t)break;const k=Qe(await z[x](_,s),H,x);k&&(v={...k,...N(x,k.message)},W(k.message),t&&(D[T]=v))}if(!M(v)&&(D[T]={ref:H,...v},!t))return D}}return W(!0),D};function mr(e,s){const t=s.slice(0,-1).length;let l=0;for(;l<t;)e=F(e)?l++:e[s[l++]];return e}function Dr(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:er(s),l=t.length===1?e:mr(e,t),u=t.length-1,n=t[u];return l&&delete l[n],u!==0&&(m(l)&&M(l)||Array.isArray(l)&&Dr(l))&&S(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},xe=e=>L(e)||!Ze(e);function Y(e,s){if(xe(e)||xe(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(const u of t){const n=e[u];if(!l.includes(u))return!1;if(u!=="ref"){const g=s[u];if(se(n)&&se(g)||m(n)&&m(g)||Array.isArray(n)&&Array.isArray(g)?!Y(n,g):n!==g)return!1}}return!0}var sr=e=>e.type==="select-multiple",kr=e=>Ne(e)||fe(e),Se=e=>be(e)&&e.isConnected,Er=e=>m(e)&&Object.values(e).some(s=>s),ir=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function Ve(e,s={}){const t=Array.isArray(e);if(m(e)||t)for(const l in e)Array.isArray(e[l])||m(e[l])&&!ir(e[l])?(s[l]=Array.isArray(e[l])?[]:{},Ve(e[l],s[l])):L(e[l])||(s[l]=!0);return s}function ar(e,s,t){const l=Array.isArray(e);if(m(e)||l)for(const u in e)Array.isArray(e[u])||m(e[u])&&!ir(e[u])?F(s)||xe(t[u])?t[u]=Array.isArray(e[u])?Ve(e[u],[]):{...Ve(e[u])}:ar(e[u],L(s)?{}:s[u],t[u]):t[u]=!Y(e[u],s[u]);return t}var he=(e,s)=>ar(e,s,Ve(s)),lr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:l})=>F(e)?e:s?e===""?NaN:e&&+e:t&&j(e)?new Date(e):l?l(e):e;function pe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Oe(s)?s.files:Ne(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?rr(e.refs).value:lr(F(s.value)?e.ref.value:s.value,e)}var Sr=(e,s,t,l)=>{const u={};for(const n of e){const g=d(s,n);g&&w(u,n,g._f)}return{criteriaMode:t,names:[...e],fields:u,shouldUseNativeValidation:l}},ue=e=>F(e)?e:_e(e)?e.source:m(e)?_e(e.value)?e.value.source:e.value:e,pr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,s,t){const l=d(e,t);if(l||Te(t))return{error:l,name:t};const u=t.split(".");for(;u.length;){const n=u.join("."),g=d(s,n),h=d(e,n);if(g&&!Array.isArray(g)&&t!==n)return{name:t};if(h&&h.type)return{name:n,error:h};u.pop()}return{name:t}}var Lr=(e,s,t,l,u)=>u.isOnAll?!1:!t&&u.isOnTouch?!(s||e):(t?l.isOnBlur:u.isOnBlur)?!e:(t?l.isOnChange:u.isOnChange)?e:!0,Tr=(e,s)=>!ce(d(e,s)).length&&S(e,s);const Or={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Nr(e={}){let s={...Or,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},u=m(s.defaultValues)||m(s.values)?C(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:C(u),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},B,q=0;const A={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Ee(),array:Ee(),state:Ee()},de=$e(s.mode),z=$e(s.reValidateMode),T=s.criteriaMode===P.all,we=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},G=async r=>{if(A.isValid||r){const i=s.resolver?M((await X()).errors):await N(l,!0);i!==t.isValid&&b.state.next({isValid:i})}},ie=(r,i)=>{(A.isValidating||A.validatingFields)&&(i.forEach(a=>{w(t.validatingFields,a,r)}),t.isValidating=Er(t.validatingFields),b.state.next({validatingFields:t.validatingFields,isValidating:t.isValidating}))},_=(r,i=[],a,c,f=!0,o=!0)=>{if(c&&a){if(g.action=!0,o&&Array.isArray(d(l,r))){const y=a(d(l,r),c.argA,c.argB);f&&w(l,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=a(d(t.errors,r),c.argA,c.argB);f&&w(t.errors,r,y),Tr(t.errors,r)}if(A.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=a(d(t.touchedFields,r),c.argA,c.argB);f&&w(t.touchedFields,r,y)}A.dirtyFields&&(t.dirtyFields=he(u,n)),b.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else w(n,r,i)},H=(r,i)=>{w(t.errors,r,i),b.state.next({errors:t.errors})},W=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},D=(r,i,a,c)=>{const f=d(l,r);if(f){const o=d(n,r,F(a)?d(u,r):a);F(o)||c&&c.defaultChecked||i?w(n,r,i?o:pe(f._f)):p(r,o),g.mount&&G()}},Z=(r,i,a,c,f)=>{let o=!1,y=!1;const V={name:r},E=!!(d(l,r)&&d(l,r)._f.disabled);if(!a||c){A.isDirty&&(y=t.isDirty,t.isDirty=V.isDirty=v(),o=y!==V.isDirty);const O=E||Y(d(u,r),i);y=!!(!E&&d(t.dirtyFields,r)),O||E?S(t.dirtyFields,r):w(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,o=o||A.dirtyFields&&y!==!O}if(a){const O=d(t.touchedFields,r);O||(w(t.touchedFields,r,a),V.touchedFields=t.touchedFields,o=o||A.touchedFields&&O!==a)}return o&&f&&b.state.next(V),o?V:{}},ye=(r,i,a,c)=>{const f=d(t.errors,r),o=A.isValid&&K(i)&&t.isValid!==i;if(e.delayError&&a?(B=we(()=>H(r,a)),B(e.delayError)):(clearTimeout(q),B=null,a?w(t.errors,r,a):S(t.errors,r)),(a?!Y(f,a):f)||!M(c)||o){const y={...c,...o&&K(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},b.state.next(y)}ie(!1,Object.keys(t.validatingFields).filter(y=>y===r))},X=async r=>s.resolver(n,s.context,Sr(r||h.mount,l,s.criteriaMode,s.shouldUseNativeValidation)),ee=async r=>{const{errors:i}=await X(r);if(r)for(const a of r){const c=d(i,a);c?w(t.errors,a,c):S(t.errors,a)}else t.errors=i;return i},N=async(r,i,a={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const V=h.array.has(o.name),E=await Xe(f,n,T,s.shouldUseNativeValidation&&!i,V);if(E[o.name]&&(a.valid=!1,i))break;!i&&(d(E,o.name)?V?Ar(t.errors,E,o.name):w(t.errors,o.name,E[o.name]):S(t.errors,o.name))}y&&await N(y,i,a)}}return a.valid},ge=()=>{for(const r of h.unMount){const i=d(l,r);i&&(i._f.refs?i._f.refs.every(a=>!Se(a)):!Se(i._f.ref))&&Fe(r)}h.unMount=new Set},v=(r,i)=>(r&&i&&w(n,r,i),!Y(Re(),u)),x=(r,i,a)=>wr(r,h,{...g.mount?n:F(i)?u:j(r)?{[r]:i}:i},a,i),k=r=>ce(d(g.mount?n:u,r,e.shouldUnregister?d(u,r,[]):[])),p=(r,i,a={})=>{const c=d(l,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&w(n,r,lr(i,o)),f=be(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Oe(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...n}})))}(a.shouldDirty||a.shouldTouch)&&Z(r,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ne(r)},I=(r,i,a)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(l,o);(h.array.has(r)||!xe(f)||y&&!y._f)&&!se(f)?I(o,f,a):p(o,f,a)}},R=(r,i,a={})=>{const c=d(l,r),f=h.array.has(r),o=C(i);w(n,r,o),f?(b.array.next({name:r,values:{...n}}),(A.isDirty||A.dirtyFields)&&a.shouldDirty&&b.state.next({name:r,dirtyFields:he(u,n),isDirty:v(r,o)})):c&&!c._f&&!L(o)?I(r,o,a):p(r,o,a),Ke(r,h)&&b.state.next({...t}),b.values.next({name:g.mount?r:void 0,values:{...n}})},ae=async r=>{const i=r.target;let a=i.name,c=!0;const f=d(l,a),o=()=>i.type?pe(f._f):gr(r),y=V=>{c=Number.isNaN(V)||V===d(n,a,V)};if(f){let V,E;const O=o(),re=r.type===We.BLUR||r.type===We.FOCUS_OUT,cr=!pr(f._f)&&!s.resolver&&!d(t.errors,a)&&!f._f.deps||Lr(re,d(t.touchedFields,a),t.isSubmitted,z,de),me=Ke(a,h,re);w(n,a,O),re?(f._f.onBlur&&f._f.onBlur(r),B&&B(0)):f._f.onChange&&f._f.onChange(r);const De=Z(a,O,re,!1),dr=!M(De)||me;if(!re&&b.values.next({name:a,type:r.type,values:{...n}}),cr)return A.isValid&&G(),dr&&b.state.next({name:a,...me?{}:De});if(!re&&me&&b.state.next({...t}),ie(!0,[a]),s.resolver){const{errors:je}=await X([a]);if(y(O),c){const yr=Ye(t.errors,l,a),He=Ye(je,l,yr.name||a);V=He.error,a=He.name,E=M(je)}}else V=(await Xe(f,n,T,s.shouldUseNativeValidation))[a],y(O),c&&(V?E=!1:A.isValid&&(E=await N(l,!0)));c&&(f._f.deps&&ne(f._f.deps),ye(a,E,V,De))}},le=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ne=async(r,i={})=>{let a,c;const f=ke(r);if(ie(!0,f),s.resolver){const o=await ee(F(r)?r:f);a=M(o),c=r?!f.some(y=>d(o,y)):a}else r?(c=(await Promise.all(f.map(async o=>{const y=d(l,o);return await N(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&G()):c=a=await N(l);return b.state.next({...!j(r)||A.isValid&&a!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:a}:{},errors:t.errors,isValidating:!1}),i.shouldFocus&&!c&&oe(l,le,r?f:h.mount),c},Re=r=>{const i={...u,...g.mount?n:{}};return F(r)?i:j(r)?d(i,r):r.map(a=>d(i,a))},Ce=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),isTouched:!!d((i||t).touchedFields,r),isValidating:!!d((i||t).validatingFields,r),error:d((i||t).errors,r)}),nr=r=>{r&&ke(r).forEach(i=>S(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ue=(r,i,a)=>{const c=(d(l,r,{_f:{}})._f||{}).ref;w(t.errors,r,{...i,ref:c}),b.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&c&&c.focus&&c.focus()},ur=(r,i)=>Q(r)?b.values.subscribe({next:a=>r(x(void 0,i),a)}):x(r,i,!0),Fe=(r,i={})=>{for(const a of r?ke(r):h.mount)h.mount.delete(a),h.array.delete(a),i.keepValue||(S(l,a),S(n,a)),!i.keepError&&S(t.errors,a),!i.keepDirty&&S(t.dirtyFields,a),!i.keepTouched&&S(t.touchedFields,a),!i.keepIsValidating&&S(t.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&S(u,a);b.values.next({values:{...n}}),b.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&G()},Me=({disabled:r,name:i,field:a,fields:c,value:f})=>{if(K(r)){const o=r?void 0:F(f)?pe(a?a._f:d(c,i)._f):f;w(n,i,o),Z(i,o,!1,!1,!0)}},Ae=(r,i={})=>{let a=d(l,r);const c=K(i.disabled);return w(l,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),a?Me({field:a,disabled:i.disabled,name:r,value:i.value}):D(r,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:f=>{if(f){Ae(r,i),a=d(l,r);const o=F(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=kr(o),V=a._f.refs||[];if(y?V.find(E=>E===o):o===a._f.ref)return;w(l,r,{_f:{...a._f,...y?{refs:[...V.filter(Se),o,...Array.isArray(d(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),D(r,!1,void 0,o)}else a=d(l,r,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vr(h.array,r)&&g.action)&&h.unMount.add(r)}}},Be=()=>s.shouldFocusError&&oe(l,le,h.mount),or=r=>{K(r)&&(b.state.next({disabled:r}),oe(l,(i,a)=>{let c=r;const f=d(l,a);f&&K(f._f.disabled)&&(c||(c=f._f.disabled)),i.disabled=c},0,!1))},Ie=(r,i)=>async a=>{let c;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let f=C(n);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();t.errors=o,f=y}else await N(l);if(S(t.errors,"root"),M(t.errors)){b.state.next({errors:{}});try{await r(f,a)}catch(o){c=o}}else i&&await i({...t.errors},a),Be(),setTimeout(Be);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(l,r)&&(F(i.defaultValue)?R(r,C(d(u,r))):(R(r,i.defaultValue),w(u,r,C(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,C(d(u,r))):v()),i.keepError||(S(t.errors,r),A.isValid&&G()),b.state.next({...t}))},Pe=(r,i={})=>{const a=r?C(r):u,c=C(a),f=M(r),o=f?u:c;if(i.keepDefaultValues||(u=a),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(t.dirtyFields,y)?w(o,y,d(n,y)):R(y,d(o,y));else{if(Le&&F(r))for(const y of h.mount){const V=d(l,y);if(V&&V._f){const E=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(be(E)){const O=E.closest("form");if(O){O.reset();break}}}}l={}}n=e.shouldUnregister?i.keepDefaultValues?C(u):{}:C(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!A.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Y(r,u)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&n?he(u,n):t.dirtyFields:i.keepDefaultValues&&r?he(u,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(r,i)=>Pe(Q(r)?r(n):r,i);return{control:{register:Ae,unregister:Fe,getFieldState:Ce,handleSubmit:Ie,setError:Ue,_executeSchema:X,_getWatch:x,_getDirty:v,_updateValid:G,_removeUnmounted:ge,_updateFieldArray:_,_updateDisabledField:Me,_getFieldArray:k,_reset:Pe,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{qe(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:b,_proxyFormState:A,_setErrors:W,get _fields(){return l},get _formValues(){return n},get _state(){return g},set _state(r){g=r},get _defaultValues(){return u},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ne,register:Ae,handleSubmit:Ie,watch:ur,setValue:R,getValues:Re,reset:qe,resetField:fr,clearErrors:nr,unregister:Fe,setError:Ue,setFocus:(r,i={})=>{const a=d(l,r),c=a&&a._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ce}}function Rr(e={}){const s=U.useRef(),t=U.useRef(),[l,u]=U.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Nr(e),formState:l});const n=s.current.control;return n._options=e,Vr({subject:n._subjects.state,next:g=>{xr(g,n._proxyFormState,n._updateFormState,!0)&&u({...n._formState})}}),U.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),U.useEffect(()=>{if(n._proxyFormState.isDirty){const g=n._getDirty();g!==l.isDirty&&n._subjects.state.next({isDirty:g})}},[n,l.isDirty]),U.useEffect(()=>{e.values&&!Y(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,u(g=>({...g}))):n._resetDefaultValues()},[e.values,n]),U.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),U.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),U.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=_r(l,n),s.current}const Ir=()=>{const{register:e,handleSubmit:s,formState:{errors:t}}=Rr(),l=u=>{console.log(u)};return J.jsx("div",{className:"flex justify-center items-center h-screen",children:J.jsxs("form",{onSubmit:s(l),className:"w-96 bg-gray-800 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105",children:[J.jsx("h1",{className:"text-3xl text-white mb-6",children:"Login"}),J.jsx("input",{...e("email",{required:!0}),className:`w-full py-3 px-4 mb-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none transition-shadow duration-300 ease-in-out ${t.email?"border-red-500":""}`,type:"text",placeholder:"Email",id:"email",name:"email"}),t.email&&J.jsx("p",{className:"text-red-500",children:"Email is required"}),J.jsx("input",{...e("password",{required:!0}),className:`w-full py-3 px-4 mb-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none transition-shadow duration-300 ease-in-out ${t.password?"border-red-500":""}`,type:"password",placeholder:"Password",id:"password",name:"password"}),t.password&&J.jsx("p",{className:"text-red-500",children:"Password is required"}),J.jsx("input",{className:"w-full py-3 px-4 mb-4 rounded-full bg-green-500 text-white font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none",type:"submit",value:"Login"})]})})};export{Ir as default};
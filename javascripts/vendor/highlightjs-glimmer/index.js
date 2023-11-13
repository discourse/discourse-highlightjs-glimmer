function c(n){function t(){return{name:"Ember.JS, Glimmer",aliases:["glimmer","hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,keywords:g,disableAutodetect:!0,contains:[n.COMMENT(/\{\{!--/,/--\}\}/),n.COMMENT(/\{\{!/,/\}\}/),n.COMMENT(/<!--/,/-->/),_,...E,m,u,T,...B]}}let a="eq neq",s="gt gte le lte",i="and or not",o="not-eq xor is-array is-object is-equal",I="let each each-in if else unless",P="log debugger",C="has-block concat fn component helper modifier get hash query-params",x="action on",v="outlet yield",y="true false undefined null",g={$pattern:/\b[\w][\w-]+\b/,keyword:"".concat(v," ").concat(x," ").concat(P),built_in:I,function:"".concat(o," ").concat(C," ").concat(a," ").concat(s," ").concat(i),literal:y},h=e.either(e.concat(/[a-zA-Z_]/,e.optional(/[A-Z0-9:_.-]*:/),/[A-Z0-9_.-]*/),/[a-z]/),d=/[A-Z][A-Za-z0-9]+/,G=e.either(d,/[a-zA-Z0-9]*\.[a-zA-Z0-9-]*/,e.concat(d,/::/,/-?/,d),/[a-z]/),w=/[a-z-][a-z\d-_]+\b/,U=/[@A-Za-z0-9._:-]+/,_={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},j={className:"punctuation",match:e.either(/\./,/\{\{\{?#?\/?/,/\}\}\}?/,/\(/,/\)/,/::/,/\|/,/~/)},p={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{className:"template-variable",begin:U}]},m={className:"operator",match:/=/},u={className:{1:"punctuation",2:"params"},match:[/@/,/[\w\d-_]+/]},N={className:{1:"attribute",2:"operator"},match:[/[A-Za-z0-9-_]+/,/=/]},b={className:{1:"class",2:"punctuation",3:"property"},match:[/this/,/\./,/[^\s}]+/]},A={className:"title",match:G},k={className:"title",match:w,keywords:g},z={className:"number",match:/[\d]+((\.[\d]+))?/},T={className:"comment",begin:/\{\{!--/,contains:[{className:"comment",match:/.+/},{begin:/--\}\}/,endsParent:!0}]},l={className:"string",variants:[{begin:/"/,end:/"/,contains:[_]},{begin:/'/,end:/'/,contains:[_]}]},f=[j,m,u,z,p,b,N,k,l],M={keywords:g,begin:e.concat(/\(/,e.lookahead(e.concat(/\)/))),end:/\)/,contains:[...f,"self",{begin:/\)/,endsParent:!0}]};f.push(M);let E=[{className:"punctuation mustache",keywords:g,begin:e.concat(/\{\{\{?#?/),end:/\}\}\}?/,contains:[{begin:/\}\}\}?/,endsParent:!0},...f,M]}];l.variants.forEach(H=>H.contains.push(...E));let B=[{className:"tag",begin:e.concat(/<:?/,e.lookahead(e.concat("style",e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[m,u,T,p,b,...E,N,l,A],starts:{className:"tag",end:/<\/style>/,returnEnd:!0,excludeEnd:!1,subLanguage:["css","glimmer"]}},{className:"tag",begin:e.concat(/<:?/,e.lookahead(e.concat(h,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[m,u,T,p,b,...E,N,l,A]},{className:"tag",begin:e.concat(/<\/:?/,e.lookahead(e.concat(h,/>/))),end:/>/,contains:[A]}];return t()}function J(n){return L("(?=",n,")")}function Z(n){return L("(",n,")?")}function L(...n){return n.map(a=>R(a)).join("")}function $(...n){return"("+n.map(a=>R(a)).join("|")+")"}function R(n){return n?typeof n=="string"?n:n.source:null}var e={lookahead:J,either:$,optional:Z,concat:L};function D(n,t){let s=t.rawDefinition(n).contains.find(o=>(o==null?void 0:o.begin)==="css`"),i=n.inherit(s,{begin:/hbs`/});return i.starts.subLanguage="glimmer",i}var r={begin:/<template>/,end:/<\/template>/,isTrulyOpeningTag:(n,t)=>{let a=n[0].length+n.index,s=n.input[a];if(s==="<"||s===","){t.ignoreMatch();return}let i;if((i=n.input.substring(a).match(/^\s+extends\s+/))&&i.index===0){t.ignoreMatch();return}}},K={variants:[{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"glimmer",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]};function S(n,t="javascript"){let a=n.getLanguage(t);if(!a){console.warn("JavaScript grammar not loaded. Cannot initialize glimmerJavascript.");return}return{name:"glimmer-javascript",aliases:["glimmer-js","gjs"],subLanguage:t,contains:[K,D(n,a)]}}var en=c,X=S;function tn(n){Y(n),O(n)}function an(n){let t=c(n);return O(n),t}function Y(n){return n.registerLanguage("glimmer",c)}function O(n){q(n)}function q(n){let t="_js-in-gjs",a=n.getLanguage("javascript");n.registerLanguage(t,s=>a.rawDefinition(s)),n.unregisterLanguage("javascript"),n.registerLanguage("glimmer-javascript",s=>{let i=X(s,t);return i.aliases.push("javascript","js","mjs","cjs","mjs"),i})}export{an as externalSetup,en as glimmer,X as glimmerJavascript,O as registerInjections,Y as registerLanguage,tn as setup};

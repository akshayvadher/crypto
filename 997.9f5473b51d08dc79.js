"use strict";(self.webpackChunkcrypto=self.webpackChunkcrypto||[]).push([[997],{997:(S,p,r)=>{r.r(p),r.d(p,{EncodeModule:()=>U});var h=r(6814),c=r(8570),u=r(7676),i=r(7874),e=r(2425),f=r(1077);const y=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=e.Xpm({type:o,selectors:[["app-encode"]],decls:1,vars:0,template:function(t,s){1&t&&e._UZ(0,"router-outlet")},dependencies:[c.lC]})}return o})(),children:[{path:"encode",component:(()=>{class o{inputConfiguration;constructor(){this.inputConfiguration={downloadFileButtonClasses:["fas","fa-lock"],downloadFilePostfix:"encoded",downloadFileButtonText:"Download encoded file",revealHereClasses:["fas","fa-lock"],revealHereText:"Reveal encoded text here",supportedAlgorithms:[u.k.BASE_64],requiredPassword:!1}}ngOnInit(){}encode(n,t,s){const a=i.enc.Utf8.parse(n);return i.enc.Base64.stringify(a)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=e.Xpm({type:o,selectors:[["app-encode-worker"]],decls:10,vars:2,consts:[[1,"col-md-12"],[3,"inputConfiguration","process"],["routerLink","/encode/decode"]],template:function(t,s){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Encode a file or text"),e.qZA(),e._UZ(2,"app-common-form",1),e.TgZ(3,"div",0),e._UZ(4,"hr"),e.TgZ(5,"p"),e._uU(6,"Click "),e.TgZ(7,"a",2),e._uU(8,"here"),e.qZA(),e._uU(9," to decode"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("inputConfiguration",s.inputConfiguration)("process",s.encode))},dependencies:[c.rH,f.V]})}return o})()},{path:"decode",component:(()=>{class o{inputConfiguration;constructor(){this.inputConfiguration={downloadFileButtonClasses:["fas","fa-lock"],downloadFilePostfix:"decoded",downloadFileButtonText:"Download decoded file",revealHereClasses:["fas","fa-lock"],revealHereText:"Reveal decoded text here",supportedAlgorithms:[u.k.BASE_64],requiredPassword:!1}}ngOnInit(){}decode(n,t,s){const a=l=>i.enc.Base64.parse(l).toString(i.enc.Utf8),d=n.split(".");if(3===d.length){const l=a(d[0]),g=JSON.stringify(JSON.parse(l),null,2),C=a(d[1]);return`${g}\n${JSON.stringify(JSON.parse(C),null,2)}\n${d[2]}`}return a(n)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=e.Xpm({type:o,selectors:[["app-decode"]],decls:10,vars:2,consts:[[1,"col-md-12"],[3,"inputConfiguration","process"],["routerLink","/encode/encode"]],template:function(t,s){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Decode a file or text"),e.qZA(),e._UZ(2,"app-common-form",1),e.TgZ(3,"div",0),e._UZ(4,"hr"),e.TgZ(5,"p"),e._uU(6,"Click "),e.TgZ(7,"a",2),e._uU(8,"here"),e.qZA(),e._uU(9," to encode"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("inputConfiguration",s.inputConfiguration)("process",s.decode))},dependencies:[c.rH,f.V]})}return o})()}]}];let v=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[c.Bz.forChild(y),c.Bz]})}return o})();var Z=r(6208),m=r(285);let U=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[h.ez,v,m.u5,m.UX,Z.m]})}return o})()}}]);
"use strict";(self.webpackChunkcrypto=self.webpackChunkcrypto||[]).push([[169],{169:(Z,a,r)=>{r.r(a),r.d(a,{EncodeModule:()=>v});var m=r(9808),d=r(3985),l=r(7699),s=r(7206),e=r(6435),i=r(4292);const f=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-encode"]],decls:1,vars:0,template:function(n,c){1&n&&e._UZ(0,"router-outlet")},directives:[d.lC],styles:[""]}),o})(),children:[{path:"encode",component:(()=>{class o{constructor(){this.inputConfiguration={downloadFileButtonClasses:["fas","fa-lock"],downloadFilePostfix:"encoded",downloadFileButtonText:"Download encoded file",revealHereClasses:["fas","fa-lock"],revealHereText:"Reveal encoded text here",supportedAlgorithms:[l.k.BASE_64],requiredPassword:!1}}ngOnInit(){}encode(n,c,y){const u=s.enc.Utf8.parse(n);return s.enc.Base64.stringify(u)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-encode-worker"]],decls:10,vars:2,consts:[[1,"col-md-12"],[3,"inputConfiguration","process"],["routerLink","/encode/decode"]],template:function(n,c){1&n&&(e.TgZ(0,"h2",0),e._uU(1,"Encode a file or text"),e.qZA(),e._UZ(2,"app-common-form",1),e.TgZ(3,"div",0),e._UZ(4,"hr"),e.TgZ(5,"p"),e._uU(6,"Click "),e.TgZ(7,"a",2),e._uU(8,"here"),e.qZA(),e._uU(9," to decode"),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("inputConfiguration",c.inputConfiguration)("process",c.encode))},directives:[i.V,d.yS],styles:[""]}),o})()},{path:"decode",component:(()=>{class o{constructor(){this.inputConfiguration={downloadFileButtonClasses:["fas","fa-lock"],downloadFilePostfix:"decoded",downloadFileButtonText:"Download decoded file",revealHereClasses:["fas","fa-lock"],revealHereText:"Reveal decoded text here",supportedAlgorithms:[l.k.BASE_64],requiredPassword:!1}}ngOnInit(){}encode(n,c,y){return s.enc.Base64.parse(n).toString(s.enc.Utf8)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-decode"]],decls:10,vars:2,consts:[[1,"col-md-12"],[3,"inputConfiguration","process"],["routerLink","/encode/decode"]],template:function(n,c){1&n&&(e.TgZ(0,"h2",0),e._uU(1,"Decode a file or text"),e.qZA(),e._UZ(2,"app-common-form",1),e.TgZ(3,"div",0),e._UZ(4,"hr"),e.TgZ(5,"p"),e._uU(6,"Click "),e.TgZ(7,"a",2),e._uU(8,"here"),e.qZA(),e._uU(9," to encode"),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("inputConfiguration",c.inputConfiguration)("process",c.encode))},directives:[i.V,d.yS],styles:[""]}),o})()}]}];let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),o})();var g=r(4466),p=r(4182);let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,C,p.u5,p.UX,g.m]]}),o})()}}]);
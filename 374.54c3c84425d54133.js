"use strict";(self.webpackChunkcrypto=self.webpackChunkcrypto||[]).push([[374],{9374:(C,p,o)=>{o.r(p),o.d(p,{DecryptModule:()=>g});var i=o(9808),u=o(4182),d=o(4466),s=o(3985),a=o(7699),l=o(7206),t=o(6435),y=o(4292);const f=[{path:"",component:(()=>{class e{constructor(){this.inputConfiguration={downloadFileButtonClasses:["fas","fa-unlock"],downloadFilePostfix:"decrypted",downloadFileButtonText:"Download decrypted file",revealHereClasses:["fas","fa-unlock"],revealHereText:"Reveal decrypted text here",processErrorMessage:"Could not decrypt.Multliple possibilites, file is not encrypted, encrypted with different algorith, file is corrupted, file is blank.",supportedAlgorithms:[a.k.AES],requiredPassword:!0}}ngOnInit(){}decrypt(n,c,v){return l.AES.decrypt(n,c).toString(l.enc.Utf8)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-decrypt"]],decls:10,vars:2,consts:[[1,"col-md-12"],[3,"inputConfiguration","process"],["routerLink","/cipher/encrypt"]],template:function(n,c){1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Decrypt a file or text"),t.qZA(),t._UZ(2,"app-common-form",1),t.TgZ(3,"div",0),t._UZ(4,"hr"),t.TgZ(5,"p"),t._uU(6,"Click "),t.TgZ(7,"a",2),t._uU(8,"here"),t.qZA(),t._uU(9," to encrypt"),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("inputConfiguration",c.inputConfiguration)("process",c.decrypt))},directives:[y.V,s.yS],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(f)],s.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,m,u.UX,d.m]]}),e})()}}]);
"use strict";const t=t=>t?t.default:null;module.exports=function(n,u=t){return function(t){const c=[];return t.forEach((t=>c.push(n(t).then(u).catch((t=>null))))),Promise.all(c)}};

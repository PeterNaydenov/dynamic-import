"use strict";const t=t=>t.default?t.default:t;module.exports=function(n,u=t){return function(t){const e=[];return t.forEach((t=>e.push(n(t).then(u).catch((t=>null))))),Promise.all(e)}};

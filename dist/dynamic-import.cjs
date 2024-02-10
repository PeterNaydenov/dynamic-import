"use strict";module.exports=function(t){return function(n){const u=[];return n.forEach((n=>u.push(t(n).then((t=>t?t.default:null)).catch((t=>null))))),Promise.all(u)}};

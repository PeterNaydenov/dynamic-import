function n(n){return function(t){const u=[];return t.forEach((t=>u.push(n(t).then((n=>n?n.default:null)).catch((n=>null))))),Promise.all(u)}}export{n as default};

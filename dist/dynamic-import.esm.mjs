const n=n=>n?n.default:null;function t(t,u=n){return function(n){const l=[];return n.forEach((n=>l.push(t(n).then(u).catch((n=>null))))),Promise.all(l)}}export{t as default};

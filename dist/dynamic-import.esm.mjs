//#region src/main.js
var e = (e) => e.default ?? e;
function t(t, n = e) {
	return function(e) {
		let r = [];
		return e.forEach((e) => r.push(t(e).then(n).catch((e) => null))), Promise.all(r);
	};
}
//#endregion
export { t as default };

void((function(w){'use strict';
 const $=w,
 $O=$.Object,
 Seal=$O.seal,
 Create=$O.create,
 Call=(function(o){const e=o.prototype;return e.call.bind(e.bind);})($.Function),
 aRawObj=Call(Create,null,null);
 //#
 const aRawObjDescribed=function(k){
	const o=k,f=aRawObj,x=f(),t=this;
	for(let p in o){let e=o[p],i=x[p]=f(t);for(let p in e){i[p]=e[p];};};
	return f(x);
 }.bind(function(u){
	const f=Create,s=Seal,e=aRawObj(),o=s({value:true,writable:true,enumerable:true,configurable:false});
	for(let p in o){e[p]=f(o);};
	e.value.value=u;
	return s(e);
 }());
 //#test
 console.dir(aRawObjDescribed({
	pippo:{
	 value:'baudo'
	}
 }));
 //..
})(window));

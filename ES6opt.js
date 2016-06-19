void((function(w){'use strict';
 const $=w,
 $O=$.Object,
 Seal=$O.seal,
 Freeze=$O.freeze,
 Call=Freeze((function(o){const e=o.prototype;return e.call.bind(e.bind);})($.Function)),

 aRawObj=(function(Create){
	const s=Seal,f=Freeze,c=Create,r=Call(c,null,null),e=r(),o=r();
	o.value=o.writable=o.enumerable=true;
	o.configurable=false;
	for(let p in s(o)){e[p]=c(o);};
	(r.o=s(e)).value.value=void(r.set=f(function(k){const o=k,r=this,x=r(),t=r.o;for(let p in o){let e=o[p],i=x[p]=r(t);for(let p in e){i[p]=e[p];};};return r(x);}));
	return f(r);
 })($O.create);

//---------------------------------------
console.dir(aRawObj);
console.dir(aRawObj());
console.dir(aRawObj.set({
 pippo:{value:'baudo'},
 beppe:{value:'grillo',enumerable:false}
}));
console.dir(aRawObj.set({a:{value:1,enumerable:false},b:{value:2}}));
//---------------------------------------
})(window));

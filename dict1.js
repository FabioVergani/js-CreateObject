var w=window,
/*
F=w.Function,
FP=F.prototype,
Call=FP.call,
*/
    
Call=w.Function.prototype.call,
/*
A=w.Array,
AP=A.prototype,
Slice=Call.bind(AP.slice),
*/
    
Slice=Call.bind(Array.prototype.slice),
/*
O=w.Object,
CreateObject=O.create.bind(null,null),
*/

obj=Call.bind(w.Object.create,null,null);


//test
var o;
console.dir(o=obj());

console.dir(o=obj({
	foo:{
		writable:true,
		configurable:true,
		value:'hello'
	}
}));

console.dir(Object.getOwnPropertyDescriptor(o,'foo'));



console.dir(o=obj({
	propname:{
		value:'hello'
	}
}));

console.dir(Object.getOwnPropertyDescriptor(o,'propname'));



o.foo='ciao';
console.dir(o);

delete o.foo;
console.dir(o);

console.dir(o=obj({
	bar:{
		writable:true,
		configurable:false,
		value:'hello'
	}
}));

delete o.bar;
console.dir(o);

o.bar=123;
console.dir(o);

var w=window,
Call=w.Function.prototype.call,
Object=w.Object,
Create=Call.bind(Object.create,null,null),
CreateByDescriptor=function(x){
 var e,o=x,p,i=this,t=i.t,f=i.f,d=f();
 for(p in o){i=d[p]=f(t);e=o[p];for(p in e){i[p]=e[p];};};
 return f(d);
}.bind(
 Object.freeze({
  f:Create,
  t:{
	value:{value:undefined,writable:true,configurable:false,enumerable:true},
	configurable:{value:true,writable:true,configurable:false},
	enumerable:{value:true,writable:true,configurable:false},
	writable:{value:true,writable:true,configurable:false}
  }
 })
);
//================
console.dir(CreateByDescriptor({
name1:{value:'1',enumerable:false},
name2:{value:2},
name3:{value:false},
}));

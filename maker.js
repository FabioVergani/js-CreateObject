var w=window,
Call=Function.prototype.call,
Create=Call.bind(Object.create,null,null),
CreateByDescriptor=function(props){
 var e,o=props,p,i=this,x=i.x,f=i.f,d=f();
 for(p in o){i=d[p]=f(x);e=o[p];for(p in e){i[p]=e[p];};};
 return f(d);
}.bind(
 Object.freeze({
  f:Create,
  x:{
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

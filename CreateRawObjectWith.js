var w=window,
Call=w.Function.prototype.call,
Object=w.Object,
Create=Object.create,
CreateRawObject=Call.bind(Create,null,null),
CreateRawObjectWith=function(x){var e,o=x,p,i=this,t=i.t,f=i.f,d=f();for(p in o){i=d[p]=f(t);e=o[p];for(p in e){i[p]=e[p];};};return f(d);}.bind(
 Object.freeze({
  f:CreateRawObject,
  t:(function(x){
	 var f=Create,e=x,o={value:true,writable:true,configurable:false,enumerable:true},p;
	 for(p in o){e[p]=f(o)};
	 e.value.value=undefined;
	 return e;
	})(CreateRawObject())
 })
);
//================
console.dir(CreateRawObjectWith({
name1:{value:'1',enumerable:false},
name2:{value:2},
name3:{value:false},
}));

var w=window,
Call=w.Function.prototype.call,
O=w.Object,
Seal=O.seal,
CreateObject=Call.bind(O.create,null,null);
//
var obj=function(props){
  var e, i, o=props, a=this, f=a.a, b=f(), x=a.b;
  for(i in o){a=b[i]=f(x);e=o[i];for(i in e){a[i]=e[i];};};
  return f(b);
}.bind(
 {
  a:CreateObject,
  b:{
	value:{value:undefined,writable:true,configurable:false,enumerable:true},
	configurable:{value:true,writable:true,configurable:false},
	enumerable:{value:true,writable:true,configurable:false},
	writable:{value:true,writable:true,configurable:false}
  }
 }
);

//================
console.dir(obj({
name1:{value:'1',enumerable:false},
name2:{value:2},
name3:{value:false},
}));

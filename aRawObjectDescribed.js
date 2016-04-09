
var w=window,
Call=w.Function.prototype.call,
Create=w.Object.create,
aRawObject=Call.bind(Create,null,null),
aRawObjectDescribed=function(x){var e,o=x,p,i=this,t=i.t,f=i.f,d=f();for(p in o){i=d[p]=f(t);e=o[p];for(p in e){i[p]=e[p];};};return f(d);}.bind(w.Object.freeze((function(u){var c=Create,f=aRawObject,e=f(),o={value:true,writable:true,configurable:false,enumerable:true},p;for(p in o){e[p]=c(o)};e.value.value=u;return {t:e,f:f};})())),
endvar;


//================
console.dir(aRawObjectDescribed({
name1:{value:'1',enumerable:false},
name2:{value:2},
name3:{value:false},
}));

javascript:
void(function($){'use strict';

  var w=$,
  Obj=w.Object,
  Seal=Obj.seal,
  Crea=Obj.create,
  Call=w.Function.prototype.call,
  aRawObj=Call.bind(Crea,null,null),
  end;


var aRawObjDescribed=function(k){
 var p,o=k,f=aRawObj,d=f(),i,e,t=this;
 for(p in o){i=d[p]=f(t);for(p in (e=o[p])){i[p]=e[p];};};
 return f(d);
}.bind(function(u){
  var f=Crea,s=Seal,e=aRawObj(),p=true,o=s({value:p,writable:p,enumerable:p,configurable:false});
  for(p in o){e[p]=f(o)};
  e[p='value'][p]=u;
  return s(e);
}());





console.dir(aRawObjDescribed({
   go:{
    value:function($){
      console.dir(this);
    }
   }
  }));





}(window));

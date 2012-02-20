caterwaul.module( 'struct' ,function($) { (function( ) {var isomorphism=function(f,fi,s) {;
return{encode:f,decode:fi,size:function() {;
return s} } } ,integer=function(w,s,b) {;
return(function( ) {var offsets=b? (function(i,u,s) {if( (u-i) *s<=0)return[ ] ;
for(var r= [ ] ,d=u-i;
d>0?i<=u:i>=u;
i+=s)r.push(i) ;
return r} ) ( (w-8) , (0) , ( -8) ) : (function(i,u,s) {if( (u-i) *s<=0)return[ ] ;
for(var r= [ ] ,d=u-i;
d>0?i<u:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (w) , (8) ) ,encode=s?function(_) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (_>>x&0xff) ) ;
return xr} ) .call(this,offsets) } :function(_) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (_>>>x&0xff) ) ;
return xr} ) .call(this,offsets) } ,decode=function(x,offset) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var x0= (0) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (x0+ (_[xi+offset] <<x) ) ;
return x0} ) .call(this,offsets) } ;
return(isomorphism(encode,decode,w>>>3) ) } ) .call(this) } ,int_conversions= (function(o) {for(var r= { } ,i=0,l=o.length,x;
i<l;
 ++i)x=o[i] ,r[x[0] ] =x[1] ;
return r} ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( [x,integer( +x.substr(1,2) ,x.charAt(0) === 's' ,x.charAt(3) === 'b' ) ] ) ) ;
return xr} ) .call(this, [ 'u8' , 's8' , 'u16l' , 's16l' , 'u16b' , 's16b' , 'u32l' , 's32l' , 'u32b' , 's32b' ] ) ) ) ,array=function(f,n) {;
return(function( ) {var indexes= (function(i,u,s) {if( (u-i) *s<=0)return[ ] ;
for(var r= [ ] ,d=u-i;
d>0?i<u:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (n) , (1) ) ,size=f.size() ,encode=function(xs) {;
return(function(is) {var i,i0,ii,il,ir;
for(var ir=new is.constructor() ,ii=0,il=is.length;
ii<il;
 ++ii)i=is[ii] ,ir.push.apply(ir,Array.prototype.slice.call( (f.encode(xs[i] ) ) ) ) ;
return ir} ) .call(this,indexes) } ,decode=function(xs,o) {;
return(function( ) {var offset=0;
return( (function(is) {var i,i0,ii,il,ir;
for(var ir=new is.constructor() ,ii=0,il=is.length;
ii<il;
 ++ii)i=is[ii] ,ir.push( ( (function(it) {return(offset+=size) ,it} ) .call(this, (f.decode(xs,o+offset) ) ) ) ) ;
return ir} ) .call(this,indexes) ) } ) .call(this) } ;
return(isomorphism(encode,decode,n*size) ) } ) .call(this) } ,appender=function(f) {;
return function(names,n) {;
return( ( (function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (this.push(x,n?array(f,n) :f) ) ;
return xs} ) .call(this,names.split( /\s+/ ) ) ) , (this) ) } } ,conversions= (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var k in xs)if(Object.prototype.hasOwnProperty.call(xs,k) )x=xs[k] ,xr[k] = ( (appender) .call( {x0:x0,xi:xi,xl:xl,xs:xs,xr:xr} ,x) ) ;
return xr} ) .call(this,int_conversions) ,methods=$.merge( {size:function() {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var x0= (0) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (x0+x.size() ) ;
return x0} ) .call(this,this.fields) } ,push:function(name,field) {;
return( ( ( ( (this.fields) .push(field) ) , ( (this.field_names) .push(name) ) ) ) , (this) ) } ,encode:function(v) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push.apply(xr,Array.prototype.slice.call( (this.fields[xi] .encode(v[x] ) ) ) ) ;
return xr} ) .call(this,this.field_names) } ,decode:function(xs,o) {;
return(function( ) {var offset=0;
return( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( (function(it) {return(offset+=this.fields[xi] .size() ) ,it} ) .call(this, ( [x,this.fields[xi] .decode(v[x] ,offset) ] ) ) ) ) ;
return xr} ) .call(this,this.field_names) ) } ) .call(this) } } ,conversions) ;
return($.struct= (function(it) {return($.merge(it.prototype,methods) ) ,it} ) .call(this, (function(_) {return this instanceof $.struct? (function(it) {return(it.fields= [ ] ,it.field_names= [ ] ) ,it} ) .call(this, (this) ) :new $.struct() } ) ) ) } ) .call(this) } ) ;

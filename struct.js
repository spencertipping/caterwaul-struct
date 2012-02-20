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
return xr} ) .call(this,offsets) } ,decode=function(v,offset) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var x0= (0) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (x0+ (v[xi+offset] <<x) ) ;
return x0} ) .call(this,offsets) } ;
return(isomorphism(encode,decode,w>>>3) ) } ) .call(this) } ,int_conversions= (function(o) {for(var r= { } ,i=0,l=o.length,x;
i<l;
 ++i)x=o[i] ,r[x[0] ] =x[1] ;
return r} ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( [x,integer( +x.substr(1,2) ,x.charAt(0) === 's' ,x.charAt(3) === 'b' ) ] ) ) ;
return xr} ) .call(this, [ 'u8' , 's8' , 'u16l' , 's16l' , 'u16b' , 's16b' , 'u32l' , 's32l' , 'u32b' , 's32b' ] ) ) ) ,string_conversions= {ascii:function(n) {;
return(function( ) {var indexes= (function(i,u,s) {if( (u-i) *s<=0)return[ ] ;
for(var r= [ ] ,d=u-i;
d>0?i<u:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (n) , (1) ) ,encode=function(s) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (s.charCodeAt(x) &0xff) ) ;
return xr} ) .call(this,indexes) } ,decode=function(v,o) {;
return(function(it) {return(it.join( '' ) ) } ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (String.fromCharCode(v[o+x] ) ) ) ;
return xr} ) .call(this,indexes) ) ) } ;
return(isomorphism(encode,decode,n) ) } ) .call(this) } } ,all_conversions=$.merge( { } ,int_conversions,string_conversions) ,array=function(f,n) {;
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
return(function(is) {var i,i0,ii,il,ir;
for(var ir=new is.constructor() ,ii=0,il=is.length;
ii<il;
 ++ii)i=is[ii] ,ir.push( (f.decode(xs,o+xi*size) ) ) ;
return ir} ) .call(this,indexes) } ;
return(isomorphism(encode,decode,n*size) ) } ) .call(this) } ,appender=function(f) {;
return function(names,n) {;
return(function( ) {var t=this,append=function() {var xs=arguments;
return(function( ) {var f_prime=f.apply(t,xs) ;
return( ( ( (function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (t.push(x,n?array(f_prime,n) :f_prime) ) ;
return xs} ) .call(this,names.split( /\s+/ ) ) ) , (t) ) ) } ) .call(this) } ;
return( (f.constructor===Function?append:append(names,n) ) ) } ) .call(this) } } ,conversion_methods= (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var k in xs)if(Object.prototype.hasOwnProperty.call(xs,k) )x=xs[k] ,xr[k] = ( (appender) .call( {x0:x0,xi:xi,xl:xl,xs:xs,xr:xr} ,x) ) ;
return xr} ) .call(this,all_conversions) ,statics= {isomorphism:isomorphism,array:array} ,methods=$.merge( {size:function() {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var x0= (0) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (x0+x.size() ) ;
return x0} ) .call(this,this.fields) } ,offset_of:function(name) {;
return(function( ) {try{return( (function(xs) {var x,x0,xi,xl,xr;
for(var x0= (0) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (this.field_names[xi] ===name? (function( ) {throw x0} ) .call(this) :x0+x.size() ) ;
return x0} ) .call(this,this.fields) ) }catch(e) {return( +e) } } ) .call(this) } ,push:function(name,field) {;
return( ( ( ( (this.fields) .push(field) ) , ( (this.field_names) .push(name) ) ) ) , (this) ) } ,encode:function(v) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push.apply(xr,Array.prototype.slice.call( (this.fields[xi] .encode(v[x] ) ) ) ) ;
return xr} ) .call(this,this.field_names) } ,decode:function(v,o) {;
return(function(o) {for(var r= { } ,i=0,l=o.length,x;
i<l;
 ++i)x=o[i] ,r[x[0] ] =x[1] ;
return r} ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( (function(it) {return(o+=x.size() ) ,it} ) .call(this, ( [this.field_names[xi] ,x.decode(v,o) ] ) ) ) ) ;
return xr} ) .call(this,this.fields) ) ) } } ,conversion_methods) ;
return($.struct= (function(it) {return($.merge(it.prototype,methods) ) ,it} ) .call(this, ($.merge(function(_) {return this instanceof $.struct? (function(it) {return(it.fields= [ ] ,it.field_names= [ ] ) ,it} ) .call(this, (this) ) :new $.struct() } ,statics) ) ) ) } ) .call(this) } ) ;

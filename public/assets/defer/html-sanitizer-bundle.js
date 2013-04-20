// Copyright (C) 2010 Google Inc.
window.sanitizeHtml=function(){var e=function(){function e(e){var t=(""+e).match(f);return t?new u(c(t[1]),c(t[2]),c(t[3]),c(t[4]),c(t[5]),c(t[6]),c(t[7])):null}function t(e,t,i,a,o,c,l){var h=new u(r(e,d),r(t,d),n(i),a>0?a.toString():null,r(o,m),null,n(l));return c&&("string"==typeof c?h.setRawQuery(c.replace(/[^?&=0-9A-Za-z_\-~.%]/g,s)):h.setAllParameters(c)),h}function n(e){return"string"==typeof e?encodeURIComponent(e):null}function r(e,t){return"string"==typeof e?encodeURI(e).replace(t,s):null}function s(e){var t=e.charCodeAt(0);return"%"+"0123456789ABCDEF".charAt(15&t>>4)+"0123456789ABCDEF".charAt(15&t)}function i(e){return e.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}function a(e){if(null==e)return null;for(var t,n=i(e),r=h;(t=n.replace(r,"$1"))!=n;n=t);return n}function o(e,t){var n=e.clone(),r=t.hasScheme();r?n.setRawScheme(t.getRawScheme()):r=t.hasCredentials(),r?n.setRawCredentials(t.getRawCredentials()):r=t.hasDomain(),r?n.setRawDomain(t.getRawDomain()):r=t.hasPort();var s=t.getRawPath(),i=a(s);if(r)n.setPort(t.getPort()),i=i&&i.replace(p,"");else if(r=!!s){if(47!==i.charCodeAt(0)){var o=a(n.getRawPath()||"").replace(p,""),u=o.lastIndexOf("/")+1;i=a((u?o.substring(0,u):"")+a(s)).replace(p,"")}}else i=i&&i.replace(p,""),i!==s&&n.setRawPath(i);return r?n.setRawPath(i):r=t.hasQuery(),r?n.setRawQuery(t.getRawQuery()):r=t.hasFragment(),r&&n.setRawFragment(t.getRawFragment()),n}function u(e,t,n,r,s,i,a){this.scheme_=e,this.credentials_=t,this.domain_=n,this.port_=r,this.path_=s,this.query_=i,this.fragment_=a,this.paramCache_=null}function c(e){return"string"==typeof e&&e.length>0?e:null}var l=new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),h=new RegExp(l),p=/^(?:\.\.\/)*(?:\.\.$)?/;u.prototype.toString=function(){var e=[];return null!==this.scheme_&&e.push(this.scheme_,":"),null!==this.domain_&&(e.push("//"),null!==this.credentials_&&e.push(this.credentials_,"@"),e.push(this.domain_),null!==this.port_&&e.push(":",this.port_.toString())),null!==this.path_&&e.push(this.path_),null!==this.query_&&e.push("?",this.query_),null!==this.fragment_&&e.push("#",this.fragment_),e.join("")},u.prototype.clone=function(){return new u(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_)},u.prototype.getScheme=function(){return this.scheme_&&decodeURIComponent(this.scheme_).toLowerCase()},u.prototype.getRawScheme=function(){return this.scheme_},u.prototype.setScheme=function(e){return this.scheme_=r(e,d),this},u.prototype.setRawScheme=function(e){return this.scheme_=e?e:null,this},u.prototype.hasScheme=function(){return null!==this.scheme_},u.prototype.getCredentials=function(){return this.credentials_&&decodeURIComponent(this.credentials_)},u.prototype.getRawCredentials=function(){return this.credentials_},u.prototype.setCredentials=function(e){return this.credentials_=r(e,d),this},u.prototype.setRawCredentials=function(e){return this.credentials_=e?e:null,this},u.prototype.hasCredentials=function(){return null!==this.credentials_},u.prototype.getDomain=function(){return this.domain_&&decodeURIComponent(this.domain_)},u.prototype.getRawDomain=function(){return this.domain_},u.prototype.setDomain=function(e){return this.setRawDomain(e&&encodeURIComponent(e))},u.prototype.setRawDomain=function(e){return this.domain_=e?e:null,this.setRawPath(this.path_)},u.prototype.hasDomain=function(){return null!==this.domain_},u.prototype.getPort=function(){return this.port_&&decodeURIComponent(this.port_)},u.prototype.setPort=function(e){if(e){if(e=Number(e),e!==(65535&e))throw new Error("Bad port number "+e);this.port_=""+e}else this.port_=null;return this},u.prototype.hasPort=function(){return null!==this.port_},u.prototype.getPath=function(){return this.path_&&decodeURIComponent(this.path_)},u.prototype.getRawPath=function(){return this.path_},u.prototype.setPath=function(e){return this.setRawPath(r(e,m))},u.prototype.setRawPath=function(e){return e?(e=String(e),this.path_=!this.domain_||/^\//.test(e)?e:"/"+e):this.path_=null,this},u.prototype.hasPath=function(){return null!==this.path_},u.prototype.getQuery=function(){return this.query_&&decodeURIComponent(this.query_).replace(/\+/g," ")},u.prototype.getRawQuery=function(){return this.query_},u.prototype.setQuery=function(e){return this.paramCache_=null,this.query_=n(e),this},u.prototype.setRawQuery=function(e){return this.paramCache_=null,this.query_=e?e:null,this},u.prototype.hasQuery=function(){return null!==this.query_},u.prototype.setAllParameters=function(e){if("object"==typeof e&&!(e instanceof Array)&&(e instanceof Object||"[object Array]"!==Object.prototype.toString.call(e))){var t=[],n=-1;for(var r in e){var s=e[r];"string"==typeof s&&(t[++n]=r,t[++n]=s)}e=t}this.paramCache_=null;for(var i=[],a="",o=0;e.length>o;){var r=e[o++],s=e[o++];i.push(a,encodeURIComponent(r.toString())),a="&",s&&i.push("=",encodeURIComponent(s.toString()))}return this.query_=i.join(""),this},u.prototype.checkParameterCache_=function(){if(!this.paramCache_){var e=this.query_;if(e){for(var t=e.split(/[&\?]/),n=[],r=-1,s=0;t.length>s;++s){var i=t[s].match(/^([^=]*)(?:=(.*))?$/);n[++r]=decodeURIComponent(i[1]).replace(/\+/g," "),n[++r]=decodeURIComponent(i[2]||"").replace(/\+/g," ")}this.paramCache_=n}else this.paramCache_=[]}},u.prototype.setParameterValues=function(e,t){"string"==typeof t&&(t=[t]),this.checkParameterCache_();for(var n=0,r=this.paramCache_,s=[],i=0;r.length>i;i+=2)e===r[i]?t.length>n&&s.push(e,t[n++]):s.push(r[i],r[i+1]);for(;t.length>n;)s.push(e,t[n++]);return this.setAllParameters(s),this},u.prototype.removeParameter=function(e){return this.setParameterValues(e,[])},u.prototype.getAllParameters=function(){return this.checkParameterCache_(),this.paramCache_.slice(0,this.paramCache_.length)},u.prototype.getParameterValues=function(e){this.checkParameterCache_();for(var t=[],n=0;this.paramCache_.length>n;n+=2)e===this.paramCache_[n]&&t.push(this.paramCache_[n+1]);return t},u.prototype.getParameterMap=function(){this.checkParameterCache_();for(var e={},t=0;this.paramCache_.length>t;t+=2){var n=this.paramCache_[t++],r=this.paramCache_[t++];n in e?e[n].push(r):e[n]=[r]}return e},u.prototype.getParameterValue=function(e){this.checkParameterCache_();for(var t=0;this.paramCache_.length>t;t+=2)if(e===this.paramCache_[t])return this.paramCache_[t+1];return null},u.prototype.getFragment=function(){return this.fragment_&&decodeURIComponent(this.fragment_)},u.prototype.getRawFragment=function(){return this.fragment_},u.prototype.setFragment=function(e){return this.fragment_=e?encodeURIComponent(e):null,this},u.prototype.setRawFragment=function(e){return this.fragment_=e?e:null,this},u.prototype.hasFragment=function(){return null!==this.fragment_};var f=new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),d=/[#\/\?@]/g,m=/[\#\?]/g;return u.parse=e,u.create=t,u.resolve=o,u.collapse_dots=a,u.utils={mimeTypeOf:function(t){var n=e(t);return/\.html$/.test(n.getPath())?"text/html":"application/javascript"},resolve:function(t,n){return t?o(e(t),e(n)).toString():""+n}},u}(),t={};t.atype={NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13},t.ATTRIBS={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,"audio::muted":0,"audio::preload":0,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"select::tabindex":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,"textarea::rows":0,"textarea::tabindex":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::width":0},t.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256},t.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:4,img:2,input:2,ins:0,isindex:274,kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,"var":0,video:0,wbr:2},t.ELEMENT_DOM_INTERFACES={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",center:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",footer:"HTMLElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement","var":"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"},t.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},t.URIEFFECTS={"a::href":2,"area::href":2,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1},t.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},t.LOADERTYPES={"a::href":2,"area::href":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1};// Copyright (C) 2006 Google Inc.
var n=function(t){function n(e){if(A.hasOwnProperty(e))return A[e];var t=e.match(R);if(t)return String.fromCharCode(parseInt(t[1],10));if(t=e.match(P))return String.fromCharCode(parseInt(t[1],16));if(L&&M.test(e)){L.innerHTML="&"+e+";";var n=L.textContent;return A[e]=n,n}return"&"+e+";"}function r(e,t){return n(t)}function s(e){return e.replace(O,"")}function i(e){return e.replace(j,r)}function a(e){return(""+e).replace(U,"&amp;").replace(B,"&lt;").replace(F,"&gt;").replace(z,"&#34;")}function o(e){return e.replace(V,"&amp;$1").replace(B,"&lt;").replace(F,"&gt;")}function u(e){var t={cdata:e.cdata||e.cdata,comment:e.comment||e.comment,endDoc:e.endDoc||e.endDoc,endTag:e.endTag||e.endTag,pcdata:e.pcdata||e.pcdata,rcdata:e.rcdata||e.rcdata,startDoc:e.startDoc||e.startDoc,startTag:e.startTag||e.startTag};return function(e,n){return c(e,t,n)}}function c(e,t,n){var r=p(e),s={noMoreGT:!1,noMoreEndComments:!1};h(t,r,0,s,n)}function l(e,t,n,r,s){return function(){h(e,t,n,r,s)}}function h(e,n,r,s,i){try{e.startDoc&&0==r&&e.startDoc(i);for(var a,o,u,c=r,h=n.length;h>c;){var p=n[c++],g=n[c];switch(p){case"&":H.test(g)?(e.pcdata&&e.pcdata("&"+g,i,W,l(e,n,c,s,i)),c++):e.pcdata&&e.pcdata("&amp;",i,W,l(e,n,c,s,i));break;case"</":(a=/^([-\w:]+)[^\'\"]*/.exec(g))?a[0].length===g.length&&">"===n[c+1]?(c+=2,u=a[1].toLowerCase(),e.endTag&&e.endTag(u,i,W,l(e,n,c,s,i))):c=f(n,c,e,i,W,s):e.pcdata&&e.pcdata("&lt;/",i,W,l(e,n,c,s,i));break;case"<":if(a=/^([-\w:]+)\s*\/?/.exec(g))if(a[0].length===g.length&&">"===n[c+1]){c+=2,u=a[1].toLowerCase(),e.startTag&&e.startTag(u,[],i,W,l(e,n,c,s,i));var b=t.ELEMENTS[u];if(b&q){var y={name:u,next:c,eflags:b};c=m(n,y,e,i,W,s)}}else c=d(n,c,e,i,W,s);else e.pcdata&&e.pcdata("&lt;",i,W,l(e,n,c,s,i));break;case"<!--":if(!s.noMoreEndComments){for(o=c+1;h>o&&(">"!==n[o]||!/--$/.test(n[o-1]));o++);if(h>o){if(e.comment){var v=n.slice(c,o).join("");e.comment(v.substr(0,v.length-2),i,W,l(e,n,o+1,s,i))}c=o+1}else s.noMoreEndComments=!0}s.noMoreEndComments&&e.pcdata&&e.pcdata("&lt;!--",i,W,l(e,n,c,s,i));break;case"<!":if(/^\w/.test(g)){if(!s.noMoreGT){for(o=c+1;h>o&&">"!==n[o];o++);h>o?c=o+1:s.noMoreGT=!0}s.noMoreGT&&e.pcdata&&e.pcdata("&lt;!",i,W,l(e,n,c,s,i))}else e.pcdata&&e.pcdata("&lt;!",i,W,l(e,n,c,s,i));break;case"<?":if(!s.noMoreGT){for(o=c+1;h>o&&">"!==n[o];o++);h>o?c=o+1:s.noMoreGT=!0}s.noMoreGT&&e.pcdata&&e.pcdata("&lt;?",i,W,l(e,n,c,s,i));break;case">":e.pcdata&&e.pcdata("&gt;",i,W,l(e,n,c,s,i));break;case"":break;default:e.pcdata&&e.pcdata(p,i,W,l(e,n,c,s,i))}}e.endDoc&&e.endDoc(i)}catch(_){if(_!==W)throw _}}function p(e){var t=/(<\/|<\!--|<[!?]|[&<>])/g;if(e+="",$)return e.split(t);for(var n,r=[],s=0;null!=(n=t.exec(e));)r.push(e.substring(s,n.index)),r.push(n[0]),s=n.index+n[0].length;return r.push(e.substring(s)),r}function f(e,t,n,r,s,i){var a=g(e,t);return a?(n.endTag&&n.endTag(a.name,r,s,l(n,e,t,i,r)),a.next):e.length}function d(e,t,n,r,s,i){var a=g(e,t);return a?(n.startTag&&n.startTag(a.name,a.attrs,r,s,l(n,e,a.next,i,r)),a.eflags&q?m(e,a,n,r,s,i):a.next):e.length}function m(e,n,r,s,i,a){var u=e.length;K.hasOwnProperty(n.name)||(K[n.name]=new RegExp("^"+n.name+"(?:[\\s\\/]|$)","i"));for(var c=K[n.name],h=n.next,p=n.next+1;u>p&&("</"!==e[p-1]||!c.test(e[p]));p++);u>p&&(p-=1);var f=e.slice(h,p).join("");if(n.eflags&t.eflags.CDATA)r.cdata&&r.cdata(f,s,i,l(r,e,p,a,s));else{if(!(n.eflags&t.eflags.RCDATA))throw new Error("bug");r.rcdata&&r.rcdata(o(f),s,i,l(r,e,p,a,s))}return p}function g(e,n){var r=/^([-\w:]+)/.exec(e[n]),s={};s.name=r[1].toLowerCase(),s.eflags=t.ELEMENTS[s.name];for(var i=e[n].substr(r[0].length),a=n+1,o=e.length;o>a&&">"!==e[a];a++)i+=e[a];if(a>=o)return void 0;for(var u=[];""!==i;)if(r=G.exec(i)){if(r[4]&&!r[5]||r[6]&&!r[7]){for(var c=r[4]||r[6],l=!1,h=[i,e[a++]];o>a;a++){if(l){if(">"===e[a])break}else e[a].indexOf(c)>=0&&(l=!0);h.push(e[a])}if(a>=o)break;i=h.join("");continue}var p=r[1].toLowerCase(),f=r[2]?b(r[3]):"";u.push(p,f),i=i.substr(r[0].length)}else i=i.replace(/^[\s\S][^a-z\s]*/,"");return s.attrs=u,s.next=a+1,s}function b(e){var t=e.charCodeAt(0);return(34===t||39===t)&&(e=e.substr(1,e.length-2)),i(s(e))}function y(e){var n,r,s=function(e,t){r||t.push(e)};return u({startDoc:function(){n=[],r=!1},startTag:function(s,i,o){if(!r&&t.ELEMENTS.hasOwnProperty(s)){var u=t.ELEMENTS[s];if(!(u&t.eflags.FOLDABLE)){var c=e(s,i);if(!c)return r=!(u&t.eflags.EMPTY),void 0;if("object"!=typeof c)throw new Error("tagPolicy did not return object (old API?)");if(!("attribs"in c))throw new Error("tagPolicy gave no attribs");i=c.attribs;var l,h;if("tagName"in c?(h=c.tagName,l=t.ELEMENTS[h]):(h=s,l=u),u&t.eflags.OPTIONAL_ENDTAG){var p=n[n.length-1];!p||p.orig!==s||p.rep===h&&s===h||o.push("</",p.rep,">")}u&t.eflags.EMPTY||n.push({orig:s,rep:h}),o.push("<",h);for(var f=0,d=i.length;d>f;f+=2){var m=i[f],g=i[f+1];null!=g&&void 0!==g&&o.push(" ",m,'="',a(g),'"')}o.push(">"),u&t.eflags.EMPTY&&!(l&t.eflags.EMPTY)&&o.push("</",h,">")}}},endTag:function(e,s){if(r)return r=!1,void 0;if(t.ELEMENTS.hasOwnProperty(e)){var i=t.ELEMENTS[e];if(!(i&(t.eflags.EMPTY|t.eflags.FOLDABLE))){var a;if(i&t.eflags.OPTIONAL_ENDTAG)for(a=n.length;--a>=0;){var o=n[a].orig;if(o===e)break;if(!(t.ELEMENTS[o]&t.eflags.OPTIONAL_ENDTAG))return}else for(a=n.length;--a>=0&&n[a].orig!==e;);if(0>a)return;for(var u=n.length;--u>a;){var c=n[u].rep;t.ELEMENTS[c]&t.eflags.OPTIONAL_ENDTAG||s.push("</",c,">")}n.length>a&&(e=n[a].rep),n.length=a,s.push("</",e,">")}}},pcdata:s,rcdata:s,cdata:s,endDoc:function(e){for(;n.length;n.length--)e.push("</",n[n.length-1].rep,">")}})}function v(t,n,r,s,i){if(!i)return null;try{var a=e.parse(""+t);if(a&&(!a.hasScheme()||Q.test(a.getScheme()))){var o=i(a,n,r,s);return o?o.toString():null}}catch(u){return null}return null}function _(e,t,n,r,s){if(n||e(t+" removed",{change:"removed",tagName:t}),r!==s){var i="changed";r&&!s?i="removed":!r&&s&&(i="added"),e(t+"."+n+" "+i,{change:i,tagName:t,attribName:n,oldValue:r,newValue:s})}}function w(e,t,n){var r;return r=t+"::"+n,e.hasOwnProperty(r)?e[r]:(r="*::"+n,e.hasOwnProperty(r)?e[r]:void 0)}function E(e,n){return w(t.LOADERTYPES,e,n)}function x(e,n){return w(t.URIEFFECTS,e,n)}function T(e,n,r,s,i){for(var a=0;n.length>a;a+=2){var o,u=n[a],c=n[a+1],l=c,h=null;if(o=e+"::"+u,(t.ATTRIBS.hasOwnProperty(o)||(o="*::"+u,t.ATTRIBS.hasOwnProperty(o)))&&(h=t.ATTRIBS[o]),null!=h)switch(h){case t.atype.NONE:break;case t.atype.SCRIPT:c=null,i&&_(i,e,u,l,c);break;case t.atype.STYLE:if("undefined"==typeof k){c=null,i&&_(i,e,u,l,c);break}var p=[];k(c,{declaration:function(e,n){var s=e.toLowerCase(),i=N[s];i&&(C(s,i,n,r?function(e){return v(e,t.ueffects.SAME_DOCUMENT,t.ltypes.SANDBOXED,{TYPE:"CSS",CSS_PROP:s},r)}:null),p.push(e+": "+n.join(" ")))}}),c=p.length>0?p.join(" ; "):null,i&&_(i,e,u,l,c);break;case t.atype.ID:case t.atype.IDREF:case t.atype.IDREFS:case t.atype.GLOBAL_NAME:case t.atype.LOCAL_NAME:case t.atype.CLASSES:c=s?s(c):c,i&&_(i,e,u,l,c);break;case t.atype.URI:c=v(c,x(e,u),E(e,u),{TYPE:"MARKUP",XML_ATTR:u,XML_TAG:e},r),i&&_(i,e,u,l,c);break;case t.atype.URI_FRAGMENT:c&&"#"===c.charAt(0)?(c=c.substring(1),c=s?s(c):c,null!=c&&void 0!==c&&(c="#"+c)):c=null,i&&_(i,e,u,l,c);break;default:c=null,i&&_(i,e,u,l,c)}else c=null,i&&_(i,e,u,l,c);n[a+1]=c}return n}function D(e,n,r){return function(s,i){return t.ELEMENTS[s]&t.eflags.UNSAFE?(r&&_(r,s,void 0,void 0,void 0),void 0):{attribs:T(s,i,e,n,r)}}}function I(e,t){var n=[];return y(t)(e,n),n.join("")}function S(e,t,n,r){var s=D(t,n,r);return I(e,s)}var k,C,N;"undefined"!=typeof window&&(k=window.parseCssDeclarations,C=window.sanitizeCssProperty,N=window.cssSchema);var A={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',apos:"'",nbsp:" "},R=/^#(\d+)$/,P=/^#x([0-9A-Fa-f]+)$/,M=/^[A-Za-z][A-za-z0-9]+$/,L="undefined"!=typeof window&&window.document?window.document.createElement("textarea"):null,O=/\0/g,j=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,H=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,U=/&/g,V=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,B=/[<]/g,F=/>/g,z=/\"/g,G=new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?","i"),$=3==="a,b".split(/(,)/).length,q=t.eflags.CDATA|t.eflags.RCDATA,W={},K={},Q=/^(?:https?|mailto)$/i,Y={};return Y.escapeAttrib=Y.escapeAttrib=a,Y.makeHtmlSanitizer=Y.makeHtmlSanitizer=y,Y.makeSaxParser=Y.makeSaxParser=u,Y.makeTagPolicy=Y.makeTagPolicy=D,Y.normalizeRCData=Y.normalizeRCData=o,Y.sanitize=Y.sanitize=S,Y.sanitizeAttribs=Y.sanitizeAttribs=T,Y.sanitizeWithPolicy=Y.sanitizeWithPolicy=I,Y.unescapeEntities=Y.unescapeEntities=i,Y}(t);return function(e){return n.sanitize(e,function(e){return e})}}();
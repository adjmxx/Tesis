var jQueryCrayon=jQuery;(function(a){CrayonUtil=new function(){var c=this;var b=null;c.init=function(){b=CrayonSyntaxSettings;c.initGET()};c.addPrefixToID=function(d){return d.replace(/^([#.])?(.*)$/,"$1"+b.prefix+"$2")};c.removePrefixFromID=function(e){var d=new RegExp("^[#.]?"+b.prefix,"i");return e.replace(d,"")};c.cssElem=function(d){return a(c.addPrefixToID(d))};c.setDefault=function(e,f){return(typeof e=="undefined")?f:e};c.setMax=function(e,d){return e<=d?e:d};c.setMin=function(d,e){return d>=e?d:e};c.setRange=function(e,f,d){return c.setMax(c.setMin(e,f),d)};c.getExt=function(e){if(e.indexOf(".")==-1){return undefined}var d=e.split(".");if(d.length){d=d[d.length-1]}else{d=""}return d};c.initGET=function(){window.currentURL=window.location.protocol+"//"+window.location.host+window.location.pathname;window.currentDir=window.currentURL.substring(0,window.currentURL.lastIndexOf("/"));function d(e){e=e.split("+").join(" ");var h={},g,f=/[?&]?([^=]+)=([^&]*)/g;while(g=f.exec(e)){h[decodeURIComponent(g[1])]=decodeURIComponent(g[2])}return h}window.GET=d(document.location.search)};c.getAJAX=function(d,e){d.version=b.version;a.get(b.ajaxurl,d,e)};c.postAJAX=function(d,e){d.version=b.version;a.post(b.ajaxurl,d,e)};c.reload=function(){var d="?";for(var e in window.GET){d+=e+"="+window.GET[e]+"&"}window.location=window.currentURL+d};c.escape=function(d){if(typeof encodeURIComponent=="function"){return encodeURIComponent(d)}else{if(typeof escape!="function"){return escape(d)}else{return d}}};c.log=function(d){if(typeof console!="undefined"&&b.debug){console.log(d)}};c.decode_html=function(d){return String(d).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")};c.encode_html=function(d){return String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};c.getReadableColor=function(g,f){f=a.extend({amount:0.5,xMulti:1,yMulti:1.5,normalizeHue:[20,180],normalizeHueXMulti:1/2.5,normalizeHueYMulti:1},f);var d=tinycolor(g);var e=d.toHsv();var i={x:e.s,y:1-e.v};i.x*=f.xMulti;i.y*=f.yMulti;if(f.normalizeHue&&e.h>f.normalizeHue[0]&&e.h<f.normalizeHue[1]){i.x*=f.normalizeHueXMulti;i.y*=f.normalizeHueYMulti}var h=Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2));if(h<f.amount){e.v=0}else{e.v=1}e.s=0;return tinycolor(e).toHexString()};c.removeChars=function(e,f){var d=new RegExp("["+e+"]","gmi");return f.replace(d,"")}};a(document).ready(function(){CrayonUtil.init()});a.fn.bindFirst=function(c,e){this.bind(c,e);var b=this.data("events")[c.split(".")[0]];var d=b.pop();b.splice(0,0,d)};a.keys=function(d){var c=[];for(var b in d){c.push(b)}return c};RegExp.prototype.execAll=function(c){var f=[];var b=null;while((b=this.exec(c))!=null){var e=[];for(var d in b){if(parseInt(d)==d){e.push(b[d])}}f.push(e)}return f};RegExp.prototype.escape=function(b){return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};String.prototype.sliceReplace=function(d,b,c){return this.substring(0,d)+c+this.substring(b)};String.prototype.escape=function(){var b={"&":"&amp;","<":"&lt;",">":"&gt;"};return this.replace(/[&<>]/g,function(c){return b[c]||c})};String.prototype.linkify=function(b){b=typeof b!="undefined"?b:"";return this.replace(/(http(s)?:\/\/(\S)+)/gmi,'<a href="$1" target="'+b+'">$1</a>')};String.prototype.toTitleCase=function(){var b=this.split(/\s+/);var c="";a.each(b,function(e,d){if(d!=""){c+=d.slice(0,1).toUpperCase()+d.slice(1,d.length);if(e!=b.length-1&&b[e+1]!=""){c+=" "}}});return c}})(jQueryCrayon);jqueryPopup=Object();jqueryPopup.defaultSettings={centerBrowser:0,centerScreen:0,height:500,left:0,location:0,menubar:0,resizable:0,scrollbars:0,status:0,width:500,windowName:null,windowURL:null,top:0,toolbar:0,data:null,event:"click"};(function(a){popupWindow=function(d,c,f,b){f=typeof f!=="undefined"?f:null;b=typeof b!=="undefined"?b:null;if(typeof d=="string"){d=jQuery(d)}if(!(d instanceof jQuery)){return false}var e=jQuery.extend({},jqueryPopup.defaultSettings,c||{});d.handler=jQuery(d).bind(e.event,function(){if(f){f()}var g="height="+e.height+",width="+e.width+",toolbar="+e.toolbar+",scrollbars="+e.scrollbars+",status="+e.status+",resizable="+e.resizable+",location="+e.location+",menuBar="+e.menubar;e.windowName=e.windowName||jQuery(this).attr("name");var h=jQuery(this).attr("href");if(!e.windowURL&&!(h=="#")&&!(h=="")){e.windowURL=jQuery(this).attr("href")}var i,j;var k=null;if(e.centerBrowser){if(typeof window.screenY=="undefined"){i=(window.screenTop-120)+((((document.documentElement.clientHeight+120)/2)-(e.height/2)));j=window.screenLeft+((((document.body.offsetWidth+20)/2)-(e.width/2)))}else{i=window.screenY+(((window.outerHeight/2)-(e.height/2)));j=window.screenX+(((window.outerWidth/2)-(e.width/2)))}k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{if(e.centerScreen){i=(screen.height-e.height)/2;j=(screen.width-e.width)/2;k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{k=window.open(e.windowURL,e.windowName,g+",left="+e.left+",top="+e.top)}}if(k!=null){k.focus();if(e.data){k.document.write(e.data)}}if(b){b()}});return e};popdownWindow=function(b,c){if(typeof c=="undefined"){c="click"}b=jQuery(b);if(!(b instanceof jQuery)){return false}b.unbind(c,b.handler)}})(jQueryCrayon);(function(f){f.fn.exists=function(){return this.length!==0};f.fn.style=function(B,E,A){var D=this.get(0);if(typeof D=="undefined"){return}var C=D.style;if(typeof B!="undefined"){if(typeof E!="undefined"){A=typeof A!="undefined"?A:"";if(typeof C.setProperty!="undefined"){C.setProperty(B,E,A)}else{C[B]=E}}else{return C[B]}}else{return C}};var d="crayon-pressed";var a="";var n="div.crayon-syntax";var e=".crayon-toolbar";var c=".crayon-info";var w=".crayon-plain";var o=".crayon-main";var m=".crayon-table";var v=".crayon-loading";var h=".crayon-code";var p=".crayon-title";var l=".crayon-tools";var b=".crayon-nums";var j=".crayon-num";var q=".crayon-line";var g="crayon-wrapped";var s=".crayon-nums-content";var u=".crayon-nums-button";var k=".crayon-wrap-button";var i=".crayon-expand-button";var t="crayon-expanded crayon-toolbar-visible";var y="crayon-placeholder";var x=".crayon-popup-button";var r=".crayon-copy-button";var z=".crayon-plain-button";CrayonSyntax=new function(){var I=this;var N=new Object();var ag;var H;var G=0;var Z;I.init=function(){if(typeof N=="undefined"){N=new Object()}ag=CrayonSyntaxSettings;H=CrayonSyntaxStrings;f(n).each(function(){I.process(this)})};I.process=function(aD,aE){aD=f(aD);var ar=aD.attr("id");if(ar=="crayon-"){ar+=X()}aD.attr("id",ar);CrayonUtil.log(ar);if(typeof aE=="undefined"){aE=false}if(!aE&&!aa(ar)){return}var au=aD.find(e);var aC=aD.find(c);var ap=aD.find(w);var aq=aD.find(o);var aB=aD.find(m);var aj=aD.find(h);var aG=aD.find(p);var aA=aD.find(l);var ay=aD.find(b);var av=aD.find(s);var az=aD.find(u);var am=aD.find(k);var ao=aD.find(i);var aF=aD.find(x);var at=aD.find(r);var al=aD.find(z);N[ar]=aD;N[ar].toolbar=au;N[ar].plain=ap;N[ar].info=aC;N[ar].main=aq;N[ar].table=aB;N[ar].code=aj;N[ar].title=aG;N[ar].tools=aA;N[ar].nums=ay;N[ar].nums_content=av;N[ar].numsButton=az;N[ar].wrapButton=am;N[ar].expandButton=ao;N[ar].popup_button=aF;N[ar].copy_button=at;N[ar].plainButton=al;N[ar].numsVisible=true;N[ar].wrapped=false;N[ar].plainVisible=false;N[ar].toolbar_delay=0;N[ar].time=1;f(w).css("z-index",0);var aw=aq.style();N[ar].mainStyle={height:aw&&aw.height||"","max-height":aw&&aw.maxHeight||"","min-height":aw&&aw.minHeight||"",width:aw&&aw.width||"","max-width":aw&&aw.maxWidth||"","min-width":aw&&aw.minWidth||""};N[ar].mainHeightAuto=N[ar].mainStyle.height==""&&N[ar].mainStyle["max-height"]=="";var ak;var ax=0;N[ar].loading=true;N[ar].scrollBlockFix=false;az.click(function(){CrayonSyntax.toggleNums(ar)});am.click(function(){CrayonSyntax.toggleWrap(ar)});ao.click(function(){CrayonSyntax.toggleExpand(ar)});al.click(function(){CrayonSyntax.togglePlain(ar)});at.click(function(){CrayonSyntax.copyPlain(ar)});B(ar);var an=function(){if(ay.filter('[data-settings~="hide"]').length!=0){av.ready(function(){CrayonUtil.log("function"+ar);CrayonSyntax.toggleNums(ar,true,true)})}else{ac(ar)}if(typeof N[ar].expanded=="undefined"){if(Math.abs(N[ar].main.outerWidth()-N[ar].table.outerWidth())<10){N[ar].expandButton.hide()}else{N[ar].expandButton.show()}}if(ax==5){clearInterval(ak);N[ar].loading=false}ax++};ak=setInterval(an,300);C(ar);f(j,N[ar]).each(function(){var aJ=f(this).attr("data-line");var aI=f("#"+aJ);var aH=aI.style("height");if(aH){aI.attr("data-height",aH)}});aq.css("position","relative");aq.css("z-index",1);Z=(aD.filter('[data-settings~="touchscreen"]').length!=0);if(!Z){aq.click(function(){A(ar,"",false)});ap.click(function(){A(ar,"",false)});aC.click(function(){A(ar,"",false)})}if(aD.filter('[data-settings~="no-popup"]').length==0){N[ar].popup_settings=popupWindow(aF,{height:screen.height-200,width:screen.width-100,top:75,left:50,scrollbars:1,windowURL:"",data:""},function(){F(ar)},function(){})}ap.css("opacity",0);N[ar].toolbarVisible=true;N[ar].hasOneLine=aB.outerHeight()<au.outerHeight()*2;N[ar].toolbarMouseover=false;if(au.filter('[data-settings~="mouseover"]').length!=0&&!Z){N[ar].toolbarMouseover=true;N[ar].toolbarVisible=false;au.css("margin-top","-"+au.outerHeight()+"px");au.hide();if(au.filter('[data-settings~="overlay"]').length!=0&&!N[ar].hasOneLine){au.css("position","absolute");au.css("z-index",2);if(au.filter('[data-settings~="hide"]').length!=0){aq.click(function(){T(ar,undefined,undefined,0)});ap.click(function(){T(ar,false,undefined,0)})}}else{au.css("z-index",4)}if(au.filter('[data-settings~="delay"]').length!=0){N[ar].toolbar_delay=500}aD.mouseenter(function(){T(ar,true)}).mouseleave(function(){T(ar,false)})}else{if(Z){au.show()}}if(aD.filter('[data-settings~="minimize"]').length==0){I.minimize(ar)}if(ap.length!=0&&!Z){if(ap.filter('[data-settings~="dblclick"]').length!=0){aq.dblclick(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="click"]').length!=0){aq.click(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="mouseover"]').length!=0){aD.mouseenter(function(){CrayonSyntax.togglePlain(ar,true)}).mouseleave(function(){CrayonSyntax.togglePlain(ar,false)});az.hide()}}}if(ap.filter('[data-settings~="show-plain-default"]').length!=0){CrayonSyntax.togglePlain(ar,true)}}var ai=aD.filter('[data-settings~="expand"]').length!=0;if(!Z&&aD.filter('[data-settings~="scroll-mouseover"]').length!=0){aq.css("overflow","hidden");ap.css("overflow","hidden");aD.mouseenter(function(){M(ar,true,ai)}).mouseleave(function(){M(ar,false,ai)})}if(ai){aD.mouseenter(function(){D(ar,true)}).mouseleave(function(){D(ar,false)})}if(aD.filter('[data-settings~="disable-anim"]').length!=0){N[ar].time=0}if(aD.filter('[data-settings~="wrap"]').length!=0){N[ar].wrapped=true}N[ar].mac=aD.hasClass("crayon-os-mac");ac(ar);ab(ar);Y(ar)};var aa=function(ai){CrayonUtil.log(N);if(typeof N[ai]=="undefined"){N[ai]=f("#"+ai);CrayonUtil.log("make "+ai);return true}CrayonUtil.log("no make "+ai);return false};var X=function(){return G++};var F=function(ai){if(typeof N[ai]=="undefined"){return aa(ai)}var aj=N[ai].popup_settings;if(aj&&aj.data){return}var al=N[ai].clone(true);al.removeClass("crayon-wrapped");if(N[ai].wrapped){f(j,al).each(function(){var ao=f(this).attr("data-line");var an=f("#"+ao);var am=an.attr("data-height");am=am?am:"";if(typeof am!="undefined"){an.css("height",am);f(this).css("height",am)}})}al.find(o).css("height","");var ak="";if(N[ai].plainVisible){ak=al.find(w)}else{ak=al.find(o)}aj.data=I.getAllCSS()+'<body class="crayon-popup-window" style="padding:0; margin:0;"><div class="'+al.attr("class")+' crayon-popup">'+I.removeCssInline(I.getHtmlString(ak))+"</div></body>"};I.minimize=function(al){var ak=f('<div class="crayon-minimize crayon-button"><div>');N[al].tools.append(ak);N[al].origTitle=N[al].title.html();if(!N[al].origTitle){N[al].title.html(H.minimize)}var aj="crayon-minimized";var ai=function(){N[al].toolbarPreventHide=false;ak.remove();N[al].removeClass(aj);N[al].title.html(N[al].origTitle);var am=N[al].toolbar;if(am.filter('[data-settings~="never-show"]').length!=0){am.remove()}};N[al].toolbar.click(ai);ak.click(ai);N[al].addClass(aj);N[al].toolbarPreventHide=true;T(al,undefined,undefined,0)};I.getHtmlString=function(ai){return f("<div>").append(ai.clone()).remove().html()};I.removeCssInline=function(ak){var aj=/style\s*=\s*"([^"]+)"/gmi;var ai=null;while((ai=aj.exec(ak))!=null){var al=ai[1];al=al.replace(/\b(?:width|height)\s*:[^;]+;/gmi,"");ak=ak.sliceReplace(ai.index,ai.index+ai[0].length,'style="'+al+'"')}return ak};I.getAllCSS=function(){var ak="";var aj=f('link[rel="stylesheet"]');var ai=[];if(aj.length==1){ai=aj}else{ai=aj.filter('[href*="crayon-syntax-highlighter"], [href*="min/"]')}ai.each(function(){var al=I.getHtmlString(f(this));ak+=al});return ak};I.copyPlain=function(ak,al){if(typeof N[ak]=="undefined"){return aa(ak)}var aj=N[ak].plain;I.togglePlain(ak,true,true);T(ak,true);var ai=N[ak].mac?"\u2318":"CTRL";var am=H.copy;am=am.replace(/%s/,ai+"+C");am=am.replace(/%s/,ai+"+V");A(ak,am);return false};var A=function(aj,al,ai){if(typeof N[aj]=="undefined"){return aa(aj)}var ak=N[aj].info;if(typeof al=="undefined"){al=""}if(typeof ai=="undefined"){ai=true}if(L(ak)&&ai){ak.html("<div>"+al+"</div>");ak.css("margin-top",-ak.outerHeight());ak.show();Q(aj,ak,true);setTimeout(function(){Q(aj,ak,false)},5000)}if(!ai){Q(aj,ak,false)}};var B=function(ai){if(window.devicePixelRatio>1){var aj=f(".crayon-button-icon",N[ai].toolbar);aj.each(function(){var al=f(this).css("background-image");var ak=al.replace(/\.(?=[^\.]+$)/g,"@2x.");f(this).css("background-size","48px 128px");f(this).css("background-image",ak)})}};var L=function(ai){var aj="-"+ai.outerHeight()+"px";if(ai.css("margin-top")==aj||ai.css("display")=="none"){return true}else{return false}};var Q=function(al,ak,aj,an,am,ap){var ai=function(){if(ap){ap(al,ak)}};var ao="-"+ak.outerHeight()+"px";if(typeof aj=="undefined"){if(L(ak)){aj=true}else{aj=false}}if(typeof an=="undefined"){an=100}if(an==false){an=false}if(typeof am=="undefined"){am=0}ak.stop(true);if(aj==true){ak.show();ak.animate({marginTop:0},ah(an,al),ai)}else{if(aj==false){if(ak.css("margin-top")=="0px"&&am){ak.delay(am)}ak.animate({marginTop:ao},ah(an,al),function(){ak.hide();ai()})}}};I.togglePlain=function(al,am,aj){if(typeof N[al]=="undefined"){return aa(al)}var ai=N[al].main;var ak=N[al].plain;if((ai.is(":animated")||ak.is(":animated"))&&typeof am=="undefined"){return}ae(al);var ao,an;if(typeof am!="undefined"){if(am){ao=ai;an=ak}else{ao=ak;an=ai}}else{if(ai.css("z-index")==1){ao=ai;an=ak}else{ao=ak;an=ai}}N[al].plainVisible=(an==ak);N[al].top=ao.scrollTop();N[al].left=ao.scrollLeft();N[al].scrollChanged=false;C(al);ao.stop(true);ao.fadeTo(ah(500,al),0,function(){ao.css("z-index",0)});an.stop(true);an.fadeTo(ah(500,al),1,function(){an.css("z-index",1);if(an==ak){if(aj){ak.select()}else{}}an.scrollTop(N[al].top+1);an.scrollTop(N[al].top);an.scrollLeft(N[al].left+1);an.scrollLeft(N[al].left)});an.scrollTop(N[al].top);an.scrollLeft(N[al].left);ab(al);T(al,false);return false};I.toggleNums=function(am,al,ai){if(typeof N[am]=="undefined"){aa(am);return false}if(N[am].table.is(":animated")){return false}var ao=Math.round(N[am].nums_content.outerWidth()+1);var an="-"+ao+"px";var ak;if(typeof al!="undefined"){ak=false}else{ak=(N[am].table.css("margin-left")==an)}var aj;if(ak){aj="0px";N[am].numsVisible=true}else{N[am].table.css("margin-left","0px");N[am].numsVisible=false;aj=an}if(typeof ai!="undefined"){N[am].table.css("margin-left",aj);ac(am);return false}var ap=(N[am].table.outerWidth()+J(N[am].table.css("margin-left"))>N[am].main.outerWidth());var aq=(N[am].table.outerHeight()>N[am].main.outerHeight());if(!ap&&!aq){N[am].main.css("overflow","hidden")}N[am].table.animate({marginLeft:aj},ah(200,am),function(){if(typeof N[am]!="undefined"){ac(am);if(!ap&&!aq){N[am].main.css("overflow","auto")}}});return false};I.toggleWrap=function(ai){N[ai].wrapped=!N[ai].wrapped;Y(ai)};I.toggleExpand=function(ai){var aj=!CrayonUtil.setDefault(N[ai].expanded,false);D(ai,aj)};var Y=function(ai,aj){aj=CrayonUtil.setDefault(aj,true);if(N[ai].wrapped){N[ai].addClass(g)}else{N[ai].removeClass(g)}E(ai);if(!N[ai].expanded&&aj){V(ai)}N[ai].wrapTimes=0;clearInterval(N[ai].wrapTimer);N[ai].wrapTimer=setInterval(function(){if(N[ai].is(":visible")){O(ai);N[ai].wrapTimes++;if(N[ai].wrapTimes==5){clearInterval(N[ai].wrapTimer)}}},200)};var ad=function(ai){if(typeof N[ai]=="undefined"){aa(ai);return false}};var J=function(aj){if(typeof aj!="string"){return 0}var ai=aj.replace(/[^-0-9]/g,"");if(ai.length==0){return 0}else{return parseInt(ai)}};var ac=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].numsVisible=="undefined"){return}if(N[ai].numsVisible){N[ai].numsButton.removeClass(a);N[ai].numsButton.addClass(d)}else{N[ai].numsButton.removeClass(d);N[ai].numsButton.addClass(a)}};var E=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].wrapped=="undefined"){return}if(N[ai].wrapped){N[ai].wrapButton.removeClass(a);N[ai].wrapButton.addClass(d)}else{N[ai].wrapButton.removeClass(d);N[ai].wrapButton.addClass(a)}};var W=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].expanded=="undefined"){return}if(N[ai].expanded){N[ai].expandButton.removeClass(a);N[ai].expandButton.addClass(d)}else{N[ai].expandButton.removeClass(d);N[ai].expandButton.addClass(a)}};var ab=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].plainVisible=="undefined"){return}if(N[ai].plainVisible){N[ai].plainButton.removeClass(a);N[ai].plainButton.addClass(d)}else{N[ai].plainButton.removeClass(d);N[ai].plainButton.addClass(a)}};var T=function(aj,ai,al,ak){if(typeof N[aj]=="undefined"){return aa(aj)}else{if(!N[aj].toolbarMouseover){return}else{if(ai==false&&N[aj].toolbarPreventHide){return}else{if(Z){return}}}}var am=N[aj].toolbar;if(typeof ak=="undefined"){ak=N[aj].toolbar_delay}Q(aj,am,ai,al,ak,function(){N[aj].toolbarVisible=ai})};var R=function(ak,ai){var aj=f.extend({},ak);aj.width+=ai.width;aj.height+=ai.height;return aj};var P=function(ak,ai){var aj=f.extend({},ak);aj.width-=ai.width;aj.height-=ai.height;return aj};var U=function(ai){if(typeof N[ai].initialSize=="undefined"){N[ai].toolbarHeight=N[ai].toolbar.outerHeight();N[ai].innerSize={width:N[ai].width(),height:N[ai].height()};N[ai].outerSize={width:N[ai].outerWidth(),height:N[ai].outerHeight()};N[ai].borderSize=P(N[ai].outerSize,N[ai].innerSize);N[ai].initialSize={width:N[ai].main.outerWidth(),height:N[ai].main.outerHeight()};N[ai].initialSize.height+=N[ai].toolbarHeight;N[ai].initialOuterSize=R(N[ai].initialSize,N[ai].borderSize);N[ai].finalSize={width:N[ai].table.outerWidth(),height:N[ai].table.outerHeight()};N[ai].finalSize.height+=N[ai].toolbarHeight;N[ai].finalSize.width=CrayonUtil.setMin(N[ai].finalSize.width,N[ai].initialSize.width);N[ai].finalSize.height=CrayonUtil.setMin(N[ai].finalSize.height,N[ai].initialSize.height);N[ai].diffSize=P(N[ai].finalSize,N[ai].initialSize);N[ai].finalOuterSize=R(N[ai].finalSize,N[ai].borderSize);N[ai].initialSize.height+=N[ai].toolbar.outerHeight()}};var D=function(al,ao){if(typeof N[al]=="undefined"){return aa(al)}if(typeof ao=="undefined"){return}var aj=N[al].main;var aq=N[al].plain;if(ao){if(typeof N[al].expanded=="undefined"){U(al);N[al].expandTime=CrayonUtil.setRange(N[al].diffSize.width/3,300,800);N[al].expanded=false;var ap=N[al].finalOuterSize;N[al].placeholder=f("<div></div>");N[al].placeholder.addClass(y);N[al].placeholder.css(ap);N[al].before(N[al].placeholder);N[al].placeholder.css("margin",N[al].css("margin"));f(window).bind("resize",K)}var am={height:"auto","min-height":"none","max-height":"none"};var ai={width:"auto","min-width":"none","max-width":"none"};N[al].outerWidth(N[al].outerWidth());N[al].css({"min-width":"none","max-width":"none"});var an={width:N[al].finalOuterSize.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=N[al].finalOuterSize.height;N[al].outerHeight(N[al].outerHeight())}aj.css(am);aj.css(ai);N[al].stop(true);N[al].animate(an,ah(N[al].expandTime,al),function(){N[al].expanded=true;W(al)});N[al].placeholder.show();f("body").prepend(N[al]);N[al].addClass(t);K()}else{var ar=N[al].initialOuterSize;var ak=N[al].toolbar_delay;if(ar){N[al].stop(true);if(!N[al].expanded){N[al].delay(ak)}var an={width:ar.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=ar.height}N[al].animate(an,ah(N[al].expandTime,al),function(){af(al)})}else{setTimeout(function(){af(al)},ak)}N[al].placeholder.hide();N[al].placeholder.before(N[al]);N[al].css({left:"auto",top:"auto"});N[al].removeClass(t)}ae(al);if(ao){Y(al,false)}};var K=function(){for(uid in N){if(N[uid].hasClass(t)){N[uid].css(N[uid].placeholder.offset())}}};var af=function(ai){N[ai].expanded=false;V(ai);W(ai);if(N[ai].wrapped){Y(ai)}};var M=function(al,aj,am){if(typeof N[al]=="undefined"){return aa(al)}if(typeof aj=="undefined"||am||N[al].expanded){return}var ai=N[al].main;var ak=N[al].plain;if(aj){ai.css("overflow","auto");ak.css("overflow","auto");if(typeof N[al].top!="undefined"){visible=(ai.css("z-index")==1?ai:ak);visible.scrollTop(N[al].top-1);visible.scrollTop(N[al].top);visible.scrollLeft(N[al].left-1);visible.scrollLeft(N[al].left)}}else{visible=(ai.css("z-index")==1?ai:ak);N[al].top=visible.scrollTop();N[al].left=visible.scrollLeft();ai.css("overflow","hidden");ak.css("overflow","hidden")}N[al].scrollChanged=true;C(al)};var C=function(ai){N[ai].table.style("width","100%","important");var aj=setTimeout(function(){N[ai].table.style("width","");clearInterval(aj)},10)};var V=function(ak){var aj=N[ak].main;var ai=N[ak].mainStyle;aj.css(ai);N[ak].css("height","auto");N[ak].css("width",ai.width);N[ak].css("max-width",ai["max-width"]);N[ak].css("min-width",ai["min-width"])};var ae=function(ai){N[ai].plain.outerHeight(N[ai].main.outerHeight())};var O=function(ai){f(j,N[ai]).each(function(){var al=f(this).attr("data-line");var ak=f("#"+al);var aj=null;if(N[ai].wrapped){ak.css("height","");aj=ak.outerHeight();aj=aj?aj:""}else{aj=ak.attr("data-height");aj=aj?aj:"";ak.css("height",aj)}f(this).css("height",aj)})};var ah=function(ai,aj){if(ai=="fast"){ai=200}else{if(ai=="slow"){ai=600}else{if(!S(ai)){ai=parseInt(ai);if(isNaN(ai)){return 0}}}}return ai*N[aj].time};var S=function(ai){return typeof ai=="number"}};f(document).ready(function(){CrayonSyntax.init()})})(jQueryCrayon);
CLI_ACCEPT_COOKIE_NAME=(typeof CLI_ACCEPT_COOKIE_NAME!=='undefined'?CLI_ACCEPT_COOKIE_NAME:'viewed_cookie_policy');CLI_ACCEPT_COOKIE_EXPIRE=(typeof CLI_ACCEPT_COOKIE_EXPIRE!=='undefined'?CLI_ACCEPT_COOKIE_EXPIRE:365);CLI_COOKIEBAR_AS_POPUP=(typeof CLI_COOKIEBAR_AS_POPUP!=='undefined'?CLI_COOKIEBAR_AS_POPUP:false);var CLI_Cookie={set:function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else
var expires="";document.cookie=name+"="+value+expires+"; path=/";if(days<1)
{host_name=window.location.hostname;document.cookie=name+"="+value+expires+"; path=/; domain=."+host_name+";";if(host_name.indexOf("www")!=1)
{var host_name_withoutwww=host_name.replace('www','');document.cookie=name+"="+value+expires+"; path=/; domain="+host_name_withoutwww+";";}
host_name=host_name.substring(host_name.lastIndexOf(".",host_name.lastIndexOf(".")-1));document.cookie=name+"="+value+expires+"; path=/; domain="+host_name+";";}},read:function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length);}}
return null;},erase:function(name){this.set(name,"",-10);},exists:function(name){return(this.read(name)!==null);},getallcookies:function()
{var pairs=document.cookie.split(";");var cookieslist={};for(var i=0;i<pairs.length;i++){var pair=pairs[i].split("=");cookieslist[(pair[0]+'').trim()]=unescape(pair[1]);}
return cookieslist;}}
var CLI={bar_config:{},showagain_config:{},set:function(args)
{if(typeof JSON.parse!=="function")
{console.log("CookieLawInfo requires JSON.parse but your browser doesn't support it");return;}
this.settings=JSON.parse(args.settings);this.bar_elm=jQuery(this.settings.notify_div_id);this.showagain_elm=jQuery(this.settings.showagain_div_id);this.main_button=jQuery('.cli-plugin-main-button');this.main_link=jQuery('.cli-plugin-main-link');this.reject_link=jQuery('.cookie_action_close_header_reject');this.delete_link=jQuery(".cookielawinfo-cookie-delete");this.settings_button=jQuery('.cli_settings_button');if(this.settings.cookie_bar_as=='popup')
{CLI_COOKIEBAR_AS_POPUP=true;}
this.configBar();this.toggleBar();this.attachDelete();this.attachEvents();this.configButtons();var cli_hidebar_on_readmore=this.hideBarInReadMoreLink();if(this.settings.scroll_close===true&&cli_hidebar_on_readmore===false)
{window.addEventListener("scroll",CLI.closeOnScroll,false);}},hideBarInReadMoreLink:function()
{if(CLI.settings.button_2_hidebar===true&&this.main_link.length>0&&this.main_link.hasClass('cli-minimize-bar'))
{this.hideHeader();this.showagain_elm.slideDown(this.settings.animate_speed_show);return true;}
return false;},attachEvents:function()
{jQuery('.cli_action_button').click(function(e){e.preventDefault();var elm=jQuery(this);var button_action=elm.attr('data-cli_action');var open_link=elm[0].hasAttribute("href")&&elm.attr("href")!='#'?true:false;var new_window=false;if(button_action=='accept')
{CLI.accept_close();new_window=CLI.settings.button_1_new_win?true:false;}else if(button_action=='reject')
{CLI.reject_close();new_window=CLI.settings.button_3_new_win?true:false;}
if(open_link)
{if(new_window)
{window.open(elm.attr("href"),'_blank');}else
{window.location.href=elm.attr("href");}}});this.settingsPopUp();this.settingsTabbedAccordion();this.toggleUserPreferenceCheckBox();},toggleUserPreferenceCheckBox:function()
{jQuery('.cli-user-preference-checkbox').each(function(){if(jQuery(this).is(':checked'))
{CLI_Cookie.set('cookielawinfo-'+jQuery(this).attr('data-id'),'yes',CLI_ACCEPT_COOKIE_EXPIRE);}else
{CLI_Cookie.set('cookielawinfo-'+jQuery(this).attr('data-id'),'no',CLI_ACCEPT_COOKIE_EXPIRE);}});jQuery('.cli-user-preference-checkbox').click(function(){if(jQuery(this).is(':checked'))
{CLI_Cookie.set('cookielawinfo-'+jQuery(this).attr('data-id'),'yes',CLI_ACCEPT_COOKIE_EXPIRE);}else
{CLI_Cookie.set('cookielawinfo-'+jQuery(this).attr('data-id'),'no',CLI_ACCEPT_COOKIE_EXPIRE);}});},settingsPopUp:function()
{jQuery('.cli_settings_button').click(function(e){e.preventDefault();jQuery('#cliSettingsPopup').addClass("cli-show").css({'opacity':0}).animate({'opacity':1});jQuery('#cliSettingsPopup').removeClass('cli-blowup cli-out').addClass("cli-blowup");jQuery('body').addClass("cli-modal-open");jQuery(".cli-settings-overlay").addClass("cli-show");jQuery("#cookie-law-info-bar").css({'opacity':.1});if(!jQuery('.cli-settings-mobile').is(':visible'))
{jQuery('#cliSettingsPopup').find('.cli-nav-link:eq(0)').click();}});jQuery('#cliModalClose').click(function(){CLI.settingsPopUpClose();});jQuery("#cliSettingsPopup").click(function(e){if(!(document.getElementsByClassName('cli-modal-dialog')[0].contains(e.target)))
{CLI.settingsPopUpClose();}});jQuery('.cli_enable_all_btn').click(function(){var cli_toggle_btn=jQuery(this);var enable_text=cli_toggle_btn.attr('data-enable-text');var disable_text=cli_toggle_btn.attr('data-disable-text');if(cli_toggle_btn.hasClass('cli-enabled')){CLI.disableAllCookies();cli_toggle_btn.html(enable_text);}
else
{CLI.enableAllCookies();cli_toggle_btn.html(disable_text);}
jQuery(this).toggleClass('cli-enabled');});this.privacyReadmore();},settingsTabbedAccordion:function()
{jQuery(".cli-tab-header").on("click",function(e){if(!(jQuery(e.target).hasClass('cli-slider')||jQuery(e.target).hasClass('cli-user-preference-checkbox')))
{if(jQuery(this).hasClass("cli-tab-active")){jQuery(this).removeClass("cli-tab-active");jQuery(this).siblings(".cli-tab-content").slideUp(200);}else{jQuery(".cli-tab-header").removeClass("cli-tab-active");jQuery(this).addClass("cli-tab-active");jQuery(".cli-tab-content").slideUp(200);jQuery(this).siblings(".cli-tab-content").slideDown(200);}}});},settingsPopUpClose:function()
{jQuery('#cliSettingsPopup').removeClass('cli-show');jQuery('#cliSettingsPopup').addClass('cli-out');jQuery('body').removeClass("cli-modal-open");jQuery(".cli-settings-overlay").removeClass("cli-show");jQuery("#cookie-law-info-bar").css({'opacity':1});},privacyReadmore:function()
{var el=jQuery('.cli-privacy-content .cli-privacy-content-text'),clone=el.clone(),originalHtml=clone.html(),originalHeight=el.outerHeight(),Trunc={addReadmore:function(textBlock)
{if(textBlock.text().length>250)
{jQuery('.cli-privacy-readmore').show();}},truncateText:function(textBlock){while(textBlock.text().length>250)
{textBlock.text(function(index,text){return text.replace(/\W*\s(\S)*$/,'...');});}},replaceText:function(textBlock,original){return textBlock.html(original).height(originalHeight);}};Trunc.addReadmore(el);Trunc.truncateText(el);jQuery('a.cli-privacy-readmore').click(function(e){e.preventDefault();if(jQuery('.cli-privacy-overview').hasClass('cli-collapsed'))
{Trunc.truncateText(el);jQuery('.cli-privacy-overview').removeClass('cli-collapsed');el.css('height','100%');}
else
{jQuery('.cli-privacy-overview').addClass('cli-collapsed');Trunc.replaceText(el,originalHtml);}});},attachDelete:function()
{this.delete_link.click(function(){CLI_Cookie.erase(CLI_ACCEPT_COOKIE_NAME);for(var k in Cli_Data.nn_cookie_ids)
{CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k]);}
return false;});},configButtons:function()
{this.main_button.css('color',this.settings.button_1_link_colour);if(this.settings.button_1_as_button)
{this.main_button.css('background-color',this.settings.button_1_button_colour);this.main_button.hover(function(){jQuery(this).css('background-color',CLI.settings.button_1_button_hover);},function(){jQuery(this).css('background-color',CLI.settings.button_1_button_colour);});}
this.main_link.css('color',this.settings.button_2_link_colour);if(this.settings.button_2_as_button)
{this.main_link.css('background-color',this.settings.button_2_button_colour);this.main_link.hover(function(){jQuery(this).css('background-color',CLI.settings.button_2_button_hover);},function(){jQuery(this).css('background-color',CLI.settings.button_2_button_colour);});}
this.reject_link.css('color',this.settings.button_3_link_colour);if(this.settings.button_3_as_button)
{this.reject_link.css('background-color',this.settings.button_3_button_colour);this.reject_link.hover(function(){jQuery(this).css('background-color',CLI.settings.button_3_button_hover);},function(){jQuery(this).css('background-color',CLI.settings.button_3_button_colour);});}
this.settings_button.css('color',this.settings.button_4_link_colour);if(this.settings.button_4_as_button)
{this.settings_button.css('background-color',this.settings.button_4_button_colour);this.settings_button.hover(function(){jQuery(this).css('background-color',CLI.settings.button_4_button_hover);},function(){jQuery(this).css('background-color',CLI.settings.button_4_button_colour);});}},toggleBar:function()
{if(CLI_COOKIEBAR_AS_POPUP)
{this.barAsPopUp(1);}
if(CLI.settings.cookie_bar_as=='widget')
{this.barAsWidget(1);}
if(!CLI_Cookie.exists(CLI_ACCEPT_COOKIE_NAME))
{this.displayHeader();}else
{this.hideHeader();}
if(this.settings.show_once_yn)
{setTimeout(function(){CLI.close_header();},CLI.settings.show_once);}
this.showagain_elm.click(function(e){e.preventDefault();CLI.showagain_elm.slideUp(CLI.settings.animate_speed_hide,function()
{CLI.bar_elm.slideDown(CLI.settings.animate_speed_show);if(CLI_COOKIEBAR_AS_POPUP)
{CLI.showPopupOverlay();}});});},configShowAgain:function()
{this.showagain_config={'background-color':this.settings.background,'color':this.l1hs(this.settings.text),'position':'fixed','font-family':this.settings.font_family};if(this.settings.border_on)
{var border_to_hide='border-'+this.settings.notify_position_vertical;this.showagain_config['border']='1px solid '+this.l1hs(this.settings.border);this.showagain_config[border_to_hide]='none';}
var cli_win=jQuery(window);var cli_winw=cli_win.width();var showagain_x_pos=this.settings.showagain_x_position;if(cli_winw<300)
{showagain_x_pos=10;this.showagain_config.width=cli_winw-20;}else
{this.showagain_config.width='auto';}
var cli_defw=cli_winw>400?500:cli_winw-20;if(CLI_COOKIEBAR_AS_POPUP)
{var sa_pos=this.settings.popup_showagain_position;var sa_pos_arr=sa_pos.split('-');if(sa_pos_arr[1]=='left')
{this.showagain_config.left=showagain_x_pos;}else if(sa_pos_arr[1]=='right')
{this.showagain_config.right=showagain_x_pos;}
if(sa_pos_arr[0]=='top')
{this.showagain_config.top=0;}else if(sa_pos_arr[0]=='bottom')
{this.showagain_config.bottom=0;}
this.bar_config['position']='fixed';}else if(this.settings.cookie_bar_as=='widget')
{this.showagain_config.bottom=0;if(this.settings.widget_position=='left')
{this.showagain_config.left=showagain_x_pos;}else if(this.settings.widget_position=='right')
{this.showagain_config.right=showagain_x_pos;}}
else
{if(this.settings.notify_position_vertical=="top")
{this.showagain_config.top='0';}
else if(this.settings.notify_position_vertical=="bottom")
{this.bar_config['position']='fixed';this.bar_config['bottom']='0';this.showagain_config.bottom='0';}
if(this.settings.notify_position_horizontal=="left")
{this.showagain_config.left=showagain_x_pos;}else if(this.settings.notify_position_horizontal=="right")
{this.showagain_config.right=showagain_x_pos;}}
this.showagain_elm.css(this.showagain_config);},configBar:function()
{this.bar_config={'background-color':this.settings.background,'color':this.settings.text,'font-family':this.settings.font_family};if(this.settings.notify_position_vertical=="top")
{this.bar_config['top']='0';if(this.settings.header_fix===true)
{this.bar_config['position']='fixed';}}else
{this.bar_config['bottom']='0';}
this.configShowAgain();this.bar_elm.css(this.bar_config).hide();},l1hs:function(str)
{if(str.charAt(0)=="#"){str=str.substring(1,str.length);}else{return"#"+str;}
return this.l1hs(str);},close_header:function()
{CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME,'yes',CLI_ACCEPT_COOKIE_EXPIRE);this.hideHeader();},accept_close:function()
{this.hidePopupOverlay();CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME,'yes',CLI_ACCEPT_COOKIE_EXPIRE);if(this.settings.notify_animate_hide)
{this.bar_elm.slideUp(this.settings.animate_speed_hide);}else
{this.bar_elm.hide();}
if(this.settings.showagain_tab)
{this.showagain_elm.slideDown(this.settings.animate_speed_show);}
if(this.settings.accept_close_reload===true)
{this.reload_current_page();}
return false;},reject_close:function()
{this.hidePopupOverlay();for(var k in Cli_Data.nn_cookie_ids)
{CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k]);}
CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME,'no',CLI_ACCEPT_COOKIE_EXPIRE);if(this.settings.notify_animate_hide)
{this.bar_elm.slideUp(this.settings.animate_speed_hide);}else
{this.bar_elm.hide();}
if(this.settings.showagain_tab)
{this.showagain_elm.slideDown(this.settings.animate_speed_show);}
if(this.settings.reject_close_reload===true)
{this.reload_current_page();}
return false;},reload_current_page:function()
{if(typeof cli_flush_cache!=='undefined'&&cli_flush_cache==1)
{window.location.href=this.add_clear_cache_url_query();}else
{window.location.reload(true);}},add_clear_cache_url_query:function()
{var cli_rand=new Date().getTime()/1000;var cli_url=window.location.href;var cli_hash_arr=cli_url.split('#');var cli_urlparts=cli_hash_arr[0].split('?');if(cli_urlparts.length>=2)
{var cli_url_arr=cli_urlparts[1].split('&');cli_url_temp_arr=new Array();for(var cli_i=0;cli_i<cli_url_arr.length;cli_i++)
{var cli_temp_url_arr=cli_url_arr[cli_i].split('=');if(cli_temp_url_arr[0]=='cli_action')
{}else
{cli_url_temp_arr.push(cli_url_arr[cli_i]);}}
cli_urlparts[1]=cli_url_temp_arr.join('&');cli_url=cli_urlparts.join('?')+(cli_url_temp_arr.length>0?'&':'')+'cli_action=';}else
{cli_url=cli_hash_arr[0]+'?cli_action=';}
cli_url+=cli_rand;if(cli_hash_arr.length>1)
{cli_url+='#'+cli_hash_arr[1];}
return cli_url;},closeOnScroll:function()
{if(window.pageYOffset>100&&!CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME))
{CLI.accept_close();if(CLI.settings.scroll_close_reload===true)
{window.location.reload();}
window.removeEventListener("scroll",CLI.closeOnScroll,false);}},displayHeader:function()
{if(this.settings.notify_animate_show)
{this.bar_elm.slideDown(this.settings.animate_speed_show);}else
{this.bar_elm.show();}
this.showagain_elm.hide();if(CLI_COOKIEBAR_AS_POPUP)
{this.showPopupOverlay();}},hideHeader:function()
{if(this.settings.showagain_tab)
{if(this.settings.notify_animate_show)
{this.showagain_elm.slideDown(this.settings.animate_speed_show);}else{this.showagain_elm.show();}}else
{this.showagain_elm.hide();}
this.bar_elm.slideUp(this.settings.animate_speed_show);this.hidePopupOverlay();},hidePopupOverlay:function()
{jQuery('body').removeClass("cli-barmodal-open");jQuery(".cli-popupbar-overlay").removeClass("cli-show");},showPopupOverlay:function()
{if(this.settings.popup_overlay)
{jQuery('body').addClass("cli-barmodal-open");jQuery(".cli-popupbar-overlay").addClass("cli-show");}},barAsWidget:function(a)
{var cli_elm=this.bar_elm;var cli_win=jQuery(window);var cli_winh=cli_win.height()-40;var cli_winw=cli_win.width();var cli_defw=cli_winw>400?300:cli_winw-30;cli_elm.css({'width':cli_defw,'height':'auto','max-height':cli_winh,'padding':'25px 15px','overflow':'auto','position':'fixed','box-sizing':'border-box'});if(this.settings.widget_position=='left')
{cli_elm.css({'left':'15px','right':'auto','bottom':'15px','top':'auto'});}else
{cli_elm.css({'left':'auto','right':'15px','bottom':'15px','top':'auto'});}
if(a)
{this.setResize();}},barAsPopUp:function(a)
{if(typeof cookie_law_info_bar_as_popup==='function')
{return false;}
var cli_elm=this.bar_elm;var cli_win=jQuery(window);var cli_winh=cli_win.height()-40;var cli_winw=cli_win.width();var cli_defw=cli_winw>700?500:cli_winw-20;cli_elm.css({'width':cli_defw,'height':'auto','max-height':cli_winh,'bottom':'','top':'50%','left':'50%','margin-left':(cli_defw/2)*-1,'margin-top':'-100px','padding':'25px 15px','overflow':'auto'}).addClass('cli-bar-popup cli-modal-content');cli_h=cli_elm.height();li_h=cli_h<200?200:cli_h;cli_elm.css({'top':'50%','margin-top':((cli_h/2)+30)*-1});setTimeout(function(){cli_elm.css({'bottom':''});},100);if(a)
{this.setResize();}},setResize:function()
{var resizeTmr=null;jQuery(window).resize(function(){clearTimeout(resizeTmr);resizeTmr=setTimeout(function()
{if(CLI_COOKIEBAR_AS_POPUP)
{CLI.barAsPopUp();}
if(CLI.settings.cookie_bar_as=='widget')
{CLI.barAsWidget();}
CLI.configShowAgain();},500);});}}
jQuery(document).ready(function(){if(typeof cli_cookiebar_settings!='undefined')
{CLI.set({settings:cli_cookiebar_settings});}});
(function(factory){var registeredInModuleLoader=false;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true}if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true}if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api}}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key]}}return result}function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return}if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires}attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result}}catch(e){}if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{value=converter.write(value,key)}key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue}stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue}stringifiedAttributes+='='+attributes[attributeName]}return(document.cookie=key+'='+value+stringifiedAttributes)}if(!key){result={}}var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1)}try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie)}catch(e){}}if(key===name){result=cookie;break}if(!key){result[name]=cookie}}catch(e){}}return result}api.set=api;api.get=function(key){return api.call(api,key)};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments))};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}))};api.withConverter=init;return api}return init(function(){})}));

jQuery.fn.autoGrow=function(){return this.each(function(){var createMirror=function(textarea){jQuery(textarea).after('<div class="autogrow-textarea-mirror"></div>');return jQuery(textarea).next(".autogrow-textarea-mirror")[0]};var sendContentToMirror=function(textarea){mirror.innerHTML=String(textarea.value).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br />")+".<br/>.";if(jQuery(textarea).height()!=jQuery(mirror).height())jQuery(textarea).height(jQuery(mirror).height())};
var growTextarea=function(){sendContentToMirror(this)};var mirror=createMirror(this);mirror.style.display="none";mirror.style.wordWrap="break-word";mirror.style.padding=jQuery(this).css("padding");mirror.style.width=jQuery(this).css("width");mirror.style.fontFamily=jQuery(this).css("font-family");mirror.style.fontSize=jQuery(this).css("font-size");mirror.style.lineHeight=jQuery(this).css("line-height");this.style.overflow="hidden";this.style.minHeight=this.rows+"em";this.onkeydown=growTextarea;sendContentToMirror(this)})};
;jQuery(document).ready(function($){$('body').addClass('wpdiscuz_'+wpdiscuzAjaxObj.wpdiscuz_options.version);var isUserLoggedIn=wpdiscuzAjaxObj.wpdiscuz_options.is_user_logged_in;var isShowCaptchaForGuests=wpdiscuzAjaxObj.wpdiscuz_options.wc_captcha_show_for_guest==1&&!isUserLoggedIn;var isShowCaptchaForMembers=wpdiscuzAjaxObj.wpdiscuz_options.wc_captcha_show_for_members==1&&isUserLoggedIn;var isCaptchaInSession=wpdiscuzAjaxObj.wpdiscuz_options.isCaptchaInSession;var wpdiscuzRecaptcha=wpdiscuzAjaxObj.wpdiscuz_options.wpDiscuzReCaptcha;var isGoodbyeCaptchaActive=wpdiscuzAjaxObj.wpdiscuz_options.isGoodbyeCaptchaActive;var commentListLoadType=wpdiscuzAjaxObj.wpdiscuz_options.commentListLoadType;var wordpressIsPaginate=wpdiscuzAjaxObj.wpdiscuz_options.wordpressIsPaginate;var wpdiscuzPostId=wpdiscuzAjaxObj.wpdiscuz_options.wc_post_id;var commentListUpdateType=wpdiscuzAjaxObj.wpdiscuz_options.commentListUpdateType;var commentListUpdateTimer=wpdiscuzAjaxObj.wpdiscuz_options.commentListUpdateTimer;var disableGuestsLiveUpdate=wpdiscuzAjaxObj.wpdiscuz_options.liveUpdateGuests;var loadLastCommentId=wpdiscuzAjaxObj.wpdiscuz_options.loadLastCommentId;var cookieCommentsSorting=wpdiscuzAjaxObj.wpdiscuz_options.cookieCommentsSorting;var wpdiscuzOrderData=Cookies.get(cookieCommentsSorting+"_"+wpdiscuzPostId);if(wpdiscuzOrderData){wpdiscuzOrderData=JSON.parse(wpdiscuzOrderData);var wpdiscuzCommentsOrder=wpdiscuzOrderData&&wpdiscuzOrderData.order?wpdiscuzOrderData.order:wpdiscuzAjaxObj.wpdiscuz_options.wpdiscuzCommentsOrder;var wpdiscuzCommentsOrderBy=wpdiscuzOrderData&&wpdiscuzOrderData.orderBy?wpdiscuzOrderData.orderBy:wpdiscuzAjaxObj.wpdiscuz_options.wpdiscuzCommentOrderBy;}else{var wpdiscuzCommentsOrder=wpdiscuzAjaxObj.wpdiscuz_options.wpdiscuzCommentsOrder;var wpdiscuzCommentsOrderBy=wpdiscuzAjaxObj.wpdiscuz_options.wpdiscuzCommentOrderBy;}
var commentsVoteOrder=wpdiscuzAjaxObj.wpdiscuz_options.commentsVoteOrder;var storeCommenterData=wpdiscuzAjaxObj.wpdiscuz_options.storeCommenterData;var wpdiscuzLoadCount=1;var wpdiscuzReplyArray=[];var wpdiscuzCommentArray=[];var wpdiscuzUploader=wpdiscuzAjaxObj.wpdiscuz_options.uploader;var commentTextMaxLength=wpdiscuzAjaxObj.wpdiscuz_options.commentTextMaxLength;var wpdGoogleRecaptchaValid=true;var wpdiscuzReplyButton='';var isCookiesEnabled=wpdiscuzAjaxObj.wpdiscuz_options.isCookiesEnabled;var wpdCookiesConsent=true;var wpdiscuzCookiehash=wpdiscuzAjaxObj.wpdiscuz_options.cookiehash;var isLoadOnlyParentComments=wpdiscuzAjaxObj.wpdiscuz_options.isLoadOnlyParentComments;var enableDropAnimation=wpdiscuzAjaxObj.wpdiscuz_options.enableDropAnimation?500:0;var isNativeAjaxEnabled=wpdiscuzAjaxObj.wpdiscuz_options.isNativeAjaxEnabled;var wpdiscuzAgreementFields=[];loginButtonsClone();if(!wpdiscuzAjaxObj.wpdiscuz_options.wordpressIsPaginate&&isCookiesEnabled){Cookies.remove('wordpress_last_visit',{path:''});var wpdiscuzLastVisitKey=wpdiscuzAjaxObj.wpdiscuz_options.lastVisitKey;if(wpdiscuzAjaxObj.wpdiscuz_options.enableLastVisitCookie){var wpdiscuzLastVisit=wpdiscuzAjaxObj.wpdiscuz_options.lastVisitCookie;var wpdiscuzLastVisitExpires=wpdiscuzAjaxObj.wpdiscuz_options.lastVisitExpires;Cookies.set(wpdiscuzLastVisitKey,wpdiscuzLastVisit,{expires:wpdiscuzLastVisitExpires,path:window.location});}else{Cookies.remove(wpdiscuzLastVisitKey,{path:''});}}
$('#wc_unsubscribe_message, #wc_delete_content_message, #wc_follow_message').delay(3000).fadeOut(1500,function(){$(this).remove();location.href=location.href.substring(0,location.href.indexOf('wpdiscuzUrlAnchor')-1);});$(document).delegate('.wc-reply-button','click',function(){wpdiscuzReplyButton=$(this);if($(this).hasClass('wpdiscuz-clonned')){$('#wc-secondary-form-wrapper-'+getUniqueID($(this),0)).slideToggle(enableDropAnimation);}else{cloneSecondaryForm($(this));}
$(this).toggleClass('wc-cta-active');});$(document).delegate('.wc-comment-img-link','click',function(){var el=$('<input/>');var val=$(this).data('comment-url');el.appendTo('body').css({'position':'absolute','top':'-10000000px'}).val(val);el.select();document.execCommand('copy');el.remove();alert(val+'\r\nCopied to clipboard!');});$(document).delegate('textarea.wc_comment','focus',function(){var parent=$(this).parents('.wc-form-wrapper');$('.commentTextMaxLength',parent).show();$('.wc-form-footer',parent).slideDown(enableDropAnimation);});$(document).delegate('#wpcomm textarea','focus',function(){if(!($(this).next('.autogrow-textarea-mirror').length)){$(this).autoGrow();}});$(document).delegate('textarea.wc_comment','blur',function(){var parent=$(this).parents('.wc-form-wrapper');$('.commentTextMaxLength',parent).hide();});$(document).delegate('textarea.wc_comment','keyup',function(){setTextareaCharCount($(this),commentTextMaxLength);});$.each($('textarea.wc_comment'),function(){setTextareaCharCount($(this),commentTextMaxLength);});$(document).delegate('.wpdiscuz-nofollow,.wc_captcha_refresh_img,.wc-toggle,.wc-load-more-link','click',function(e){e.preventDefault();});$(document).delegate('.wc-toggle','click',function(e){var uniqueID=getUniqueID($(this),0);var toggle=$(this);var icon=$('.fas',toggle);if(icon.hasClass('wpdiscuz-show-replies')&&isLoadOnlyParentComments){wpdiscuzShowReplies(uniqueID);}else{$('#wc-comm-'+uniqueID+'> .wc-reply').slideToggle(700,function(){if($(this).is(':hidden')){icon.removeClass('fa-chevron-up');icon.addClass('fa-chevron-down');icon.attr('title',wpdiscuzAjaxObj.wpdiscuz_options.wc_show_replies_text);$('.wpdiscuz-children-button-text',toggle).text(wpdiscuzAjaxObj.wpdiscuz_options.wc_show_replies_text);}else{icon.removeClass('fa-chevron-down');icon.addClass('fa-chevron-up');icon.attr('title',wpdiscuzAjaxObj.wpdiscuz_options.wc_hide_replies_text);$('.wpdiscuz-children-button-text',toggle).text(wpdiscuzAjaxObj.wpdiscuz_options.wc_hide_replies_text);}});if($('.wpdiscuz-children-count',toggle).length){var replies=$('#wc-comm-'+uniqueID+' .wc-reply');$('.wpdiscuz-children-count',toggle).html(replies.length);}}});$(document).delegate('.wc-new-loaded-comment','mouseenter',function(){if($(this).hasClass('wc-reply')){$('>.wc-comment-right',this).css('backgroundColor',wpdiscuzAjaxObj.wpdiscuz_options.wc_reply_bg_color);}else{$('>.wc-comment-right',this).css('backgroundColor',wpdiscuzAjaxObj.wpdiscuz_options.wc_comment_bg_color);}});$(document).delegate('.wpdiscuz-sbs-wrap','click',function(){$('.wpdiscuz-subscribe-bar').slideToggle(enableDropAnimation);});$(document).delegate('.wc_captcha_refresh_img','click',function(e){e.preventDefault();changeCaptchaImage($(this));});function changeCaptchaImage(reloadImage){if(!wpdiscuzRecaptcha&&!isGoodbyeCaptchaActive&&(isShowCaptchaForGuests||isShowCaptchaForMembers)){var form=reloadImage.parents('.wc-form-wrapper');var keyField=$('.wpdiscuz-cnonce',form);if(isCaptchaInSession){var uuId=getUUID();var captchaImg=$(reloadImage).prev().children('.wc_captcha_img');var src=captchaImg.attr('src');var fileUrl=src.substring(0,src.indexOf('=')+1);captchaImg.attr('src',fileUrl+uuId+'&r='+Math.random());keyField.attr('id',uuId);keyField.attr('value',uuId);}else{var data=new FormData();data.append('action','generateCaptcha');var isMain=form.hasClass('wc-secondary-form-wrapper')?0:1;var uniqueId=getUniqueID(reloadImage,isMain);data.append('wpdiscuz_unique_id',uniqueId);var ajaxObject=getAjaxObj(true,data);ajaxObject.done(function(response){try{var obj=$.parseJSON(response);if(obj.code==1){var captchaImg=$(reloadImage).prev().children('.wc_captcha_img');var src=captchaImg.attr('src');var lastSlashIndex=src.lastIndexOf('/')+1;var newSrc=src.substring(0,lastSlashIndex)+obj.message;captchaImg.attr('src',newSrc);keyField.attr('id',obj.key);keyField.attr('value',obj.key);}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}}}
function getUUID(){var chars='123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';var uuId='c';for(i=0;i<13;i++){uuId+=chars[Math.floor(Math.random()*(chars.length-1)+1)];}
return uuId;}
$(document).delegate('.wc_comm_submit.wc_not_clicked','click',function(){var currentSubmitBtn=$(this);var depth=1;var wcForm=$(this).parents('form');if(!wcForm.hasClass('wc_main_comm_form')){depth=getCommentDepth($(this).parents('.wc-comment'));}
wpdGoogleRecaptchaValid=true;wpdValidateFieldRequired(wcForm);wcForm.submit(function(event){event.preventDefault();});if(wcForm[0].checkValidity()&&wpdGoogleRecaptchaValid){addAgreementInCookie(wcForm);$(currentSubmitBtn).removeClass('wc_not_clicked');var data=new FormData();data.append('action','wpdAddComment');data.append('ahk',wpdiscuzAjaxObj.wpdiscuz_options.ahk);var inputs=$(":input",wcForm);inputs.each(function(){if(this.name!=''&&this.type!='checkbox'&&this.type!='radio'){data.append(this.name+'',$(this).val());}
if(this.type=='checkbox'||this.type=='radio'){if($(this).is(':checked')){data.append(this.name+'',$(this).val());}}});data.append('wc_comment_depth',depth);if(wpdiscuzUploader==1){var images=$(wcForm).find('input.wmu-image');var videos=$(wcForm).find('input.wmu-video');var files=$(wcForm).find('input.wmu-file');if(images.length>0){$.each($(images),function(i,imageFile){if(imageFile.files.length>0){$.each(imageFile.files,function(j,imageObj){data.append('wmu_images['+i+']',imageObj);});}});}
if(videos.length>0){$.each($(videos),function(i,videoFile){if(videoFile.files.length>0){$.each(videoFile.files,function(j,videoObj){data.append('wmu_videos['+i+']',videoObj);});}});}
if(files.length>0){$.each($(files),function(i,file){if(file.files.length>0){$.each(file.files,function(j,fileObj){data.append('wmu_files['+i+']',fileObj);});}});}}
if(!wpdiscuzRecaptcha&&!isGoodbyeCaptchaActive&&(isShowCaptchaForGuests||isShowCaptchaForMembers)&&!isCaptchaInSession){var image=$('.wc_captcha_img',wcForm);var src=image.attr('src');var lastIndex=src.lastIndexOf('/')+1;var fileName=src.substring(lastIndex);data.append('fileName',fileName);}
if(wpdiscuzAjaxObj.wpdiscuz_options.wpdiscuz_zs){data.append('wpdiscuz_zs',wpdiscuzAjaxObj.wpdiscuz_options.wpdiscuz_zs);}
if($('.wpd-cookies-checkbox',wcForm).length&&!$('.wpd-cookies-checkbox',wcForm).prop("checked")){wpdCookiesConsent=false;}
var ajax=(!isNativeAjaxEnabled&&!wpdiscuzUploader)?getCustomAjaxObj(true,data):getAjaxObj(true,data);ajax.done(function(response){$(currentSubmitBtn).addClass('wc_not_clicked');var messageKey='';var message='';try{var r=$.parseJSON(response);messageKey=r.code;if(parseInt(messageKey)>=0){var isMain=r.is_main;message=r.message;$('.wpd-cc-value').html(r.wc_all_comments_count_new);if($('.wpd-stat-threads-count').length){$('.wpd-stat-threads-count').html(r.threadsCount);}
if($('.wpd-stat-replies-count').length){$('.wpd-stat-replies-count').html(r.repliesCount);}
if($('.wpd-stat-authors-count').length){$('.wpd-stat-authors-count').html(r.authorsCount);}
if(isMain){addCommentsAfterSticky(message);}else{$('#wc-secondary-form-wrapper-'+messageKey).slideToggle(700);if(r.is_in_same_container==1){$('#wc-secondary-form-wrapper-'+messageKey).after(message);}else{$('#wc-secondary-form-wrapper-'+messageKey).after(message.replace('wc-reply','wc-reply wc-no-left-margin'));}}
notifySubscribers(r);wpdiscuzRedirect(r);if(isCookiesEnabled&&wpdCookiesConsent){addCookie(wcForm,r);}else if(!wpdCookiesConsent){$('.wpd-cookies-checkbox').removeAttr('checked');}
wcForm.get(0).reset();setCookieInForm(r);var currTArea=$('.wc_comment',wcForm);currTArea.css('height','72px');setTextareaCharCount(currTArea,commentTextMaxLength);$('.wmu-preview-wrap',wcForm).remove();if(wpdiscuzReplyButton.length){wpdiscuzReplyButton.removeClass('wc-cta-active');}
deleteAgreementFields();}else{message=wpdiscuzAjaxObj.wpdiscuz_options[messageKey];if(r.typeError!='undefined'&&r.typeError!=null){message+=' '+r.typeError;}
wpdiscuzAjaxObj.setCommentMessage(wcForm,messageKey,message,true);}
runCallbacks(r,wcForm);}catch(e){if(response.indexOf('<')>=0&&response.indexOf('>')>=0){message=e;}else{message=response;}
wpdiscuzAjaxObj.setCommentMessage(wcForm,'wc_invalid_field',message,true);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}
changeCaptchaImage($('.wc_captcha_refresh_img',wcForm));wpdiscuzReset();});function notifySubscribers(r){if(!r.held_moderate){var data=new FormData();data.append('action','wpdCheckNotificationType');data.append('comment_id',r.new_comment_id);data.append('email',r.comment_author_email);data.append('isParent',r.is_main);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{r=$.parseJSON(response);}catch(e){console.log(e);}});}}
function wpdiscuzRedirect(r){if(r.redirect>0&&r.new_comment_id){var data=new FormData();data.append('action','wpdRedirect');data.append('commentId',r.new_comment_id);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){r=$.parseJSON(response);if(r.code==1){setTimeout(function(){window.location.href=r.redirect_to;},5000);}});}}
function setCookieInForm(obj){$('.wc_comm_form .wc_name').val(obj.comment_author);if(obj.comment_author_email.indexOf('@example.com')<0){$('.wc_comm_form .wc_email').val(obj.comment_author_email);}
if(obj.comment_author_url){$('.wc_comm_form .wc_website').val(obj.comment_author_url);}}
function addCookie(wcForm,obj){var email=obj.comment_author_email;var name=obj.comment_author;var weburl=obj.comment_author_url;if(storeCommenterData==null){Cookies.set('comment_author_email_'+wpdiscuzCookiehash,email);Cookies.set('comment_author_'+wpdiscuzCookiehash,name);if(weburl.length){Cookies.set('comment_author_url_'+wpdiscuzCookiehash,weburl);}}else{storeCommenterData=parseInt(storeCommenterData);Cookies.set('comment_author_email_'+wpdiscuzCookiehash,email,{expires:storeCommenterData,path:'/'});Cookies.set('comment_author_'+wpdiscuzCookiehash,name,{expires:storeCommenterData,path:'/'});if(weburl.length){Cookies.set('comment_author_url_'+wpdiscuzCookiehash,weburl,{expires:storeCommenterData,path:'/'});}}
if($('.wpd-cookies-checkbox').length){$('.wpd-cookies-checkbox').attr('checked','checked');}}
var wcCommentTextBeforeEditing;$(document).delegate('.wc_editable_comment','click',function(){if(wcCommentTextBeforeEditing&&$('.wpdiscuz-edit-form-wrap').length){wcCancelOrSave(getUniqueID($('.wpdiscuz-edit-form-wrap'),0),wcCommentTextBeforeEditing);}
var uniqueID=getUniqueID($(this),0);var commentID=getCommentID(uniqueID);var editButton=$(this);var data=new FormData();data.append('action','wpdEditComment');data.append('commentId',commentID);var wcCommentTextBeforeEditingTop=$('#wc-comm-'+uniqueID+' .wpd-top-custom-fields');var wcCommentTextBeforeEditingBottom=$('#wc-comm-'+uniqueID+' .wpd-bottom-custom-fields');wcCommentTextBeforeEditing=wcCommentTextBeforeEditingTop.length?'<div class="wpd-top-custom-fields">'+wcCommentTextBeforeEditingTop.html()+'</div>':'';wcCommentTextBeforeEditing+='<div class="wc-comment-text">'+$('#wc-comm-'+uniqueID+' .wc-comment-text').html()+'</div>';wcCommentTextBeforeEditing+=wcCommentTextBeforeEditingBottom.length?'<div class="wpd-bottom-custom-fields">'+$('#wc-comm-'+uniqueID+' .wpd-bottom-custom-fields').html()+'</div>':'';var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);var message='';var messageKey=r.code;if(parseInt(messageKey)>=0){$('#wc-comm-'+uniqueID+' .wpd-top-custom-fields').remove();$('#wc-comm-'+uniqueID+' .wpd-bottom-custom-fields').remove();$('#wc-comm-'+uniqueID+' > .wc-comment-right .wc-comment-text').replaceWith(r.message);$('#wc-comm-'+uniqueID+' > .wc-comment-right .wc-comment-footer .wc_editable_comment').hide();$('#wc-comm-'+uniqueID+' > .wc-comment-right .wc-comment-footer .wc_cancel_edit').css('display','inline-block');var editForm=$('#wc-comm-'+uniqueID+' > .wc-comment-right #wpdiscuz-edit-form');}else{message=wpdiscuzAjaxObj.wpdiscuz_options[messageKey];wpdiscuzAjaxObj.setCommentMessage(editButton,messageKey,message,false);}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});$(document).delegate('.wc_save_edited_comment','click',function(){var uniqueID=getUniqueID($(this));var commentID=getCommentID(uniqueID);var editCommentForm=$('#wc-comm-'+uniqueID+' #wpdiscuz-edit-form');var saveButton=$(this);wpdValidateFieldRequired(editCommentForm);editCommentForm.submit(function(event){event.preventDefault();});if(editCommentForm[0].checkValidity()){var data=new FormData();data.append('action','wpdSaveEditedComment');data.append('wpdiscuz_unique_id',uniqueID);data.append('commentId',commentID);var inputs=$(":input",editCommentForm);inputs.each(function(){if($(this).is(':visible')&&this.name!=''&&this.type!='checkbox'&&this.type!='radio'){data.append(this.name+'',$(this).val());}
if(this.type=='checkbox'||this.type=='radio'){if($(this).is(':checked')){data.append(this.name+'',$(this).val());}}});var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);var messageKey=r.code;var message='';if(parseInt(messageKey)>=0){wcCancelOrSave(uniqueID,r.message);if(r.twitterShareLink){$('#wc-comm-'+uniqueID+' #comment-'+commentID+'.wc-comment-right .wc-comment-header .wc-share-link .wc_tw').attr('href',r.twitterShareLink);}}else{message=wpdiscuzAjaxObj.wpdiscuz_options[messageKey];wpdiscuzAjaxObj.setCommentMessage(saveButton,messageKey,message,false);}
runCallbacks(r,commentID);}catch(e){if(response.indexOf('<')>=0&&response.indexOf('>')>=0){message=e;}else{message=response;}
wpdiscuzAjaxObj.setCommentMessage(saveButton,'wc_invalid_field',message,false);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}});$(document).delegate('.wc_cancel_edit','click',function(){var uniqueID=getUniqueID($(this));wcCancelOrSave(uniqueID,wcCommentTextBeforeEditing);});function wcCancelOrSave(uniqueID,content){$('#wc-comm-'+uniqueID+' > .wc-comment-right .wc-comment-footer .wc_editable_comment').show();$('#wc-comm-'+uniqueID+' > .wc-comment-right .wc-comment-footer .wc_cancel_edit').hide();$('#wc-comm-'+uniqueID+' .wpdiscuz-edit-form-wrap').replaceWith(content);}
function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br/>':'<br>';var string=(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');return string.replace('<br><br>','<br/>');}
$(document).delegate('.wc-load-more-submit','click',function(){var loadButton=$(this);var loaded='wc-loaded';var loading='wc-loading';if(loadButton.hasClass(loaded)){wpdiscuzLoadComments(loadButton,loaded,loading);}});var isRun=false;if(commentListLoadType==2&&!wordpressIsPaginate){$('.wc-load-more-submit').parents('.wpdiscuz-comment-pagination').hide();wpdiscuzScrollEvents();$(window).scroll(function(){wpdiscuzScrollEvents();});}
function wpdiscuzScrollEvents(){var wpdiscuzHasMoreComments=$('#wpdiscuzHasMoreComments').val();var scrollHeight=$(document).height();var scrollPosition=$(window).height()+$(window).scrollTop();if(scrollHeight&&scrollPosition){var scrollPercent=scrollPosition*100/scrollHeight;if(scrollPercent>=80&&isRun===false&&wpdiscuzHasMoreComments==1){isRun=true;wpdiscuzLoadComments($('.wc-load-more-submit'));}}}
function wpdiscuzLoadComments(loadButton,loaded,loading){loadButton.toggleClass(loaded);loadButton.toggleClass(loading);var data=new FormData();data.append('action','wpdLoadMoreComments');data.append('offset',wpdiscuzLoadCount);data.append('orderBy',wpdiscuzCommentsOrderBy);data.append('order',wpdiscuzCommentsOrder);data.append('lastParentId',getLastParentID());if(wpdiscuzAjaxObj.wpdiscuz_options.enableLastVisitCookie){data.append(wpdiscuzLastVisitKey,Cookies.get(wpdiscuzLastVisitKey));}
wpdiscuzLoadCount++;var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);$('.wpdiscuz-comment-pagination').before(r.comment_list);setLoadMoreVisibility(r);$('.wpdiscuz_single').remove();isRun=false;loadLastCommentId=r.loadLastCommentId;}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);$('.wc-load-more-submit').blur();loadButton.toggleClass(loaded);loadButton.toggleClass(loading);});}
function setLoadMoreVisibility(r){if(r.is_show_load_more==false){$('#wpdiscuzHasMoreComments').val(0);$('.wc-load-more-submit').parents('.wpdiscuz-comment-pagination').hide();}else{setLastParentID(r.last_parent_id);$('#wpdiscuzHasMoreComments').val(1);}
runCallbacks(r);}
$(document).delegate('.wc_vote.wc_not_clicked','click',function(){var currentVoteBtn=$(this);$(currentVoteBtn).removeClass('wc_not_clicked');var messageKey='';var message='';var commentID=$(this).parents('.wc-comment-right').attr('id');commentID=commentID.substring(commentID.lastIndexOf('-')+1);var voteType;if($(this).hasClass('wc-up')){voteType=1;}else{voteType=-1;}
var data=new FormData();data.append('action','wpdVoteOnComment');data.append('commentId',commentID);data.append('voteType',voteType);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){$(currentVoteBtn).addClass('wc_not_clicked');try{var r=$.parseJSON(response);messageKey=r.code;if(parseInt(messageKey)>=0){if(r.buttonsStyle=='total'){var voteCountDiv=$('.wc-comment-footer .wc-vote-result',$('#comment-'+commentID));voteCountDiv.text(parseInt(voteCountDiv.text())+voteType);}else{var likeCountDiv=$('.wc-comment-footer .wc-vote-result-like',$('#comment-'+commentID));var dislikeCountDiv=$('.wc-comment-footer .wc-vote-result-dislike',$('#comment-'+commentID));likeCountDiv.text(r.likeCount);dislikeCountDiv.text(r.dislikeCount);parseInt(r.likeCount)>0?likeCountDiv.addClass('wc-positive'):likeCountDiv.removeClass('wc-positive');parseInt(r.dislikeCount)<0?dislikeCountDiv.addClass('wc-negative'):dislikeCountDiv.removeClass('wc-negative');}}else{message=wpdiscuzAjaxObj.wpdiscuz_options[messageKey];wpdiscuzAjaxObj.setCommentMessage(currentVoteBtn,messageKey,message,false);}
runCallbacks(r,commentID,voteType);}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});$(document).delegate('.wpdiscuz-sort-button','click',function(){if(!($(this).hasClass('wpdiscuz-sort-button-active'))){var clickedBtn=$(this);if($(this).hasClass('wpdiscuz-vote-sort-up')){wpdiscuzCommentsOrderBy='by_vote';wpdiscuzCommentsOrder='desc';}else{wpdiscuzCommentsOrderBy='comment_date_gmt';wpdiscuzCommentsOrder=$(this).hasClass('wpdiscuz-date-sort-desc')?'desc':'asc';}
var cookieCommentsSorting=wpdiscuzAjaxObj.wpdiscuz_options.cookieCommentsSorting;var postId=wpdiscuzAjaxObj.wpdiscuz_options.wc_post_id;var orderData={orderBy:wpdiscuzCommentsOrderBy,order:wpdiscuzCommentsOrder};Cookies.set(cookieCommentsSorting+"_"+postId,JSON.stringify(orderData),{expires:7,path:location.href});var data=new FormData();data.append('action','wpdSorting');data.append('orderBy',wpdiscuzCommentsOrderBy);data.append('order',wpdiscuzCommentsOrder);var messageKey='';var message='';var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);messageKey=r.code;message=r.message;if(parseInt(messageKey)>0){$('#wpcomm .wc-thread-wrapper .wc-comment').each(function(){$(this).remove();});$('#wpcomm .wc-thread-wrapper').prepend(message);wpdiscuzLoadCount=parseInt(r.loadCount);}
setActiveButton(clickedBtn);setLoadMoreVisibility(r);}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}});function setActiveButton(clickedBtn){$('.wpdiscuz-sort-buttons .wpdiscuz-sort-button').each(function(){$(this).removeClass('wpdiscuz-sort-button-active');});clickedBtn.addClass('wpdiscuz-sort-button-active');}
function getSingleComment(){var loc=location.href;var matches=loc.match(/#comment\-(\d+)/);if(matches!==null){var commentId=matches[1];if(!$('#comment-'+commentId).length){var data=new FormData();data.append('action','wpdGetSingleComment');data.append('commentId',commentId);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);var scrollToSelector='.wc-thread-wrapper';if($('#comment-'+r.parentCommentID).length){var parentComment=$('#comment-'+r.parentCommentID);$('.wc-toggle',parentComment).trigger('click');scrollToSelector='#comment-'+r.parentCommentID;}else{$('.wc-thread-wrapper').prepend(r.message);}
runCallbacks(r);$('html, body').animate({scrollTop:$(scrollToSelector).offset().top-32},1000);}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}else{$('html, body').animate({scrollTop:$('#comment-'+commentId).parents('[id^=wc-comm-]').offset().top-32},1000);}}}
getSingleComment();if(commentListUpdateType&&loadLastCommentId&&(isUserLoggedIn||(!isUserLoggedIn&&!disableGuestsLiveUpdate))){setInterval(liveUpdate,parseInt(commentListUpdateTimer)*1000);}
function liveUpdate(){var visibleCommentIds=getVisibleCommentIds();var email=(Cookies.get('comment_author_email_'+wpdiscuzCookiehash)!=undefined&&Cookies.get('comment_author_email_'+wpdiscuzCookiehash)!='')?Cookies.get('comment_author_email_'+wpdiscuzCookiehash):'';var data=new FormData();data.append('action','wpdUpdateAutomatically');data.append('loadLastCommentId',loadLastCommentId);data.append('visibleCommentIds',visibleCommentIds);data.append('email',email);var ajax=isNativeAjaxEnabled?getAjaxObj(false,data):getCustomAjaxObj(false,data);ajax.done(function(response){try{var r=$.parseJSON(response);if(r.code==1){if(commentListUpdateType==1){liveUpdateImmediately(r);}else{wpdiscuzCommentArray=wpdiscuzCommentArray.concat(r.message.comments);wpdiscuzReplyArray=wpdiscuzReplyArray.concat(r.message.author_replies);var newCommentArrayLength=wpdiscuzCommentArray.length;var newRepliesArrayLength=wpdiscuzReplyArray.length;if(newCommentArrayLength>0){var newCommentText=newCommentArrayLength+' ';newCommentText+=newCommentArrayLength>1?wpdiscuzAjaxObj.wpdiscuz_options.wc_new_comments_button_text:wpdiscuzAjaxObj.wpdiscuz_options.wc_new_comment_button_text;$('.wc_new_comment').html(newCommentText).show();}else{$('.wc_new_comment').hide();}
if(newRepliesArrayLength>0){var newReplyText=newRepliesArrayLength+' ';newReplyText+=newRepliesArrayLength>1?wpdiscuzAjaxObj.wpdiscuz_options.wc_new_replies_button_text:wpdiscuzAjaxObj.wpdiscuz_options.wc_new_reply_button_text;$('.wc_new_reply').html(newReplyText).show();}else{$('.wc_new_reply').hide();}}
$('.wpd-cc-value').html(r.wc_all_comments_count_new);loadLastCommentId=r.loadLastCommentId;}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}
function liveUpdateImmediately(r){if(r.message!==undefined){var commentObject;var message=r.message;for(var i=0;i<message.length;i++){commentObject=message[i];addCommentToTree(commentObject.comment_parent,commentObject.comment_html);}}}
$(document).delegate('.wc-update-on-click','click',function(){var data=new FormData();data.append('action','wpdUpdateOnClick');var clickedButton=$(this);if(clickedButton.hasClass('wc_new_comment')){data.append('newCommentIds',wpdiscuzCommentArray.join());}else{data.append('newCommentIds',wpdiscuzReplyArray.join());}
var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);liveUpdateImmediately(r);if(clickedButton.hasClass('wc_new_comment')){wpdiscuzCommentArray=[];$('.wc_new_comment').hide();}else{wpdiscuzReplyArray=[];$('.wc_new_reply').hide();}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});$(document).delegate('.wpdiscuz-readmore','click',function(){var uniqueId=getUniqueID($(this));var commentId=getCommentID(uniqueId);var data=new FormData();data.append('action','wpdReadMore');data.append('commentId',commentId);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);if(r.code){$('#comment-'+commentId+' .wc-comment-text').html(' '+r.message);$('#wpdiscuz-readmore-'+uniqueId).remove();}
runCallbacks(r);}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});wpdiscuzAjaxObj.setCommentMessage=function(field,messageKey,message,isFormError){var msgContainer;var parentContainer;if(isFormError){parentContainer=field.parents('.wc-form-wrapper');}else{parentContainer=field.closest('.wc-comment');}
msgContainer=parentContainer.children('.wpdiscuz-comment-message');msgContainer.removeClass();msgContainer.addClass('wpdiscuz-comment-message');msgContainer.addClass(messageKey);msgContainer.html(message);msgContainer.show().delay(4000).fadeOut(1000,function(){msgContainer.removeClass();msgContainer.addClass('wpdiscuz-comment-message');msgContainer.html('');});}
function cloneSecondaryForm(field){var uniqueId=getUniqueID(field,0);$('#wpdiscuz_form_anchor-'+uniqueId).before(replaceUniqueId(uniqueId));var secondaryFormWrapper=$('#wc-secondary-form-wrapper-'+uniqueId);secondaryFormWrapper.slideToggle(enableDropAnimation,function(){field.addClass('wpdiscuz-clonned');});changeCaptchaImage($('.wc_captcha_refresh_img',secondaryFormWrapper));}
function replaceUniqueId(uniqueId){var secondaryForm=$('#wpdiscuz_hidden_secondary_form').html();return secondaryForm.replace(/wpdiscuzuniqueid/g,uniqueId);}
function getUniqueID(field,isMain){var fieldID='';if(isMain){fieldID=field.parents('.wc-main-form-wrapper').attr('id');}else{fieldID=field.parents('.wc-comment').attr('id');}
var uniqueID=fieldID.substring(fieldID.lastIndexOf('-')+1);return uniqueID;}
function getCommentID(uniqueID){return uniqueID.substring(0,uniqueID.indexOf('_'));}
function getLastParentID(){return $('.wc-load-more-link').attr("data-lastparentid");}
function setLastParentID(lastParentID){$('.wc-load-more-link').attr("data-lastparentid",lastParentID);if(commentListLoadType!=2){$('.wpdiscuz-comment-pagination').show();}}
function getCommentDepth(field){var fieldClasses=field.attr('class');var classesArray=fieldClasses.split(' ');var depth='';$.each(classesArray,function(index,value){if('wc_comment_level'===getParentDepth(value,false)){depth=getParentDepth(value,true);}});return parseInt(depth)+1;}
function getParentDepth(depthValue,isNumberPart){var depth='';if(isNumberPart){depth=depthValue.substring(depthValue.indexOf('-')+1);}else{depth=depthValue.substring(0,depthValue.indexOf('-'));}
return depth;}
function addCommentToTree(parentId,comment){if(parentId==0){addCommentsAfterSticky(comment);}else{var parentUniqueId=getUniqueID($('#comment-'+parentId),0);$('#wpdiscuz_form_anchor-'+parentUniqueId).after(comment);}}
function getVisibleCommentIds(){var uniqueId;var commentId;var visibleCommentIds='';$('.wc-comment-right').each(function(){uniqueId=getUniqueID($(this),0);commentId=getCommentID(uniqueId);visibleCommentIds+=commentId+',';});return visibleCommentIds;}
function loginButtonsClone(){if($('.wc_social_plugin_wrapper .wp-social-login-provider-list').length){$('.wc_social_plugin_wrapper .wp-social-login-provider-list').clone().prependTo('#wpdiscuz_hidden_secondary_form > .wc-form-wrapper >  .wc-secondary-forms-social-content');}else if($('.wc_social_plugin_wrapper .the_champ_login_container').length){$('.wc_social_plugin_wrapper .the_champ_login_container').clone().prependTo('#wpdiscuz_hidden_secondary_form > .wc-form-wrapper >  .wc-secondary-forms-social-content');}else if($('.wc_social_plugin_wrapper .social_connect_form').length){$('.wc_social_plugin_wrapper .social_connect_form').clone().prependTo('#wpdiscuz_hidden_secondary_form > .wc-form-wrapper >  .wc-secondary-forms-social-content');}else if($('.wc_social_plugin_wrapper .oneall_social_login_providers').length){$('.wc_social_plugin_wrapper .oneall_social_login .oneall_social_login_providers').clone().prependTo('#wpdiscuz_hidden_secondary_form > .wc-form-wrapper >  .wc-secondary-forms-social-content');}}
function wpdiscuzReset(){$('.wpdiscuz_reset').val("");}
function setTextareaCharCount(elem,count){if(commentTextMaxLength!=null){var currLength=elem.val().length;var textareaWrap=elem.parents('.wc_comm_form');var charCountDiv=$('.commentTextMaxLength',textareaWrap);var left=commentTextMaxLength-currLength;if(left<=10){charCountDiv.addClass('left10');}else{charCountDiv.removeClass('left10');}
charCountDiv.html(left);}}
function wpdValidateFieldRequired(form){var fieldsGroup=form.find('.wpd-required-group');$.each(fieldsGroup,function(){$('input',this).removeAttr('required');var checkedFields=$('input:checked',this);if(checkedFields.length===0){$('input',$(this)).attr('required','required');}else{$('.wpd-field-invalid',this).remove();}});if(wpdiscuzRecaptcha&&$('input[name=wpdiscuz_recaptcha]',form).length&&!$('input[name=wpdiscuz_recaptcha]',form).val().length){wpdGoogleRecaptchaValid=false;$('.wpdiscuz-recaptcha',form).css('border','1px solid red');}else if(wpdiscuzRecaptcha){$('.wpdiscuz-recaptcha',form).css('border','none');}}
$(document).delegate('.wpd-required-group','change',function(){if($('input:checked',this).length!==0){$('input',$(this)).removeAttr('required');}else{$('input',$(this)).attr('required','required');}});$(document).delegate('.wpdiscuz-spoiler','click',function(){$(this).next().slideToggle();if($(this).hasClass('wpdiscuz-spoiler-closed')){$(this).parents('.wpdiscuz-spoiler-wrap').find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');}else{$(this).parents('.wpdiscuz-spoiler-wrap').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');}
$(this).toggleClass('wpdiscuz-spoiler-closed');});function wpdiscuzShowReplies(uniqueId){var commentId=getCommentID(uniqueId);var data=new FormData();data.append('action','wpdShowReplies');data.append('commentId',commentId);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);if(r.code==1){$('#wc-comm-'+uniqueId).replaceWith(r.data);$('#wc-comm-'+uniqueId+' .wc-toggle .fas').removeClass('fa-chevron-down').addClass('fa-chevron-up').removeClass('wpdiscuz-show-replies').attr('title',wpdiscuzAjaxObj.wpdiscuz_options.wc_hide_replies_text);var toggle=$('#wc-comm-'+uniqueId+' .wc-toggle');$('.wpdiscuz-children-button-text',toggle).text(wpdiscuzAjaxObj.wpdiscuz_options.wc_hide_replies_text);runCallbacks(r);}else{console.log('Unknown error occured');}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});}
$(document).delegate('.wc_stick_btn','click',function(){var btn=$(this);var uniqueId=getUniqueID(btn,0);var commentId=getCommentID(uniqueId);var data=new FormData();data.append('action','wpdStickComment');data.append('commentId',commentId);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);if(r.code==1){$('.wc_stick_text',btn).text(r.data);setTimeout(function(){location.reload(true);},1000);}else{console.log('Comment not updated');}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});$(document).delegate('.wc_close_btn','click',function(){var btn=$(this);var uniqueId=getUniqueID(btn,0);var commentId=getCommentID(uniqueId);var data=new FormData();data.append('action','wpdCloseThread');data.append('commentId',commentId);var ajax=isNativeAjaxEnabled?getAjaxObj(true,data):getCustomAjaxObj(true,data);ajax.done(function(response){try{var r=$.parseJSON(response);if(r.code==1){$('.wc_close_btn',btn).text(r.data);setTimeout(function(){location.reload(true);},1000);}else{console.log('Comment not updated');}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});$(document).delegate('.wc_main_comm_form .wc_comment','focus',function(){$(this).parents('.wpdiscuz-textarea-wrap').find('.wc-field-avatararea').hide('fast');$(this).animate({'padding':'15px','font-size':'14px'},'fast');});$(document).delegate('.wc_main_comm_form .wc_comment','blur',function(){if(!$(this).val()){$(this).removeAttr("style");$(this).parents('.wpdiscuz-textarea-wrap').find('.wc-field-avatararea').show("fast");}});$(document).delegate('.wpd-stat-reacted','click',function(){var btn=$(this);$('.fas',btn).addClass('fa-pulse fa-spinner');var data=new FormData();data.append('action','wpdMostReactedComment');var ajax=isNativeAjaxEnabled?getAjaxObj(false,data):getCustomAjaxObj(false,data);ajax.done(function(response){try{$('.fas',btn).removeClass('fa-pulse fa-spinner');var r=$.parseJSON(response);if(r.code){var scrollToSelector='.wc-thread-wrapper';if($('#comment-'+r.commentId).length){scrollToSelector='#comment-'+r.commentId;}else if($('#comment-'+r.parentCommentID).length){var parentComment=$('#comment-'+r.parentCommentID);$('.wc-toggle',parentComment).trigger('click');}else{$('.wc-thread-wrapper').prepend(r.message);scrollToSelector='#comment-'+r.commentId;}
runCallbacks(r);$('html, body').animate({scrollTop:$(scrollToSelector).offset().top-32},1000);}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});$(document).delegate('.wpd-stat-hot','click',function(){var btn=$(this);$('.fab',btn).addClass('fas fa-pulse fa-spinner');var data=new FormData();data.append('action','wpdHottestThread');var ajax=isNativeAjaxEnabled?getAjaxObj(false,data):getCustomAjaxObj(false,data);ajax.done(function(response){try{$('.fab',btn).removeClass('fas fa-pulse fa-spinner');var r=$.parseJSON(response);if(r.code){var scrollToSelector='.wc-thread-wrapper';if($('#comment-'+r.commentId).length){scrollToSelector='#comment-'+r.commentId;}else{$('.wc-thread-wrapper').prepend(r.message);scrollToSelector='#comment-'+r.commentId;}
var comment=$('#comment-'+r.commentId);var toggle=$('.wc-toggle',comment);var icon=$('.fas',toggle);if(icon.hasClass('wpdiscuz-show-replies')&&isLoadOnlyParentComments){toggle.trigger('click');}
runCallbacks(r);$('html, body').animate({scrollTop:$(scrollToSelector).offset().top-32},1000);}}catch(e){console.log(e);}
$('.wpdiscuz-loading-bar').fadeOut(250);});});function addAgreementInCookie(wcForm){$('.wpd-agreement-checkbox',wcForm).each(function(){if($(this).hasClass('wpd_agreement_hide')&&isCookiesEnabled&&$(this).prop('checked')){Cookies.set($(this).attr('name')+'_'+wpdiscuzCookiehash,1,{expires:30,path:'/'});$('input[name='+$(this).attr('name')+']').each(function(){wpdiscuzAgreementFields.push($(this));});}});}
function deleteAgreementFields(){if(wpdiscuzAgreementFields.length){wpdiscuzAgreementFields.forEach(function(item){item.parents('.wpd-field-checkbox').remove();});wpdiscuzAgreementFields=[];}}
$(document).delegate('.wc-follow-link.wc_not_clicked','click',function(){var btn=$(this);btn.removeClass('wc_not_clicked');$('.fas',btn).addClass('fa-pulse fa-spinner');var uniqueId=getUniqueID(btn,0);var commentId=getCommentID(uniqueId);var data=new FormData();data.append('action','wpdFollowUser');data.append('commentId',commentId);var ajax=isNativeAjaxEnabled?getAjaxObj(false,data):getCustomAjaxObj(false,data);ajax.done(function(response){btn.addClass('wc_not_clicked');if(response.length){try{var r=$.parseJSON(response);if(r.code!==''){var message=wpdiscuzAjaxObj.wpdiscuz_options[r.code];wpdiscuzAjaxObj.setCommentMessage(btn,r.code,message,false);btn.removeClass('wc-follow-active');if(r.data.followTip){$('wpdtip',btn).html(r.data.followTip);}
if(r.data&&r.data.followClass){btn.addClass(r.data.followClass);}}}catch(e){console.log(e);}}
$('.fas',btn).removeClass('fa-pulse fa-spinner');});});function addCommentsAfterSticky(comment){if($('.wc-sticky-comment').last()[0]){$(comment).insertAfter($('.wc-sticky-comment').last()[0]);}else{$('.wc-thread-wrapper').prepend(comment);}}
function showHideNotificationType(current){if(current){if(!current.prop('required')){if(current.val()){current.parents('form').find('[name=wpdiscuz_notification_type]').parent().css('display','inline-block');}else{current.parents('form').find('[name=wpdiscuz_notification_type]').parent().css('display','none');}}}else{$.each($('.wc_email'),function(i,val){var obj=$(val);if(!obj.prop('required')){if(obj.val()){obj.parents('form').find('[name=wpdiscuz_notification_type]').parent().css('display','inline-block');}else{obj.parents('form').find('[name=wpdiscuz_notification_type]').parent().css('display','none');}}});}}
showHideNotificationType();$(document).delegate('.wc_email','keyup',function(){showHideNotificationType($(this));});$(document).delegate('#wpdiscuz-subscribe-form','submit',function(e){$('<input />').attr('type','hidden').attr('name',"ahk").attr('value',wpdiscuzAjaxObj.wpdiscuz_options.ahk).appendTo('#wpdiscuz-subscribe-form');return true;});function runCallbacks(r,commentID,voteType,wcForm){if(r.callbackFunctions){$.each(r.callbackFunctions,function(i){if(typeof wpdiscuzAjaxObj[r.callbackFunctions[i]]==="function"){wpdiscuzAjaxObj[r.callbackFunctions[i]](r.code,commentID,voteType,wcForm);}else{console.log(r.callbackFunctions[i]+" is not a function");}});}}
function getAjaxObj(isShowTopLoading,data){if(isShowTopLoading){$('.wpdiscuz-loading-bar').show();}
data.append('postId',wpdiscuzPostId);return $.ajax({type:'POST',url:wpdiscuzAjaxObj.url,data:data,contentType:false,processData:false,});}
function getCustomAjaxObj(isShowTopLoading,data){if(isShowTopLoading){$('.wpdiscuz-loading-bar').show();}
data.append('postId',wpdiscuzPostId);return $.ajax({type:'POST',url:wpdiscuzAjaxObj.customAjaxUrl,data:data,contentType:false,processData:false,});}});
;jQuery(document).ready(function($){var refreshAfterDeleting=0;var isNativeAjaxEnabled=wpdiscuzAjaxObj.wpdiscuz_options.isNativeAjaxEnabled;$(document).delegate('.wpd-info,.wpd-page-link,.wpd-delete-content,.wpd-user-email-delete-links','click',function(e){e.preventDefault();});$(document).delegate('.wpd-info.wpd-not-clicked','click',function(e){var btn=$(this);btn.removeClass('wpd-not-clicked');var data=new FormData();data.append('action','wpdGetInfo');wpdFullInfo(btn,data);return false;});function wpdFullInfo(btn,data){var icon=$('.fas',btn);var oldClass=icon.attr('class');icon.removeClass();icon.addClass('fas fa-pulse fa-spinner');var ajax=isNativeAjaxEnabled?getUCAjaxObj(false,data):getUCACustomAjaxObj(false,data);ajax.done(function(response){btn.addClass('wpd-not-clicked');icon.removeClass();icon.addClass(oldClass);if(response){$('#wpdUserContentInfo').html(response);$('#wpdUserContentInfo ul.wpd-list .wpd-list-item:first-child').addClass('wpd-active');$('#wpdUserContentInfo div.wpd-content .wpd-content-item:first-child').addClass('wpd-active');if(!($('#wpdUserContentInfo').is(':visible'))){$('#wpdUserContentInfoAnchor').trigger('click');}}});}
$(document).delegate('.wpd-list-item','click',function(){var relValue=$('input.wpd-rel',this).val();$('#wpdUserContentInfo .wpd-list-item').removeClass('wpd-active');$('#wpdUserContentInfo .wpd-content-item').removeClass('wpd-active');$(this).addClass('wpd-active');$('#wpdUserContentInfo #'+relValue).addClass('wpd-active');});$(document).delegate('.wpd-page-link.wpd-not-clicked','click',function(e){var btn=$(this);btn.removeClass('wpd-not-clicked');var goToPage=btn.data('wpd-page');var action=$('.wpd-active .wpd-pagination .wpd-action').val();var data=new FormData();data.append('action',action);data.append('page',goToPage);var ajax=isNativeAjaxEnabled?getUCAjaxObj(true,data):getUCACustomAjaxObj(true,data);ajax.done(function(response){btn.addClass('wpd-not-clicked');if(response){$('.wpd-content-item.wpd-active').html(response);}
$('.wpdiscuz-loading-bar').hide();});});$(document).delegate('.wpd-delete-content.wpd-not-clicked','click',function(){var btn=$(this);var id=parseInt(btn.data('wpd-content-id'));if(!isNaN(id)){var action=btn.data('wpd-delete-action');if(action=='wpdDeleteComment'&&!confirm(wpdiscuzUCObj.msgConfirmDeleteComment)){return false;}else if(action=='wpdCancelSubscription'&&!confirm(wpdiscuzUCObj.msgConfirmCancelSubscription)){return false;}else if(action=='wpdCancelFollow'&&!confirm(wpdiscuzUCObj.msgConfirmCancelFollow)){return false;}
var icon=$('i',btn);var oldClass=icon.attr('class');var goToPage=$('.wpd-wrapper .wpd-page-number').val();var childCount=$('.wpd-content-item.wpd-active').children('.wpd-item').length;btn.removeClass('wpd-not-clicked');icon.removeClass().addClass('fas fa-pulse fa-spinner');if(childCount==1&&goToPage>0){goToPage=goToPage-1;}
var data=new FormData();data.append('id',id);data.append('page',goToPage);data.append('action',action);var ajax=isNativeAjaxEnabled?getUCAjaxObj(false,data):getUCACustomAjaxObj(false,data);ajax.done(function(response){btn.addClass('wpd-not-clicked');icon.removeClass().addClass(oldClass);$('.wpd-content-item.wpd-active').html(response);if(action=='wpdDeleteComment'||action=='wpdCancelFollow'){refreshAfterDeleting=1;}});}});$(document).delegate('[data-lity-close]','click',function(e){if($(e.target).is('[data-lity-close]')){if(refreshAfterDeleting){window.location.reload(true);}}});$(document).delegate('.wpd-user-email-delete-links.wpd-not-clicked','click',function(){var btn=$(this);btn.removeClass('wpd-not-clicked');$('.wpd-loading',btn).addClass('wpd-show');var data=new FormData();data.append('action','wpdEmailDeleteLinks');var ajax=isNativeAjaxEnabled?getUCAjaxObj(false,data):getUCACustomAjaxObj(false,data);ajax.done(function(response){btn.addClass('wpd-not-clicked');$('[data-lity-close]',window.parent.document).trigger('click');});});$(document).delegate('.wpd-user-settings-button.wpd-not-clicked','click',function(){var btn=$(this);btn.removeClass('wpd-not-clicked');var guestAction=btn.data('wpd-delete-action');console.log(guestAction);if(guestAction!=='deleteCookies'){btn.find('.wpd-loading').addClass('wpd-show');var data=new FormData();data.append('action','wpdGuestAction');data.append('guestAction',guestAction);var ajax=isNativeAjaxEnabled?getUCAjaxObj(false,data):getUCACustomAjaxObj(false,data);ajax.done(function(response){btn.addClass('wpd-not-clicked');btn.find('.wpd-loading').removeClass('wpd-show');try{var r=$.parseJSON(response);btn.after(r.message);var messageWrap=btn.next('.wpd-guest-action-message');messageWrap.fadeIn(100).fadeOut(7000,function(){messageWrap.remove();if(parseInt(r.code)===1){btn.parent().remove();guestActionDeleteCookieClass();}});}catch(e){console.log(e);}});}else{wpdDeleteAllCookies();}});function guestActionDeleteCookieClass(){if(!$('.wpd-delete-all-comments').length&&!$('.wpd-delete-all-subscriptions').length){$('.wpd-delete-all-cookies').parent().addClass('wpd-show');}}
function wpdDeleteAllCookies(){var wpdCookies=document.cookie.split(";");for(var i=0;i<wpdCookies.length;i++){var wpdCookie=wpdCookies[i];var eqPos=wpdCookie.indexOf("=");var name=eqPos>-1?wpdCookie.substr(0,eqPos):wpdCookie;Cookies.remove(name.trim());}
Cookies.remove(wpdiscuzAjaxObj.wpdiscuz_options.lastVisitKey,{path:window.location});location.reload(true);}
function getUCAjaxObj(isShowTopLoading,data){if(isShowTopLoading){$('.wpdiscuz-loading-bar').show();}
data.append('postId',wpdiscuzAjaxObj.wpdiscuz_options.wc_post_id);return $.ajax({type:'POST',url:wpdiscuzAjaxObj.url,data:data,contentType:false,processData:false,});}
function getUCACustomAjaxObj(isShowTopLoading,data){if(isShowTopLoading){$('.wpdiscuz-loading-bar').show();}
data.append('postId',wpdiscuzAjaxObj.wpdiscuz_options.wc_post_id);return $.ajax({type:'POST',url:wpdiscuzAjaxObj.customAjaxUrl,data:data,contentType:false,processData:false,});}});
/*! Lity - v2.2.2 - 2017-07-17
 * http://sorgalla.com/lity/
 * Copyright (c) 2015-2017 Jan Sorgalla; Licensed MIT */
(function(window,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function($){return factory(window,$);});}else if(typeof module==='object'&&typeof module.exports==='object'){module.exports=factory(window,require('jquery'));}else{window.lity=factory(window,window.jQuery||window.Zepto);}}(typeof window!=="undefined"?window:this,function(window,$){'use strict';var document=window.document;var _win=$(window);var _deferred=$.Deferred;var _html=$('html');var _instances=[];var _attrAriaHidden='aria-hidden';var _dataAriaHidden='lity-'+_attrAriaHidden;var _focusableElementsSelector='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';var _defaultOptions={esc:true,handler:null,handlers:{image:imageHandler,inline:inlineHandler,youtube:youtubeHandler,vimeo:vimeoHandler,googlemaps:googlemapsHandler,facebookvideo:facebookvideoHandler,iframe:iframeHandler},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'};var _imageRegexp=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;var _youtubeRegex=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;var _vimeoRegex=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/;var _googlemapsRegex=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i;var _facebookvideoRegex=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i;var _transitionEndEvent=(function(){var el=document.createElement('div');var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames){if(el.style[name]!==undefined){return transEndEventNames[name];}}
return false;})();function transitionEnd(element){var deferred=_deferred();if(!_transitionEndEvent||!element.length){deferred.resolve();}else{element.one(_transitionEndEvent,deferred.resolve);setTimeout(deferred.resolve,500);}
return deferred.promise();}
function settings(currSettings,key,value){if(arguments.length===1){return $.extend({},currSettings);}
if(typeof key==='string'){if(typeof value==='undefined'){return typeof currSettings[key]==='undefined'?null:currSettings[key];}
currSettings[key]=value;}else{$.extend(currSettings,key);}
return this;}
function parseQueryParams(params){var pairs=decodeURI(params.split('#')[0]).split('&');var obj={},p;for(var i=0,n=pairs.length;i<n;i++){if(!pairs[i]){continue;}
p=pairs[i].split('=');obj[p[0]]=p[1];}
return obj;}
function appendQueryParams(url,params){return url+(url.indexOf('?')>-1?'&':'?')+$.param(params);}
function transferHash(originalUrl,newUrl){var pos=originalUrl.indexOf('#');if(-1===pos){return newUrl;}
if(pos>0){originalUrl=originalUrl.substr(pos);}
return newUrl+originalUrl;}
function error(msg){return $('<span class="lity-error"/>').append(msg);}
function imageHandler(target,instance){var desc=(instance.opener()&&instance.opener().data('lity-desc'))||'Image with no description';var img=$('<img src="'+target+'" alt="'+desc+'"/>');var deferred=_deferred();var failed=function(){deferred.reject(error('Failed loading image'));};img.on('load',function(){if(this.naturalWidth===0){return failed();}
deferred.resolve(img);}).on('error',failed);return deferred.promise();}
imageHandler.test=function(target){return _imageRegexp.test(target);};function inlineHandler(target,instance){var el,placeholder,hasHideClass;try{el=$(target);}catch(e){return false;}
if(!el.length){return false;}
placeholder=$('<i style="display:none !important"/>');hasHideClass=el.hasClass('lity-hide');instance.element().one('lity:remove',function(){placeholder.before(el).remove();if(hasHideClass&&!el.closest('.lity-content').length){el.addClass('lity-hide');}});return el.removeClass('lity-hide').after(placeholder);}
function youtubeHandler(target){var matches=_youtubeRegex.exec(target);if(!matches){return false;}
return iframeHandler(transferHash(target,appendQueryParams('https://www.youtube'+(matches[2]||'')+'.com/embed/'+matches[4],$.extend({autoplay:1},parseQueryParams(matches[5]||'')))));}
function vimeoHandler(target){var matches=_vimeoRegex.exec(target);if(!matches){return false;}
return iframeHandler(transferHash(target,appendQueryParams('https://player.vimeo.com/video/'+matches[3],$.extend({autoplay:1},parseQueryParams(matches[4]||'')))));}
function facebookvideoHandler(target){var matches=_facebookvideoRegex.exec(target);if(!matches){return false;}
if(0!==target.indexOf('http')){target='https:'+target;}
return iframeHandler(transferHash(target,appendQueryParams('https://www.facebook.com/plugins/video.php?href='+target,$.extend({autoplay:1},parseQueryParams(matches[4]||'')))));}
function googlemapsHandler(target){var matches=_googlemapsRegex.exec(target);if(!matches){return false;}
return iframeHandler(transferHash(target,appendQueryParams('https://www.google.'+matches[3]+'/maps?'+matches[6],{output:matches[6].indexOf('layer=c')>0?'svembed':'embed'})));}
function iframeHandler(target){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+target+'"/></div>';}
function winHeight(){return document.documentElement.clientHeight?document.documentElement.clientHeight*0.9:Math.round(_win.height()*0.9);}
function keydown(e){var current=currentInstance();if(!current){return;}
if(e.keyCode===27&&!!current.options('esc')){current.close();}
if(e.keyCode===9){handleTabKey(e,current);}}
function handleTabKey(e,instance){var focusableElements=instance.element().find(_focusableElementsSelector);var focusedIndex=focusableElements.index(document.activeElement);if(e.shiftKey&&focusedIndex<=0){focusableElements.get(focusableElements.length-1).focus();e.preventDefault();}else if(!e.shiftKey&&focusedIndex===focusableElements.length-1){focusableElements.get(0).focus();e.preventDefault();}}
function resize(){$.each(_instances,function(i,instance){instance.resize();});}
function registerInstance(instanceToRegister){if(1===_instances.unshift(instanceToRegister)){_html.addClass('lity-active');_win.on({resize:resize,keydown:keydown});}
$('body > *').not(instanceToRegister.element()).addClass('lity-hidden').each(function(){var el=$(this);if(undefined!==el.data(_dataAriaHidden)){return;}
el.data(_dataAriaHidden,el.attr(_attrAriaHidden)||null);}).attr(_attrAriaHidden,'true');}
function removeInstance(instanceToRemove){var show;instanceToRemove.element().attr(_attrAriaHidden,'true');if(1===_instances.length){_html.removeClass('lity-active');_win.off({resize:resize,keydown:keydown});}
_instances=$.grep(_instances,function(instance){return instanceToRemove!==instance;});if(!!_instances.length){show=_instances[0].element();}else{show=$('.lity-hidden');}
show.removeClass('lity-hidden').each(function(){var el=$(this),oldAttr=el.data(_dataAriaHidden);if(!oldAttr){el.removeAttr(_attrAriaHidden);}else{el.attr(_attrAriaHidden,oldAttr);}
el.removeData(_dataAriaHidden);});}
function currentInstance(){if(0===_instances.length){return null;}
return _instances[0];}
function factory(target,instance,handlers,preferredHandler){var handler='inline',content;var currentHandlers=$.extend({},handlers);if(preferredHandler&&currentHandlers[preferredHandler]){content=currentHandlers[preferredHandler](target,instance);handler=preferredHandler;}else{$.each(['inline','iframe'],function(i,name){delete currentHandlers[name];currentHandlers[name]=handlers[name];});$.each(currentHandlers,function(name,currentHandler){if(!currentHandler){return true;}
if(currentHandler.test&&!currentHandler.test(target,instance)){return true;}
content=currentHandler(target,instance);if(false!==content){handler=name;return false;}});}
return{handler:handler,content:content||''};}
function Lity(target,options,opener,activeElement){var self=this;var result;var isReady=false;var isClosed=false;var element;var content;options=$.extend({},_defaultOptions,options);element=$(options.template);self.element=function(){return element;};self.opener=function(){return opener;};self.options=$.proxy(settings,self,options);self.handlers=$.proxy(settings,self,options.handlers);self.resize=function(){if(!isReady||isClosed){return;}
content.css('max-height',winHeight()+'px').trigger('lity:resize',[self]);};self.close=function(){if(!isReady||isClosed){return;}
isClosed=true;removeInstance(self);var deferred=_deferred();if(activeElement&&(document.activeElement===element[0]||$.contains(element[0],document.activeElement))){try{activeElement.focus();}catch(e){}}
content.trigger('lity:close',[self]);element.removeClass('lity-opened').addClass('lity-closed');transitionEnd(content.add(element)).always(function(){content.trigger('lity:remove',[self]);element.remove();element=undefined;deferred.resolve();});return deferred.promise();};result=factory(target,self,options.handlers,options.handler);element.attr(_attrAriaHidden,'false').addClass('lity-loading lity-opened lity-'+result.handler).appendTo('body').focus().on('click','[data-lity-close]',function(e){if($(e.target).is('[data-lity-close]')){self.close();}}).trigger('lity:open',[self]);registerInstance(self);$.when(result.content).always(ready);function ready(result){content=$(result).css('max-height',winHeight()+'px');element.find('.lity-loader').each(function(){var loader=$(this);transitionEnd(loader).always(function(){loader.remove();});});element.removeClass('lity-loading').find('.lity-content').empty().append(content);isReady=true;content.trigger('lity:ready',[self]);}}
function wpdLity(target,options,opener){if(!target.preventDefault){opener=$(opener);}else{target.preventDefault();opener=$(this);target=opener.data('lity-target')||opener.attr('rel')||opener.attr('src');}
var instance=new Lity(target,$.extend({},opener.data('lity-options')||opener.data('lity'),options),opener,document.activeElement);if(!target.preventDefault){return instance;}}
wpdLity.version='2.2.2';wpdLity.options=$.proxy(settings,wpdLity,_defaultOptions);wpdLity.handlers=$.proxy(settings,wpdLity,_defaultOptions.handlers);wpdLity.current=currentInstance;$(document).on('click.lity','[data-wpd-lity]',wpdLity);return wpdLity;}));
jQuery(document).ready(function($){var testImg='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D';var img=document.createElement('img')
img.setAttribute('src',testImg);img.addEventListener('load',function(){$('img.quicklatex-auto-format').attr('src',function(){return $(this).attr('src').replace('.png','.svg');})},true);});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return"undefined"==typeof c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";function b(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(b.target).closest("form").ajaxSubmit(c))}function c(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=c.form;if(f.clk=c,"image"===c.type)if("undefined"!=typeof b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var e=/\r?\n/g,f={};f.fileapi=void 0!==a('<input type="file">').get(0).files,f.formdata="undefined"!=typeof window.FormData;var g=!!a.fn.prop;a.fn.attr2=function(){if(!g)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(b,c,e,h){function i(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;d<g;d++)f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}function j(c){for(var d=new FormData,e=0;e<c.length;e++)d.append(c[e].name,c[e].value);if(b.extraData){var f=i(b.extraData);for(e=0;e<f.length;e++)f[e]&&d.append(f[e][0],f[e][1])}b.data=null;var g=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});b.uploadProgress&&(g.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(d/e*100)),b.uploadProgress(a,d,e,c)},!1),c}),g.data=null;var h=g.beforeSend;return g.beforeSend=function(a,c){b.formData?c.data=b.formData:c.data=d,h&&h.call(this,a,c)},a.ajax(g)}function k(c){function e(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){d("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){d("cannot get iframe.contentDocument: "+c),b=a.document}return b}function f(){function b(){try{var a=e(q).readyState;d("state = "+a),a&&"uninitialized"===a.toLowerCase()&&setTimeout(b,50)}catch(c){d("Server abort: ",c," (",c.name,")"),h(C),w&&clearTimeout(w),w=void 0}}var c=o.attr2("target"),f=o.attr2("action"),g="multipart/form-data",i=o.attr("enctype")||o.attr("encoding")||g;x.setAttribute("target",n),l&&!/post/i.test(l)||x.setAttribute("method","POST"),f!==k.url&&x.setAttribute("action",k.url),k.skipEncodingOverride||l&&!/post/i.test(l)||o.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),k.timeout&&(w=setTimeout(function(){v=!0,h(B)},k.timeout));var j=[];try{if(k.extraData)for(var m in k.extraData)k.extraData.hasOwnProperty(m)&&(a.isPlainObject(k.extraData[m])&&k.extraData[m].hasOwnProperty("name")&&k.extraData[m].hasOwnProperty("value")?j.push(a('<input type="hidden" name="'+k.extraData[m].name+'">',z).val(k.extraData[m].value).appendTo(x)[0]):j.push(a('<input type="hidden" name="'+m+'">',z).val(k.extraData[m]).appendTo(x)[0]));k.iframeTarget||p.appendTo(A),q.attachEvent?q.attachEvent("onload",h):q.addEventListener("load",h,!1),setTimeout(b,15);try{x.submit()}catch(r){var s=document.createElement("form").submit;s.apply(x)}}finally{x.setAttribute("action",f),x.setAttribute("enctype",i),c?x.setAttribute("target",c):o.removeAttr("target"),a(j).remove()}}function h(b){if(!r.aborted&&!H){if(G=e(q),G||(d("cannot access response document"),b=C),b===B&&r)return r.abort("timeout"),void y.reject(r,"timeout");if(b===C&&r)return r.abort("server abort"),void y.reject(r,"error","server abort");if(G&&G.location.href!==k.iframeSrc||v){q.detachEvent?q.detachEvent("onload",h):q.removeEventListener("load",h,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"===k.dataType||G.XMLDocument||a.isXMLDoc(G);if(d("isXml="+g),!g&&window.opera&&(null===G.body||!G.body.innerHTML)&&--I)return d("requeing onLoad callback, DOM not available"),void setTimeout(h,250);var i=G.body?G.body:G.documentElement;r.responseText=i?i.innerHTML:null,r.responseXML=G.XMLDocument?G.XMLDocument:G,g&&(k.dataType="xml"),r.getResponseHeader=function(a){var b={"content-type":k.dataType};return b[a.toLowerCase()]},i&&(r.status=Number(i.getAttribute("status"))||r.status,r.statusText=i.getAttribute("statusText")||r.statusText);var j=(k.dataType||"").toLowerCase(),l=/(json|script|text)/.test(j);if(l||k.textarea){var n=G.getElementsByTagName("textarea")[0];if(n)r.responseText=n.value,r.status=Number(n.getAttribute("status"))||r.status,r.statusText=n.getAttribute("statusText")||r.statusText;else if(l){var o=G.getElementsByTagName("pre")[0],s=G.getElementsByTagName("body")[0];o?r.responseText=o.textContent?o.textContent:o.innerText:s&&(r.responseText=s.textContent?s.textContent:s.innerText)}}else"xml"===j&&!r.responseXML&&r.responseText&&(r.responseXML=J(r.responseText));try{F=L(r,j,k)}catch(t){f="parsererror",r.error=c=t||f}}catch(t){d("error caught: ",t),f="error",r.error=c=t||f}r.aborted&&(d("upload aborted"),f=null),r.status&&(f=r.status>=200&&r.status<300||304===r.status?"success":"error"),"success"===f?(k.success&&k.success.call(k.context,F,"success",r),y.resolve(r.responseText,"success",r),m&&a.event.trigger("ajaxSuccess",[r,k])):f&&("undefined"==typeof c&&(c=r.statusText),k.error&&k.error.call(k.context,r,f,c),y.reject(r,"error",c),m&&a.event.trigger("ajaxError",[r,k,c])),m&&a.event.trigger("ajaxComplete",[r,k]),m&&!--a.active&&a.event.trigger("ajaxStop"),k.complete&&k.complete.call(k.context,r,f),H=!0,k.timeout&&clearTimeout(w),setTimeout(function(){k.iframeTarget?p.attr("src",k.iframeSrc):p.remove(),r.responseXML=null},100)}}}var i,j,k,m,n,p,q,r,t,u,v,w,x=o[0],y=a.Deferred();if(y.abort=function(a){r.abort(a)},c)for(j=0;j<s.length;j++)i=a(s[j]),g?i.prop("disabled",!1):i.removeAttr("disabled");k=a.extend(!0,{},a.ajaxSettings,b),k.context=k.context||k,n="jqFormIO"+(new Date).getTime();var z=x.ownerDocument,A=o.closest("body");if(k.iframeTarget?(p=a(k.iframeTarget,z),u=p.attr2("name"),u?n=u:p.attr2("name",n)):(p=a('<iframe name="'+n+'" src="'+k.iframeSrc+'" />',z),p.css({position:"absolute",top:"-1000px",left:"-1000px"})),q=p[0],r={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{q.contentWindow.document.execCommand&&q.contentWindow.document.execCommand("Stop")}catch(e){}p.attr("src",k.iframeSrc),r.error=c,k.error&&k.error.call(k.context,r,c,b),m&&a.event.trigger("ajaxError",[r,k,c]),k.complete&&k.complete.call(k.context,r,c)}},m=k.global,m&&0===a.active++&&a.event.trigger("ajaxStart"),m&&a.event.trigger("ajaxSend",[r,k]),k.beforeSend&&k.beforeSend.call(k.context,r,k)===!1)return k.global&&a.active--,y.reject(),y;if(r.aborted)return y.reject(),y;t=x.clk,t&&(u=t.name,u&&!t.disabled&&(k.extraData=k.extraData||{},k.extraData[u]=t.value,"image"===t.type&&(k.extraData[u+".x"]=x.clk_x,k.extraData[u+".y"]=x.clk_y)));var B=1,C=2,D=a("meta[name=csrf-token]").attr("content"),E=a("meta[name=csrf-param]").attr("content");E&&D&&(k.extraData=k.extraData||{},k.extraData[E]=D),k.forceSync?f():setTimeout(f,10);var F,G,H,I=50,J=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!==b.documentElement.nodeName?b:null},K=a.parseJSON||function(a){return window.eval("("+a+")")},L=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f=("xml"===c||!c)&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&(("json"===c||!c)&&e.indexOf("json")>=0?g=K(g):("script"===c||!c)&&e.indexOf("javascript")>=0&&a.globalEval(g)),g};return y}if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var l,m,n,o=this;"function"==typeof b?b={success:b}:"string"==typeof b||b===!1&&arguments.length>0?(b={url:b,data:c,dataType:e},"function"==typeof h&&(b.success=h)):"undefined"==typeof b&&(b={}),l=b.method||b.type||this.attr2("method"),m=b.url||this.attr2("action"),n="string"==typeof m?a.trim(m):"",n=n||window.location.href||"",n&&(n=(n.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:n,success:a.ajaxSettings.success,type:l||a.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);var p={};if(this.trigger("form-pre-serialize",[this,b,p]),p.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(b.beforeSerialize&&b.beforeSerialize(this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var q=b.traditional;"undefined"==typeof q&&(q=a.ajaxSettings.traditional);var r,s=[],t=this.formToArray(b.semantic,s,b.filtering);if(b.data){var u=a.isFunction(b.data)?b.data(t):b.data;b.extraData=u,r=a.param(u,q)}if(b.beforeSubmit&&b.beforeSubmit(t,this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[t,this,b,p]),p.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var v=a.param(t,q);r&&(v=v?v+"&"+r:r),"GET"===b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+v,b.data=null):b.data=v;var w=[];if(b.resetForm&&w.push(function(){o.resetForm()}),b.clearForm&&w.push(function(){o.clearForm(b.includeHidden)}),!b.dataType&&b.target){var x=b.success||function(){};w.push(function(c,d,e){var f=arguments,g=b.replaceTarget?"replaceWith":"html";a(b.target)[g](c).each(function(){x.apply(this,f)})})}else b.success&&(a.isArray(b.success)?a.merge(w,b.success):w.push(b.success));if(b.success=function(a,c,d){for(var e=b.context||this,f=0,g=w.length;f<g;f++)w[f].apply(e,[a,c,d||o,o])},b.error){var y=b.error;b.error=function(a,c,d){var e=b.context||this;y.apply(e,[a,c,d,o])}}if(b.complete){var z=b.complete;b.complete=function(a,c){var d=b.context||this;z.apply(d,[a,c,o])}}var A=a("input[type=file]:enabled",this).filter(function(){return""!==a(this).val()}),B=A.length>0,C="multipart/form-data",D=o.attr("enctype")===C||o.attr("encoding")===C,E=f.fileapi&&f.formdata;d("fileAPI :"+E);var F,G=(B||D)&&!E;b.iframe!==!1&&(b.iframe||G)?b.closeKeepAlive?a.get(b.closeKeepAlive,function(){F=k(t)}):F=k(t):F=(B||D)&&E?j(t):a.ajax(b),o.removeData("jqxhr").data("jqxhr",F);for(var H=0;H<s.length;H++)s[H]=null;return this.trigger("form-submit-notify",[this,b]),this},a.fn.ajaxForm=function(e,f,g,h){if(("string"==typeof e||e===!1&&arguments.length>0)&&(e={url:e,data:f,dataType:g},"function"==typeof h&&(e.success=h)),e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!a.isReady&&i.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(i.s,i.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().on("submit.form-plugin",e,b).on("click.form-plugin",e,c)},a.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b,c,d){var e=[];if(0===this.length)return e;var g,h=this[0],i=this.attr("id"),j=b||"undefined"==typeof h.elements?h.getElementsByTagName("*"):h.elements;if(j&&(j=a.makeArray(j)),i&&(b||/(Edge|Trident)\//.test(navigator.userAgent))&&(g=a(':input[form="'+i+'"]').get(),g.length&&(j=(j||[]).concat(g))),!j||!j.length)return e;a.isFunction(d)&&(j=a.map(j,d));var k,l,m,n,o,p,q;for(k=0,p=j.length;k<p;k++)if(o=j[k],m=o.name,m&&!o.disabled)if(b&&h.clk&&"image"===o.type)h.clk===o&&(e.push({name:m,value:a(o).val(),type:o.type}),e.push({name:m+".x",value:h.clk_x},{name:m+".y",value:h.clk_y}));else if(n=a.fieldValue(o,!0),n&&n.constructor===Array)for(c&&c.push(o),l=0,q=n.length;l<q;l++)e.push({name:m,value:n[l]});else if(f.fileapi&&"file"===o.type){c&&c.push(o);var r=o.files;if(r.length)for(l=0;l<r.length;l++)e.push({name:m,value:r[l],type:o.type});else e.push({name:m,value:"",type:o.type})}else null!==n&&"undefined"!=typeof n&&(c&&c.push(o),e.push({name:m,value:n,type:o.type,required:o.required}));if(!b&&h.clk){var s=a(h.clk),t=s[0];m=t.name,m&&!t.disabled&&"image"===t.type&&(e.push({name:m,value:s.val()}),e.push({name:m+".x",value:h.clk_x},{name:m+".y",value:h.clk_y}))}return e},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor===Array)for(var f=0,g=e.length;f<g;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;d<e;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor===Array&&!g.length||(g.constructor===Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,f=b.type,g=b.tagName.toLowerCase();if("undefined"==typeof c&&(c=!0),c&&(!d||b.disabled||"reset"===f||"button"===f||("checkbox"===f||"radio"===f)&&!b.checked||("submit"===f||"image"===f)&&b.form&&b.form.clk!==b||"select"===g&&b.selectedIndex===-1))return null;if("select"===g){var h=b.selectedIndex;if(h<0)return null;for(var i=[],j=b.options,k="select-one"===f,l=k?h+1:j.length,m=k?h:0;m<l;m++){var n=j[m];if(n.selected&&!n.disabled){var o=n.value;if(o||(o=n.attributes&&n.attributes.value&&!n.attributes.value.specified?n.text:n.value),k)return o;i.push(o)}}return i}return a(b).val().replace(e,"\r\n")},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"===e?this.value="":"checkbox"===d||"radio"===d?this.checked=!1:"select"===e?this.selectedIndex=-1:"file"===d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){var b=a(this),c=this.tagName.toLowerCase();switch(c){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var d=b.parents("select");return d.length&&d[0].multiple?"option"===c?this.selected=this.defaultSelected:b.find("option").resetForm():d.resetForm(),!0;case"select":return b.find("option").each(function(a){if(this.selected=this.defaultSelected,this.defaultSelected&&!b[0].multiple)return b[0].selectedIndex=a,!1}),!0;case"label":var e=a(b.attr("for")),f=b.find("input,select,textarea");return e[0]&&f.unshift(e[0]),f.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return b.find("form,input,label,select,textarea").resetForm(),!0}})},a.fn.enable=function(a){return"undefined"==typeof a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return"undefined"==typeof b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"===c||"radio"===c)this.checked=b;else if("option"===this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"===d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1});
;(function($,window,document,undefined){var INSTANT_SEARCH={is_on_request:false,delay_search:null,keywords:'',form_template:'<form class="vw-instant-search__panel" method="get" autocomplete="off"> <input type="text" id="s" name="s" value="" placeholder="'+instant_search.placeholder+'"> <div class="vw-loading-icon"> <div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div></div> <ul class="vw-instant-search__result"></ul> </form>',defaults:{search_delay:350,},init:function(el,options){this.options=$.extend({},this.defaults,options);this.startSearch=$.proxy(this.startSearch,this);this.onClickIcon=$.proxy(this.onClickIcon,this);this.onClickOutside=$.proxy(this.onClickOutside,this);this.onTyping=$.proxy(this.onTyping,this);this.onRequestCompleted=$.proxy(this.onRequestCompleted,this);this.$form=$(this.form_template);this.$searchbox=$('#s',this.$form);this.$loading=$('.vw-loading-icon',this.$form);this.$result_panel=$('.vw-instant-search__result',this.$form);this.$icon=$(el);this.$icon.click(this.onClickIcon);this.$icon.after(this.$form);this.initForm();$(document).mousedown(this.onClickOutside);},initForm:function(){this.$form.hide();this.$form.attr('action',instant_search.blog_url);this.$searchbox.keyup(this.onTyping);},startSearch:function(){this.$loading.show();if(this.is_on_request){this.request.abort();}
this.is_on_request=true;this.request=$.ajax({url:instant_search.ajax_url,data:{s:this.keywords,action:'presso_instant_search'},success:this.onRequestCompleted,});},showPanel:function(){this.$form.css('opacity','0').show();this.$form.animate({opacity:1,marginTop:'0px'},{duration:150});},hidePanel:function(){this.$form.animate({opacity:0,marginTop:'-10px'},{duration:150,complete:function(){$(this).hide();}});},onClickIcon:function(e){e.preventDefault();if(!this.$form.is(':visible')){this.showPanel();this.$searchbox.focus();}else{this.hidePanel();}
return false;},onClickOutside:function(e){if((!this.$form.is(e.target)&&this.$form.has(e.target).length===0)&&(!this.$icon.is(e.target)&&this.$icon.has(e.target).length===0)){this.hidePanel();}},onRequestCompleted:function(data){this.$result_panel.empty();this.$result_panel.append(data);this.is_on_request=false;this.$loading.hide();},onTyping:function(e){var keywords=this.$searchbox.val();if(keywords==this.keywords)return;if(keywords.length<3){clearTimeout(this.delay_search);this.$loading.hide();return;}
if(this.delay_search){clearTimeout(this.delay_search);}
this.keywords=keywords;this.delay_search=setTimeout(this.startSearch,this.options.search_delay);},}
$.fn.instant_search=function(arg1){return this.each(function(){var instant_search=$.extend({},INSTANT_SEARCH);instant_search.init(this,arg1);});};})(jQuery,window,document);
window.addComment=function(a){function b(){c(),g()}function c(a){if(t&&(m=j(r.cancelReplyId),n=j(r.commentFormId),m)){m.addEventListener("touchstart",e),m.addEventListener("click",e);for(var b,c=d(a),g=0,h=c.length;g<h;g++)b=c[g],b.addEventListener("touchstart",f),b.addEventListener("click",f)}}function d(a){var b,c=r.commentReplyClass;return a&&a.childNodes||(a=q),b=q.getElementsByClassName?a.getElementsByClassName(c):a.querySelectorAll("."+c)}function e(a){var b=this,c=r.temporaryFormId,d=j(c);d&&o&&(j(r.parentIdFieldId).value="0",d.parentNode.replaceChild(o,d),b.style.display="none",a.preventDefault())}function f(b){var c,d=this,e=i(d,"belowelement"),f=i(d,"commentid"),g=i(d,"respondelement"),h=i(d,"postid");e&&f&&g&&h&&(c=a.addComment.moveForm(e,f,g,h),!1===c&&b.preventDefault())}function g(){if(s){var a={childList:!0,subTree:!0};p=new s(h),p.observe(q.body,a)}}function h(a){for(var b=a.length;b--;)if(a[b].addedNodes.length)return void c()}function i(a,b){return u?a.dataset[b]:a.getAttribute("data-"+b)}function j(a){return q.getElementById(a)}function k(b,c,d,e){var f=j(b);o=j(d);var g,h,i,k=j(r.parentIdFieldId),p=j(r.postIdFieldId);if(f&&o&&k){l(o),e&&p&&(p.value=e),k.value=c,m.style.display="",f.parentNode.insertBefore(o,f.nextSibling),m.onclick=function(){return!1};try{for(var s=0;s<n.elements.length;s++)if(g=n.elements[s],h=!1,"getComputedStyle"in a?i=a.getComputedStyle(g):q.documentElement.currentStyle&&(i=g.currentStyle),(g.offsetWidth<=0&&g.offsetHeight<=0||"hidden"===i.visibility)&&(h=!0),"hidden"!==g.type&&!g.disabled&&!h){g.focus();break}}catch(t){}return!1}}function l(a){var b=r.temporaryFormId,c=j(b);c||(c=q.createElement("div"),c.id=b,c.style.display="none",a.parentNode.insertBefore(c,a))}var m,n,o,p,q=a.document,r={commentReplyClass:"comment-reply-link",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},s=a.MutationObserver||a.WebKitMutationObserver||a.MozMutationObserver,t="querySelector"in q&&"addEventListener"in a,u=!!q.documentElement.dataset;return t&&"loading"!==q.readyState?b():t&&a.addEventListener("DOMContentLoaded",b,!1),{init:c,moveForm:k}}(window);
(function(){var defaultOptions={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:true,arrowScroll:50,fixedBackground:true,excluded:''};var options=defaultOptions;var isExcluded=false;var isFrame=false;var direction={x:0,y:0};var initDone=false;var root=document.documentElement;var activeElement;var observer;var refreshSize;var deltaBuffer=[];var isMac=/^Mac/.test(navigator.platform);var key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var arrowKeys={37:1,38:1,39:1,40:1};function initTest(){if(options.keyboardSupport){addEvent('keydown',keydown);}}
function init(){if(initDone||!document.body)return;initDone=true;var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;root=(document.compatMode.indexOf('CSS')>=0)?html:body;activeElement=body;initTest();if(top!=self){isFrame=true;}
else if(isOldSafari&&scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){var fullPageElem=document.createElement('div');fullPageElem.style.cssText='position:absolute; z-index:-10000; '+'top:0; left:0; right:0; height:'+
root.scrollHeight+'px';document.body.appendChild(fullPageElem);var pendingRefresh;refreshSize=function(){if(pendingRefresh)return;pendingRefresh=setTimeout(function(){if(isExcluded)return;fullPageElem.style.height='0';fullPageElem.style.height=root.scrollHeight+'px';pendingRefresh=null;},500);};setTimeout(refreshSize,10);addEvent('resize',refreshSize);var config={attributes:true,childList:true,characterData:false};observer=new MutationObserver(refreshSize);observer.observe(body,config);if(root.offsetHeight<=windowHeight){var clearfix=document.createElement('div');clearfix.style.clear='both';body.appendChild(clearfix);}}
if(!options.fixedBackground&&!isExcluded){body.style.backgroundAttachment='scroll';html.style.backgroundAttachment='scroll';}}
function cleanup(){observer&&observer.disconnect();removeEvent(wheelEvent,wheel);removeEvent('mousedown',mousedown);removeEvent('keydown',keydown);removeEvent('resize',refreshSize);removeEvent('load',init);}
var que=[];var pending=false;var lastScroll=Date.now();function scrollArray(elem,left,top){directionCheck(left,top);if(options.accelerationMax!=1){var now=Date.now();var elapsed=now-lastScroll;if(elapsed<options.accelerationDelta){var factor=(1+(50/elapsed))/2;if(factor>1){factor=Math.min(factor,options.accelerationMax);left*=factor;top*=factor;}}
lastScroll=Date.now();}
que.push({x:left,y:top,lastX:(left<0)?0.99:-0.99,lastY:(top<0)?0.99:-0.99,start:Date.now()});if(pending){return;}
var scrollWindow=(elem===document.body);var step=function(time){var now=Date.now();var scrollX=0;var scrollY=0;for(var i=0;i<que.length;i++){var item=que[i];var elapsed=now-item.start;var finished=(elapsed>=options.animationTime);var position=(finished)?1:elapsed/options.animationTime;if(options.pulseAlgorithm){position=pulse(position);}
var x=(item.x*position-item.lastX)>>0;var y=(item.y*position-item.lastY)>>0;scrollX+=x;scrollY+=y;item.lastX+=x;item.lastY+=y;if(finished){que.splice(i,1);i--;}}
if(scrollWindow){window.scrollBy(scrollX,scrollY);}
else{if(scrollX)elem.scrollLeft+=scrollX;if(scrollY)elem.scrollTop+=scrollY;}
if(!left&&!top){que=[];}
if(que.length){requestFrame(step,elem,(1000/options.frameRate+1));}else{pending=false;}};requestFrame(step,elem,0);pending=true;}
function wheel(event){if(!initDone){init();}
var target=event.target;if(event.defaultPrevented||event.ctrlKey){return true;}
if(isNodeName(activeElement,'embed')||(isNodeName(target,'embed')&&/\.pdf/i.test(target.src))||isNodeName(activeElement,'object')||target.shadowRoot){return true;}
var deltaX=-event.wheelDeltaX||event.deltaX||0;var deltaY=-event.wheelDeltaY||event.deltaY||0;if(isMac){if(event.wheelDeltaX&&isDivisible(event.wheelDeltaX,120)){deltaX=-120*(event.wheelDeltaX/Math.abs(event.wheelDeltaX));}
if(event.wheelDeltaY&&isDivisible(event.wheelDeltaY,120)){deltaY=-120*(event.wheelDeltaY/Math.abs(event.wheelDeltaY));}}
if(!deltaX&&!deltaY){deltaY=-event.wheelDelta||0;}
if(event.deltaMode===1){deltaX*=40;deltaY*=40;}
var overflowing=overflowingAncestor(target);if(!overflowing){if(isFrame&&isChrome){Object.defineProperty(event,"target",{value:window.frameElement});return parent.wheel(event);}
return true;}
if(isTouchpad(deltaY)){return true;}
if(Math.abs(deltaX)>1.2){deltaX*=options.stepSize/120;}
if(Math.abs(deltaY)>1.2){deltaY*=options.stepSize/120;}
scrollArray(overflowing,deltaX,deltaY);event.preventDefault();scheduleClearCache();}
function keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey||(event.shiftKey&&event.keyCode!==key.spacebar);if(!document.body.contains(activeElement)){activeElement=document.activeElement;}
var inputNodeNames=/^(textarea|select|embed|object)$/i;var buttonTypes=/^(button|submit|radio|checkbox|file|color|image)$/i;if(event.defaultPrevented||inputNodeNames.test(target.nodeName)||isNodeName(target,'input')&&!buttonTypes.test(target.type)||isNodeName(activeElement,'video')||isInsideYoutubeVideo(event)||target.isContentEditable||modifier){return true;}
if((isNodeName(target,'button')||isNodeName(target,'input')&&buttonTypes.test(target.type))&&event.keyCode===key.spacebar){return true;}
if(isNodeName(target,'input')&&target.type=='radio'&&arrowKeys[event.keyCode]){return true;}
var shift,x=0,y=0;var overflowing=overflowingAncestor(activeElement);if(!overflowing){return(isFrame&&isChrome)?parent.keydown(event):true;}
var clientHeight=overflowing.clientHeight;if(overflowing==document.body){clientHeight=window.innerHeight;}
switch(event.keyCode){case key.up:y=-options.arrowScroll;break;case key.down:y=options.arrowScroll;break;case key.spacebar:shift=event.shiftKey?1:-1;y=-shift*clientHeight*0.9;break;case key.pageup:y=-clientHeight*0.9;break;case key.pagedown:y=clientHeight*0.9;break;case key.home:y=-overflowing.scrollTop;break;case key.end:var scroll=overflowing.scrollHeight-overflowing.scrollTop;var scrollRemaining=scroll-clientHeight;y=(scrollRemaining>0)?scrollRemaining+10:0;break;case key.left:x=-options.arrowScroll;break;case key.right:x=options.arrowScroll;break;default:return true;}
scrollArray(overflowing,x,y);event.preventDefault();scheduleClearCache();}
function mousedown(event){activeElement=event.target;}
var uniqueID=(function(){var i=0;return function(el){return el.uniqueID||(el.uniqueID=i++);};})();var cache={};var clearCacheTimer;function scheduleClearCache(){clearTimeout(clearCacheTimer);clearCacheTimer=setInterval(function(){cache={};},1*1000);}
function setCache(elems,overflowing){for(var i=elems.length;i--;)
cache[uniqueID(elems[i])]=overflowing;return overflowing;}
function overflowingAncestor(el){var elems=[];var body=document.body;var rootScrollHeight=root.scrollHeight;do{var cached=cache[uniqueID(el)];if(cached){return setCache(elems,cached);}
elems.push(el);if(rootScrollHeight===el.scrollHeight){var topOverflowsNotHidden=overflowNotHidden(root)&&overflowNotHidden(body);var isOverflowCSS=topOverflowsNotHidden||overflowAutoOrScroll(root);if(isFrame&&isContentOverflowing(root)||!isFrame&&isOverflowCSS){return setCache(elems,getScrollRoot());}}else if(isContentOverflowing(el)&&overflowAutoOrScroll(el)){return setCache(elems,el);}}while(el=el.parentElement);}
function isContentOverflowing(el){return(el.clientHeight+10<el.scrollHeight);}
function overflowNotHidden(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return(overflow!=='hidden');}
function overflowAutoOrScroll(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return(overflow==='scroll'||overflow==='auto');}
function addEvent(type,fn){window.addEventListener(type,fn,false);}
function removeEvent(type,fn){window.removeEventListener(type,fn,false);}
function isNodeName(el,tag){return(el.nodeName||'').toLowerCase()===tag.toLowerCase();}
function directionCheck(x,y){x=(x>0)?1:-1;y=(y>0)?1:-1;if(direction.x!==x||direction.y!==y){direction.x=x;direction.y=y;que=[];lastScroll=0;}}
var deltaBufferTimer;if(window.localStorage&&localStorage.SS_deltaBuffer){try{deltaBuffer=localStorage.SS_deltaBuffer.split(',');}catch(e){}}
function isTouchpad(deltaY){if(!deltaY)return;if(!deltaBuffer.length){deltaBuffer=[deltaY,deltaY,deltaY];}
deltaY=Math.abs(deltaY);deltaBuffer.push(deltaY);deltaBuffer.shift();clearTimeout(deltaBufferTimer);deltaBufferTimer=setTimeout(function(){try{localStorage.SS_deltaBuffer=deltaBuffer.join(',');}catch(e){}},1000);return!allDeltasDivisableBy(120)&&!allDeltasDivisableBy(100);}
function isDivisible(n,divisor){return(Math.floor(n/divisor)==n/divisor);}
function allDeltasDivisableBy(divisor){return(isDivisible(deltaBuffer[0],divisor)&&isDivisible(deltaBuffer[1],divisor)&&isDivisible(deltaBuffer[2],divisor));}
function isInsideYoutubeVideo(event){var elem=event.target;var isControl=false;if(document.URL.indexOf('www.youtube.com/watch')!=-1){do{isControl=(elem.classList&&elem.classList.contains('html5-video-controls'));if(isControl)break;}while(elem=elem.parentNode);}
return isControl;}
var requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback,element,delay){window.setTimeout(callback,delay||(1000/60));});})();var MutationObserver=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var getScrollRoot=(function(){var SCROLL_ROOT;return function(){if(!SCROLL_ROOT){var dummy=document.createElement('div');dummy.style.cssText='height:10000px;width:1px;';document.body.appendChild(dummy);var bodyScrollTop=document.body.scrollTop;var docElScrollTop=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=bodyScrollTop)
(SCROLL_ROOT=document.body);else
(SCROLL_ROOT=document.documentElement);window.scrollBy(0,-3);document.body.removeChild(dummy);}
return SCROLL_ROOT;};})();function pulse_(x){var val,start,expx;x=x*options.pulseScale;if(x<1){val=x-(1-Math.exp(-x));}else{start=Math.exp(-1);x-=1;expx=1-Math.exp(-x);val=start+(expx*(1-start));}
return val*options.pulseNormalize;}
function pulse(x){if(x>=1)return 1;if(x<=0)return 0;if(options.pulseNormalize==1){options.pulseNormalize/=pulse_(1);}
return pulse_(x);}
var userAgent=window.navigator.userAgent;var isEdge=/Edge/.test(userAgent);var isChrome=/chrome/i.test(userAgent)&&!isEdge;var isSafari=/safari/i.test(userAgent)&&!isEdge;var isMobile=/mobile/i.test(userAgent);var isIEWin7=/Windows NT 6.1/i.test(userAgent)&&/rv:11/i.test(userAgent);var isOldSafari=isSafari&&(/Version\/8/i.test(userAgent)||/Version\/9/i.test(userAgent));var isEnabledForBrowser=(isChrome||isSafari||isIEWin7)&&!isMobile;var wheelEvent;if('onwheel'in document.createElement('div'))
wheelEvent='wheel';else if('onmousewheel'in document.createElement('div'))
wheelEvent='mousewheel';if(wheelEvent&&isEnabledForBrowser){addEvent(wheelEvent,wheel);addEvent('mousedown',mousedown);addEvent('load',init);}
function SmoothScroll(optionsToSet){for(var key in optionsToSet)
if(defaultOptions.hasOwnProperty(key))
options[key]=optionsToSet[key];}
SmoothScroll.destroy=cleanup;if(window.SmoothScrollOptions)
SmoothScroll(window.SmoothScrollOptions);if(typeof define==='function'&&define.amd)
define(function(){return SmoothScroll;});else if('object'==typeof exports)
module.exports=SmoothScroll;else
window.SmoothScroll=SmoothScroll;})();
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(jQuery&&!jQuery.fn.hoverIntent){factory(jQuery);}})(function($){'use strict';var _cfg={interval:100,sensitivity:6,timeout:0};var INSTANCE_COUNT=0;var cX,cY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity){$el.off(s.event,track);delete s.timeoutId;s.isActive=true;ev.pageX=cX;ev.pageY=cY;delete s.pX;delete s.pY;return cfg.over.apply($el[0],[ev]);}else{s.pX=cX;s.pY=cY;s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg);},cfg.interval);}};var delay=function(ev,$el,s,out){delete $el.data('hoverIntent')[s.id];return out.apply($el[0],[ev]);};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++;var cfg=$.extend({},_cfg);if($.isPlainObject(handlerIn)){cfg=$.extend(cfg,handlerIn);if(!$.isFunction(cfg.out)){cfg.out=cfg.over;}}else if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector});}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});}
var handleHover=function(e){var ev=$.extend({},e);var $el=$(this);var hoverIntentData=$el.data('hoverIntent');if(!hoverIntentData){$el.data('hoverIntent',(hoverIntentData={}));}
var state=hoverIntentData[instanceId];if(!state){hoverIntentData[instanceId]=state={id:instanceId};}
if(state.timeoutId){state.timeoutId=clearTimeout(state.timeoutId);}
var mousemove=state.event='mousemove.hoverIntent.hoverIntent'+instanceId;if(e.type==='mouseenter'){if(state.isActive){return;}
state.pX=ev.pageX;state.pY=ev.pageY;$el.off(mousemove,track).on(mousemove,track);state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg);},cfg.interval);}else{if(!state.isActive){return;}
$el.off(mousemove,track);state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out);},cfg.timeout);}};return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover},cfg.selector);};});
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement('div');div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not("object object");$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){'use strict';var ps=require('../main');var psInstances=require('../plugin/instances');function mountJQuery(jQuery){jQuery.fn.perfectScrollbar=function(settingOrCommand){return this.each(function(){if(typeof settingOrCommand==='object'||typeof settingOrCommand==='undefined'){var settings=settingOrCommand;if(!psInstances.get(this)){ps.initialize(this,settings);}}else{var command=settingOrCommand;if(command==='update'){ps.update(this);}else if(command==='destroy'){ps.destroy(this);}}});};}
if(typeof define==='function'&&define.amd){define(['jquery'],mountJQuery);}else{var jq=window.jQuery?window.jQuery:window.$;if(typeof jq!=='undefined'){mountJQuery(jq);}}
module.exports=mountJQuery;},{"../main":7,"../plugin/instances":18}],2:[function(require,module,exports){'use strict';function oldAdd(element,className){var classes=element.className.split(' ');if(classes.indexOf(className)<0){classes.push(className);}
element.className=classes.join(' ');}
function oldRemove(element,className){var classes=element.className.split(' ');var idx=classes.indexOf(className);if(idx>=0){classes.splice(idx,1);}
element.className=classes.join(' ');}
exports.add=function(element,className){if(element.classList){element.classList.add(className);}else{oldAdd(element,className);}};exports.remove=function(element,className){if(element.classList){element.classList.remove(className);}else{oldRemove(element,className);}};exports.list=function(element){if(element.classList){return Array.prototype.slice.apply(element.classList);}else{return element.className.split(' ');}};},{}],3:[function(require,module,exports){'use strict';var DOM={};DOM.e=function(tagName,className){var element=document.createElement(tagName);element.className=className;return element;};DOM.appendTo=function(child,parent){parent.appendChild(child);return child;};function cssGet(element,styleName){return window.getComputedStyle(element)[styleName];}
function cssSet(element,styleName,styleValue){if(typeof styleValue==='number'){styleValue=styleValue.toString()+'px';}
element.style[styleName]=styleValue;return element;}
function cssMultiSet(element,obj){for(var key in obj){var val=obj[key];if(typeof val==='number'){val=val.toString()+'px';}
element.style[key]=val;}
return element;}
DOM.css=function(element,styleNameOrObject,styleValue){if(typeof styleNameOrObject==='object'){return cssMultiSet(element,styleNameOrObject);}else{if(typeof styleValue==='undefined'){return cssGet(element,styleNameOrObject);}else{return cssSet(element,styleNameOrObject,styleValue);}}};DOM.matches=function(element,query){if(typeof element.matches!=='undefined'){return element.matches(query);}else{if(typeof element.matchesSelector!=='undefined'){return element.matchesSelector(query);}else if(typeof element.webkitMatchesSelector!=='undefined'){return element.webkitMatchesSelector(query);}else if(typeof element.mozMatchesSelector!=='undefined'){return element.mozMatchesSelector(query);}else if(typeof element.msMatchesSelector!=='undefined'){return element.msMatchesSelector(query);}}};DOM.remove=function(element){if(typeof element.remove!=='undefined'){element.remove();}else{if(element.parentNode){element.parentNode.removeChild(element);}}};DOM.queryChildren=function(element,selector){return Array.prototype.filter.call(element.childNodes,function(child){return DOM.matches(child,selector);});};module.exports=DOM;},{}],4:[function(require,module,exports){'use strict';var EventElement=function(element){this.element=element;this.events={};};EventElement.prototype.bind=function(eventName,handler){if(typeof this.events[eventName]==='undefined'){this.events[eventName]=[];}
this.events[eventName].push(handler);this.element.addEventListener(eventName,handler,false);};EventElement.prototype.unbind=function(eventName,handler){var isHandlerProvided=(typeof handler!=='undefined');this.events[eventName]=this.events[eventName].filter(function(hdlr){if(isHandlerProvided&&hdlr!==handler){return true;}
this.element.removeEventListener(eventName,hdlr,false);return false;},this);};EventElement.prototype.unbindAll=function(){for(var name in this.events){this.unbind(name);}};var EventManager=function(){this.eventElements=[];};EventManager.prototype.eventElement=function(element){var ee=this.eventElements.filter(function(eventElement){return eventElement.element===element;})[0];if(typeof ee==='undefined'){ee=new EventElement(element);this.eventElements.push(ee);}
return ee;};EventManager.prototype.bind=function(element,eventName,handler){this.eventElement(element).bind(eventName,handler);};EventManager.prototype.unbind=function(element,eventName,handler){this.eventElement(element).unbind(eventName,handler);};EventManager.prototype.unbindAll=function(){for(var i=0;i<this.eventElements.length;i++){this.eventElements[i].unbindAll();}};EventManager.prototype.once=function(element,eventName,handler){var ee=this.eventElement(element);var onceHandler=function(e){ee.unbind(eventName,onceHandler);handler(e);};ee.bind(eventName,onceHandler);};module.exports=EventManager;},{}],5:[function(require,module,exports){'use strict';module.exports=(function(){function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}
return function(){return s4()+s4()+'-'+s4()+'-'+s4()+'-'+
s4()+'-'+s4()+s4()+s4();};})();},{}],6:[function(require,module,exports){'use strict';var cls=require('./class');var dom=require('./dom');var toInt=exports.toInt=function(x){return parseInt(x,10)||0;};var clone=exports.clone=function(obj){if(obj===null){return null;}else if(obj.constructor===Array){return obj.map(clone);}else if(typeof obj==='object'){var result={};for(var key in obj){result[key]=clone(obj[key]);}
return result;}else{return obj;}};exports.extend=function(original,source){var result=clone(original);for(var key in source){result[key]=clone(source[key]);}
return result;};exports.isEditable=function(el){return dom.matches(el,"input,[contenteditable]")||dom.matches(el,"select,[contenteditable]")||dom.matches(el,"textarea,[contenteditable]")||dom.matches(el,"button,[contenteditable]");};exports.removePsClasses=function(element){var clsList=cls.list(element);for(var i=0;i<clsList.length;i++){var className=clsList[i];if(className.indexOf('ps-')===0){cls.remove(element,className);}}};exports.outerWidth=function(element){return toInt(dom.css(element,'width'))+
toInt(dom.css(element,'paddingLeft'))+
toInt(dom.css(element,'paddingRight'))+
toInt(dom.css(element,'borderLeftWidth'))+
toInt(dom.css(element,'borderRightWidth'));};exports.startScrolling=function(element,axis){cls.add(element,'ps-in-scrolling');if(typeof axis!=='undefined'){cls.add(element,'ps-'+axis);}else{cls.add(element,'ps-x');cls.add(element,'ps-y');}};exports.stopScrolling=function(element,axis){cls.remove(element,'ps-in-scrolling');if(typeof axis!=='undefined'){cls.remove(element,'ps-'+axis);}else{cls.remove(element,'ps-x');cls.remove(element,'ps-y');}};exports.env={isWebKit:'WebkitAppearance'in document.documentElement.style,supportsTouch:(('ontouchstart'in window)||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:window.navigator.msMaxTouchPoints!==null};},{"./class":2,"./dom":3}],7:[function(require,module,exports){'use strict';var destroy=require('./plugin/destroy');var initialize=require('./plugin/initialize');var update=require('./plugin/update');module.exports={initialize:initialize,update:update,destroy:destroy};},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(require,module,exports){'use strict';module.exports={handlers:['click-rail','drag-scrollbar','keyboard','wheel','touch'],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:true,suppressScrollX:false,suppressScrollY:false,swipePropagation:true,useBothWheelAxes:false,wheelPropagation:false,wheelSpeed:1,theme:'default'};},{}],9:[function(require,module,exports){'use strict';var _=require('../lib/helper');var dom=require('../lib/dom');var instances=require('./instances');module.exports=function(element){var i=instances.get(element);if(!i){return;}
i.event.unbindAll();dom.remove(i.scrollbarX);dom.remove(i.scrollbarY);dom.remove(i.scrollbarXRail);dom.remove(i.scrollbarYRail);_.removePsClasses(element);instances.remove(element);};},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(require,module,exports){'use strict';var _=require('../../lib/helper');var instances=require('../instances');var updateGeometry=require('../update-geometry');var updateScroll=require('../update-scroll');function bindClickRailHandler(element,i){function pageOffset(el){return el.getBoundingClientRect();}
var stopPropagation=function(e){e.stopPropagation();};if(i.settings.stopPropagationOnClick){i.event.bind(i.scrollbarY,'click',stopPropagation);}
i.event.bind(i.scrollbarYRail,'click',function(e){var halfOfScrollbarLength=_.toInt(i.scrollbarYHeight/2);var positionTop=i.railYRatio*(e.pageY-window.pageYOffset-pageOffset(i.scrollbarYRail).top-halfOfScrollbarLength);var maxPositionTop=i.railYRatio*(i.railYHeight-i.scrollbarYHeight);var positionRatio=positionTop/maxPositionTop;if(positionRatio<0){positionRatio=0;}else if(positionRatio>1){positionRatio=1;}
updateScroll(element,'top',(i.contentHeight-i.containerHeight)*positionRatio);updateGeometry(element);e.stopPropagation();});if(i.settings.stopPropagationOnClick){i.event.bind(i.scrollbarX,'click',stopPropagation);}
i.event.bind(i.scrollbarXRail,'click',function(e){var halfOfScrollbarLength=_.toInt(i.scrollbarXWidth/2);var positionLeft=i.railXRatio*(e.pageX-window.pageXOffset-pageOffset(i.scrollbarXRail).left-halfOfScrollbarLength);var maxPositionLeft=i.railXRatio*(i.railXWidth-i.scrollbarXWidth);var positionRatio=positionLeft/maxPositionLeft;if(positionRatio<0){positionRatio=0;}else if(positionRatio>1){positionRatio=1;}
updateScroll(element,'left',((i.contentWidth-i.containerWidth)*positionRatio)-i.negativeScrollAdjustment);updateGeometry(element);e.stopPropagation();});}
module.exports=function(element){var i=instances.get(element);bindClickRailHandler(element,i);};},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(require,module,exports){'use strict';var _=require('../../lib/helper');var dom=require('../../lib/dom');var instances=require('../instances');var updateGeometry=require('../update-geometry');var updateScroll=require('../update-scroll');function bindMouseScrollXHandler(element,i){var currentLeft=null;var currentPageX=null;function updateScrollLeft(deltaX){var newLeft=currentLeft+(deltaX*i.railXRatio);var maxLeft=Math.max(0,i.scrollbarXRail.getBoundingClientRect().left)+(i.railXRatio*(i.railXWidth-i.scrollbarXWidth));if(newLeft<0){i.scrollbarXLeft=0;}else if(newLeft>maxLeft){i.scrollbarXLeft=maxLeft;}else{i.scrollbarXLeft=newLeft;}
var scrollLeft=_.toInt(i.scrollbarXLeft*(i.contentWidth-i.containerWidth)/(i.containerWidth-(i.railXRatio*i.scrollbarXWidth)))-i.negativeScrollAdjustment;updateScroll(element,'left',scrollLeft);}
var mouseMoveHandler=function(e){updateScrollLeft(e.pageX-currentPageX);updateGeometry(element);e.stopPropagation();e.preventDefault();};var mouseUpHandler=function(){_.stopScrolling(element,'x');i.event.unbind(i.ownerDocument,'mousemove',mouseMoveHandler);};i.event.bind(i.scrollbarX,'mousedown',function(e){currentPageX=e.pageX;currentLeft=_.toInt(dom.css(i.scrollbarX,'left'))*i.railXRatio;_.startScrolling(element,'x');i.event.bind(i.ownerDocument,'mousemove',mouseMoveHandler);i.event.once(i.ownerDocument,'mouseup',mouseUpHandler);e.stopPropagation();e.preventDefault();});}
function bindMouseScrollYHandler(element,i){var currentTop=null;var currentPageY=null;function updateScrollTop(deltaY){var newTop=currentTop+(deltaY*i.railYRatio);var maxTop=Math.max(0,i.scrollbarYRail.getBoundingClientRect().top)+(i.railYRatio*(i.railYHeight-i.scrollbarYHeight));if(newTop<0){i.scrollbarYTop=0;}else if(newTop>maxTop){i.scrollbarYTop=maxTop;}else{i.scrollbarYTop=newTop;}
var scrollTop=_.toInt(i.scrollbarYTop*(i.contentHeight-i.containerHeight)/(i.containerHeight-(i.railYRatio*i.scrollbarYHeight)));updateScroll(element,'top',scrollTop);}
var mouseMoveHandler=function(e){updateScrollTop(e.pageY-currentPageY);updateGeometry(element);e.stopPropagation();e.preventDefault();};var mouseUpHandler=function(){_.stopScrolling(element,'y');i.event.unbind(i.ownerDocument,'mousemove',mouseMoveHandler);};i.event.bind(i.scrollbarY,'mousedown',function(e){currentPageY=e.pageY;currentTop=_.toInt(dom.css(i.scrollbarY,'top'))*i.railYRatio;_.startScrolling(element,'y');i.event.bind(i.ownerDocument,'mousemove',mouseMoveHandler);i.event.once(i.ownerDocument,'mouseup',mouseUpHandler);e.stopPropagation();e.preventDefault();});}
module.exports=function(element){var i=instances.get(element);bindMouseScrollXHandler(element,i);bindMouseScrollYHandler(element,i);};},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(require,module,exports){'use strict';var _=require('../../lib/helper');var dom=require('../../lib/dom');var instances=require('../instances');var updateGeometry=require('../update-geometry');var updateScroll=require('../update-scroll');function bindKeyboardHandler(element,i){var hovered=false;i.event.bind(element,'mouseenter',function(){hovered=true;});i.event.bind(element,'mouseleave',function(){hovered=false;});var shouldPrevent=false;function shouldPreventDefault(deltaX,deltaY){var scrollTop=element.scrollTop;if(deltaX===0){if(!i.scrollbarYActive){return false;}
if((scrollTop===0&&deltaY>0)||(scrollTop>=i.contentHeight-i.containerHeight&&deltaY<0)){return!i.settings.wheelPropagation;}}
var scrollLeft=element.scrollLeft;if(deltaY===0){if(!i.scrollbarXActive){return false;}
if((scrollLeft===0&&deltaX<0)||(scrollLeft>=i.contentWidth-i.containerWidth&&deltaX>0)){return!i.settings.wheelPropagation;}}
return true;}
i.event.bind(i.ownerDocument,'keydown',function(e){if(e.isDefaultPrevented&&e.isDefaultPrevented()){return;}
var focused=dom.matches(i.scrollbarX,':focus')||dom.matches(i.scrollbarY,':focus');if(!hovered&&!focused){return;}
var activeElement=document.activeElement?document.activeElement:i.ownerDocument.activeElement;if(activeElement){if(activeElement.tagName==='IFRAME'){activeElement=activeElement.contentDocument.activeElement;}else{while(activeElement.shadowRoot){activeElement=activeElement.shadowRoot.activeElement;}}
if(_.isEditable(activeElement)){return;}}
var deltaX=0;var deltaY=0;switch(e.which){case 37:deltaX=-30;break;case 38:deltaY=30;break;case 39:deltaX=30;break;case 40:deltaY=-30;break;case 33:deltaY=90;break;case 32:if(e.shiftKey){deltaY=90;}else{deltaY=-90;}
break;case 34:deltaY=-90;break;case 35:if(e.ctrlKey){deltaY=-i.contentHeight;}else{deltaY=-i.containerHeight;}
break;case 36:if(e.ctrlKey){deltaY=element.scrollTop;}else{deltaY=i.containerHeight;}
break;default:return;}
updateScroll(element,'top',element.scrollTop-deltaY);updateScroll(element,'left',element.scrollLeft+deltaX);updateGeometry(element);shouldPrevent=shouldPreventDefault(deltaX,deltaY);if(shouldPrevent){e.preventDefault();}});}
module.exports=function(element){var i=instances.get(element);bindKeyboardHandler(element,i);};},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(require,module,exports){'use strict';var instances=require('../instances');var updateGeometry=require('../update-geometry');var updateScroll=require('../update-scroll');function bindMouseWheelHandler(element,i){var shouldPrevent=false;function shouldPreventDefault(deltaX,deltaY){var scrollTop=element.scrollTop;if(deltaX===0){if(!i.scrollbarYActive){return false;}
if((scrollTop===0&&deltaY>0)||(scrollTop>=i.contentHeight-i.containerHeight&&deltaY<0)){return!i.settings.wheelPropagation;}}
var scrollLeft=element.scrollLeft;if(deltaY===0){if(!i.scrollbarXActive){return false;}
if((scrollLeft===0&&deltaX<0)||(scrollLeft>=i.contentWidth-i.containerWidth&&deltaX>0)){return!i.settings.wheelPropagation;}}
return true;}
function getDeltaFromEvent(e){var deltaX=e.deltaX;var deltaY=-1*e.deltaY;if(typeof deltaX==="undefined"||typeof deltaY==="undefined"){deltaX=-1*e.wheelDeltaX/6;deltaY=e.wheelDeltaY/6;}
if(e.deltaMode&&e.deltaMode===1){deltaX*=10;deltaY*=10;}
if(deltaX!==deltaX&&deltaY!==deltaY){deltaX=0;deltaY=e.wheelDelta;}
return[deltaX,deltaY];}
function shouldBeConsumedByChild(deltaX,deltaY){var child=element.querySelector('textarea:hover, .ps-child:hover');if(child){if(child.tagName!=='TEXTAREA'&&!window.getComputedStyle(child).overflow.match(/(scroll|auto)/)){return false;}
var maxScrollTop=child.scrollHeight-child.clientHeight;if(maxScrollTop>0){if(!(child.scrollTop===0&&deltaY>0)&&!(child.scrollTop===maxScrollTop&&deltaY<0)){return true;}}
var maxScrollLeft=child.scrollLeft-child.clientWidth;if(maxScrollLeft>0){if(!(child.scrollLeft===0&&deltaX<0)&&!(child.scrollLeft===maxScrollLeft&&deltaX>0)){return true;}}}
return false;}
function mousewheelHandler(e){var delta=getDeltaFromEvent(e);var deltaX=delta[0];var deltaY=delta[1];if(shouldBeConsumedByChild(deltaX,deltaY)){return;}
shouldPrevent=false;if(!i.settings.useBothWheelAxes){updateScroll(element,'top',element.scrollTop-(deltaY*i.settings.wheelSpeed));updateScroll(element,'left',element.scrollLeft+(deltaX*i.settings.wheelSpeed));}else if(i.scrollbarYActive&&!i.scrollbarXActive){if(deltaY){updateScroll(element,'top',element.scrollTop-(deltaY*i.settings.wheelSpeed));}else{updateScroll(element,'top',element.scrollTop+(deltaX*i.settings.wheelSpeed));}
shouldPrevent=true;}else if(i.scrollbarXActive&&!i.scrollbarYActive){if(deltaX){updateScroll(element,'left',element.scrollLeft+(deltaX*i.settings.wheelSpeed));}else{updateScroll(element,'left',element.scrollLeft-(deltaY*i.settings.wheelSpeed));}
shouldPrevent=true;}
updateGeometry(element);shouldPrevent=(shouldPrevent||shouldPreventDefault(deltaX,deltaY));if(shouldPrevent){e.stopPropagation();e.preventDefault();}}
if(typeof window.onwheel!=="undefined"){i.event.bind(element,'wheel',mousewheelHandler);}else if(typeof window.onmousewheel!=="undefined"){i.event.bind(element,'mousewheel',mousewheelHandler);}}
module.exports=function(element){var i=instances.get(element);bindMouseWheelHandler(element,i);};},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(require,module,exports){'use strict';var instances=require('../instances');var updateGeometry=require('../update-geometry');function bindNativeScrollHandler(element,i){i.event.bind(element,'scroll',function(){updateGeometry(element);});}
module.exports=function(element){var i=instances.get(element);bindNativeScrollHandler(element,i);};},{"../instances":18,"../update-geometry":19}],15:[function(require,module,exports){'use strict';var _=require('../../lib/helper');var instances=require('../instances');var updateGeometry=require('../update-geometry');var updateScroll=require('../update-scroll');function bindSelectionHandler(element,i){function getRangeNode(){var selection=window.getSelection?window.getSelection():document.getSelection?document.getSelection():'';if(selection.toString().length===0){return null;}else{return selection.getRangeAt(0).commonAncestorContainer;}}
var scrollingLoop=null;var scrollDiff={top:0,left:0};function startScrolling(){if(!scrollingLoop){scrollingLoop=setInterval(function(){if(!instances.get(element)){clearInterval(scrollingLoop);return;}
updateScroll(element,'top',element.scrollTop+scrollDiff.top);updateScroll(element,'left',element.scrollLeft+scrollDiff.left);updateGeometry(element);},50);}}
function stopScrolling(){if(scrollingLoop){clearInterval(scrollingLoop);scrollingLoop=null;}
_.stopScrolling(element);}
var isSelected=false;i.event.bind(i.ownerDocument,'selectionchange',function(){if(element.contains(getRangeNode())){isSelected=true;}else{isSelected=false;stopScrolling();}});i.event.bind(window,'mouseup',function(){if(isSelected){isSelected=false;stopScrolling();}});i.event.bind(window,'mousemove',function(e){if(isSelected){var mousePosition={x:e.pageX,y:e.pageY};var containerGeometry={left:element.offsetLeft,right:element.offsetLeft+element.offsetWidth,top:element.offsetTop,bottom:element.offsetTop+element.offsetHeight};if(mousePosition.x<containerGeometry.left+3){scrollDiff.left=-5;_.startScrolling(element,'x');}else if(mousePosition.x>containerGeometry.right-3){scrollDiff.left=5;_.startScrolling(element,'x');}else{scrollDiff.left=0;}
if(mousePosition.y<containerGeometry.top+3){if(containerGeometry.top+3-mousePosition.y<5){scrollDiff.top=-5;}else{scrollDiff.top=-20;}
_.startScrolling(element,'y');}else if(mousePosition.y>containerGeometry.bottom-3){if(mousePosition.y-containerGeometry.bottom+3<5){scrollDiff.top=5;}else{scrollDiff.top=20;}
_.startScrolling(element,'y');}else{scrollDiff.top=0;}
if(scrollDiff.top===0&&scrollDiff.left===0){stopScrolling();}else{startScrolling();}}});}
module.exports=function(element){var i=instances.get(element);bindSelectionHandler(element,i);};},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(require,module,exports){'use strict';var _=require('../../lib/helper');var instances=require('../instances');var updateGeometry=require('../update-geometry');var updateScroll=require('../update-scroll');function bindTouchHandler(element,i,supportsTouch,supportsIePointer){function shouldPreventDefault(deltaX,deltaY){var scrollTop=element.scrollTop;var scrollLeft=element.scrollLeft;var magnitudeX=Math.abs(deltaX);var magnitudeY=Math.abs(deltaY);if(magnitudeY>magnitudeX){if(((deltaY<0)&&(scrollTop===i.contentHeight-i.containerHeight))||((deltaY>0)&&(scrollTop===0))){return!i.settings.swipePropagation;}}else if(magnitudeX>magnitudeY){if(((deltaX<0)&&(scrollLeft===i.contentWidth-i.containerWidth))||((deltaX>0)&&(scrollLeft===0))){return!i.settings.swipePropagation;}}
return true;}
function applyTouchMove(differenceX,differenceY){updateScroll(element,'top',element.scrollTop-differenceY);updateScroll(element,'left',element.scrollLeft-differenceX);updateGeometry(element);}
var startOffset={};var startTime=0;var speed={};var easingLoop=null;var inGlobalTouch=false;var inLocalTouch=false;function globalTouchStart(){inGlobalTouch=true;}
function globalTouchEnd(){inGlobalTouch=false;}
function getTouch(e){if(e.targetTouches){return e.targetTouches[0];}else{return e;}}
function shouldHandle(e){if(e.targetTouches&&e.targetTouches.length===1){return true;}
if(e.pointerType&&e.pointerType!=='mouse'&&e.pointerType!==e.MSPOINTER_TYPE_MOUSE){return true;}
return false;}
function touchStart(e){if(shouldHandle(e)){inLocalTouch=true;var touch=getTouch(e);startOffset.pageX=touch.pageX;startOffset.pageY=touch.pageY;startTime=(new Date()).getTime();if(easingLoop!==null){clearInterval(easingLoop);}
e.stopPropagation();}}
function touchMove(e){if(!inLocalTouch&&i.settings.swipePropagation){touchStart(e);}
if(!inGlobalTouch&&inLocalTouch&&shouldHandle(e)){var touch=getTouch(e);var currentOffset={pageX:touch.pageX,pageY:touch.pageY};var differenceX=currentOffset.pageX-startOffset.pageX;var differenceY=currentOffset.pageY-startOffset.pageY;applyTouchMove(differenceX,differenceY);startOffset=currentOffset;var currentTime=(new Date()).getTime();var timeGap=currentTime-startTime;if(timeGap>0){speed.x=differenceX/timeGap;speed.y=differenceY/timeGap;startTime=currentTime;}
if(shouldPreventDefault(differenceX,differenceY)){e.stopPropagation();e.preventDefault();}}}
function touchEnd(){if(!inGlobalTouch&&inLocalTouch){inLocalTouch=false;clearInterval(easingLoop);easingLoop=setInterval(function(){if(!instances.get(element)){clearInterval(easingLoop);return;}
if(Math.abs(speed.x)<0.01&&Math.abs(speed.y)<0.01){clearInterval(easingLoop);return;}
applyTouchMove(speed.x*30,speed.y*30);speed.x*=0.8;speed.y*=0.8;},10);}}
if(supportsTouch){i.event.bind(window,'touchstart',globalTouchStart);i.event.bind(window,'touchend',globalTouchEnd);i.event.bind(element,'touchstart',touchStart);i.event.bind(element,'touchmove',touchMove);i.event.bind(element,'touchend',touchEnd);}
if(supportsIePointer){if(window.PointerEvent){i.event.bind(window,'pointerdown',globalTouchStart);i.event.bind(window,'pointerup',globalTouchEnd);i.event.bind(element,'pointerdown',touchStart);i.event.bind(element,'pointermove',touchMove);i.event.bind(element,'pointerup',touchEnd);}else if(window.MSPointerEvent){i.event.bind(window,'MSPointerDown',globalTouchStart);i.event.bind(window,'MSPointerUp',globalTouchEnd);i.event.bind(element,'MSPointerDown',touchStart);i.event.bind(element,'MSPointerMove',touchMove);i.event.bind(element,'MSPointerUp',touchEnd);}}}
module.exports=function(element){if(!_.env.supportsTouch&&!_.env.supportsIePointer){return;}
var i=instances.get(element);bindTouchHandler(element,i,_.env.supportsTouch,_.env.supportsIePointer);};},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(require,module,exports){'use strict';var _=require('../lib/helper');var cls=require('../lib/class');var instances=require('./instances');var updateGeometry=require('./update-geometry');var handlers={'click-rail':require('./handler/click-rail'),'drag-scrollbar':require('./handler/drag-scrollbar'),'keyboard':require('./handler/keyboard'),'wheel':require('./handler/mouse-wheel'),'touch':require('./handler/touch'),'selection':require('./handler/selection')};var nativeScrollHandler=require('./handler/native-scroll');module.exports=function(element,userSettings){userSettings=typeof userSettings==='object'?userSettings:{};cls.add(element,'ps-container');var i=instances.add(element);i.settings=_.extend(i.settings,userSettings);cls.add(element,'ps-theme-'+i.settings.theme);i.settings.handlers.forEach(function(handlerName){handlers[handlerName](element);});nativeScrollHandler(element);updateGeometry(element);};},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(require,module,exports){'use strict';var _=require('../lib/helper');var cls=require('../lib/class');var defaultSettings=require('./default-setting');var dom=require('../lib/dom');var EventManager=require('../lib/event-manager');var guid=require('../lib/guid');var instances={};function Instance(element){var i=this;i.settings=_.clone(defaultSettings);i.containerWidth=null;i.containerHeight=null;i.contentWidth=null;i.contentHeight=null;i.isRtl=dom.css(element,'direction')==="rtl";i.isNegativeScroll=(function(){var originalScrollLeft=element.scrollLeft;var result=null;element.scrollLeft=-1;result=element.scrollLeft<0;element.scrollLeft=originalScrollLeft;return result;})();i.negativeScrollAdjustment=i.isNegativeScroll?element.scrollWidth-element.clientWidth:0;i.event=new EventManager();i.ownerDocument=element.ownerDocument||document;function focus(){cls.add(element,'ps-focus');}
function blur(){cls.remove(element,'ps-focus');}
i.scrollbarXRail=dom.appendTo(dom.e('div','ps-scrollbar-x-rail'),element);i.scrollbarX=dom.appendTo(dom.e('div','ps-scrollbar-x'),i.scrollbarXRail);i.scrollbarX.setAttribute('tabindex',0);i.event.bind(i.scrollbarX,'focus',focus);i.event.bind(i.scrollbarX,'blur',blur);i.scrollbarXActive=null;i.scrollbarXWidth=null;i.scrollbarXLeft=null;i.scrollbarXBottom=_.toInt(dom.css(i.scrollbarXRail,'bottom'));i.isScrollbarXUsingBottom=i.scrollbarXBottom===i.scrollbarXBottom;i.scrollbarXTop=i.isScrollbarXUsingBottom?null:_.toInt(dom.css(i.scrollbarXRail,'top'));i.railBorderXWidth=_.toInt(dom.css(i.scrollbarXRail,'borderLeftWidth'))+_.toInt(dom.css(i.scrollbarXRail,'borderRightWidth'));dom.css(i.scrollbarXRail,'display','block');i.railXMarginWidth=_.toInt(dom.css(i.scrollbarXRail,'marginLeft'))+_.toInt(dom.css(i.scrollbarXRail,'marginRight'));dom.css(i.scrollbarXRail,'display','');i.railXWidth=null;i.railXRatio=null;i.scrollbarYRail=dom.appendTo(dom.e('div','ps-scrollbar-y-rail'),element);i.scrollbarY=dom.appendTo(dom.e('div','ps-scrollbar-y'),i.scrollbarYRail);i.scrollbarY.setAttribute('tabindex',0);i.event.bind(i.scrollbarY,'focus',focus);i.event.bind(i.scrollbarY,'blur',blur);i.scrollbarYActive=null;i.scrollbarYHeight=null;i.scrollbarYTop=null;i.scrollbarYRight=_.toInt(dom.css(i.scrollbarYRail,'right'));i.isScrollbarYUsingRight=i.scrollbarYRight===i.scrollbarYRight;i.scrollbarYLeft=i.isScrollbarYUsingRight?null:_.toInt(dom.css(i.scrollbarYRail,'left'));i.scrollbarYOuterWidth=i.isRtl?_.outerWidth(i.scrollbarY):null;i.railBorderYWidth=_.toInt(dom.css(i.scrollbarYRail,'borderTopWidth'))+_.toInt(dom.css(i.scrollbarYRail,'borderBottomWidth'));dom.css(i.scrollbarYRail,'display','block');i.railYMarginHeight=_.toInt(dom.css(i.scrollbarYRail,'marginTop'))+_.toInt(dom.css(i.scrollbarYRail,'marginBottom'));dom.css(i.scrollbarYRail,'display','');i.railYHeight=null;i.railYRatio=null;}
function getId(element){return element.getAttribute('data-ps-id');}
function setId(element,id){element.setAttribute('data-ps-id',id);}
function removeId(element){element.removeAttribute('data-ps-id');}
exports.add=function(element){var newId=guid();setId(element,newId);instances[newId]=new Instance(element);return instances[newId];};exports.remove=function(element){delete instances[getId(element)];removeId(element);};exports.get=function(element){return instances[getId(element)];};},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(require,module,exports){'use strict';var _=require('../lib/helper');var cls=require('../lib/class');var dom=require('../lib/dom');var instances=require('./instances');var updateScroll=require('./update-scroll');function getThumbSize(i,thumbSize){if(i.settings.minScrollbarLength){thumbSize=Math.max(thumbSize,i.settings.minScrollbarLength);}
if(i.settings.maxScrollbarLength){thumbSize=Math.min(thumbSize,i.settings.maxScrollbarLength);}
return thumbSize;}
function updateCss(element,i){var xRailOffset={width:i.railXWidth};if(i.isRtl){xRailOffset.left=i.negativeScrollAdjustment+element.scrollLeft+i.containerWidth-i.contentWidth;}else{xRailOffset.left=element.scrollLeft;}
if(i.isScrollbarXUsingBottom){xRailOffset.bottom=i.scrollbarXBottom-element.scrollTop;}else{xRailOffset.top=i.scrollbarXTop+element.scrollTop;}
dom.css(i.scrollbarXRail,xRailOffset);var yRailOffset={top:element.scrollTop,height:i.railYHeight};if(i.isScrollbarYUsingRight){if(i.isRtl){yRailOffset.right=i.contentWidth-(i.negativeScrollAdjustment+element.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth;}else{yRailOffset.right=i.scrollbarYRight-element.scrollLeft;}}else{if(i.isRtl){yRailOffset.left=i.negativeScrollAdjustment+element.scrollLeft+i.containerWidth*2-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth;}else{yRailOffset.left=i.scrollbarYLeft+element.scrollLeft;}}
dom.css(i.scrollbarYRail,yRailOffset);dom.css(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth});dom.css(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth});}
module.exports=function(element){var i=instances.get(element);i.containerWidth=element.clientWidth;i.containerHeight=element.clientHeight;i.contentWidth=element.scrollWidth;i.contentHeight=element.scrollHeight;var existingRails;if(!element.contains(i.scrollbarXRail)){existingRails=dom.queryChildren(element,'.ps-scrollbar-x-rail');if(existingRails.length>0){existingRails.forEach(function(rail){dom.remove(rail);});}
dom.appendTo(i.scrollbarXRail,element);}
if(!element.contains(i.scrollbarYRail)){existingRails=dom.queryChildren(element,'.ps-scrollbar-y-rail');if(existingRails.length>0){existingRails.forEach(function(rail){dom.remove(rail);});}
dom.appendTo(i.scrollbarYRail,element);}
if(!i.settings.suppressScrollX&&i.containerWidth+i.settings.scrollXMarginOffset<i.contentWidth){i.scrollbarXActive=true;i.railXWidth=i.containerWidth-i.railXMarginWidth;i.railXRatio=i.containerWidth/i.railXWidth;i.scrollbarXWidth=getThumbSize(i,_.toInt(i.railXWidth*i.containerWidth/i.contentWidth));i.scrollbarXLeft=_.toInt((i.negativeScrollAdjustment+element.scrollLeft)*(i.railXWidth-i.scrollbarXWidth)/(i.contentWidth-i.containerWidth));}else{i.scrollbarXActive=false;}
if(!i.settings.suppressScrollY&&i.containerHeight+i.settings.scrollYMarginOffset<i.contentHeight){i.scrollbarYActive=true;i.railYHeight=i.containerHeight-i.railYMarginHeight;i.railYRatio=i.containerHeight/i.railYHeight;i.scrollbarYHeight=getThumbSize(i,_.toInt(i.railYHeight*i.containerHeight/i.contentHeight));i.scrollbarYTop=_.toInt(element.scrollTop*(i.railYHeight-i.scrollbarYHeight)/(i.contentHeight-i.containerHeight));}else{i.scrollbarYActive=false;}
if(i.scrollbarXLeft>=i.railXWidth-i.scrollbarXWidth){i.scrollbarXLeft=i.railXWidth-i.scrollbarXWidth;}
if(i.scrollbarYTop>=i.railYHeight-i.scrollbarYHeight){i.scrollbarYTop=i.railYHeight-i.scrollbarYHeight;}
updateCss(element,i);if(i.scrollbarXActive){cls.add(element,'ps-active-x');}else{cls.remove(element,'ps-active-x');i.scrollbarXWidth=0;i.scrollbarXLeft=0;updateScroll(element,'left',0);}
if(i.scrollbarYActive){cls.add(element,'ps-active-y');}else{cls.remove(element,'ps-active-y');i.scrollbarYHeight=0;i.scrollbarYTop=0;updateScroll(element,'top',0);}};},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(require,module,exports){'use strict';var instances=require('./instances');var upEvent=document.createEvent('Event');var downEvent=document.createEvent('Event');var leftEvent=document.createEvent('Event');var rightEvent=document.createEvent('Event');var yEvent=document.createEvent('Event');var xEvent=document.createEvent('Event');var xStartEvent=document.createEvent('Event');var xEndEvent=document.createEvent('Event');var yStartEvent=document.createEvent('Event');var yEndEvent=document.createEvent('Event');var lastTop;var lastLeft;upEvent.initEvent('ps-scroll-up',true,true);downEvent.initEvent('ps-scroll-down',true,true);leftEvent.initEvent('ps-scroll-left',true,true);rightEvent.initEvent('ps-scroll-right',true,true);yEvent.initEvent('ps-scroll-y',true,true);xEvent.initEvent('ps-scroll-x',true,true);xStartEvent.initEvent('ps-x-reach-start',true,true);xEndEvent.initEvent('ps-x-reach-end',true,true);yStartEvent.initEvent('ps-y-reach-start',true,true);yEndEvent.initEvent('ps-y-reach-end',true,true);module.exports=function(element,axis,value){if(typeof element==='undefined'){throw'You must provide an element to the update-scroll function';}
if(typeof axis==='undefined'){throw'You must provide an axis to the update-scroll function';}
if(typeof value==='undefined'){throw'You must provide a value to the update-scroll function';}
if(axis==='top'&&value<=0){element.scrollTop=value=0;element.dispatchEvent(yStartEvent);}
if(axis==='left'&&value<=0){element.scrollLeft=value=0;element.dispatchEvent(xStartEvent);}
var i=instances.get(element);if(axis==='top'&&value>=i.contentHeight-i.containerHeight){value=i.contentHeight-i.containerHeight;if(value-element.scrollTop<=1){value=element.scrollTop;}else{element.scrollTop=value;}
element.dispatchEvent(yEndEvent);}
if(axis==='left'&&value>=i.contentWidth-i.containerWidth){value=i.contentWidth-i.containerWidth;if(value-element.scrollLeft<=1){value=element.scrollLeft;}else{element.scrollLeft=value;}
element.dispatchEvent(xEndEvent);}
if(!lastTop){lastTop=element.scrollTop;}
if(!lastLeft){lastLeft=element.scrollLeft;}
if(axis==='top'&&value<lastTop){element.dispatchEvent(upEvent);}
if(axis==='top'&&value>lastTop){element.dispatchEvent(downEvent);}
if(axis==='left'&&value<lastLeft){element.dispatchEvent(leftEvent);}
if(axis==='left'&&value>lastLeft){element.dispatchEvent(rightEvent);}
if(axis==='top'){element.scrollTop=lastTop=value;element.dispatchEvent(yEvent);}
if(axis==='left'){element.scrollLeft=lastLeft=value;element.dispatchEvent(xEvent);}};},{"./instances":18}],21:[function(require,module,exports){'use strict';var _=require('../lib/helper');var dom=require('../lib/dom');var instances=require('./instances');var updateGeometry=require('./update-geometry');var updateScroll=require('./update-scroll');module.exports=function(element){var i=instances.get(element);if(!i){return;}
i.negativeScrollAdjustment=i.isNegativeScroll?element.scrollWidth-element.clientWidth:0;dom.css(i.scrollbarXRail,'display','block');dom.css(i.scrollbarYRail,'display','block');i.railXMarginWidth=_.toInt(dom.css(i.scrollbarXRail,'marginLeft'))+_.toInt(dom.css(i.scrollbarXRail,'marginRight'));i.railYMarginHeight=_.toInt(dom.css(i.scrollbarYRail,'marginTop'))+_.toInt(dom.css(i.scrollbarYRail,'marginBottom'));dom.css(i.scrollbarXRail,'display','none');dom.css(i.scrollbarYRail,'display','none');updateGeometry(element);updateScroll(element,'top',element.scrollTop);updateScroll(element,'left',element.scrollLeft);dom.css(i.scrollbarXRail,'display','');dom.css(i.scrollbarYRail,'display','');};},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"==f.call(e)}function s(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),u&&(this.jqDeferred=new u.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var u=e.jQuery,c=e.console,f=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0;e<this.elements.length;e++){var t=this.elements[e];this.addElementImages(t)}},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(e){for(var t=m(e),n=/url\(['"]*([^'"\)]+)['"]*\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[1];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}};var m=e.getComputedStyle||function(e){return e.currentStyle};return o.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},o.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var n=0;n<this.images.length;n++){var i=this.images[n];i.once("progress",e),i.check()}},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=new t,h.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,n.bind(this.proxyImage,"load",this),n.bind(this.proxyImage,"error",this),n.bind(this.img,"load",this),n.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.img,t)},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this),n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype=new h,a.prototype.check=function(){n.bind(this.img,"load",this),n.bind(this.img,"error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.element,t)},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(u=t,u.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o});
/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
( function( window, factory ) {
  'use strict';
  /* globals define: false, module: false, require: false */
  if ( typeof define == 'function' && define.amd ) {
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }
}( window, function factory( window, jQuery ) {
'use strict';
var arraySlice = Array.prototype.slice;
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };
function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }
  if ( !PluginClass.prototype.option ) {
    PluginClass.prototype.option = function( opts ) {
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    plainCall( this, arg0 );
    return this;
  };
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }
      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }
      var value = method.apply( instance, args );
      returnValue = returnValue === undefined ? value : returnValue;
    });
    return returnValue !== undefined ? returnValue : $elems;
  }
  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        instance.option( options );
        instance._init();
      } else {
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }
  updateJQuery( $ );
}
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}
updateJQuery( jQuery || window.jQuery );
return jQueryBridget;
}));
/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */
/* jshint unused: true, undef: true, strict: true */
( function( global, factory ) {
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
}( typeof window != 'undefined' ? window : this, function() {
function EvEmitter() {}
var proto = EvEmitter.prototype;
proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  var events = this._events = this._events || {};
  var listeners = events[ eventName ] = events[ eventName ] || [];
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }
  return this;
};
proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  this.on( eventName, listener );
  var onceEvents = this._onceEvents = this._onceEvents || {};
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  onceListeners[ listener ] = true;
  return this;
};
proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }
  return this;
};
proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      this.off( eventName, listener );
      delete onceListeners[ listener ];
    }
    listener.apply( this, args );
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }
  return this;
};
return EvEmitter;
}));
/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */
( function( window, factory ) {
  'use strict';
  if ( typeof define == 'function' && define.amd ) {
    define( 'get-size/get-size',[],function() {
      return factory();
    });
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory();
  } else {
    window.getSize = factory();
  }
})( window, function factory() {
'use strict';
function getStyleSize( value ) {
  var num = parseFloat( value );
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}
function noop() {}
var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };
var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];
var measurementsLength = measurements.length;
function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}
var isSetup = false;
var isBoxSizeOuter;
/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  if ( isSetup ) {
    return;
  }
  isSetup = true;
  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';
  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );
}
function getSize( elem ) {
  setup();
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }
  var style = getStyle( elem );
  if ( style.display == 'none' ) {
    return getZeroSize();
  }
  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;
  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }
  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }
  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }
  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );
  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;
  return size;
}
return getSize;
});
/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  if ( typeof define == 'function' && define.amd ) {
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory();
  } else {
    window.matchesSelector = factory();
  }
}( window, function factory() {
  'use strict';
  var matchesMethod = ( function() {
    var ElemProto = Element.prototype;
    if ( ElemProto.matches ) {
      return 'matches';
    }
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();
  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };
}));
/**
 * Fizzy UI utils v2.0.2
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
( function( window, factory ) {
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }
}( window, function factory( window, matchesSelector ) {
var utils = {};
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};
utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};
utils.makeArray = function( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    ary.push( obj );
  }
  return ary;
};
utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};
utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};
utils.filterFindElements = function( elems, selector ) {
  elems = utils.makeArray( elems );
  var ffElems = [];
  elems.forEach( function( elem ) {
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    var childElems = elem.querySelectorAll( selector );
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });
  return ffElems;
};
utils.debounceMethod = function( _class, methodName, threshold ) {
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';
  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};
utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    callback();
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};
var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;
    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      var instance = new WidgetClass( elem, options );
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });
  });
};
return utils;
}));
/**
 * Outlayer Item
 */
( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }
}( window, function factory( EvEmitter, getSize ) {
'use strict';
function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}
var docElemStyle = document.documentElement.style;
var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};
function Item( element, layout ) {
  if ( !element ) {
    return;
  }
  this.element = element;
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };
  this._create();
}
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;
proto._create = function() {
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };
  this.css({
    position: 'absolute'
  });
};
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};
proto.getSize = function() {
  this.size = getSize( this.element );
};
/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;
  for ( var prop in style ) {
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
  this.position.x = x;
  this.position.y = y;
};
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';
  var x = this.position.x + layoutSize[ xPadding ];
  style[ xProperty ] = this.getXValue( x );
  style[ xResetProperty ] = '';
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';
  var y = this.position.y + layoutSize[ yPadding ];
  style[ yProperty ] = this.getYValue( y );
  style[ yResetProperty ] = '';
  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};
proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};
proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};
proto._transitionTo = function( x, y ) {
  this.getPosition();
  var curX = this.position.x;
  var curY = this.position.y;
  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;
  this.setPosition( x, y );
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }
  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );
  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};
proto.getTranslate = function( x, y ) {
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};
proto.moveTo = proto._transitionTo;
proto.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};
/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }
  var _transition = this._transn;
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }
  if ( args.from ) {
    this.css( args.from );
    var h = this.element.offsetHeight;
    h = null;
  }
  this.enableTransition( args.to );
  this.css( args.to );
  this.isTransitioning = true;
};
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}
var transitionProps = 'opacity,' + toDashedAll( transformProperty );
proto.enableTransition = function(/* style */) {
  if ( this.isTransitioning ) {
    return;
  }
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  this.element.addEventListener( transitionEndEvent, this, false );
};
proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};
proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};
proto.ontransitionend = function( event ) {
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;
  delete _transition.ingProperties[ propertyName ];
  if ( isEmptyObj( _transition.ingProperties ) ) {
    this.disableTransition();
  }
  if ( propertyName in _transition.clean ) {
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }
  this.emitEvent( 'transitionEnd', [ this ] );
};
proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};
/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};
var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};
proto.removeTransitionStyles = function() {
  this.css( cleanTransitionStyle );
};
proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};
proto.remove = function() {
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};
proto.reveal = function() {
  delete this.isHidden;
  this.css({ display: '' });
  var options = this.layout.options;
  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;
  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};
proto.onRevealTransitionEnd = function() {
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};
/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  for ( var prop in optionStyle ) {
    return prop;
  }
};
proto.hide = function() {
  this.isHidden = true;
  this.css({ display: '' });
  var options = this.layout.options;
  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;
  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};
proto.onHideTransitionEnd = function() {
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};
proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};
return Item;
}));
/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */
( function( window, factory ) {
  'use strict';
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }
}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';
var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};
var GUID = 0;
var instances = {};
/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id
  this._create();
  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};
var proto = Outlayer.prototype;
utils.extend( proto, EvEmitter.prototype );
/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};
/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};
Outlayer.compatOptions = {
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};
proto._create = function() {
  this.reloadItems();
  this.stamps = [];
  this.stamp( this.options.stamp );
  utils.extend( this.element.style, this.options.containerStyle );
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};
proto.reloadItems = function() {
  this.items = this._itemize( this.element.children );
};
/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {
  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }
  return items;
};
/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};
/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};
/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );
  this._isLayoutInited = true;
};
proto._init = proto.layout;
/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};
proto.getSize = function() {
  this.size = getSize( this.element );
};
/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    this[ measurement ] = 0;
  } else {
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};
/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );
  this._layoutItems( items, isInstant );
  this._postLayout();
};
/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};
/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );
  if ( !items || !items.length ) {
    return;
  }
  var queue = [];
  items.forEach( function( item ) {
    var position = this._getItemLayoutPosition( item );
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );
  this._processLayoutQueue( queue );
};
/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};
/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};
/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};
/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};
proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};
/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;
/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }
  var elemSize = this.size;
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }
  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};
/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }
  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }
  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};
/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );
  if ( jQuery ) {
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      this.$element.trigger( type, args );
    }
  }
};
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};
/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};
/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }
  this.stamps = this.stamps.concat( elems );
  elems.forEach( this.ignore, this );
};
/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }
  elems.forEach( function( elem ) {
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};
/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};
proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }
  this._getBoundingRect();
  this.stamps.forEach( this._manageStamp, this );
};
proto._getBoundingRect = function() {
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};
/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;
/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};
proto.handleEvent = utils.handleEvent;
/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};
/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};
proto.onresize = function() {
  this.resize();
};
utils.debounceMethod( Outlayer, 'onresize', 100 );
proto.resize = function() {
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }
  this.layout();
};
/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};
/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  this.layoutItems( items, true );
  this.reveal( items );
};
/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  this._resetLayout();
  this._manageStamps();
  this.layoutItems( items, true );
  this.reveal( items );
  this.layoutItems( previousItems );
};
/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};
/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};
/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};
/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};
/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      return item;
    }
  }
};
/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );
  return items;
};
/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );
  this._emitCompleteOnItems( 'remove', removeItems );
  if ( !removeItems || !removeItems.length ) {
    return;
  }
  removeItems.forEach( function( item ) {
    item.remove();
    utils.removeFrom( this.items, item );
  }, this );
};
proto.destroy = function() {
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  this.items.forEach( function( item ) {
    item.destroy();
  });
  this.unbindResize();
  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }
};
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};
/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  var Layout = subclass( Outlayer );
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );
  Layout.namespace = namespace;
  Layout.data = Outlayer.data;
  Layout.Item = subclass( Item );
  utils.htmlInit( Layout, namespace );
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }
  return Layout;
};
function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }
  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;
  return SubClass;
}
var msUnits = {
  ms: 1,
  s: 1000
};
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}
Outlayer.Item = Item;
return Outlayer;
}));
/**
 * Isotope Item
**/
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'isotope/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('outlayer')
    );
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }
}( window, function factory( Outlayer ) {
'use strict';
function Item() {
  Outlayer.Item.apply( this, arguments );
}
var proto = Item.prototype = Object.create( Outlayer.Item.prototype );
var _create = proto._create;
proto._create = function() {
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};
proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  this.sortData.id = this.id;
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};
var _destroy = proto.destroy;
proto.destroy = function() {
  _destroy.apply( this, arguments );
  this.css({
    display: ''
  });
};
return Item;
}));
/**
 * Isotope LayoutMode
 */
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'isotope/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }
}( window, function factory( getSize, Outlayer ) {
  'use strict';
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }
  var proto = LayoutMode.prototype;
  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];
  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });
  proto.needsVerticalResizeLayout = function() {
    var size = getSize( this.isotope.element );
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };
  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };
  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };
  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };
  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    this._getMeasurement( segmentName, outerSize );
    if ( this[ segmentName ] ) {
      return;
    }
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      this.isotope.size[ 'inner' + size ];
  };
  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };
  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };
  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };
  LayoutMode.modes = {};
  LayoutMode.create = function( namespace, options ) {
    function Mode() {
      LayoutMode.apply( this, arguments );
    }
    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;
    if ( options ) {
      Mode.options = options;
    }
    Mode.prototype.namespace = namespace;
    LayoutMode.modes[ namespace ] = Mode;
    return Mode;
  };
  return LayoutMode;
}));
/*!
 * Masonry v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'masonry/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }
}( window, function factory( Outlayer, getSize ) {
  var Masonry = Outlayer.create('masonry');
  Masonry.compatOptions.fitWidth = 'isFitWidth';
  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }
    this.maxY = 0;
  };
  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        this.containerWidth;
    }
    var columnWidth = this.columnWidth += this.gutter;
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    var excess = columnWidth - containerWidth % columnWidth;
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };
  Masonry.prototype.getContainerWidth = function() {
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };
  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    var colGroup = this._getColGroup( colSpan );
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = colGroup.indexOf( minimumY );
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }
    return position;
  };
  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs;
    }
    var colGroup = [];
    var groupCount = this.cols + 1 - colSpan;
    for ( var i = 0; i < groupCount; i++ ) {
      var groupColYs = this.colYs.slice( i, i + colSpan );
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };
  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };
  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };
    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }
    return size;
  };
  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };
  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };
  return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'isotope/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }
}( window, function factory( LayoutMode, Masonry ) {
'use strict';
  var MasonryMode = LayoutMode.create('masonry');
  var proto = MasonryMode.prototype;
  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };
  for ( var method in Masonry.prototype ) {
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }
  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };
  return MasonryMode;
}));
/**
 * fitRows layout mode
 */
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'isotope/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    factory(
      window.Isotope.LayoutMode
    );
  }
}( window, function factory( LayoutMode ) {
'use strict';
var FitRows = LayoutMode.create('fitRows');
var proto = FitRows.prototype;
proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};
proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var itemWidth = item.size.outerWidth + this.gutter;
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }
  var position = {
    x: this.x,
    y: this.y
  };
  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;
  return position;
};
proto._getContainerSize = function() {
  return { height: this.maxY };
};
return FitRows;
}));
/**
 * vertical layout mode
 */
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( 'isotope/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    factory(
      window.Isotope.LayoutMode
    );
  }
}( window, function factory( LayoutMode ) {
'use strict';
var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});
var proto = Vertical.prototype;
proto._resetLayout = function() {
  this.y = 0;
};
proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};
proto._getContainerSize = function() {
  return { height: this.y };
};
return Vertical;
}));
/*!
 * Isotope v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
( function( window, factory ) {
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope/js/item',
        'isotope/js/layout-mode',
        'isotope/js/layout-modes/masonry',
        'isotope/js/layout-modes/fit-rows',
        'isotope/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope/js/item'),
      require('isotope/js/layout-mode'),
      require('isotope/js/layout-modes/masonry'),
      require('isotope/js/layout-modes/fit-rows'),
      require('isotope/js/layout-modes/vertical')
    );
  } else {
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }
}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {
var jQuery = window.jQuery;
var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });
  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;
  var proto = Isotope.prototype;
  proto._create = function() {
    this.itemGUID = 0;
    this._sorters = {};
    this._getSorters();
    Outlayer.prototype._create.call( this );
    this.modes = {};
    this.filteredItems = this.items;
    this.sortHistory = [ 'original-order' ];
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };
  proto.reloadItems = function() {
    this.itemGUID = 0;
    Outlayer.prototype.reloadItems.call( this );
  };
  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };
  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    this.modes[ name ] = new Mode( this );
  };
  proto.layout = function() {
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };
  proto._layout = function() {
    var isInstant = this._getIsInstant();
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );
    this._isLayoutInited = true;
  };
  proto.arrange = function( opts ) {
    this.option( opts );
    this._getIsInstant();
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;
    this._bindArrangeComplete();
    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }
    this._sort();
    this._layout();
  };
  proto._init = proto.arrange;
  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };
  proto._bindArrangeComplete = function() {
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };
  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];
    var test = this._getFilterTest( filter );
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      var isMatched = test( item );
      if ( isMatched ) {
        matches.push( item );
      }
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      return function( item ) {
        return filter( item.element );
      };
    }
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };
  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      items = this.items;
    }
    this._getSorters();
    this._updateItemsSortData( items );
  };
  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };
  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    var len = items && items.length;
    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };
  var mungeSorter = ( function() {
    function mungeSorter( sorter ) {
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      var args = trim( sorter ).split(' ');
      var query = args[0];
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      var parser = Isotope.sortDataParsers[ args[1] ];
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      function( elem ) {
        return elem && getValue( elem );
      };
      return sorter;
    }
    function getValueGetter( attr, query ) {
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }
    return mungeSorter;
  })();
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };
  proto._sort = function() {
    var sortByOpt = this.options.sortBy;
    if ( !sortByOpt ) {
      return;
    }
    var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
    var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
    if ( sortByOpt != this.sortHistory[0] ) {
      this.sortHistory.unshift( sortByOpt );
    }
  };
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    mode.options = this.options[ layoutMode ];
    return mode;
  };
  proto._resetLayout = function() {
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };
  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };
  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };
  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };
  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    var filteredItems = this._filterRevealAdded( items );
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    this._resetLayout();
    this._manageStamps();
    var filteredItems = this._filterRevealAdded( items );
    this.layoutItems( this.filteredItems );
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };
  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    this.reveal( filtered.matches );
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };
  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    var filteredInsertItems = this._filter( items ).matches;
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };
  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    _remove.call( this, elems );
    var len = removeItems && removeItems.length;
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      utils.removeFrom( this.filteredItems, item );
    }
  };
  proto.shuffle = function() {
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };
  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    var transitionDuration = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var returnValue = fn.apply( this, args );
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };
  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };
  return Isotope;
}));
/*!
 * Packery layout mode PACKAGED v2.0.0
 * sub-classes Packery
 */
!function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof module&&module.exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof module&&module.exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}var c=b.prototype;c.reset=function(){this.spaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=d[this.sortDirection]||d.downwardLeftToRight},c.pack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b];if(c.canFit(a)){this.placeInSpace(a,c);break}}},c.columnPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.x<=a.x&&c.x+c.width>=a.x+a.width&&c.height>=a.height-.01;if(d){a.y=c.y,this.placed(a);break}}},c.rowPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.y<=a.y&&c.y+c.height>=a.y+a.height&&c.width>=a.width-.01;if(d){a.x=c.x,this.placed(a);break}}},c.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},c.placed=function(a){for(var b=[],c=0;c<this.spaces.length;c++){var d=this.spaces[c],e=d.getMaximalFreeRects(a);e?b.push.apply(b,e):b.push(d)}this.spaces=b,this.mergeSortSpaces()},c.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},c.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b];a:for(;c;){for(var d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue a}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}b++,c=a[b]}return a};var d={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("./rect")):a.Packery.Item=b(a.Outlayer,a.Packery.Rect)}(window,function(a,b){var c=document.documentElement.style,d="string"==typeof c.transform?"transform":"WebkitTransform",e=function(){a.Item.apply(this,arguments)},f=e.prototype=Object.create(a.Item.prototype),g=f._create;f._create=function(){g.call(this),this.rect=new b};var h=f.moveTo;return f.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b),e=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d;return e?void this.goTo(a,b):void h.apply(this,arguments)},f.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},f.disablePlacing=function(){this.isPlacing=!1},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},f.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||(a=this.dropPlaceholder=document.createElement("div"),a.className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},f.positionDropPlaceholder=function(){this.dropPlaceholder.style[d]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},f.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof module&&module.exports?module.exports=b(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e){function f(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function g(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function h(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=b.create("packery");i.Item=e;var j=i.prototype;j._create=function(){b.prototype._create.call(this),this.packer=new d,this.shiftPacker=new d,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(b,c){c&&a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},j._resetLayout=function(){this.getSize(),this._getMeasurements();var a,b,c;this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},j._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},j._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},j.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},j._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},j._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},j._setRectSize=function(b,c){var d=a(b),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},j._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},j._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},j._manageStamp=function(a){var b,d=this.getItem(a);if(d&&d.isPlacing)b=d.rect;else{var e=this._getElementOffset(a);b=new c({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},j.sortItemsByPosition=function(){var a=this._getOption("horizontal")?g:f;this.items.sort(a)},j.fit=function(a,b,c){var d=this.getItem(a);d&&(this.stamp(d.element),d.enablePlacing(),this.updateShiftTargets(d),b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,this.shift(d,b,c),this._bindFitEvents(d),d.moveTo(d.rect.x,d.rect.y),this.shiftLayout(),this.unstamp(d.element),this.sortItemsByPosition(),d.disablePlacing())},j._bindFitEvents=function(a){function b(){d++,2==d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},j.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},j.needsResizeLayout=function(){var b=a(this.element),c=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[c]!=this.size[c]},j.resizeShiftPercentLayout=function(){var b=this._getItemsForLayout(this.items),c=this._getOption("horizontal"),d=c?"y":"x",e=c?"height":"width",f=c?"rowHeight":"columnWidth",g=c?"innerHeight":"innerWidth",h=this[f];if(h=h&&h+this.gutter){this._getMeasurements();var i=this[f]+this.gutter;b.forEach(function(a){var b=Math.round(a.rect[d]/h);a.rect[d]=b*i})}else{var j=a(this.element)[g]+this.gutter,k=this.packer[e];b.forEach(function(a){a.rect[d]=a.rect[d]/k*j})}this.shiftLayout()},j.itemDragStart=function(a){if(this.isEnabled){this.stamp(a);var b=this.getItem(a);b&&(b.enablePlacing(),b.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(b))}},j.updateShiftTargets=function(a){this.shiftPacker.reset(),this._getBoundingRect();var b=this._getOption("originLeft"),d=this._getOption("originTop");this.stamps.forEach(function(a){var e=this.getItem(a);if(!e||!e.isPlacing){var f=this._getElementOffset(a),g=new c({x:b?f.left:f.right,y:d?f.top:f.bottom});this._setRectSize(a,g),this.shiftPacker.placed(g)}},this);var e=this._getOption("horizontal"),f=e?"rowHeight":"columnWidth",g=e?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h,i=this[f];if(i=i&&i+this.gutter){var j=Math.ceil(a.rect[g]/i),k=Math.floor((this.shiftPacker[g]+this.gutter)/i);h=(k-j)*i;for(var l=0;k>l;l++)this._addShiftTarget(l*i,0,h)}else h=this.shiftPacker[g]+this.gutter-a.rect[g],this._addShiftTarget(0,0,h);var m=this._getItemsForLayout(this.items),n=this._getPackMethod();m.forEach(function(a){var b=a.rect;this._setRectSize(a.element,b),this.shiftPacker[n](b),this._addShiftTarget(b.x,b.y,h);var c=e?b.x+b.width:b.x,d=e?b.y:b.y+b.height;if(this._addShiftTarget(c,d,h),i)for(var f=Math.round(b[g]/i),j=1;f>j;j++){var k=e?c:b.x+i*j,l=e?b.y+i*j:d;this._addShiftTarget(k,l,h)}},this)},j._addShiftTarget=function(a,b,c){var d=this._getOption("horizontal")?b:a;if(!(0!==d&&d>c)){var e=a+","+b,f=-1!=this.shiftTargetKeys.indexOf(e);f||(this.shiftTargetKeys.push(e),this.shiftTargets.push({x:a,y:b}))}},j.shift=function(a,b,c){var d,e=1/0,f={x:b,y:c};this.shiftTargets.forEach(function(a){var b=h(a,f);e>b&&(d=a,e=b)}),a.rect.x=d.x,a.rect.y=d.y};var k=120;j.itemDragMove=function(a,b,c){function d(){f.shift(e,b,c),e.positionDropPlaceholder(),f.layout()}var e=this.isEnabled&&this.getItem(a);if(e){b-=this.size.paddingLeft,c-=this.size.paddingTop;var f=this,g=new Date;this._itemDragTime&&g-this._itemDragTime<k?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(d,k)):(d(),this._itemDragTime=g)}},j.itemDragEnd=function(a){function b(){d++,2==d&&(c.element.classList.remove("is-positioning-post-drag"),c.hideDropPlaceholder(),e.dispatchEvent("dragItemPositioned",null,[c]))}var c=this.isEnabled&&this.getItem(a);if(c){clearTimeout(this.dragTimeout),c.element.classList.add("is-positioning-post-drag");var d=0,e=this;c.once("layout",b),this.once("layoutComplete",b),c.moveTo(c.rect.x,c.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),c.disablePlacing(),this.unstamp(c.element)}},j.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},j.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},j._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},j.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},j.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},j._bindUIDraggableEvents=function(a,b){var c=this.handleUIDraggable;a[b]("dragstart",c.start)[b]("drag",c.drag)[b]("dragstop",c.stop)};var l=j.destroy;return j.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},i.Rect=c,i.Packer=d,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery"],b):"object"==typeof module&&module.exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery")):b(a.Isotope.LayoutMode,a.Packery)}(window,function(a,b){var c=a.create("packery"),d=c.prototype,e={_getElementOffset:!0,_getMeasurement:!0};for(var f in b.prototype)e[f]||(d[f]=b.prototype[f]);var g=d._resetLayout;d._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)};var h=d._getItemLayoutPosition;d._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)};var i=d.needsResizeLayout;d.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)};var j=d._getOption;return d._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},c});
jQuery.extend(jQuery.easing,{easeIn:function(x,t,b,c,d){return jQuery.easing.easeInQuad(x,t,b,c,d);},easeOut:function(x,t,b,c,d){return jQuery.easing.easeOutQuad(x,t,b,c,d);},easeInOut:function(x,t,b,c,d){return jQuery.easing.easeInOutQuad(x,t,b,c,d);},expoin:function(x,t,b,c,d){return jQuery.easing.easeInExpo(x,t,b,c,d);},expoout:function(x,t,b,c,d){return jQuery.easing.easeOutExpo(x,t,b,c,d);},expoinout:function(x,t,b,c,d){return jQuery.easing.easeInOutExpo(x,t,b,c,d);},bouncein:function(x,t,b,c,d){return jQuery.easing.easeInBounce(x,t,b,c,d);},bounceout:function(x,t,b,c,d){return jQuery.easing.easeOutBounce(x,t,b,c,d);},bounceinout:function(x,t,b,c,d){return jQuery.easing.easeInOutBounce(x,t,b,c,d);},elasin:function(x,t,b,c,d){return jQuery.easing.easeInElastic(x,t,b,c,d);},elasout:function(x,t,b,c,d){return jQuery.easing.easeOutElastic(x,t,b,c,d);},elasinout:function(x,t,b,c,d){return jQuery.easing.easeInOutElastic(x,t,b,c,d);},backin:function(x,t,b,c,d){return jQuery.easing.easeInBack(x,t,b,c,d);},backout:function(x,t,b,c,d){return jQuery.easing.easeOutBack(x,t,b,c,d);},backinout:function(x,t,b,c,d){return jQuery.easing.easeInOutBack(x,t,b,c,d);}});
;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(window.jQuery||window.Zepto);}}(function($){var CLOSE_EVENT='Close',BEFORE_CLOSE_EVENT='BeforeClose',AFTER_CLOSE_EVENT='AfterClose',BEFORE_APPEND_EVENT='BeforeAppend',MARKUP_PARSE_EVENT='MarkupParse',OPEN_EVENT='Open',CHANGE_EVENT='Change',NS='mfp',EVENT_NS='.'+NS,READY_CLASS='mfp-ready',REMOVING_CLASS='mfp-removing',PREVENT_CLOSE_CLASS='mfp-prevent-close';var mfp,MagnificPopup=function(){},_isJQ=!!(window.jQuery),_prevStatus,_window=$(window),_document,_prevContentType,_wrapClasses,_currPopupType;var _mfpOn=function(name,f){mfp.ev.on(NS+name+EVENT_NS,f);},_getEl=function(className,appendTo,html,raw){var el=document.createElement('div');el.className='mfp-'+className;if(html){el.innerHTML=html;}
if(!raw){el=$(el);if(appendTo){el.appendTo(appendTo);}}else if(appendTo){appendTo.appendChild(el);}
return el;},_mfpTrigger=function(e,data){mfp.ev.triggerHandler(NS+e,data);if(mfp.st.callbacks){e=e.charAt(0).toLowerCase()+e.slice(1);if(mfp.st.callbacks[e]){mfp.st.callbacks[e].apply(mfp,$.isArray(data)?data:[data]);}}},_getCloseBtn=function(type){if(type!==_currPopupType||!mfp.currTemplate.closeBtn){mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace('%title%',mfp.st.tClose));_currPopupType=type;}
return mfp.currTemplate.closeBtn;},_checkInstance=function(){if(!$.magnificPopup.instance){mfp=new MagnificPopup();mfp.init();$.magnificPopup.instance=mfp;}},supportsTransitions=function(){var s=document.createElement('p').style,v=['ms','O','Moz','Webkit'];if(s['transition']!==undefined){return true;}
while(v.length){if(v.pop()+'Transition'in s){return true;}}
return false;};MagnificPopup.prototype={constructor:MagnificPopup,init:function(){var appVersion=navigator.appVersion;mfp.isLowIE=mfp.isIE8=document.all&&!document.addEventListener;mfp.isAndroid=(/android/gi).test(appVersion);mfp.isIOS=(/iphone|ipad|ipod/gi).test(appVersion);mfp.supportsTransition=supportsTransitions();mfp.probablyMobile=(mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));_document=$(document);mfp.popupsCache={};},open:function(data){var i;if(data.isObj===false){mfp.items=data.items.toArray();mfp.index=0;var items=data.items,item;for(i=0;i<items.length;i++){item=items[i];if(item.parsed){item=item.el[0];}
if(item===data.el[0]){mfp.index=i;break;}}}else{mfp.items=$.isArray(data.items)?data.items:[data.items];mfp.index=data.index||0;}
if(mfp.isOpen){mfp.updateItemHTML();return;}
mfp.types=[];_wrapClasses='';if(data.mainEl&&data.mainEl.length){mfp.ev=data.mainEl.eq(0);}else{mfp.ev=_document;}
if(data.key){if(!mfp.popupsCache[data.key]){mfp.popupsCache[data.key]={};}
mfp.currTemplate=mfp.popupsCache[data.key];}else{mfp.currTemplate={};}
mfp.st=$.extend(true,{},$.magnificPopup.defaults,data);mfp.fixedContentPos=mfp.st.fixedContentPos==='auto'?!mfp.probablyMobile:mfp.st.fixedContentPos;if(mfp.st.modal){mfp.st.closeOnContentClick=false;mfp.st.closeOnBgClick=false;mfp.st.showCloseBtn=false;mfp.st.enableEscapeKey=false;}
if(!mfp.bgOverlay){mfp.bgOverlay=_getEl('bg').on('click'+EVENT_NS,function(){mfp.close();});mfp.wrap=_getEl('wrap').attr('tabindex',-1).on('click'+EVENT_NS,function(e){if(mfp._checkIfClose(e.target)){mfp.close();}});mfp.container=_getEl('container',mfp.wrap);}
mfp.contentContainer=_getEl('content');if(mfp.st.preloader){mfp.preloader=_getEl('preloader',mfp.container,mfp.st.tLoading);}
var modules=$.magnificPopup.modules;for(i=0;i<modules.length;i++){var n=modules[i];n=n.charAt(0).toUpperCase()+n.slice(1);mfp['init'+n].call(mfp);}
_mfpTrigger('BeforeOpen');if(mfp.st.showCloseBtn){if(!mfp.st.closeBtnInside){mfp.wrap.append(_getCloseBtn());}else{_mfpOn(MARKUP_PARSE_EVENT,function(e,template,values,item){values.close_replaceWith=_getCloseBtn(item.type);});_wrapClasses+=' mfp-close-btn-in';}}
if(mfp.st.alignTop){_wrapClasses+=' mfp-align-top';}
if(mfp.fixedContentPos){mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:'hidden',overflowY:mfp.st.overflowY});}else{mfp.wrap.css({top:_window.scrollTop(),position:'absolute'});}
if(mfp.st.fixedBgPos===false||(mfp.st.fixedBgPos==='auto'&&!mfp.fixedContentPos)){mfp.bgOverlay.css({height:_document.height(),position:'absolute'});}
if(mfp.st.enableEscapeKey){_document.on('keyup'+EVENT_NS,function(e){if(e.keyCode===27){mfp.close();}});}
_window.on('resize'+EVENT_NS,function(){mfp.updateSize();});if(!mfp.st.closeOnContentClick){_wrapClasses+=' mfp-auto-cursor';}
if(_wrapClasses)
mfp.wrap.addClass(_wrapClasses);var windowHeight=mfp.wH=_window.height();var windowStyles={};if(mfp.fixedContentPos){if(mfp._hasScrollBar(windowHeight)){var s=mfp._getScrollbarSize();if(s){windowStyles.marginRight=s;}}}
if(mfp.fixedContentPos){if(!mfp.isIE7){windowStyles.overflow='hidden';}else{$('body, html').css('overflow','hidden');}}
var classesToadd=mfp.st.mainClass;if(mfp.isIE7){classesToadd+=' mfp-ie7';}
if(classesToadd){mfp._addClassToMFP(classesToadd);}
mfp.updateItemHTML();_mfpTrigger('BuildControls');$('html').css(windowStyles);mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo||$(document.body));mfp._lastFocusedEl=document.activeElement;setTimeout(function(){if(mfp.content){mfp._addClassToMFP(READY_CLASS);mfp._setFocus();}else{mfp.bgOverlay.addClass(READY_CLASS);}
_document.on('focusin'+EVENT_NS,mfp._onFocusIn);},16);mfp.isOpen=true;mfp.updateSize(windowHeight);_mfpTrigger(OPEN_EVENT);return data;},close:function(){if(!mfp.isOpen)return;_mfpTrigger(BEFORE_CLOSE_EVENT);mfp.isOpen=false;if(mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition){mfp._addClassToMFP(REMOVING_CLASS);setTimeout(function(){mfp._close();},mfp.st.removalDelay);}else{mfp._close();}},_close:function(){_mfpTrigger(CLOSE_EVENT);var classesToRemove=REMOVING_CLASS+' '+READY_CLASS+' ';mfp.bgOverlay.detach();mfp.wrap.detach();mfp.container.empty();if(mfp.st.mainClass){classesToRemove+=mfp.st.mainClass+' ';}
mfp._removeClassFromMFP(classesToRemove);if(mfp.fixedContentPos){var windowStyles={marginRight:''};if(mfp.isIE7){$('body, html').css('overflow','');}else{windowStyles.overflow='';}
$('html').css(windowStyles);}
_document.off('keyup'+EVENT_NS+' focusin'+EVENT_NS);mfp.ev.off(EVENT_NS);mfp.wrap.attr('class','mfp-wrap').removeAttr('style');mfp.bgOverlay.attr('class','mfp-bg');mfp.container.attr('class','mfp-container');if(mfp.st.showCloseBtn&&(!mfp.st.closeBtnInside||mfp.currTemplate[mfp.currItem.type]===true)){if(mfp.currTemplate.closeBtn)
mfp.currTemplate.closeBtn.detach();}
if(mfp.st.autoFocusLast&&mfp._lastFocusedEl){$(mfp._lastFocusedEl).focus();}
mfp.currItem=null;mfp.content=null;mfp.currTemplate=null;mfp.prevHeight=0;_mfpTrigger(AFTER_CLOSE_EVENT);},updateSize:function(winHeight){if(mfp.isIOS){var zoomLevel=document.documentElement.clientWidth/window.innerWidth;var height=window.innerHeight*zoomLevel;mfp.wrap.css('height',height);mfp.wH=height;}else{mfp.wH=winHeight||_window.height();}
if(!mfp.fixedContentPos){mfp.wrap.css('height',mfp.wH);}
_mfpTrigger('Resize');},updateItemHTML:function(){var item=mfp.items[mfp.index];mfp.contentContainer.detach();if(mfp.content)
mfp.content.detach();if(!item.parsed){item=mfp.parseEl(mfp.index);}
var type=item.type;_mfpTrigger('BeforeChange',[mfp.currItem?mfp.currItem.type:'',type]);mfp.currItem=item;if(!mfp.currTemplate[type]){var markup=mfp.st[type]?mfp.st[type].markup:false;_mfpTrigger('FirstMarkupParse',markup);if(markup){mfp.currTemplate[type]=$(markup);}else{mfp.currTemplate[type]=true;}}
if(_prevContentType&&_prevContentType!==item.type){mfp.container.removeClass('mfp-'+_prevContentType+'-holder');}
var newContent=mfp['get'+type.charAt(0).toUpperCase()+type.slice(1)](item,mfp.currTemplate[type]);mfp.appendContent(newContent,type);item.preloaded=true;_mfpTrigger(CHANGE_EVENT,item);_prevContentType=item.type;mfp.container.prepend(mfp.contentContainer);_mfpTrigger('AfterChange');},appendContent:function(newContent,type){mfp.content=newContent;if(newContent){if(mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&mfp.currTemplate[type]===true){if(!mfp.content.find('.mfp-close').length){mfp.content.append(_getCloseBtn());}}else{mfp.content=newContent;}}else{mfp.content='';}
_mfpTrigger(BEFORE_APPEND_EVENT);mfp.container.addClass('mfp-'+type+'-holder');mfp.contentContainer.append(mfp.content);},parseEl:function(index){var item=mfp.items[index],type;if(item.tagName){item={el:$(item)};}else{type=item.type;item={data:item,src:item.src};}
if(item.el){var types=mfp.types;for(var i=0;i<types.length;i++){if(item.el.hasClass('mfp-'+types[i])){type=types[i];break;}}
item.src=item.el.attr('data-mfp-src');if(!item.src){item.src=item.el.attr('href');}}
item.type=type||mfp.st.type||'inline';item.index=index;item.parsed=true;mfp.items[index]=item;_mfpTrigger('ElementParse',item);return mfp.items[index];},addGroup:function(el,options){var eHandler=function(e){e.mfpEl=this;mfp._openClick(e,el,options);};if(!options){options={};}
var eName='click.magnificPopup';options.mainEl=el;if(options.items){options.isObj=true;el.off(eName).on(eName,eHandler);}else{options.isObj=false;if(options.delegate){el.off(eName).on(eName,options.delegate,eHandler);}else{options.items=el;el.off(eName).on(eName,eHandler);}}},_openClick:function(e,el,options){var midClick=options.midClick!==undefined?options.midClick:$.magnificPopup.defaults.midClick;if(!midClick&&(e.which===2||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){return;}
var disableOn=options.disableOn!==undefined?options.disableOn:$.magnificPopup.defaults.disableOn;if(disableOn){if($.isFunction(disableOn)){if(!disableOn.call(mfp)){return true;}}else{if(_window.width()<disableOn){return true;}}}
if(e.type){e.preventDefault();if(mfp.isOpen){e.stopPropagation();}}
options.el=$(e.mfpEl);if(options.delegate){options.items=el.find(options.delegate);}
mfp.open(options);},updateStatus:function(status,text){if(mfp.preloader){if(_prevStatus!==status){mfp.container.removeClass('mfp-s-'+_prevStatus);}
if(!text&&status==='loading'){text=mfp.st.tLoading;}
var data={status:status,text:text};_mfpTrigger('UpdateStatus',data);status=data.status;text=data.text;mfp.preloader.html(text);mfp.preloader.find('a').on('click',function(e){e.stopImmediatePropagation();});mfp.container.addClass('mfp-s-'+status);_prevStatus=status;}},_checkIfClose:function(target){if($(target).hasClass(PREVENT_CLOSE_CLASS)){return;}
var closeOnContent=mfp.st.closeOnContentClick;var closeOnBg=mfp.st.closeOnBgClick;if(closeOnContent&&closeOnBg){return true;}else{if(!mfp.content||$(target).hasClass('mfp-close')||(mfp.preloader&&target===mfp.preloader[0])){return true;}
if((target!==mfp.content[0]&&!$.contains(mfp.content[0],target))){if(closeOnBg){if($.contains(document,target)){return true;}}}else if(closeOnContent){return true;}}
return false;},_addClassToMFP:function(cName){mfp.bgOverlay.addClass(cName);mfp.wrap.addClass(cName);},_removeClassFromMFP:function(cName){this.bgOverlay.removeClass(cName);mfp.wrap.removeClass(cName);},_hasScrollBar:function(winHeight){return((mfp.isIE7?_document.height():document.body.scrollHeight)>(winHeight||_window.height()));},_setFocus:function(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus();},_onFocusIn:function(e){if(e.target!==mfp.wrap[0]&&!$.contains(mfp.wrap[0],e.target)){mfp._setFocus();return false;}},_parseMarkup:function(template,values,item){var arr;if(item.data){values=$.extend(item.data,values);}
_mfpTrigger(MARKUP_PARSE_EVENT,[template,values,item]);$.each(values,function(key,value){if(value===undefined||value===false){return true;}
arr=key.split('_');if(arr.length>1){var el=template.find(EVENT_NS+'-'+arr[0]);if(el.length>0){var attr=arr[1];if(attr==='replaceWith'){if(el[0]!==value[0]){el.replaceWith(value);}}else if(attr==='img'){if(el.is('img')){el.attr('src',value);}else{el.replaceWith($('<img>').attr('src',value).attr('class',el.attr('class')));}}else{el.attr(arr[1],value);}}}else{template.find(EVENT_NS+'-'+key).html(value);}});},_getScrollbarSize:function(){if(mfp.scrollbarSize===undefined){var scrollDiv=document.createElement("div");scrollDiv.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';document.body.appendChild(scrollDiv);mfp.scrollbarSize=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}
return mfp.scrollbarSize;}};$.magnificPopup={instance:null,proto:MagnificPopup.prototype,modules:[],open:function(options,index){_checkInstance();if(!options){options={};}else{options=$.extend(true,{},options);}
options.isObj=true;options.index=index||0;return this.instance.open(options);},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close();},registerModule:function(name,module){if(module.options){$.magnificPopup.defaults[name]=module.options;}
$.extend(this.proto,module.proto);this.modules.push(name);},defaults:{disableOn:0,key:null,midClick:false,mainClass:'',preloader:true,focus:'',closeOnContentClick:false,closeOnBgClick:true,closeBtnInside:true,showCloseBtn:true,enableEscapeKey:true,modal:false,alignTop:false,removalDelay:0,prependTo:null,fixedContentPos:'auto',fixedBgPos:'auto',overflowY:'auto',closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:'Close (Esc)',tLoading:'Loading...',autoFocusLast:true}};$.fn.magnificPopup=function(options){_checkInstance();var jqEl=$(this);if(typeof options==="string"){if(options==='open'){var items,itemOpts=_isJQ?jqEl.data('magnificPopup'):jqEl[0].magnificPopup,index=parseInt(arguments[1],10)||0;if(itemOpts.items){items=itemOpts.items[index];}else{items=jqEl;if(itemOpts.delegate){items=items.find(itemOpts.delegate);}
items=items.eq(index);}
mfp._openClick({mfpEl:items},jqEl,itemOpts);}else{if(mfp.isOpen)
mfp[options].apply(mfp,Array.prototype.slice.call(arguments,1));}}else{options=$.extend(true,{},options);if(_isJQ){jqEl.data('magnificPopup',options);}else{jqEl[0].magnificPopup=options;}
mfp.addGroup(jqEl,options);}
return jqEl;};var INLINE_NS='inline',_hiddenClass,_inlinePlaceholder,_lastInlineElement,_putInlineElementsBack=function(){if(_lastInlineElement){_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();_lastInlineElement=null;}};$.magnificPopup.registerModule(INLINE_NS,{options:{hiddenClass:'hide',markup:'',tNotFound:'Content not found'},proto:{initInline:function(){mfp.types.push(INLINE_NS);_mfpOn(CLOSE_EVENT+'.'+INLINE_NS,function(){_putInlineElementsBack();});},getInline:function(item,template){_putInlineElementsBack();if(item.src){var inlineSt=mfp.st.inline,el=$(item.src);if(el.length){var parent=el[0].parentNode;if(parent&&parent.tagName){if(!_inlinePlaceholder){_hiddenClass=inlineSt.hiddenClass;_inlinePlaceholder=_getEl(_hiddenClass);_hiddenClass='mfp-'+_hiddenClass;}
_lastInlineElement=el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);}
mfp.updateStatus('ready');}else{mfp.updateStatus('error',inlineSt.tNotFound);el=$('<div>');}
item.inlineElement=el;return el;}
mfp.updateStatus('ready');mfp._parseMarkup(template,{},item);return template;}}});var AJAX_NS='ajax',_ajaxCur,_removeAjaxCursor=function(){if(_ajaxCur){$(document.body).removeClass(_ajaxCur);}},_destroyAjaxRequest=function(){_removeAjaxCursor();if(mfp.req){mfp.req.abort();}};$.magnificPopup.registerModule(AJAX_NS,{options:{settings:null,cursor:'mfp-ajax-cur',tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){mfp.types.push(AJAX_NS);_ajaxCur=mfp.st.ajax.cursor;_mfpOn(CLOSE_EVENT+'.'+AJAX_NS,_destroyAjaxRequest);_mfpOn('BeforeChange.'+AJAX_NS,_destroyAjaxRequest);},getAjax:function(item){if(_ajaxCur){$(document.body).addClass(_ajaxCur);}
mfp.updateStatus('loading');var opts=$.extend({url:item.src,success:function(data,textStatus,jqXHR){var temp={data:data,xhr:jqXHR};_mfpTrigger('ParseAjax',temp);mfp.appendContent($(temp.data),AJAX_NS);item.finished=true;_removeAjaxCursor();mfp._setFocus();setTimeout(function(){mfp.wrap.addClass(READY_CLASS);},16);mfp.updateStatus('ready');_mfpTrigger('AjaxContentAdded');},error:function(){_removeAjaxCursor();item.finished=item.loadError=true;mfp.updateStatus('error',mfp.st.ajax.tError.replace('%url%',item.src));}},mfp.st.ajax.settings);mfp.req=$.ajax(opts);return'';}}});var _imgInterval,_getTitle=function(item){if(item.data&&item.data.title!==undefined)
return item.data.title;var src=mfp.st.image.titleSrc;if(src){if($.isFunction(src)){return src.call(mfp,item);}else if(item.el){return item.el.attr(src)||'';}}
return'';};$.magnificPopup.registerModule('image',{options:{markup:'<div class="mfp-figure">'+'<div class="mfp-close"></div>'+'<figure>'+'<div class="mfp-img"></div>'+'<figcaption>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</figcaption>'+'</figure>'+'</div>',cursor:'mfp-zoom-out-cur',titleSrc:'title',verticalFit:true,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var imgSt=mfp.st.image,ns='.image';mfp.types.push('image');_mfpOn(OPEN_EVENT+ns,function(){if(mfp.currItem.type==='image'&&imgSt.cursor){$(document.body).addClass(imgSt.cursor);}});_mfpOn(CLOSE_EVENT+ns,function(){if(imgSt.cursor){$(document.body).removeClass(imgSt.cursor);}
_window.off('resize'+EVENT_NS);});_mfpOn('Resize'+ns,mfp.resizeImage);if(mfp.isLowIE){_mfpOn('AfterChange',mfp.resizeImage);}},resizeImage:function(){var item=mfp.currItem;if(!item||!item.img)return;if(mfp.st.image.verticalFit){var decr=0;if(mfp.isLowIE){decr=parseInt(item.img.css('padding-top'),10)+parseInt(item.img.css('padding-bottom'),10);}
item.img.css('max-height',mfp.wH-decr);}},_onImageHasSize:function(item){if(item.img){item.hasSize=true;if(_imgInterval){clearInterval(_imgInterval);}
item.isCheckingImgSize=false;_mfpTrigger('ImageHasSize',item);if(item.imgHidden){if(mfp.content)
mfp.content.removeClass('mfp-loading');item.imgHidden=false;}}},findImageSize:function(item){var counter=0,img=item.img[0],mfpSetInterval=function(delay){if(_imgInterval){clearInterval(_imgInterval);}
_imgInterval=setInterval(function(){if(img.naturalWidth>0){mfp._onImageHasSize(item);return;}
if(counter>200){clearInterval(_imgInterval);}
counter++;if(counter===3){mfpSetInterval(10);}else if(counter===40){mfpSetInterval(50);}else if(counter===100){mfpSetInterval(500);}},delay);};mfpSetInterval(1);},getImage:function(item,template){var guard=0,onLoadComplete=function(){if(item){if(item.img[0].complete){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('ready');}
item.hasSize=true;item.loaded=true;_mfpTrigger('ImageLoadComplete');}
else{guard++;if(guard<200){setTimeout(onLoadComplete,100);}else{onLoadError();}}}},onLoadError=function(){if(item){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src));}
item.hasSize=true;item.loaded=true;item.loadError=true;}},imgSt=mfp.st.image;var el=template.find('.mfp-img');if(el.length){var img=document.createElement('img');img.className='mfp-img';if(item.el&&item.el.find('img').length){img.alt=item.el.find('img').attr('alt');}
item.img=$(img).on('load.mfploader',onLoadComplete).on('error.mfploader',onLoadError);img.src=item.src;if(el.is('img')){item.img=item.img.clone();}
img=item.img[0];if(img.naturalWidth>0){item.hasSize=true;}else if(!img.width){item.hasSize=false;}}
mfp._parseMarkup(template,{title:_getTitle(item),img_replaceWith:item.img},item);mfp.resizeImage();if(item.hasSize){if(_imgInterval)clearInterval(_imgInterval);if(item.loadError){template.addClass('mfp-loading');mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src));}else{template.removeClass('mfp-loading');mfp.updateStatus('ready');}
return template;}
mfp.updateStatus('loading');item.loading=true;if(!item.hasSize){item.imgHidden=true;template.addClass('mfp-loading');mfp.findImageSize(item);}
return template;}}});var hasMozTransform,getHasMozTransform=function(){if(hasMozTransform===undefined){hasMozTransform=document.createElement('p').style.MozTransform!==undefined;}
return hasMozTransform;};$.magnificPopup.registerModule('zoom',{options:{enabled:false,easing:'ease-in-out',duration:300,opener:function(element){return element.is('img')?element:element.find('img');}},proto:{initZoom:function(){var zoomSt=mfp.st.zoom,ns='.zoom',image;if(!zoomSt.enabled||!mfp.supportsTransition){return;}
var duration=zoomSt.duration,getElToAnimate=function(image){var newImg=image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),transition='all '+(zoomSt.duration/1000)+'s '+zoomSt.easing,cssObj={position:'fixed',zIndex:9999,left:0,top:0,'-webkit-backface-visibility':'hidden'},t='transition';cssObj['-webkit-'+t]=cssObj['-moz-'+t]=cssObj['-o-'+t]=cssObj[t]=transition;newImg.css(cssObj);return newImg;},showMainContent=function(){mfp.content.css('visibility','visible');},openTimeout,animatedImg;_mfpOn('BuildControls'+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.content.css('visibility','hidden');image=mfp._getItemToZoom();if(!image){showMainContent();return;}
animatedImg=getElToAnimate(image);animatedImg.css(mfp._getOffset());mfp.wrap.append(animatedImg);openTimeout=setTimeout(function(){animatedImg.css(mfp._getOffset(true));openTimeout=setTimeout(function(){showMainContent();setTimeout(function(){animatedImg.remove();image=animatedImg=null;_mfpTrigger('ZoomAnimationEnded');},16);},duration);},16);}});_mfpOn(BEFORE_CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.st.removalDelay=duration;if(!image){image=mfp._getItemToZoom();if(!image){return;}
animatedImg=getElToAnimate(image);}
animatedImg.css(mfp._getOffset(true));mfp.wrap.append(animatedImg);mfp.content.css('visibility','hidden');setTimeout(function(){animatedImg.css(mfp._getOffset());},16);}});_mfpOn(CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){showMainContent();if(animatedImg){animatedImg.remove();}
image=null;}});},_allowZoom:function(){return mfp.currItem.type==='image';},_getItemToZoom:function(){if(mfp.currItem.hasSize){return mfp.currItem.img;}else{return false;}},_getOffset:function(isLarge){var el;if(isLarge){el=mfp.currItem.img;}else{el=mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem);}
var offset=el.offset();var paddingTop=parseInt(el.css('padding-top'),10);var paddingBottom=parseInt(el.css('padding-bottom'),10);offset.top-=($(window).scrollTop()-paddingTop);var obj={width:el.width(),height:(_isJQ?el.innerHeight():el[0].offsetHeight)-paddingBottom-paddingTop};if(getHasMozTransform()){obj['-moz-transform']=obj['transform']='translate('+offset.left+'px,'+offset.top+'px)';}else{obj.left=offset.left;obj.top=offset.top;}
return obj;}}});var IFRAME_NS='iframe',_emptyPage='//about:blank',_fixIframeBugs=function(isShowing){if(mfp.currTemplate[IFRAME_NS]){var el=mfp.currTemplate[IFRAME_NS].find('iframe');if(el.length){if(!isShowing){el[0].src=_emptyPage;}
if(mfp.isIE8){el.css('display',isShowing?'block':'none');}}}};$.magnificPopup.registerModule(IFRAME_NS,{options:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+'</div>',srcAction:'iframe_src',patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}}},proto:{initIframe:function(){mfp.types.push(IFRAME_NS);_mfpOn('BeforeChange',function(e,prevType,newType){if(prevType!==newType){if(prevType===IFRAME_NS){_fixIframeBugs();}else if(newType===IFRAME_NS){_fixIframeBugs(true);}}});_mfpOn(CLOSE_EVENT+'.'+IFRAME_NS,function(){_fixIframeBugs();});},getIframe:function(item,template){var embedSrc=item.src;var iframeSt=mfp.st.iframe;$.each(iframeSt.patterns,function(){if(embedSrc.indexOf(this.index)>-1){if(this.id){if(typeof this.id==='string'){embedSrc=embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length,embedSrc.length);}else{embedSrc=this.id.call(this,embedSrc);}}
embedSrc=this.src.replace('%id%',embedSrc);return false;}});var dataObj={};if(iframeSt.srcAction){dataObj[iframeSt.srcAction]=embedSrc;}
mfp._parseMarkup(template,dataObj,item);mfp.updateStatus('ready');return template;}}});var _getLoopedId=function(index){var numSlides=mfp.items.length;if(index>numSlides-1){return index-numSlides;}else if(index<0){return numSlides+index;}
return index;},_replaceCurrTotal=function(text,curr,total){return text.replace(/%curr%/gi,curr+1).replace(/%total%/gi,total);};$.magnificPopup.registerModule('gallery',{options:{enabled:false,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:true,arrows:true,tPrev:'Previous (Left arrow key)',tNext:'Next (Right arrow key)',tCounter:'%curr% of %total%'},proto:{initGallery:function(){var gSt=mfp.st.gallery,ns='.mfp-gallery';mfp.direction=true;if(!gSt||!gSt.enabled)return false;_wrapClasses+=' mfp-gallery';_mfpOn(OPEN_EVENT+ns,function(){if(gSt.navigateByImgClick){mfp.wrap.on('click'+ns,'.mfp-img',function(){if(mfp.items.length>1){mfp.next();return false;}});}
_document.on('keydown'+ns,function(e){if(e.keyCode===37){mfp.prev();}else if(e.keyCode===39){mfp.next();}});});_mfpOn('UpdateStatus'+ns,function(e,data){if(data.text){data.text=_replaceCurrTotal(data.text,mfp.currItem.index,mfp.items.length);}});_mfpOn(MARKUP_PARSE_EVENT+ns,function(e,element,values,item){var l=mfp.items.length;values.counter=l>1?_replaceCurrTotal(gSt.tCounter,item.index,l):'';});_mfpOn('BuildControls'+ns,function(){if(mfp.items.length>1&&gSt.arrows&&!mfp.arrowLeft){var markup=gSt.arrowMarkup,arrowLeft=mfp.arrowLeft=$(markup.replace(/%title%/gi,gSt.tPrev).replace(/%dir%/gi,'left')).addClass(PREVENT_CLOSE_CLASS),arrowRight=mfp.arrowRight=$(markup.replace(/%title%/gi,gSt.tNext).replace(/%dir%/gi,'right')).addClass(PREVENT_CLOSE_CLASS);arrowLeft.click(function(){mfp.prev();});arrowRight.click(function(){mfp.next();});mfp.container.append(arrowLeft.add(arrowRight));}});_mfpOn(CHANGE_EVENT+ns,function(){if(mfp._preloadTimeout)clearTimeout(mfp._preloadTimeout);mfp._preloadTimeout=setTimeout(function(){mfp.preloadNearbyImages();mfp._preloadTimeout=null;},16);});_mfpOn(CLOSE_EVENT+ns,function(){_document.off(ns);mfp.wrap.off('click'+ns);mfp.arrowRight=mfp.arrowLeft=null;});},next:function(){mfp.direction=true;mfp.index=_getLoopedId(mfp.index+1);mfp.updateItemHTML();},prev:function(){mfp.direction=false;mfp.index=_getLoopedId(mfp.index-1);mfp.updateItemHTML();},goTo:function(newIndex){mfp.direction=(newIndex>=mfp.index);mfp.index=newIndex;mfp.updateItemHTML();},preloadNearbyImages:function(){var p=mfp.st.gallery.preload,preloadBefore=Math.min(p[0],mfp.items.length),preloadAfter=Math.min(p[1],mfp.items.length),i;for(i=1;i<=(mfp.direction?preloadAfter:preloadBefore);i++){mfp._preloadItem(mfp.index+i);}
for(i=1;i<=(mfp.direction?preloadBefore:preloadAfter);i++){mfp._preloadItem(mfp.index-i);}},_preloadItem:function(index){index=_getLoopedId(index);if(mfp.items[index].preloaded){return;}
var item=mfp.items[index];if(!item.parsed){item=mfp.parseEl(index);}
_mfpTrigger('LazyLoad',item);if(item.type==='image'){item.img=$('<img class="mfp-img" />').on('load.mfploader',function(){item.hasSize=true;}).on('error.mfploader',function(){item.hasSize=true;item.loadError=true;_mfpTrigger('LazyLoadError',item);}).attr('src',item.src);}
item.preloaded=true;}}});var RETINA_NS='retina';$.magnificPopup.registerModule(RETINA_NS,{options:{replaceSrc:function(item){return item.src.replace(/\.\w+$/,function(m){return'@2x'+m;});},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var st=mfp.st.retina,ratio=st.ratio;ratio=!isNaN(ratio)?ratio:ratio();if(ratio>1){_mfpOn('ImageHasSize'+'.'+RETINA_NS,function(e,item){item.img.css({'max-width':item.img[0].naturalWidth/ratio,'width':'100%'});});_mfpOn('ElementParse'+'.'+RETINA_NS,function(e,item){item.src=st.replaceSrc(item,ratio);});}}}}});_checkInstance();}));
;(function($,w){"use strict";var methods=(function(){var c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},ios=(function(){var ios=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);if(ios){$('html').css('cursor','pointer').on('click',$.noop);}
return ios;})(),wp7=(function(){var style=document.documentElement.style;return('behavior'in style&&'fill'in style&&/iemobile/i.test(navigator.userAgent));})(),unprefixedPointerEvents=(function(){return(!!w.PointerEvent);})(),toggleMenuClasses=function($menu,o,add){var classes=c.menuClass,method;if(o.cssArrows){classes+=' '+c.menuArrowClass;}
method=(add)?'addClass':'removeClass';$menu[method](classes);},setPathToCurrent=function($menu,o){return $menu.find('li.'+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+' '+c.bcClass).filter(function(){return($(this).children(o.popUpSelector).hide().show().length);}).removeClass(o.pathClass);},toggleAnchorClass=function($li,add){var method=(add)?'addClass':'removeClass';$li.children('a')[method](c.anchorClass);},toggleTouchAction=function($menu){var msTouchAction=$menu.css('ms-touch-action');var touchAction=$menu.css('touch-action');touchAction=touchAction||msTouchAction;touchAction=(touchAction==='pan-y')?'auto':'pan-y';$menu.css({'ms-touch-action':touchAction,'touch-action':touchAction});},getMenu=function($el){return $el.closest('.'+c.menuClass);},getOptions=function($el){return getMenu($el).data('sfOptions');},over=function(){var $this=$(this),o=getOptions($this);clearTimeout(o.sfTimer);$this.siblings().superfish('hide').end().superfish('show');},close=function(o){o.retainPath=($.inArray(this[0],o.$path)>-1);this.superfish('hide');if(!this.parents('.'+o.hoverClass).length){o.onIdle.call(getMenu(this));if(o.$path.length){$.proxy(over,o.$path)();}}},out=function(){var $this=$(this),o=getOptions($this);if(ios){$.proxy(close,$this,o)();}
else{clearTimeout(o.sfTimer);o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay);}},touchHandler=function(e){var $this=$(this),o=getOptions($this),$ul=$this.siblings(e.data.popUpSelector);if(o.onHandleTouch.call($ul)===false){return this;}
if($ul.length>0&&$ul.is(':hidden')){$this.one('click.superfish',false);if(e.type==='MSPointerDown'||e.type==='pointerdown'){$this.trigger('focus');}else{$.proxy(over,$this.parent('li'))();}}},applyHandlers=function($menu,o){var targets='li:has('+o.popUpSelector+')';if($.fn.hoverIntent&&!o.disableHI){$menu.hoverIntent(over,out,targets);}
else{$menu.on('mouseenter.superfish',targets,over).on('mouseleave.superfish',targets,out);}
var touchevent='MSPointerDown.superfish';if(unprefixedPointerEvents){touchevent='pointerdown.superfish';}
if(!ios){touchevent+=' touchend.superfish';}
if(wp7){touchevent+=' mousedown.superfish';}
$menu.on('focusin.superfish','li',over).on('focusout.superfish','li',out).on(touchevent,'a',o,touchHandler);};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o){return this;}
var not=(o.retainPath===true)?o.$path:'',$ul=$this.find('li.'+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;if(instant){$ul.show();speed=0;}
o.retainPath=false;if(o.onBeforeHide.call($ul)===false){return this;}
$ul.stop(true,true).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this);});}
return this;},show:function(){var o=getOptions(this);if(!o){return this;}
var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);if(o.onBeforeShow.call($ul)===false){return this;}
$ul.stop(true,true).animate(o.animation,o.speed,function(){o.onShow.call($ul);});return this;},destroy:function(){return this.each(function(){var $this=$(this),o=$this.data('sfOptions'),$hasPopUp;if(!o){return false;}
$hasPopUp=$this.find(o.popUpSelector).parent('li');clearTimeout(o.sfTimer);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);$this.off('.superfish').off('.hoverIntent');$hasPopUp.children(o.popUpSelector).attr('style',function(i,style){return style.replace(/display[^;]+;?/g,'');});o.$path.removeClass(o.hoverClass+' '+c.bcClass).addClass(o.pathClass);$this.find('.'+o.hoverClass).removeClass(o.hoverClass);o.onDestroy.call($this);$this.removeData('sfOptions');});},init:function(op){return this.each(function(){var $this=$(this);if($this.data('sfOptions')){return false;}
var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent('li');o.$path=setPathToCurrent($this,o);$this.data('sfOptions',o);toggleMenuClasses($this,o,true);toggleAnchorClass($hasPopUp,true);toggleTouchAction($this);applyHandlers($this,o);$hasPopUp.not('.'+c.bcClass).superfish('hide',true);o.onInit.call(this);});}};})();$.fn.superfish=function(method,args){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}
else{return $.error('Method '+method+' does not exist on jQuery.fn.superfish');}};$.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:true,disableHI:false,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop,onHandleTouch:$.noop};})(jQuery,window);
/*!
 * Theia Sticky Sidebar v1.5.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
(function($){$.fn.theiaStickySidebar=function(options){var defaults={'containerSelector':'','additionalMarginTop':0,'additionalMarginBottom':0,'updateSidebarHeight':true,'minWidth':0,'disableOnResponsiveLayouts':true,'sidebarBehavior':'modern'};options=$.extend(defaults,options);options.additionalMarginTop=parseInt(options.additionalMarginTop)||0;options.additionalMarginBottom=parseInt(options.additionalMarginBottom)||0;tryInitOrHookIntoEvents(options,this);function tryInitOrHookIntoEvents(options,$that){var success=tryInit(options,$that);if(!success){console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');$(document).scroll(function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt);}};}(options,$that));$(window).resize(function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt);}};}(options,$that))}}
function tryInit(options,$that){if(options.initialized===true){return true;}
if($('body').width()<options.minWidth){return false;}
init(options,$that);return true;}
function init(options,$that){options.initialized=true;$('head').append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));$that.each(function(){var o={};o.sidebar=$(this);o.options=options||{};o.container=$(o.options.containerSelector);if(o.container.length==0){o.container=o.sidebar.parent();}
o.sidebar.parents().css('-webkit-transform','none');o.sidebar.css({'position':'relative','overflow':'visible','-webkit-box-sizing':'border-box','-moz-box-sizing':'border-box','box-sizing':'border-box'});o.stickySidebar=o.sidebar.find('.theiaStickySidebar');if(o.stickySidebar.length==0){var javaScriptMIMETypes=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;o.sidebar.find('script').filter(function(index,script){return script.type.length===0||script.type.match(javaScriptMIMETypes);}).remove();o.stickySidebar=$('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());o.sidebar.append(o.stickySidebar);}
o.marginBottom=parseInt(o.sidebar.css('margin-bottom'));o.paddingTop=parseInt(o.sidebar.css('padding-top'));o.paddingBottom=parseInt(o.sidebar.css('padding-bottom'));var collapsedTopHeight=o.stickySidebar.offset().top;var collapsedBottomHeight=o.stickySidebar.outerHeight();o.stickySidebar.css('padding-top',1);o.stickySidebar.css('padding-bottom',1);collapsedTopHeight-=o.stickySidebar.offset().top;collapsedBottomHeight=o.stickySidebar.outerHeight()-collapsedBottomHeight-collapsedTopHeight;if(collapsedTopHeight==0){o.stickySidebar.css('padding-top',0);o.stickySidebarPaddingTop=0;}
else{o.stickySidebarPaddingTop=1;}
if(collapsedBottomHeight==0){o.stickySidebar.css('padding-bottom',0);o.stickySidebarPaddingBottom=0;}
else{o.stickySidebarPaddingBottom=1;}
o.previousScrollTop=null;o.fixedScrollTop=0;resetSidebar();o.onScroll=function(o){if(!o.stickySidebar.is(":visible")){return;}
if($('body').width()<o.options.minWidth){resetSidebar();return;}
if(o.options.disableOnResponsiveLayouts){var sidebarWidth=o.sidebar.outerWidth(o.sidebar.css('float')=='none');if(sidebarWidth+50>o.container.width()){resetSidebar();return;}}
var scrollTop=$(document).scrollTop();var position='static';if(scrollTop>=o.sidebar.offset().top+(o.paddingTop-o.options.additionalMarginTop)){var offsetTop=o.paddingTop+options.additionalMarginTop;var offsetBottom=o.paddingBottom+o.marginBottom+options.additionalMarginBottom;var containerTop=o.sidebar.offset().top;var containerBottom=o.sidebar.offset().top+getClearedHeight(o.container);var windowOffsetTop=0+options.additionalMarginTop;var windowOffsetBottom;var sidebarSmallerThanWindow=(o.stickySidebar.outerHeight()+offsetTop+offsetBottom)<$(window).height();if(sidebarSmallerThanWindow){windowOffsetBottom=windowOffsetTop+o.stickySidebar.outerHeight();}
else{windowOffsetBottom=$(window).height()-o.marginBottom-o.paddingBottom-options.additionalMarginBottom;}
var staticLimitTop=containerTop-scrollTop+o.paddingTop;var staticLimitBottom=containerBottom-scrollTop-o.paddingBottom-o.marginBottom;var top=o.stickySidebar.offset().top-scrollTop;var scrollTopDiff=o.previousScrollTop-scrollTop;if(o.stickySidebar.css('position')=='fixed'){if(o.options.sidebarBehavior=='modern'){top+=scrollTopDiff;}}
if(o.options.sidebarBehavior=='stick-to-top'){top=options.additionalMarginTop;}
if(o.options.sidebarBehavior=='stick-to-bottom'){top=windowOffsetBottom-o.stickySidebar.outerHeight();}
if(scrollTopDiff>0){top=Math.min(top,windowOffsetTop);}
else{top=Math.max(top,windowOffsetBottom-o.stickySidebar.outerHeight());}
top=Math.max(top,staticLimitTop);top=Math.min(top,staticLimitBottom-o.stickySidebar.outerHeight());var sidebarSameHeightAsContainer=o.container.height()==o.stickySidebar.outerHeight();if(!sidebarSameHeightAsContainer&&top==windowOffsetTop){position='fixed';}
else if(!sidebarSameHeightAsContainer&&top==windowOffsetBottom-o.stickySidebar.outerHeight()){position='fixed';}
else if(scrollTop+top-o.sidebar.offset().top-o.paddingTop<=options.additionalMarginTop){position='static';}
else{position='absolute';}}
if(position=='fixed'){var scrollLeft=$(document).scrollLeft();o.stickySidebar.css({'position':'fixed','width':getWidthForObject(o.stickySidebar)+'px','transform':'translateY('+top+'px)','left':(o.sidebar.offset().left+parseInt(o.sidebar.css('padding-left'))-scrollLeft)+'px','top':'0px'});}
else if(position=='absolute'){var css={};if(o.stickySidebar.css('position')!='absolute'){css.position='absolute';css.transform='translateY('+(scrollTop+top-o.sidebar.offset().top-o.stickySidebarPaddingTop-o.stickySidebarPaddingBottom)+'px)';css.top='0px';}
css.width=getWidthForObject(o.stickySidebar)+'px';css.left='';o.stickySidebar.css(css);}
else if(position=='static'){resetSidebar();}
if(position!='static'){if(o.options.updateSidebarHeight==true){o.sidebar.css({'min-height':o.stickySidebar.outerHeight()+o.stickySidebar.offset().top-o.sidebar.offset().top+o.paddingBottom});}}
o.previousScrollTop=scrollTop;};o.onScroll(o);$(document).scroll(function(o){return function(){o.onScroll(o);};}(o));$(window).resize(function(o){return function(){o.stickySidebar.css({'position':'static'});o.onScroll(o);};}(o));function resetSidebar(){o.fixedScrollTop=0;o.sidebar.css({'min-height':'1px'});o.stickySidebar.css({'position':'static','width':'','transform':'none'});}
function getClearedHeight(e){var height=e.height();e.children().each(function(){height=Math.max(height,$(this).height());});return height;}});}
function getWidthForObject(object){var width;try{width=object[0].getBoundingClientRect().width;}
catch(err){}
if(typeof width==="undefined"){width=object.width();}
return width;}}})(jQuery);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=false
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=true
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.invokeAll('enable')}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:true,enabled:true,group:'default',horizontal:false,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=false
this.didResize=false
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
if(horizontalEmpty&&verticalEmpty){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=false}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=true
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=false}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}
else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=elementOffset+contextModifier-adjustment
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto)}}());
/*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){'use strict'
function noop(){}
var Waypoint=window.Waypoint
function Inview(options){this.options=Waypoint.Adapter.extend({},Inview.defaults,options)
this.axis=this.options.horizontal?'horizontal':'vertical'
this.waypoints=[]
this.element=this.options.element
this.createWaypoints()}
Inview.prototype.createWaypoints=function(){var configs={vertical:[{down:'enter',up:'exited',offset:'100%'},{down:'entered',up:'exit',offset:'bottom-in-view'},{down:'exit',up:'entered',offset:0},{down:'exited',up:'enter',offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:'enter',left:'exited',offset:'100%'},{right:'entered',left:'exit',offset:'right-in-view'},{right:'exit',left:'entered',offset:0},{right:'exited',left:'enter',offset:function(){return-this.adapter.outerWidth()}}]}
for(var i=0,end=configs[this.axis].length;i<end;i++){var config=configs[this.axis][i]
this.createWaypoint(config)}}
Inview.prototype.createWaypoint=function(config){var self=this
this.waypoints.push(new Waypoint({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:(function(config){return function(direction){self.options[config[direction]].call(self,direction)}}(config)),offset:config.offset,horizontal:this.options.horizontal}))}
Inview.prototype.destroy=function(){for(var i=0,end=this.waypoints.length;i<end;i++){this.waypoints[i].destroy()}
this.waypoints=[]}
Inview.prototype.disable=function(){for(var i=0,end=this.waypoints.length;i<end;i++){this.waypoints[i].disable()}}
Inview.prototype.enable=function(){for(var i=0,end=this.waypoints.length;i<end;i++){this.waypoints[i].enable()}}
Inview.defaults={context:window,enabled:true,enter:noop,entered:noop,exit:noop,exited:noop}
Waypoint.Inview=Inview}());
/*!
Waypoints Sticky Element Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function Sticky(options){this.options=$.extend({},Waypoint.defaults,Sticky.defaults,options)
this.element=this.options.element
this.$element=$(this.element)
this.createWrapper()
this.createWaypoint()}
Sticky.prototype.createWaypoint=function(){var originalHandler=this.options.handler
this.waypoint=new Waypoint($.extend({},this.options,{element:this.wrapper,handler:$.proxy(function(direction){var shouldBeStuck=this.options.direction.indexOf(direction)>-1
var wrapperHeight=shouldBeStuck?this.$element.outerHeight(true):''
this.$wrapper.height(wrapperHeight)
this.$element.toggleClass(this.options.stuckClass,shouldBeStuck)
if(originalHandler){originalHandler.call(this,direction)}},this)}))}
Sticky.prototype.createWrapper=function(){if(this.options.wrapper){this.$element.wrap(this.options.wrapper)}
this.$wrapper=this.$element.parent()
this.wrapper=this.$wrapper[0]}
Sticky.prototype.destroy=function(){if(this.$element.parent()[0]===this.wrapper){this.waypoint.destroy()
this.$element.removeClass(this.options.stuckClass)
if(this.options.wrapper){this.$element.unwrap()}}}
Sticky.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:'stuck',direction:'down right'}
Waypoint.Sticky=Sticky}());
(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports!=='undefined'){module.exports=factory(require('jquery'));}else{factory(jQuery);}}(function($){'use strict';var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1);},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}
_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}
return Slick;}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof(index)==='boolean'){addBefore=index;index=null;}else if(index<0||(index>=_.slideCount)){return false;}
_.unload();if(typeof(index)==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}
if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-(_.currentLeft);}
$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+
now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+
now+'px)';_.$slideTrack.css(animProps);}},complete:function(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';}
_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}
return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;}
if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0;}
else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}
_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}
if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}
if(_.options.infinite!==true){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));}
_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden','false');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}
$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass('draggable');}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}
slide.appendChild(row);}
newSlides.appendChild(slide);}
_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':(100/_.options.slidesPerRow)+'%','display':'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth;}else if(_.respondTo==='slider'){respondToWidth=sliderWidth;}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth);}
if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}
if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}
_.refresh(initial);}
triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}
_.refresh(initial);}
triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}
_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}
if(!initial&&triggerBreakpoint!==false){_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is('a')){event.preventDefault();}
if(!$target.is('li')){$target=$target.closest('li');}
unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}
break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}
break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}
prevNavigable=navigables[n];}}
return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));}
_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);}
_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off('keydown.slick',_.keyHandler);}
if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off('click.slick',_.selectHandler);}
$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);$(document).off('ready.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove();}
if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}
if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}
if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}
_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh){_.$slider.trigger('destroy',[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*:not(.slick-arrow)',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay();}},0);});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}else if(_.options.centerMode===true){pagerQty=_.slideCount;}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}
return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;verticalOffset=(verticalHeight*_.options.slidesToShow)*-1;}
if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1;}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight;}}
if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}
if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}
if(_.options.vertical===false){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset;}else{targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset;}
if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);}
if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}
if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);}
if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}
targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}
return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}
while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}
return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}
if(creation){_.$slider.trigger('init',[_]);}
if(_.options.accessibility===true){_.initADA();}
if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this;_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});_.$slideTrack.attr('role','listbox');_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){$(this).attr({'role':'option','aria-describedby':'slick-slide'+_.instanceUid+i+''});});if(_.$dots!==null){_.$dots.attr('role','tablist').find('li').each(function(i){$(this).attr({'role':'presentation','aria-selected':'false','aria-controls':'navigation'+_.instanceUid+i+'','id':'slick-slide'+_.instanceUid+i+''});}).first().attr('aria-selected','true').end().find('button').attr('role','button').end().closest('div').attr('role','toolbar');}
_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);}
if(_.options.dots===true&&_.options.pauseOnDotsHover===true){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on('keydown.slick',_.keyHandler);}
if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}
$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(document).on('ready.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}
if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}});}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}});}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy').removeClass('slick-loading');});_.$slider.trigger('lazyLoaded',[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);};imageToLoad.src=imageSource;});}
if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}}
loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else
if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;_.setPosition();_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}
if(_.options.accessibility===true){_.initADA();}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.attr('src',imageSource).removeAttr('data-lazy').removeClass('slick-loading');if(_.options.adaptiveHeight===true){_.setPosition();}
_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger('allImagesLoaded',[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex)){_.currentSlide=lastVisibleIndex;}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}
currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;currentBreakpoint=responsiveSettings[breakpoint].breakpoint;if(responsiveSettings.hasOwnProperty(breakpoint)){while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}
l--;}
_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}
_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}
_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}
_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof(index)==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}
if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}
_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}
x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:('0px '+_.options.centerPadding)});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:(_.options.centerPadding+' 0px')});}}
_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children('.slick-slide').length)));}else if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length)));}
var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple';}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive';}else if(typeof arguments[1]!=='undefined'){type='single';}}
if(type==='single'){_.options[option]=value;}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val;});}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}
l--;}
_.options.responsive.push(value[item]);}}}
if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}
_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical');}else{_.$slider.removeClass('slick-vertical');}
if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}
if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}
if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}
if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;}
if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}
if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;}
if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';}
_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false);};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');}
if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center');}}
_.$slides.eq(index).addClass('slick-center');}else{if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false');}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}}}
if(_.options.lazyLoad==='ondemand'){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}
if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}
for(i=_.slideCount;i>(_.slideCount-
infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');}
for(i=0;i<infiniteCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');}
_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}
_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.setSlideClasses(index);_.asNavFor(index);return;}
_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}
if(_.options.fade===true&&_.currentSlide===index){return;}
if(_.slideCount<=_.options.slidesToShow){return;}
if(sync===false){_.asNavFor(index);}
targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}
return;}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}
return;}
if(_.options.autoplay){clearInterval(_.autoPlayTimer);}
if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll);}else{animSlide=_.slideCount+targetSlide;}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}
_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}
_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}
_.animateHeight();return;}
if(dontAnimate!==true){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}
if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}
_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}
if((swipeAngle<=45)&&(swipeAngle>=0)){return(_.options.rtl===false?'left':'right');}
if((swipeAngle<=360)&&(swipeAngle>=315)){return(_.options.rtl===false?'left':'right');}
if((swipeAngle>=135)&&(swipeAngle<=225)){return(_.options.rtl===false?'right':'left');}
if(_.options.verticalSwiping===true){if((swipeAngle>=35)&&(swipeAngle<=135)){return'down';}else{return'up';}}
return'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.interrupted=false;_.shouldClick=(_.touchObject.swipeLength>10)?false:true;if(_.touchObject.curX===undefined){return false;}
if(_.touchObject.edgeHit===true){_.$slider.trigger('edge',[_,_.swipeDirection()]);}
if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}
if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===false)||('ontouchend'in document&&_.options.swipe===false)){return;}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1){return;}
_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}
switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||touches&&touches.length!==1){return false;}
curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));if(_.options.verticalSwiping===true){_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));}
swipeDirection=_.swipeDirection();if(swipeDirection==='vertical'){return;}
if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){event.preventDefault();}
positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}
swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if((_.currentSlide===0&&swipeDirection==='right')||(_.currentSlide>=_.getDotCount()&&swipeDirection==='left')){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}
if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset;}
if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}
if(_.options.fade===true||_.options.touchMove===false){return false;}
if(_.animating===true){_.swipeLeft=null;return false;}
_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}
if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}
_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove();}
if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}
if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}
_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').attr('aria-hidden','true');_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden','false');}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined')
_[i].slick=new Slick(_[i],opt);else
ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;}
return _;};}));
/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.3.1 - built 2016-09-18
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2016 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/
(function($){'use strict';var defaults={slide:0,delay:5000,loop:true,preload:false,preloadImage:false,preloadVideo:false,timer:true,overlay:false,autoplay:true,shuffle:false,cover:true,color:null,align:'center',valign:'center',firstTransition:null,firstTransitionDuration:null,transition:'fade',transitionDuration:1000,transitionRegister:[],animation:null,animationDuration:'auto',animationRegister:[],init:function(){},play:function(){},pause:function(){},walk:function(){},slides:[]};var videoCache={};var Vegas=function(elmt,options){this.elmt=elmt;this.settings=$.extend({},defaults,$.vegas.defaults,options);this.slide=this.settings.slide;this.total=this.settings.slides.length;this.noshow=this.total<2;this.paused=!this.settings.autoplay||this.noshow;this.ended=false;this.$elmt=$(elmt);this.$timer=null;this.$overlay=null;this.$slide=null;this.timeout=null;this.first=true;this.transitions=['fade','fade2','blur','blur2','flash','flash2','negative','negative2','burn','burn2','slideLeft','slideLeft2','slideRight','slideRight2','slideUp','slideUp2','slideDown','slideDown2','zoomIn','zoomIn2','zoomOut','zoomOut2','swirlLeft','swirlLeft2','swirlRight','swirlRight2'];this.animations=['kenburns','kenburnsLeft','kenburnsRight','kenburnsUp','kenburnsUpLeft','kenburnsUpRight','kenburnsDown','kenburnsDownLeft','kenburnsDownRight'];if(this.settings.transitionRegister instanceof Array===false){this.settings.transitionRegister=[this.settings.transitionRegister];}
if(this.settings.animationRegister instanceof Array===false){this.settings.animationRegister=[this.settings.animationRegister];}
this.transitions=this.transitions.concat(this.settings.transitionRegister);this.animations=this.animations.concat(this.settings.animationRegister);this.support={objectFit:'objectFit'in document.body.style,transition:'transition'in document.body.style||'WebkitTransition'in document.body.style,video:$.vegas.isVideoCompatible()};if(this.settings.shuffle===true){this.shuffle();}
this._init();};Vegas.prototype={_init:function(){var $wrapper,$overlay,$timer,isBody=this.elmt.tagName==='BODY',timer=this.settings.timer,overlay=this.settings.overlay,self=this;this._preload();if(!isBody){this.$elmt.css('height',this.$elmt.css('height'));$wrapper=$('<div class="vegas-wrapper">').css('overflow',this.$elmt.css('overflow')).css('padding',this.$elmt.css('padding'));if(!this.$elmt.css('padding')){$wrapper.css('padding-top',this.$elmt.css('padding-top')).css('padding-bottom',this.$elmt.css('padding-bottom')).css('padding-left',this.$elmt.css('padding-left')).css('padding-right',this.$elmt.css('padding-right'));}
this.$elmt.clone(true).children().appendTo($wrapper);this.elmt.innerHTML='';}
if(timer&&this.support.transition){$timer=$('<div class="vegas-timer"><div class="vegas-timer-progress">');this.$timer=$timer;this.$elmt.prepend($timer);}
if(overlay){$overlay=$('<div class="vegas-overlay">');if(typeof overlay==='string'){$overlay.css('background-image','url('+overlay+')');}
this.$overlay=$overlay;this.$elmt.prepend($overlay);}
this.$elmt.addClass('vegas-container');if(!isBody){this.$elmt.append($wrapper);}
setTimeout(function(){self.trigger('init');self._goto(self.slide);if(self.settings.autoplay){self.trigger('play');}},1);},_preload:function(){var img,i;for(i=0;i<this.settings.slides.length;i++){if(this.settings.preload||this.settings.preloadImages){if(this.settings.slides[i].src){img=new Image();img.src=this.settings.slides[i].src;}}
if(this.settings.preload||this.settings.preloadVideos){if(this.support.video&&this.settings.slides[i].video){if(this.settings.slides[i].video instanceof Array){this._video(this.settings.slides[i].video);}else{this._video(this.settings.slides[i].video.src);}}}}},_random:function(array){return array[Math.floor(Math.random()*array.length)];},_slideShow:function(){var self=this;if(this.total>1&&!this.ended&&!this.paused&&!this.noshow){this.timeout=setTimeout(function(){self.next();},this._options('delay'));}},_timer:function(state){var self=this;clearTimeout(this.timeout);if(!this.$timer){return;}
this.$timer.removeClass('vegas-timer-running').find('div').css('transition-duration','0ms');if(this.ended||this.paused||this.noshow){return;}
if(state){setTimeout(function(){self.$timer.addClass('vegas-timer-running').find('div').css('transition-duration',self._options('delay')-100+'ms');},100);}},_video:function(srcs){var video,source,cacheKey=srcs.toString();if(videoCache[cacheKey]){return videoCache[cacheKey];}
if(srcs instanceof Array===false){srcs=[srcs];}
video=document.createElement('video');video.preload=true;srcs.forEach(function(src){source=document.createElement('source');source.src=src;video.appendChild(source);});videoCache[cacheKey]=video;return video;},_fadeOutSound:function(video,duration){var self=this,delay=duration/10,volume=video.volume-0.09;if(volume>0){video.volume=volume;setTimeout(function(){self._fadeOutSound(video,duration);},delay);}else{video.pause();}},_fadeInSound:function(video,duration){var self=this,delay=duration/10,volume=video.volume+0.09;if(volume<1){video.volume=volume;setTimeout(function(){self._fadeInSound(video,duration);},delay);}},_options:function(key,i){if(i===undefined){i=this.slide;}
if(this.settings.slides[i][key]!==undefined){return this.settings.slides[i][key];}
return this.settings[key];},_goto:function(nb){if(typeof this.settings.slides[nb]==='undefined'){nb=0;}
this.slide=nb;var $slide,$inner,$video,$slides=this.$elmt.children('.vegas-slide'),src=this.settings.slides[nb].src,videoSettings=this.settings.slides[nb].video,delay=this._options('delay'),align=this._options('align'),valign=this._options('valign'),cover=this._options('cover'),color=this._options('color')||this.$elmt.css('background-color'),self=this,total=$slides.length,video,img;var transition=this._options('transition'),transitionDuration=this._options('transitionDuration'),animation=this._options('animation'),animationDuration=this._options('animationDuration');if(this.settings.firstTransition&&this.first){transition=this.settings.firstTransition||transition;}
if(this.settings.firstTransitionDuration&&this.first){transitionDuration=this.settings.firstTransitionDuration||transitionDuration;}
if(this.first){this.first=false;}
if(cover!=='repeat'){if(cover===true){cover='cover';}else if(cover===false){cover='contain';}}
if(transition==='random'||transition instanceof Array){if(transition instanceof Array){transition=this._random(transition);}else{transition=this._random(this.transitions);}}
if(animation==='random'||animation instanceof Array){if(animation instanceof Array){animation=this._random(animation);}else{animation=this._random(this.animations);}}
if(transitionDuration==='auto'||transitionDuration>delay){transitionDuration=delay;}
if(animationDuration==='auto'){animationDuration=delay;}
$slide=$('<div class="vegas-slide"></div>');if(this.support.transition&&transition){$slide.addClass('vegas-transition-'+transition);}
if(this.support.video&&videoSettings){if(videoSettings instanceof Array){video=this._video(videoSettings);}else{video=this._video(videoSettings.src);}
video.loop=videoSettings.loop!==undefined?videoSettings.loop:true;video.muted=videoSettings.mute!==undefined?videoSettings.mute:true;if(video.muted===false){video.volume=0;this._fadeInSound(video,transitionDuration);}else{video.pause();}
$video=$(video).addClass('vegas-video').css('background-color',color);if(this.support.objectFit){$video.css('object-position',align+' '+valign).css('object-fit',cover).css('width','100%').css('height','100%');}else if(cover==='contain'){$video.css('width','100%').css('height','100%');}
$slide.append($video);}else{img=new Image();$inner=$('<div class="vegas-slide-inner"></div>').css('background-image','url("'+src+'")').css('background-color',color).css('background-position',align+' '+valign);if(cover==='repeat'){$inner.css('background-repeat','repeat');}else{$inner.css('background-size',cover);}
if(this.support.transition&&animation){$inner.addClass('vegas-animation-'+animation).css('animation-duration',animationDuration+'ms');}
$slide.append($inner);}
if(!this.support.transition){$slide.css('display','none');}
if(total){$slides.eq(total-1).after($slide);}else{this.$elmt.prepend($slide);}
$slides.css('transition','all 0ms').each(function(){this.className='vegas-slide';if(this.tagName==='VIDEO'){this.className+=' vegas-video';}
if(transition){this.className+=' vegas-transition-'+transition;this.className+=' vegas-transition-'+transition+'-in';}});self._timer(false);function go(){self._timer(true);setTimeout(function(){if(transition){if(self.support.transition){$slides.css('transition','all '+transitionDuration+'ms').addClass('vegas-transition-'+transition+'-out');$slides.each(function(){var video=$slides.find('video').get(0);if(video){video.volume=1;self._fadeOutSound(video,transitionDuration);}});$slide.css('transition','all '+transitionDuration+'ms').addClass('vegas-transition-'+transition+'-in');}else{$slide.fadeIn(transitionDuration);}}
for(var i=0;i<$slides.length-4;i++){$slides.eq(i).remove();}
self.trigger('walk');self._slideShow();},100);}
if(video){if(video.readyState===4){video.currentTime=0;}
video.play();go();}else{img.src=src;if(img.complete){go();}else{img.onload=go;}}},_end:function(){this.ended=true;this._timer(false);this.trigger('end');},shuffle:function(){var temp,rand;for(var i=this.total-1;i>0;i--){rand=Math.floor(Math.random()*(i+1));temp=this.settings.slides[i];this.settings.slides[i]=this.settings.slides[rand];this.settings.slides[rand]=temp;}},play:function(){if(this.paused){this.paused=false;this.next();this.trigger('play');}},pause:function(){this._timer(false);this.paused=true;this.trigger('pause');},toggle:function(){if(this.paused){this.play();}else{this.pause();}},playing:function(){return!this.paused&&!this.noshow;},current:function(advanced){if(advanced){return{slide:this.slide,data:this.settings.slides[this.slide]};}
return this.slide;},jump:function(nb){if(nb<0||nb>this.total-1||nb===this.slide){return;}
this.slide=nb;this._goto(this.slide);},next:function(){this.slide++;if(this.slide>=this.total){if(!this.settings.loop){return this._end();}
this.slide=0;}
this._goto(this.slide);},previous:function(){this.slide--;if(this.slide<0){if(!this.settings.loop){this.slide++;return;}else{this.slide=this.total-1;}}
this._goto(this.slide);},trigger:function(fn){var params=[];if(fn==='init'){params=[this.settings];}else{params=[this.slide,this.settings.slides[this.slide]];}
this.$elmt.trigger('vegas'+fn,params);if(typeof this.settings[fn]==='function'){this.settings[fn].apply(this.$elmt,params);}},options:function(key,value){var oldSlides=this.settings.slides.slice();if(typeof key==='object'){this.settings=$.extend({},defaults,$.vegas.defaults,key);}else if(typeof key==='string'){if(value===undefined){return this.settings[key];}
this.settings[key]=value;}else{return this.settings;}
if(this.settings.slides!==oldSlides){this.total=this.settings.slides.length;this.noshow=this.total<2;this._preload();}},destroy:function(){clearTimeout(this.timeout);this.$elmt.removeClass('vegas-container');this.$elmt.find('> .vegas-slide').remove();this.$elmt.find('> .vegas-wrapper').clone(true).children().appendTo(this.$elmt);this.$elmt.find('> .vegas-wrapper').remove();if(this.settings.timer){this.$timer.remove();}
if(this.settings.overlay){this.$overlay.remove();}
this.elmt._vegas=null;}};$.fn.vegas=function(options){var args=arguments,error=false,returns;if(options===undefined||typeof options==='object'){return this.each(function(){if(!this._vegas){this._vegas=new Vegas(this,options);}});}else if(typeof options==='string'){this.each(function(){var instance=this._vegas;if(!instance){throw new Error('No Vegas applied to this element.');}
if(typeof instance[options]==='function'&&options[0]!=='_'){returns=instance[options].apply(instance,[].slice.call(args,1));}else{error=true;}});if(error){throw new Error('No method "'+options+'" in Vegas.');}
return returns!==undefined?returns:this;}};$.vegas={};$.vegas.defaults=defaults;$.vegas.isVideoCompatible=function(){return!/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);};})(window.jQuery||window.Zepto);
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b="ui-effects-",c=a;/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
return a.effects={effect:{}},function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";if(h)return f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a("<p>")[0],o=a.each;n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){if(null!=g[b.idx])return c=g[b.idx]===f[b.idx]})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&b<3&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:l<=.5?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=d<=.5?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},f=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(c),function(){function b(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function d(b,c){var d,e,g={};for(d in c)e=c[d],b[d]!==e&&(f[d]||!a.fx.step[d]&&isNaN(parseFloat(e))||(g[d]=e));return g}var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,d){a.fx.step[d]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(c.style(a.elem,d,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(c,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").addBack():g;j=j.map(function(){var c=a(this);return{el:c,start:b(this)}}),f=function(){a.each(e,function(a,b){c[b]&&g[b+"Class"](c[b])})},f(),j=j.map(function(){return this.end=b(this.el[0]),this.diff=d(this.start,this.end),this}),g.attr("class",h),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){f(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(b){return function(c,d,e,f,g){return"boolean"==typeof d||void 0===d?e?a.effects.animateClass.call(this,d?{add:c}:{remove:c},e,f,g):b.apply(this,arguments):a.effects.animateClass.call(this,{toggle:c},d,e,f)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function c(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function d(b){return!(b&&"number"!=typeof b&&!a.fx.speeds[b])||("string"==typeof b&&!a.effects.effect[b]||(!!a.isFunction(b)||"object"==typeof b&&!b.effect))}a.extend(a.effects,{version:"1.11.4",save:function(a,c){for(var d=0;d<c.length;d++)null!==c[d]&&a.data(b+c[d],a[0].style[c[d]])},restore:function(a,c){var d,e;for(e=0;e<c.length;e++)null!==c[e]&&(d=a.data(b+c[e]),void 0===d&&(d=""),a.css(c[e],d))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function b(b){function c(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=d.complete,h=d.mode;(e.is(":hidden")?"hide"===h:"show"===h)?(e[h](),c()):g.call(e[0],d,c)}var d=c.apply(this,arguments),e=d.mode,f=d.queue,g=a.effects.effect[d.effect];return a.fx.off||!g?e?this[e](d.duration,d.complete):this.each(function(){d.complete&&d.complete.call(this)}):f===!1?this.each(b):this.queue(f||"fx",b)},show:function(a){return function(b){if(d(b))return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}}(a.fn.show),hide:function(a){return function(b){if(d(b))return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}}(a.fn.hide),toggle:function(a){return function(b){if(d(b)||"boolean"==typeof b)return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(2*a)/2:1-c(a*-2+2)/2}})}(),a.effects});
jQuery.noConflict();;(function($,window,document,undefined){"use strict";var $window=$(window);var $document=$(document);var $body=$('body');$.fn.vwPhotoProofing=function(){this.each(function(i,el){var $approveButton=$(el);var $postBox=$approveButton.parents('.vw-gallery__item');if('approved'==$approveButton.data('proofing')){$postBox.addClass('vw-approved');}
$approveButton.on('click',function(e){e.preventDefault();e.stopPropagation();var $this=$(this);$postBox.addClass('vw-approving');$.ajax({type:"GET",url:vw_main_js.ajaxurl,cache:false,data:{action:'kepler_photo_proofing',method:$this.data('proofing')=='approved'?'reject':'approve',galleryid:$this.data('galleryid'),photoid:$this.data('photoid'),_wpnonce:$('#vw_photo_proofing_nonce').val(),},success:function(data){$postBox.removeClass('vw-approving');if($this.data('proofing')=='approved'){$this.data('proofing','rejected');$postBox.removeClass('vw-approved');}else{$this.data('proofing','approved');$postBox.addClass('vw-approved');}},});});});$('.vw-proofing-filter__approved').on('click',function(e){e.preventDefault();e.stopPropagation();var $this=$(this);$this.parent().find('a:not( .vw-button--white )').addClass('vw-button--white');$this.removeClass('vw-button--white');$('.vw-gallery__item').hide().filter('.vw-approved').fadeIn(500);});$('.vw-proofing-filter__rejected').on('click',function(e){e.preventDefault();e.stopPropagation();var $this=$(this);$this.parent().find('a:not( .vw-button--white )').addClass('vw-button--white');$this.removeClass('vw-button--white');$('.vw-gallery__item').hide().filter(':not(.vw-approved)').fadeIn(500);});$('.vw-proofing-filter__all').on('click',function(e){e.preventDefault();e.stopPropagation();var $this=$(this);$this.parent().find('a:not( .vw-button--white )').addClass('vw-button--white');$this.removeClass('vw-button--white');$('.vw-gallery__item').hide().fadeIn(500);});};$.fn.vwCategoryFilter=function(){this.each(function(i,el){var $categories=$(el);var $filters=$categories.find('a');$filters.each(function(i,el){var $button=$(el);$button.on('click',function(e){e.preventDefault();e.stopPropagation();$button.parent().find('a:not( .vw-button--white )').addClass('vw-button--white');$button.removeClass('vw-button--white');var slug=$button.data('slug');Waypoint.refreshAll();if('all'==slug){$('.vw-portfolios .vw-flex-grid__item').hide().finish().fadeIn(500);}else{$('.vw-portfolios .vw-flex-grid__item').hide().finish().filter('[data-slugs~='+slug+']').fadeIn(500);}});});});};$.fn.vwTitleParallax=function(){var t=$(window).scrollTop(),i=$(this),n=i.parent().height();if(i.length){t-=i.parent().offset().top;if(t<0)t=0;i.css({transform:'translate3d( 0,'+(0.4*t+"px")+',0)',opacity:1-1/(n/t)});}}
$.fn.vwTitleAreaBackground=function(options){if(!vw_main_js.hasOwnProperty('vw_backstretch_images')){return;}
if($.fn.vegas){var $target=$('.vw-title-area');var $background=$target.find('.vw-title-area__background');if($target.length==0)return;var resize_handle=function(){$target.find('.vw-title-area__inner').css('height',$target.height()+'px');};resize_handle();$window.resize(resize_handle);var slides=[];$.each(vw_main_js.vw_backstretch_images,function(i,el){var src={src:el};if(vw_main_js.vw_backstretch_video){src.video={src:[vw_main_js.vw_backstretch_video],loop:true,mute:true};}
slides.push(src);});$background.vegas({autoplay:true,timer:false,'transition':vw_main_js.vw_backstretch_opt_transition,'transitionDuration':vw_main_js.vw_backstretch_opt_fade,delay:vw_main_js.vw_backstretch_opt_duration,slides:slides,animation:vw_main_js.vw_backstretch_opt_animation,});$target.addClass('vw-title-area--has-bg');var $captions=$('<div></div>',{class:'vw-title-area__captions'});$.each(vw_main_js.vw_backstretch_captions,function(i,caption){$captions.append($('<div></div>',{class:'vw-title-area__caption vw-caption',html:caption}));});$target.append($captions);var $locations=$('<div></div>',{class:'vw-title-area__locations'});$.each(vw_main_js.vw_backstretch_locations,function(i,location){$locations.append($('<div></div>',{class:'vw-title-area__location',html:location}));});$target.append($locations);$target.on('vegaswalk',function(e,index,slideSettings){$target.find('.vw-title-area__caption').removeClass('visible').eq(index).addClass('visible');$target.find('.vw-title-area__location').removeClass('visible').eq(index).addClass('visible');});if(slides.length>1){$target.find('.vw-title-area__nav').removeClass('hidden');}
$target.find('.vw-title-area__nav-button--next').on('click',function(e){e.preventDefault();e.stopPropagation();$background.vegas("next");});$target.find('.vw-title-area__nav-button--prev').on('click',function(e){e.preventDefault();e.stopPropagation();$background.vegas("previous");});}}
$.fn.vwScroller=function(options){var default_options={delay:500,position:0.7,visibleClass:'',invisibleClass:'',}
var isVisible=false;var $document=$(document);var $window=$(window);options=$.extend(default_options,options);var observer=$.proxy(function(){var isInViewPort=$document.scrollTop()>(($document.height()-$window.height())*options.position);if(!isVisible&&isInViewPort){onVisible();}else if(isVisible&&!isInViewPort){onInvisible();}},this);var onVisible=$.proxy(function(){isVisible=true;if(options.visibleClass){this.addClass(options.visibleClass);}
if(options.invisibleClass){this.removeClass(options.invisibleClass);}},this);var onInvisible=$.proxy(function(){isVisible=false;if(options.visibleClass){this.removeClass(options.visibleClass);}
if(options.invisibleClass){this.addClass(options.invisibleClass);}},this);setInterval(observer,options.delay);return this;}
$.fn.vwInView=function(){var itemQueue=[];var delay=70;var queueTimer;function processItemQueue(){if(queueTimer)return;queueTimer=window.setInterval(function(){if(itemQueue.length){var $img=$(itemQueue.shift());if(!$img.hasClass('vw-inview--visible')){$img.addClass('vw-inview--visible');}
processItemQueue();}else{window.clearInterval(queueTimer);queueTimer=null;}},delay);}
if(!$body.hasClass('vw-disable-inview')){this.waypoint(function(){itemQueue.push(this.element);processItemQueue();},{offset:'98%'});}}
$.fn.vwCustomTiledGallery=function(){this.each(function(i,el){var $gallery=$(el);var layout=$gallery.attr('data-gallery-layout');if(!(parseInt(layout,10)>0)){layout='213';}
layout=layout.split('');var columnLayout=[];for(var i in layout){var columnCount=parseInt(layout[i],10);var columnWidth=100.0/columnCount;for(var j=1;j<=columnCount;j++){columnLayout.push(columnWidth);}}
$gallery.find('> figure').each(function(i,el){var $el=$(el);var layoutIndex=i%columnLayout.length;$el.css('width',columnLayout[layoutIndex]-1+'%');});});}
$.fn.vwFixedTab=function(){this.each(function(i,el){var $this=$(el);var $tabs=$this.find('.vw-fixed-tab-title');var $contents=$this.find('.vw-fixed-tab-content');$tabs.each(function(i,el){$(el).on('click',function(e){e.preventDefault();$this.find('.vw-fixed-tab-title.is-active').removeClass('is-active');$(this).addClass('is-active');$this.find('.vw-fixed-tab-content.is-active').hide();$contents.eq(i).show().addClass('is-active');$(document).trigger('vw_content_height_changed');})});});}
$.fn.vwShareLink=function(){this.on('click',function(e){var $this=$(this);var url=$this.attr('href');var width=$this.data('width');var height=$this.data('height');var leftPosition,topPosition;leftPosition=(window.screen.width/2)-((width/2)+10);topPosition=(window.screen.height/2)-((height/2)+50);var windowFeatures="status=no,height="+height+",width="+width+",resizable=yes,left="+leftPosition+",top="+topPosition+",screenX="+leftPosition+",screenY="+topPosition+",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";window.open(url,'sharer',windowFeatures);return false;});};$.fn.vwPaginationAjax=function(){function bind_click_event($placeholder){var $link=$placeholder.find('.vw-pagination a');$link.on('click',_on_click);$placeholder.find('.vw-pagination--infinite-auto .vw-pagination__load-more').waypoint({handler:function(direction){$link.click();},offset:'90%',});}
var _on_click=function(e){var $this=$(this);var link=$this.attr('href');var $viewport=$('html, body');var $container=$this.closest('.vw-content-main, .vw-post-shortcode, .vwspc-section');var container_id=$container.attr('id');if(!container_id){console.log('AJAX Pagination: No container',$container);return;}else{e.preventDefault();}
if($container.hasClass('vwspc-section')){var placeholder='#'+container_id+' .vwspc-section-content';var $post_container=$container.find('.vwspc-section-content .vw-loop');var $controls=$container.find('.vwspc-section-content .vw-loop > *, .vwspc-section-content .vw-pagination');}else{var placeholder='#'+container_id;var $post_container=$container.find('.vw-loop');var $controls=$container.find('.vw-loop > *, .vw-pagination');}
var $placeholder=$(placeholder);var is_append_items=$this.parents('.vw-pagination').hasClass('vw-pagination--append-items');var $preloader=$('<div class="vw-preloader"><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div></div>');if(is_append_items){if(!$placeholder.find('.vw-preloader').length){$placeholder.find('.vw-loop').last().after($preloader);}
$placeholder.find('.vw-pagination').remove();$('<div>').load(link+' '+placeholder+'>*',function(response,status,xhr){if(status=='success'){var $new_items=$(this).find('.vw-loop');var $new_pagination=$(this).find('.vw-pagination');$placeholder.find('.vw-preloader').remove();var $loop=$placeholder.find('.vw-loop');var $existing_isotope=$loop.find('.vw-isotope');if($loop.length==1&&$existing_isotope.length==1){var $new_isotope_items=$new_items.find('.vw-isotope > *');$existing_isotope.isotope('insert',$new_isotope_items);$existing_isotope.vwIsotope('layout');}else{var $loop_outer=$loop.eq(0).parent();$loop_outer.append($new_items);$new_items.find('.vw-isotope').vwIsotope();}
$container.find('.vw-inview').vwInView();$placeholder.append($new_pagination);bind_click_event($placeholder);}else if(status=='error'){console.log('AJAX Pagination: '+xhr.status+': '+xhr.statusText);}});}else{$viewport.animate({scrollTop:$container.offset().top-60},1700,"easeOutQuint").on("scroll mousedown DOMMouseScroll mousewheel keyup",function(e){if(e.which>0||e.type==="mousedown"||e.type==="mousewheel"){$viewport.stop().off('scroll mousedown DOMMouseScroll mousewheel keyup');}});$controls.fadeTo(500,0,function(){$(this).css('visibility','hidden');});$preloader.addClass('vw-preloader--floating');$post_container.eq(0).append($preloader);$(placeholder).load(link+' '+placeholder+'>*',function(response,status,xhr){if(status=='success'){$container.find('.vw-isotope').vwIsotope('layout');$container.find('.vw-inview').vwInView();bind_click_event($placeholder);}else if(status=='error'){console.log('AJAX Pagination: '+xhr.status+': '+xhr.statusText);}});}}
bind_click_event($(this));}
$.fn.vwIsotope=function(){if($.fn.isotope){var $isotope_list=$(this);$isotope_list.each(function(i,el){var $this=$(el);$this.imagesLoaded(function(){$this.isotope({layoutMode:'packery',percentPosition:true,});});});}};$.fn.vwSticky=function(){if(Waypoint.Sticky){var $sticky_bar=$(this);var $sticky_wrapper=false;if($sticky_bar.length==0)return;var sticky=new Waypoint.Sticky({stuckClass:'vw-stuck',element:$sticky_bar[0],wrapper:'<div class="vw-sticky-wrapper" />',});var didScroll;var lastScrollTop=0;var delta=5;var navbarHeight=$sticky_bar.outerHeight();$window.scroll(function(event){didScroll=true;});setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},150);var hasScrolled=function(){var st=$window.scrollTop();if(Math.abs(lastScrollTop-st)<=delta)
return;if(st>lastScrollTop&&st>navbarHeight){$sticky_bar.removeClass('vw-stuck--down').addClass('vw-stuck--up');}else{if(st+$window.height()<$document.height()){$sticky_bar.removeClass('vw-stuck--up').addClass('vw-stuck--down');}}
if(st==0){$sticky_bar.removeClass('vw-stuck--down');}
lastScrollTop=st;}}}
var istouchable=false;if(!("ontouchstart"in document.documentElement)){document.documentElement.className+=" no-touch";}else{document.documentElement.className+=" touchable";istouchable=true;}
function debounce(func,wait,immediate){var timeout,args,context,timestamp,result;var later=function(){var last=Date.now-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else{timeout=null;if(!immediate){result=func.apply(context,args);if(!timeout)context=args=null;}}};return function(){context=this;args=arguments;timestamp=Date.now;var callNow=immediate&&!timeout;if(!timeout)timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);context=args=null;}
return result;};};$(document).ready(function(){if($.fn.vwCategoryFilter){$('.vw-category-filter').vwCategoryFilter();}
if($.fn.knob){$('.vw-review__total--point .vw-review__dial').knob({thickness:0.16,width:120,height:120,min:0,max:10,step:0.1,readOnly:true,displayPrevious:true,fgColor:vw_main_js.accent_color,font:'inherit',fontWeight:'inherit',});$('.vw-review__total--percentage .vw-review__dial').knob({thickness:0.16,width:120,height:120,min:0,max:100,step:1,readOnly:true,displayPrevious:true,fgColor:vw_main_js.accent_color,font:'inherit',fontWeight:'inherit','format':function(v){return v+'%';}});}
if($.fn.vwPhotoProofing){$('.vw-gallery__proofing').vwPhotoProofing();}
if($.fn.easyTicker){$('.vw-ticker__list').easyTicker({visible:1,});}
if($.fn.vwTitleParallax){var $title=$('.vw-title-area--has-bg .vw-title-area__inner');var run=function(){$title.vwTitleParallax();}
$(window).on("scroll",function(){window.requestAnimationFrame(run);});}
if($.fn.vwIsotope){$('.vw-isotope').vwIsotope({});}
if($.fn.vwTitleAreaBackground){$('body').vwTitleAreaBackground();}
var $viewport=$('.vw-viewport--full-height');var curHeight=0;if(istouchable&&$viewport.length){var calculate_viewport=function(){var newHeight=document.documentElement.clientHeight;if(Math.abs(newHeight-curHeight)>(curHeight*0.1)){$viewport.height(newHeight);curHeight=newHeight;}};$window.resize(debounce(calculate_viewport,100));calculate_viewport();}
if($.fn.slick){var slick_default_options={arrows:true,dots:false,speed:parseInt(vw_main_js.slider_transition_speed),autoplay:true,autoplaySpeed:parseInt(vw_main_js.slider_slide_duration),useCSS:true,useTransform:true,infinite:true,adaptiveHeight:true,rtl:vw_main_js.is_rtl=='1',}
$('.vw-slides').on('init',function(slick){$(this).removeClass('vw-slides--loading');});$('.vw-carousel-slider-3 .vw-slides').slick($.extend({},slick_default_options,{slidesToShow:3,responsive:[{breakpoint:767,settings:{slidesToShow:2,}},],}));$('.vw-carousel-slider-4 .vw-slides').slick($.extend({},slick_default_options,{slidesToShow:4,responsive:[{breakpoint:767,settings:{slidesToShow:2,}},],}));$('.vw-carousel-slider-7 .vw-slides').slick($.extend({},slick_default_options,{slidesToShow:7,responsive:[{breakpoint:991,settings:{slidesToShow:3,}},{breakpoint:767,settings:{slidesToShow:2,}},],}));$('.vw-single-slider .vw-slides').slick($.extend({},slick_default_options,{}));}
if($.fn.vwShareLink){$('.vw-post-share__link').vwShareLink();}
if($.fn.vwScroller){var $scroll_to_top=$('.vw-scroll-to-top');$scroll_to_top.vwScroller({visibleClass:'vw-scroll-to-top-visible'});$scroll_to_top.on('click',function(e){e.preventDefault();e.stopPropagation();$('html, body').animate({scrollTop:0},"easeInOut");});}
if($.fn.vwScroller){var $more_articles=$('.vw-more-articles');$more_articles.vwScroller({visibleClass:'vw-more-articles--visible',position:0.55})
$more_articles.find('.vw-more-articles__close-button').on('click',function(){$more_articles.hide();});}
if($.fn.perfectScrollbar){$('.vw-side-panel').perfectScrollbar();}
$('.vw-side-panel__backdrop').on('click',function(e){e.preventDefault();e.stopPropagation();$('.vw-open-side-panel').removeClass('vw-open-side-panel');$('.vw-mobile-nav-button button').removeClass('is-active');});$('.vw-mobile-nav-button button').on('click',function(e){e.preventDefault();e.stopPropagation();$('body').toggleClass('vw-open-side-panel');$(this).toggleClass('is-active');});var $sidemenu=$('.vw-side-panel__menu');var $sidesubmenu=$('.vw-side-panel__sub-menu');var submenutopoffset=0;var mobile_pos=$('.vw-side-panel__main-menu').position();if(mobile_pos){submenutopoffset=mobile_pos.top;}
$('.vw-side-panel__sub-menu').css('top',submenutopoffset);var sidemenu_height=$sidemenu.height();$sidemenu.height(sidemenu_height);$('.vw-side-panel__close-sub-menu').on('click',function(e){$sidemenu.removeClass('vw-side-panel__menu--opened');$sidemenu.height(sidemenu_height);});$('.vw-side-panel__main-menu .main-menu-item.menu-item-has-children').on('click',function(e){e.preventDefault();e.stopPropagation();$sidesubmenu.find('.sub-menu-wrapper').remove();$sidesubmenu.find('.vw-menu-mobile').append($(this).find('> .sub-menu-wrapper').clone());$sidemenu.addClass('vw-side-panel__menu--opened');$sidemenu.height($sidesubmenu.height()+submenutopoffset);});if($.fn.fitVids){$(['.flxmap-container','.comment-body','.vw-main-post','.vw-media-area','.vw-side-media-area','.vw-post-content','.vw-post-media','.vw-post-box__content','#footer',].join(", ")).fitVids({customSelector:"iframe[src*='maps.google.'], iframe[src*='soundcloud.com']",});}
if($.fn.magnificPopup){var magnific_options={type:'image',mainClass:'my-mfp-zoom-in',closeOnContentClick:true,gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{verticalFit:true,},zoom:{enabled:false,duration:300,}};$.each(['.vw-post-media--featured a','.vw-post-content a[href*=".png"], .vw-post-content a[href*=".jpg"], .vw-post-content a[href*=".jpeg"]','.vw-post-box__play','.vw-post-box__zoom','.vw-gallery__zoom',],function(i,selector){$(selector).magnificPopup(magnific_options);});}
$('.vw-menu-top, .vw-menu-main, .vw-menu-bottom').find('.vw-menu').superfish({popUpSelector:'.sub-menu-wrapper',delay:500,animation:{opacity:'show',marginTop:0},animationOut:{opacity:'hide',marginTop:10},speed:200,speedOut:100,autoArrows:false,});if($.fn.instant_search){$('.vw-instant-search__button').instant_search();}
if($.fn.vwPaginationAjax){$('.vw-content-main, .vwspc-section').vwPaginationAjax();}
if($.fn.vwFixedTab){$('.vw-fixed-tab').vwFixedTab();}
if($.fn.hoverIntent){$('.vw-hoverintent').hoverIntent({over:function(){$(this).addClass('vw-hover');},out:function(){$(this).removeClass('vw-hover');},timeout:300,});}
if($.fn.theiaStickySidebar){var offset=15;if($('#wpadminbar')){offset+=$('#wpadminbar').height();}
$('.vw-enable-sticky-sidebar .vw-content-sidebar, .vw-enable-sticky-sidebar .vwspc-section-sidebar').theiaStickySidebar({additionalMarginTop:offset,});}
var $cart_panel=$('.vw-cart-button-wrapper .vw-cart-button-panel');$('.vw-cart-button').on('click',function(e){e.preventDefault();if(!$cart_panel.is(':visible')){$cart_panel.fadeIn(150);}else{$cart_panel.fadeOut(150);}
return false;});$(document).mousedown(function(e){if((!$cart_panel.is(e.target)&&$cart_panel.has(e.target).length===0)){$cart_panel.fadeOut(150);}});setTimeout(function(){$('.vw-loop:not( .vw-disable-inview )').each(function(i,el){$(el).find('.vw-inview').vwInView();});$('.vw-inview-shortcode').vwInView();},150);});$(window).load(function(){$('.vw-enable-sticky-menu .vw-sticky-menu').vwSticky();})})(jQuery,window,document);
/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./effect"],a):a(jQuery)}(function(a){return a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}});
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g))):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});
/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var b=this.options;this.prevShow=this.prevHide=a(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),b.collapsible||b.active!==!1&&null!=b.active||(b.active=0),this._processPanels(),b.active<0&&(b.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():a()}},_createIcons:function(){var b=this.options.icons;b&&(a("<span>").addClass("ui-accordion-header-icon ui-icon "+b.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){return"active"===a?void this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons()),void("disabled"===a&&(this.element.toggleClass("ui-state-disabled",!!b).attr("aria-disabled",b),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b))))},_keydown:function(b){if(!b.altKey&&!b.ctrlKey){var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),b.preventDefault())}},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().focus()},refresh:function(){var b=this.options;this._processPanels(),b.active===!1&&b.collapsible===!0||!this.headers.length?(b.active=!1,this.active=a()):b.active===!1?this._activate(0):this.active.length&&!a.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(b.active=!1,this.active=a()):this._activate(Math.max(0,b.active-1)):b.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var a=this.headers,b=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),b&&(this._off(a.not(this.headers)),this._off(b.not(this.panels)))},_refresh:function(){var b,c=this.options,d=c.heightStyle,e=this.element.parent();this.active=this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var b=a(this),c=b.uniqueId().attr("id"),d=b.next(),e=d.uniqueId().attr("id");b.attr("aria-controls",e),d.attr("aria-labelledby",c)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(c.event),"fill"===d?(b=e.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");"absolute"!==d&&"fixed"!==d&&(b-=c.outerHeight(!0))}),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===d&&(b=0,this.headers.next().each(function(){b=Math.max(b,a(this).css("height","").height())}).height(b))},_activate:function(b){var c=this._findActive(b)[0];c!==this.active[0]&&(c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return"number"==typeof b?this.headers.eq(b):a()},_setupEvents:function(b){var c={keydown:"_keydown"};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e[0]===d[0],g=f&&c.collapsible,h=g?a():e.next(),i=d.next(),j={oldHeader:d,oldPanel:i,newHeader:g?a():e,newPanel:h};b.preventDefault(),f&&!c.collapsible||this._trigger("beforeActivate",b,j)===!1||(c.active=!g&&this.headers.index(e),this.active=f?a():e,this._toggle(j),d.removeClass("ui-accordion-header-active ui-state-active"),c.icons&&d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header),f||(e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),c.icons&&e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader),e.next().addClass("ui-accordion-content-active")))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-hidden":"true"}),d.prev().attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&d.length?d.prev().attr({tabIndex:-1,"aria-expanded":"false"}):c.length&&this.headers.filter(function(){return 0===parseInt(a(this).attr("tabIndex"),10)}).attr("tabIndex",-1),c.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(a,b,c){var d,e,f,g=this,h=0,i=a.css("box-sizing"),j=a.length&&(!b.length||a.index()<b.index()),k=this.options.animate||{},l=j&&k.down||k,m=function(){g._toggleComplete(c)};return"number"==typeof l&&(f=l),"string"==typeof l&&(e=l),e=e||l.easing||k.easing,f=f||l.duration||k.duration,b.length?a.length?(d=a.show().outerHeight(),b.animate(this.hideProps,{duration:f,easing:e,step:function(a,b){b.now=Math.round(a)}}),void a.hide().animate(this.showProps,{duration:f,easing:e,complete:m,step:function(a,c){c.now=Math.round(a),"height"!==c.prop?"content-box"===i&&(h+=c.now):"content"!==g.options.heightStyle&&(c.now=Math.round(d-b.outerHeight()-h),h=0)}})):b.animate(this.hideProps,f,e,m):a.animate(this.showProps,f,e,m)},_toggleComplete:function(a){var b=a.oldPanel;b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}})});
/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c,d;b=b.cloneNode(!1),c=b.href.replace(a,""),d=location.href.replace(a,"");try{c=decodeURIComponent(c)}catch(e){}try{d=decodeURIComponent(d)}catch(e){}return b.hash.length>1&&c===d}}(),_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){if(a(e).attr("aria-controls")===d)return b=c,!1}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==b&&b!==-1||(b=!!this.tabs.length&&0)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),b===-1&&(b=!c&&0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d!==this.options.active&&d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||b.metaKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),b<0&&(b=e),b}for(var e=this.tabs.length-1;a.inArray(d(),this.options.disabled)!==-1;)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this,c=this.tabs,d=this.anchors,e=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,f,g,h=a(d).uniqueId().attr("id"),i=a(d).closest("li"),j=i.attr("aria-controls");b._isLocal(d)?(e=d.hash,g=e.substring(1),f=b.element.find(b._sanitizeSelector(e))):(g=i.attr("aria-controls")||a({}).uniqueId()[0].id,e="#"+g,f=b.element.find(e),f.length||(f=b._createPanel(g),f.insertAfter(b.panels[c-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),j&&i.data("ui-tabs-aria-controls",j),i.attr({"aria-controls":g,"aria-labelledby":h}),f.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(e.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||a.inArray(d,b)!==-1?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=!h&&this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var c=this.options.disabled;c!==!1&&(void 0===b?c=!1:(b=this._getIndex(b),c=a.isArray(c)?a.map(c,function(a){return a!==b?a:null}):a.map(this.tabs,function(a,c){return c!==b?c:null})),this._setupDisabled(c))},disable:function(b){var c=this.options.disabled;if(c!==!0){if(void 0===b)c=!0;else{if(b=this._getIndex(b),a.inArray(b,c)!==-1)return;c=a.isArray(c)?a.merge([b],c).sort():[b]}this._setupDisabled(c)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),f=e.find(".ui-tabs-anchor"),g=this._getPanelForTab(e),h={tab:e,panel:g},i=function(a,b){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),g.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr};this._isLocal(f[0])||(this.xhr=a.ajax(this._ajaxSettings(f,c,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.done(function(a,b,e){setTimeout(function(){g.html(a),d._trigger("load",c,h),i(e,b)},1)}).fail(function(a,b){setTimeout(function(){i(a,b)},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})});
;(function($,window,document,undefined){"use strict";$(document).ready(function($){$(".vw-accordion").each(function(i,e){var $this=$(e);var options={heightStyle:'content',header:'.vw-accordion__header',collapsible:true}
if($this.data('open')==true){options.active=0;}else{options.active=false;}
$this.accordion(options);});$('.vw-tabs').each(function(i,el){var $tabs=$(el);var is_tabs_initialed=false;$('.vw-tab-title',$tabs).click(function(e){var $tab=$(this);var $content=$($tab.attr('href'));var tab_selector='#tab-'+$tab.data('tab-id');if($content.length){$('.active',$tabs).removeClass('active');$('.vw-tab-content',$tabs).hide();$content.show();$('.tab-id-'+$tab.data('tab-id'),$tabs).addClass('active');}
e.preventDefault();if(is_tabs_initialed){if(history.pushState){history.pushState(null,null,tab_selector);}else{location.hash=tab_selector;}}
return false;});var $selected_tab=$(location.hash+'.vw-tab-content');if($selected_tab.length){$('.vw-tab-title.tab-id-'+$selected_tab.data('tab-id')).trigger('click');}else{$('.vw-tab-title',$tabs).eq(0).trigger('click');}
is_tabs_initialed=true;});});})(jQuery,window,document);
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
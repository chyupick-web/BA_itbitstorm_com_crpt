M844[333588]=window;M844[316370]="Gop";M844[603481]="Bfn";M844[8235]=M844[333588];M844[483072]="LDo";M844[517807]=M844[333588];function M844(){}M844[60964]=851;M844[447566]="Ig_";M844[333588].p8mm=M844;M844[539713]=false;var _chpmgr={'\x70\x6f\x70\x75\x70\x73':[],'\x63\x6f\x6f\x6b\x69\x65\x50\x72\x65\x66\x69\x78':"pp",'\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65':function(){var T=[{'\x64\x6f\x6d\x61\x69\x6e':"gempages",'\x74\x79\x70\x65':"net"}];var x=_chpmgr.audienceConditions._getCurrentHostData();var P=false;for(var M=0;M < T.length;M++){var Q=T[M];if(Q.domain == x.domain && Q.type == x.type){P=true;break;}}if(P){console.warn("---:> Not loading chppps");return false;}jQuery("body").append("<input type='text' id='chp_txt_utstttco' style='position: fixed; z-index: 99999; top:-1000px; left: -1000px;' />");var b=false;for(var E of _chpmgr.popups){for(var t of E.audience_conditions){if(t.type == "country_code"){b=true;break;}}if(b)break;}jQuery.each(_chpmgr.popups,function(K,f){_chpmgr.setupPopup(f);});if(b){_chpmgr.envInfo.isCountryCode("-",function(U){console.log("-- country_code ready, init.");_chpmgr.cartEvts.init();_chpmgr.cartEvts.onCartChanged();});}else {_chpmgr.cartEvts.init();_chpmgr.cartEvts.onCartChanged();}jQuery(document).trigger("chpmgr_popups_ready");if(typeof _chpmgr.chpCustomShopFunctions[_chpmgr.site] == "function"){_chpmgr.chpCustomShopFunctions[_chpmgr.site]();}},'\x67\x65\x74\x55\x52\x4c\x50\x61\x72\x61\x6d\x65\x74\x65\x72':function(I){var j=_chpmgr.getScriptURL();return decodeURI((RegExp(I + '=' + '(.+?)(&|$)').exec(j) || [,null])[1]);},'\x67\x65\x74\x53\x63\x72\x69\x70\x74\x55\x52\x4c':function(){var Z="";var H=[];jQuery("script").each(function(){if(jQuery(this).prop('src').indexOf("?") > -1 && jQuery(this).prop('src').split("?")[0].indexOf("chpmgr.js") > -1){var S=jQuery(this).prop("src");H.push(S);if(S.indexOf("dzb8cpemp5pp6") >= 0)Z=S;}});if(Z == "")Z=H[0];return Z;},'\x67\x65\x74\x46\x6c\x6f\x61\x74\x4e\x75\x6d\x62\x65\x72\x46\x72\x6f\x6d\x53\x74\x72\x69\x6e\x67':function(O){if(!O)O="0";var A=O.match(/\-|(\d+|\.)/g);if(!A)return 0;return Number(A.join(""));},'\x67\x65\x74\x46\x6f\x6e\x74\x73':function(){var G=[];jQuery(".chp_component span").each(function(){var R=jQuery(this);G.push(R.css("fontFamily"));});jQuery(".chp_button").each(function(){var V=jQuery(this);G.push(V.css("fontFamily"));});return G;},'\x73\x65\x74\x75\x70\x50\x6f\x70\x75\x70':function(s){if(jQuery("#" + s.id).length > 0){return false;}var o=jQuery(s.popup_html);o.addClass("chpp");o.attr("id",s.id);jQuery("body").append(o);this.checkPreloadBgs(s.id);this.checkCustomShopsFunctions();_chpmgr.triggersMgr.setupTriggers(s);},'\x63\x68\x65\x63\x6b\x50\x72\x65\x6c\x6f\x61\x64\x42\x67\x73':function(y){jQuery("#" + y).find(".popup_col").each(function(){var Y=jQuery(this);var C=Y.css("background-image");if(!C || C.length < 10){return true;}C=C.replace(/"|'|\)|\s/g,"");C=C.replace("url(","");var N=new Image();N.src=C;});},'\x63\x68\x65\x63\x6b\x43\x75\x73\x74\x6f\x6d\x53\x68\x6f\x70\x73\x46\x75\x6e\x63\x74\x69\x6f\x6e\x73':function(){jQuery(document).on("chp_bar_announcement_opened",function(L,q){if(_chpmgr.site == "whatif-foods.myshopify.com"){jQuery(".sidebar").css("top",q.bar_height + "px");}});jQuery(document).on("chp_bar_announcement_closed",function(X,g){if(_chpmgr.site == "whatif-foods.myshopify.com"){jQuery(".sidebar").css("top","0px");}});},'\x70\x6f\x70\x75\x70\x48\x61\x73\x56\x61\x6c\x69\x64\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x73':function(r){var w=_chpmgr.getPopupDataById(r);return w.validConditions;},'\x63\x68\x65\x63\x6b\x50\x6f\x70\x75\x70\x56\x61\x6c\x69\x64\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x73\x41\x6e\x64\x4f\x70\x65\x6e':function(F){var J=_chpmgr.getPopupDataById(F.ref);if(!J.validConditions){return;}_chpmgr.openPopup(F);},'\x6f\x70\x65\x6e\x50\x6f\x70\x75\x70':function(W){if(jQuery.magnificPopup.instance && jQuery.magnificPopup.instance.isOpen){return false;}if(W.invocation != "manual" && _chpmgr.existsDisplayedPopupCookie(W.ref)){return false;}if(window.location.href.indexOf("/orders/") >= 0){return false;}jQuery("#" + W.ref).find(".chp_button.snd_frm").removeClass("chp_locked");_chpmgr._resetFields();_chpmgr._evtsClick(W);_chpmgr._checkShowPopupByType(W);},'\x5f\x65\x76\x74\x73\x43\x6c\x69\x63\x6b':function(z){jQuery("#" + z.ref).find(".chp_link").off("click").on("click",function(D){_chpmgr.evRept.rClick(z.ref,"rclick");jQuery(document).trigger("chp_link_click",{'\x65\x76\x65\x6e\x74':D,'\x69\x74\x65\x6d':jQuery(this)});});},'\x5f\x63\x68\x65\x63\x6b\x53\x68\x6f\x77\x50\x6f\x70\x75\x70\x42\x79\x54\x79\x70\x65':function(k){var l=_chpmgr.getPopupDataById(k.ref);if(!l){return;}if(k.invocation != "manual" && _chpmgr.hideIfCustomerRegistered(l)){return;}if(l.lkbyadv == true){return;}if(l.ptk == "nnbr"){_chpmgr._popupShowMgr._showBar(k);return;}_chpmgr._popupShowMgr._showMagnific(k);},'\x5f\x70\x6f\x70\x75\x70\x53\x68\x6f\x77\x4d\x67\x72':{'\x5f\x73\x68\x6f\x77\x42\x61\x72':function(B){var b8=jQuery("#" + B.ref);_chpmgr.evRept.rView(B.ref);_chpmgr.setDisplayedPopupCookie(B);var M8=_chpmgr._popupShowMgr._checkBarAndSetPadding(B.ref,"open");_chpmgr._popupShowMgr.__addBarEvents(B,M8);},'\x5f\x5f\x61\x64\x64\x42\x61\x72\x45\x76\x65\x6e\x74\x73':function(T8,E8){jQuery("#" + T8.ref).find(".btn_chp_close, .chp_link.cls_pp").off("click").on("click",function(f8){f8.preventDefault();_chpmgr._popupShowMgr._checkBarAndSetPadding(T8.ref,"close");});jQuery("#" + T8.ref).find(".chp_link.cpy_clp").off("click").on("click",function(K8){K8.preventDefault();_chpmgr._tryCopyBtnText(jQuery(this));});jQuery("#" + T8.ref).find(".chp_open_popup").off("click").on("click",function(u8){u8.preventDefault();u8.stopPropagation();_chpmgr.openPopup({'\x6b\x65\x79':'button','\x69\x6e\x76\x6f\x63\x61\x74\x69\x6f\x6e':'manual','\x72\x65\x66':jQuery(this).attr("data-chp-id"),'\x74\x79\x70\x65\x5f\x69\x64':2});});if(jQuery("#" + T8.ref).attr("data-chp-behavior") == "chp_bar_abs"){var P8="scroll.chp_bar" + T8.ref;var Q8=E8;var t8=0;var x8=null;jQuery(window).off(P8).on(P8,function(){if(!x8){x8=setTimeout(function(){var U8=jQuery(document).scrollTop();if(U8 > Q8){jQuery("#" + T8.ref).hide();}else {jQuery("#" + T8.ref).show();}x8=null;},100);}});}},'\x5f\x73\x68\x6f\x77\x4d\x61\x67\x6e\x69\x66\x69\x63':function(j8){jQuery("body").addClass("chp_ppvisible");jQuery.magnificPopup.open({'\x73\x68\x6f\x77\x43\x6c\x6f\x73\x65\x42\x74\x6e':false,'\x66\x69\x78\x65\x64\x43\x6f\x6e\x74\x65\x6e\x74\x50\x6f\x73':false,'\x6d\x61\x69\x6e\x43\x6c\x61\x73\x73':"chp_magnific",'\x69\x74\x65\x6d\x73':{'\x73\x72\x63':'#' + j8.ref},'\x63\x61\x6c\x6c\x62\x61\x63\x6b\x73':{'\x6f\x70\x65\x6e':function(){jQuery("body").addClass("chp_no_scroll");_chpmgr.evRept.rView(j8.ref);_chpmgr.setDisplayedPopupCookie(j8);_chpmgr.setOverlayColor(j8.ref);_chpmgr._setOverlayImage(j8.ref);_chpmgr._showPopupScreenSection(j8.ref,"form");},'\x63\x6c\x6f\x73\x65':function(){jQuery("body").removeClass("chp_no_scroll").removeClass("chp_ppvisible");jQuery(".mfp-bg.chp_magnific").css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64':"",'\x6f\x70\x61\x63\x69\x74\x79':""});jQuery(".mfp-bg.chp_magnific").html("");jQuery(document).trigger('chp_pp_closed',{'\x72\x65\x66':j8.ref});}}});_chpmgr._popupShowMgr.__addMagnificEvents(j8);},'\x5f\x5f\x61\x64\x64\x4d\x61\x67\x6e\x69\x66\x69\x63\x45\x76\x65\x6e\x74\x73':function(I8){var Z8=jQuery("#" + I8.ref);jQuery("#" + I8.ref).find(".chp_chk_policy").prop("checked",false);jQuery("#" + I8.ref).find(".chp_checkbox_error_msg").hide();Z8.find(".chp_link.cls_pp").off("click").on("click",function(n8){n8.preventDefault();jQuery.magnificPopup.close();});Z8.find(".chp_link.cpy_clp").off("click").on("click",function(H8){H8.preventDefault();_chpmgr._tryCopyBtnText(jQuery(this));});Z8.find(".chp_link.snd_frm").off("click").on("click",function(S8){S8.preventDefault();if(_chpmgr.active){return;}_chpmgr.active=false;_chpmgr._validateAndSendData(I8,function(A8,O8){_chpmgr.active=false;jQuery("#" + I8.ref).find(".chp_button.snd_frm").removeClass("chp_locked");if(A8){_chpmgr._showPopupScreenSection(I8.ref,"success");_chpmgr._checkKeywordsOnSuccess(I8.ref,O8);_chpmgr.setCustomerRegisteredCookie();}else {alert("Registration couldn't be completed.\ncode " + O8.error_code);}});});Z8.find(".btn_chp_close").off("click").on("click",jQuery.magnificPopup.close);},'\x5f\x63\x68\x65\x63\x6b\x42\x61\x72\x41\x6e\x64\x53\x65\x74\x50\x61\x64\x64\x69\x6e\x67':function(V8,i8){var a8=jQuery("#" + V8);var R8=a8.height();if(i8 == "open"){a8.removeClass("bar_hidden");R8=a8.height();a8.css("opacity","0").animate({'\x6f\x70\x61\x63\x69\x74\x79':"0.9"},20);jQuery("html").addClass("chp_bar_announcement_open");}else {R8=a8.height();a8.addClass("bar_hidden");jQuery("html").removeClass("chp_bar_announcement_open");}var d8="Top";if(a8.hasClass("chp_pos_bottom"))d8="Bottom";var v8=_chpmgr.getFloatNumberFromString(jQuery("html").css("padding" + d8));if(i8 == "open"){var G8=v8 + R8;jQuery(document).trigger("chp_bar_announcement_opened",{'\x62\x61\x72\x5f\x68\x65\x69\x67\x68\x74':G8});}else {var G8=v8 - R8;jQuery(document).trigger("chp_bar_announcement_closed",{'\x62\x61\x72\x5f\x68\x65\x69\x67\x68\x74':G8});}if(d8 == "Top")jQuery("html").animate({'\x70\x61\x64\x64\x69\x6e\x67\x54\x6f\x70':G8 + "px"},80);else if(d8 == "Bottom")jQuery("html").animate({'\x70\x61\x64\x64\x69\x6e\x67\x42\x6f\x74\x74\x6f\x6d':G8 + "px"},80);return v8 + R8;}},'\x67\x65\x74\x50\x6f\x70\x75\x70\x44\x61\x74\x61\x42\x79\x49\x64':function(o8){var s8=null;jQuery.each(_chpmgr.popups,function(C8,y8){if(y8.id == o8){s8=y8;return true;}});return s8;},'\x5f\x72\x65\x73\x65\x74\x46\x69\x65\x6c\x64\x73':function(){jQuery(".chp_textbox").removeClass("with_error").val("");},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x41\x6e\x64\x53\x65\x6e\x64\x44\x61\x74\x61':function(Y8,q8){var N8=0;if(jQuery("#" + Y8.ref).find(".chp_textbox:visible[name='email']").length == 0){return;}jQuery("#" + Y8.ref).find(".chp_textbox:visible[name='email']").each(function(){var L8=jQuery(this);if(L8.val() == ""){L8.addClass("with_error");L8.focus();N8++;}});if(N8 > 0){return false;}if(!jQuery("#" + Y8.ref).find(".chp_chk_policy").is(":checked")){jQuery("#" + Y8.ref).find(".chp_checkbox_error_msg").show();return false;}_chpmgr._sendFormData(Y8,q8);},'\x5f\x73\x65\x6e\x64\x46\x6f\x72\x6d\x44\x61\x74\x61':function(c8,g8){var X8={};var p8=_chpmgr.getPopupDataById(c8.ref);_chpmgr.active=true;jQuery("#" + c8.ref).find(".chp_button.snd_frm").addClass("chp_locked");this._getToken(p8,function(F8,r8){if(F8){w8(r8.token);}else {var e8="TK0443";if(r8.status){e8=e8 + " - " + r8.status;}else {e8=e8 + ", some Ad Blockers could stop the registration.";}g8(false,{'\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65':e8});}});function w8(z8){jQuery(".chp_textbox:visible").each(function(){var h8=jQuery(this);var l8=h8.attr("name") || "str";var D8=h8.val();if(l8 == "email")D8=D8.replace(/\s/g,"");X8[l8]=D8;});var J8=p8.id.replace("_chpp","");X8["token"]=z8;X8["h"]=J8;X8["hs"]=p8.hs;X8["site"]=_chpmgr.site;X8["chp_platform"]=_chpmgr.chp_platform;if(jQuery.isEmptyObject(X8['email'])){g8(false,{'\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65':"ML0218"});}var W8="https://pop.chilliapps.com/leads/create";jQuery.post(W8,X8,function(m8){g8(true,X8);}).fail(function(b0){var M0=b0.responseJSON || ({});var B8=M0.status;var k8="PST0701";if(B8)k8=k8 + " - " + B8;g8(false,{'\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65':k8});});}},'\x5f\x67\x65\x74\x54\x6f\x6b\x65\x6e':function(x0,T0){jQuery.post("https://pop.chilliapps.com/token",{'\x68\x73':x0.hs,'\x73\x69\x74\x65':_chpmgr.site},function(P0){T0(true,P0);}).fail(function(t0){var Q0=t0.responseJSON || ({});var E0=Q0.status;T0(false,{'\x73\x74\x61\x74\x75\x73':E0});});},'\x5f\x73\x68\x6f\x77\x50\x6f\x70\x75\x70\x53\x63\x72\x65\x65\x6e\x53\x65\x63\x74\x69\x6f\x6e':function(f0,u0){jQuery("#" + f0).find(".chpopup").addClass("chp_hidden");jQuery("#" + f0).css({'\x64\x69\x73\x70\x6c\x61\x79':"inline-block",'\x77\x69\x64\x74\x68':"auto"});var K0=jQuery("#" + f0).width();if(u0 == "form"){jQuery("#" + f0).find(".chpopup.popup_main_wrapper").removeClass("chp_hidden").removeClass("hidden");K0=jQuery("#" + f0).find(".chpopup.popup_main_wrapper").width();}else if(u0 == "success"){jQuery("#" + f0).find(".chpopup.popup_success_wrapper").removeClass("chp_hidden").removeClass("hidden");K0=jQuery("#" + f0).find(".chpopup.popup_success_wrapper").width();}jQuery("#" + f0).css({'\x77\x69\x64\x74\x68':K0 + "px",'\x64\x69\x73\x70\x6c\x61\x79':""});},'\x5f\x63\x68\x65\x63\x6b\x4b\x65\x79\x77\x6f\x72\x64\x73\x4f\x6e\x53\x75\x63\x63\x65\x73\x73':function(U0,j0){jQuery("#" + U0).find(".chp_k_email").text(j0.email);},'\x5f\x74\x72\x79\x43\x6f\x70\x79\x42\x74\x6e\x54\x65\x78\x74':function(I0){function S0(){return navigator.userAgent.match(/ipad|iphone/i);}try{I0.parents(".chpopup_container").append(jQuery("#chp_txt_utstttco"));jQuery("#chp_txt_utstttco").val(I0.text());if(S0()){var Z0=document.createRange();Z0.selectNodeContents(jQuery("#chp_txt_utstttco")[0]);var n0=window.getSelection();n0.removeAllRanges();n0.addRange(Z0);jQuery("#chp_txt_utstttco")[0].setSelectionRange(0,999999);}else {jQuery("#chp_txt_utstttco").select();}var H0=document.execCommand('copy');jQuery("#chp_txt_utstttco").blur();if(!H0){console.error("Cannot copy text");prompt("Please copy next text",I0.text());}else {alert("Text copied");}}catch(O0){console.error('Unable to copy.');jQuery("#chp_txt_utstttco").blur();prompt("Please copy next text",I0.text());}},'\x65\x76\x52\x65\x70\x74':{'\x72\x43\x6c\x69\x63\x6b':function(A0,a0){_chpmgr.evRept._mReq(A0,"rclick",a0);},'\x72\x56\x69\x65\x77':function(G0,R0){_chpmgr.evRept._mReq(G0,"rview",R0);},'\x5f\x6d\x52\x65\x71':function(v0,C0,i0){var V0=_chpmgr.cookiePrefix + v0;if(_chpmgr._getCookie(V0)){return false;}var d0=_chpmgr.getPopupDataById(v0);var s0=d0.id.replace("_chpp","");if(d0._skp_stt == 'true'){return;}var o0={'\x72\x63\x6c\x69\x63\x6b':"https://pop.chilliapps.com/popup_click/create",'\x72\x76\x69\x65\x77':"https://pop.chilliapps.com/popup_view/create"};var y0={'\x68':s0,'\x68\x73':d0.hs,'\x73\x69\x74\x65':_chpmgr.site};jQuery.post(o0[C0],y0,function(Y0){if(typeof i0 == 'function')i0(Y0);}).fail(function(){;});}},'\x5f\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(q0){var N0=new RegExp(q0 + "=[^;]+","i");if(document.cookie.match(N0))return document.cookie.match(N0)[0].split("=")[1];return null;},'\x5f\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65':function(p0,c0,g0){var L0="";if(g0){L0="expires=" + g0.toUTCString();}var X0=p0 + "=" + c0 + "; " + L0 + "; path=/";document.cookie=X0;return X0;},'\x73\x65\x74\x4f\x76\x65\x72\x6c\x61\x79\x43\x6f\x6c\x6f\x72':function(e0){var w0=jQuery("#" + e0).attr("data-overlay") || "rgba(0,0,0,0.8)";jQuery(".mfp-bg.chp_magnific").css({'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64':w0,'\x6f\x70\x61\x63\x69\x74\x79':1});},'\x5f\x73\x65\x74\x4f\x76\x65\x72\x6c\x61\x79\x49\x6d\x61\x67\x65':function(F0){var J0=jQuery("#" + F0).attr("data-bg-image") || "";var W0=jQuery("#" + F0).attr("data-fill-type");var z0=Number(jQuery("#" + F0).attr("data-bg-op") || '1');if(J0 == "")return;jQuery(".mfp-bg.chp_magnific").html("<div class='chp_image_overlay'></div>");var r0=_chpmgr.getFillTypeCss(W0);r0['backgroundPosition']="center";r0['backgroundImage']="url(" + J0 + ")";r0['opacity']=z0;jQuery(".mfp-bg.chp_magnific .chp_image_overlay").css(r0);},'\x67\x65\x74\x46\x69\x6c\x6c\x54\x79\x70\x65\x43\x73\x73':function(h0){var D0={'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x73\x69\x7a\x65':'auto','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x70\x6f\x73\x69\x74\x69\x6f\x6e':'50% 0%','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x72\x65\x70\x65\x61\x74':'no-repeat'};if(h0 == 'tile'){D0={'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x73\x69\x7a\x65':'','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x70\x6f\x73\x69\x74\x69\x6f\x6e':'','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x72\x65\x70\x65\x61\x74':'repeat'};}if(h0 == 'stretch'){D0={'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x73\x69\x7a\x65':'100% auto','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x70\x6f\x73\x69\x74\x69\x6f\x6e':'','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x72\x65\x70\x65\x61\x74':'repeat-y'};}return D0;},'\x73\x65\x74\x44\x69\x73\x70\x6c\x61\x79\x65\x64\x50\x6f\x70\x75\x70\x43\x6f\x6f\x6b\x69\x65':function(x5){var B0=x5.ref;var l0=this.getPopupDataById(B0);if(x5.invocation == "manual"){return false;}if(!l0){return false;}if(!l0.frequency_condition || l0.frequency_condition.length == 0){return false;}var P5=this.cookiePrefix + B0;var M5=l0.frequency_condition.split("_");var b5=Number(M5[1] || "0");var T5=M5[0];if(b5 == -17){return false;}var m0=new Date();var k0=b5;if(T5 == "weeks")k0*=7;if(T5 == "months")k0*=30;m0.setDate(m0.getDate() + k0);m0.setHours(0,0,0,0);_chpmgr._setCookie(P5,"true",m0);},'\x73\x65\x74\x43\x75\x73\x74\x6f\x6d\x65\x72\x52\x65\x67\x69\x73\x74\x65\x72\x65\x64\x43\x6f\x6f\x6b\x69\x65':function(){var Q5=new Date();var E5=this.cookiePrefix + "csgnp";_chpmgr._setCookie(E5,Q5.toUTCString());},'\x65\x78\x69\x73\x74\x73\x44\x69\x73\x70\x6c\x61\x79\x65\x64\x50\x6f\x70\x75\x70\x43\x6f\x6f\x6b\x69\x65':function(f5){var t5=_chpmgr.getPopupDataById(f5);if(t5 && t5.frequency_condition == "days_-17"){return false;}var K5=this.cookiePrefix + f5;var u5=this._getCookie(K5);return u5 != null;},'\x68\x69\x64\x65\x49\x66\x43\x75\x73\x74\x6f\x6d\x65\x72\x52\x65\x67\x69\x73\x74\x65\x72\x65\x64':function(j5){var Z5=this.cookiePrefix + "csgnp";var I5=this._getCookie(Z5);if(j5.frequency_condition == "days_-17")return false;if(!I5){return false;}if(j5.hide_options === null || j5.hide_options === ""){return j5.hide_on_signup != false;}var U5=Number(j5.hide_options);if(isNaN(U5)){U5=1;}if(U5 == 0)return false;if(U5 == 999)return true;try{var n5=Date.parse(I5);var H5=new Date().getTime();var S5=(H5 - n5) / (1000 * 60 * 60 * 24);return U5 > S5;}catch(O5){console.log("ERROR: parsing dates reg ckk");console.log(O5);}return false;}};_chpmgr["cartEvts"]={'\x69\x6e\x69\x74':function(){jQuery(document).ajaxComplete(this._checkOnAjaxComplete);(function(a5,A5){if(typeof A5 !== 'function')return;a5.fetch=function(){var G5=A5.apply(this,arguments);G5.then(function(R5){_chpmgr.cartEvts._checkOnAjaxComplete(null,{},{'\x74\x79\x70\x65':'post','\x75\x72\x6c':R5.url});});return G5;};})(window,window.fetch);},'\x6f\x6e\x43\x61\x72\x74\x43\x68\x61\x6e\x67\x65\x64':function(){var d5="/cart.js";var v5=null;if(_chpmgr.chp_platform == "2"){var i5="https://" + decodeURIComponent(_chpmgr.site);d5=i5 + "/wp-json/abprotector/cart_data";v5='data';}_chpmgr.cartEvts._getCheckCartData(d5,v5);},'\x5f\x63\x68\x65\x63\x6b\x4f\x6e\x41\x6a\x61\x78\x43\x6f\x6d\x70\x6c\x65\x74\x65':function(Y5,N5,V5){var s5=_chpmgr.cartEvts;jQuery(document).trigger("chp_ajax_complete",V5);var o5=["/cart/update.js","/cart/change.js","/cart/clear.js","/cart/add.js","wc-ajax=add_to_cart","remove_item="];if((V5.type || '').toLowerCase() == "post"){var y5=V5.url || "";for(var C5 of o5){if(y5.indexOf(C5) >= 0){s5.onCartChanged();break;}}}},'\x5f\x67\x65\x74\x43\x68\x65\x63\x6b\x43\x61\x72\x74\x44\x61\x74\x61':function(X5,L5){var q5=_chpmgr.cartEvts;jQuery.getJSON(X5,function(g5){if(L5){q5.currentCart=g5[L5];}else {q5.currentCart=g5;}_chpmgr.audienceConditions.setValidationToAllPopups();jQuery(document).trigger("chp_cart_obtained");}).fail(function(){_chpmgr.audienceConditions.setValidationToAllPopups();});}};_chpmgr["envInfo"]={'\x67\x65\x74\x4c\x61\x6e\x67\x75\x61\x67\x65':function(){var p5=navigator.language || navigator.userLanguage || "";try{return p5.split("-")[0];}catch(c5){return "";}},'\x67\x65\x74\x44\x61\x79\x4e\x75\x6d\x62\x65\x72':function(){var w5=new Date();return w5.getDay();},'\x63\x75\x72\x72\x65\x6e\x74\x44\x61\x79\x42\x65\x74\x77\x65\x65\x6e\x44\x61\x74\x65\x73':function(z5,D5){try{var e5=z5.split("/");var r5=D5.split("/");var W5=new Date(e5[2],e5[1] - 1,e5[0]);var F5=new Date(r5[2],r5[1] - 1,r5[0]);F5.setHours(23,59,59,999);var J5=new Date();return J5 >= W5 && J5 <= F5;}catch(h5){console.log("ERROR: " + e);return false;}},'\x63\x75\x72\x72\x65\x6e\x74\x44\x61\x79\x49\x73\x4e\x75\x6d\x62\x65\x72':function(l5){return this.getDayNumber() == Number(l5);},'\x69\x73\x4c\x61\x6e\x67\x75\x61\x67\x65':function(m5){return this.getLanguage().toLowerCase() == m5.toLowerCase();},'\x69\x73\x43\x6f\x75\x6e\x74\x72\x79\x43\x6f\x64\x65':function(b9,k5){var B5="chp_ccode";var M9=_chpmgr._getCookie(B5);if(M9){k5(M9.toLowerCase() == b9.toLowerCase());return false;}var T9="http://api.ipstack.com/check?access_key=ef49d5cb975caafca05a07b0c5d602cb";jQuery.post(T9,function(P9){x9(P9);}).fail(function(){console.log("ERROR: getting info from ipstack");k5(false);});function x9(t9){var Q9=new Date();Q9.setDate(Q9.getDate() + 3);Q9.setHours(23,59,59,999);var E9=(t9.country_code || "-").toLowerCase();_chpmgr._setCookie(B5,E9,Q9);k5(E9 == b9.toLowerCase());}},'\x69\x73\x4d\x6f\x62\x69\x6c\x65':function(){var f9=false;(function(K9){if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i).test(K9) || (/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i).test(K9.substr(0,4)))f9=true;})(navigator.userAgent || navigator.vendor || window.opera);return f9;},'\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74\x55\x72\x6c':function(){return window.location.href;},'\x67\x65\x74\x52\x61\x6e\x64\x6f\x6d\x53\x74\x72\x69\x6e\x67':function(){return Math.random().toString(36).substring(2);},'\x67\x65\x74\x55\x72\x6c\x50\x72\x6f\x64\x75\x63\x74\x48\x61\x6e\x64\x6c\x65\x49\x66\x45\x78\x69\x73\x74\x73':function(){var u9=this.getCurrentUrl();var j9=u9.indexOf("/products/") >= 0;if(!j9)return null;var U9=u9.match(/\/products\/(\w+|-)*/g)[0];if(!U9)return null;return U9.replace('/products/','');},'\x67\x65\x74\x50\x72\x6f\x64\x75\x63\x74\x49\x6e\x66\x6f':function(Z9){var n9=Z9.product_handle;var H9=typeof Z9.force_get == 'boolean'?Z9.force_get:false;var I9=Z9.callback;if(!n9){I9(null);return;}try{if(!H9 && typeof meta == 'object' && meta.product && _chpmgr.envInfo.getUrlProductHandleIfExists() == n9){I9(meta.product);return false;}jQuery.get("/products/" + n9 + ".js",I9,"json");}catch(S9){console.log("ERROR: getting product info by handle ---");console.log(S9);I9(null);}}};_chpmgr["audienceConditions"]={'\x73\x65\x74\x56\x61\x6c\x69\x64\x61\x74\x69\x6f\x6e\x54\x6f\x41\x6c\x6c\x50\x6f\x70\x75\x70\x73':function(){var A9=_chpmgr.popups.length;var O9=0;jQuery.each(_chpmgr.popups,function(G9,a9){_chpmgr.audienceConditions.setValidationToPopup(a9,function(R9){O9++;if(O9 == A9){_chpmgr.audienceConditions._checkAdvancedPopups();_chpmgr.triggersMgr.checkImmediatelyAbleTriggers();}});});},'\x5f\x63\x68\x65\x63\x6b\x41\x64\x76\x61\x6e\x63\x65\x64\x50\x6f\x70\x75\x70\x73':function(){var d9={};jQuery.each(_chpmgr.popups,function(i9,v9){if(v9.adv && v9.validConditions && !_chpmgr.existsDisplayedPopupCookie(v9.id)){if(!d9[v9.tp]){d9[v9.tp]=v9.id;}}});jQuery.each(d9,function(V9,s9){jQuery.each(_chpmgr.popups,function(y9,o9){if(o9.id == s9 || o9.tp != V9)return true;o9['lkbyadv']=true;});});},'\x73\x65\x74\x56\x61\x6c\x69\x64\x61\x74\x69\x6f\x6e\x54\x6f\x50\x6f\x70\x75\x70':function(C9,Y9){this.checkPopupConditions(C9,function(N9){C9["validConditions"]=N9;Y9(N9);});},'\x63\x68\x65\x63\x6b\x50\x6f\x70\x75\x70\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x73':function(e9,c9){var w9=this;var X9=e9.audience_conditions;var L9=X9.length;var g9=0;var q9=0;if(L9 == 0){c9(true);return;}var p9=[];jQuery.each(X9,function(F9,r9){w9.validateCondition(r9,function(z9){g9++;var J9=p9.pop() || ({});var W9=J9.type == r9.type || r9.type == "url" && J9.type == "product" || r9.type == "product" && J9.type == "url";W9=W9 && J9.operator != "not_equals" && r9.operator != "not_equals";if(z9){q9++;if(!J9.valid && W9){q9++;}}else {if(W9){q9++;}}p9.push({'\x74\x79\x70\x65':r9.type,'\x76\x61\x6c\x69\x64':z9,'\x6f\x70\x65\x72\x61\x74\x6f\x72':r9.operator});if(g9 == L9){c9(q9 == L9);}});});},'\x76\x61\x6c\x69\x64\x61\x74\x65\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e':function(D9,h9){var l9=this;if(D9.type == "date"){l9._validateDateCondition(D9,h9);return;}else if(D9.type == "day_of_the_week"){l9._validateDayCondition(D9,h9);return;}else if(D9.type == "country_code"){l9._validateCountryCondition(D9,h9);return;}else if(D9.type == "customer_locale"){l9._validateLanguageCondition(D9,h9);return;}else if(D9.type == "cart.price"){l9._validateCartTotal(D9,h9);return;}else if(D9.type == "product"){l9._validateProduct(D9,h9);return;}else if(D9.type == "url"){l9._validateUrl(D9,h9);return;}else if(D9.type == "device"){l9.validateDevice(D9,h9);return;}else {return;}h9(true);},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x44\x61\x74\x65\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e':function(m9,k9){k9(_chpmgr.envInfo.currentDayBetweenDates(m9.variable1,m9.variable2));},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x44\x61\x79\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e':function(B9,M2){if(B9.operator == "not_equals")M2(!_chpmgr.envInfo.currentDayIsNumber(B9.variable1));else M2(_chpmgr.envInfo.currentDayIsNumber(B9.variable1));},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x43\x6f\x75\x6e\x74\x72\x79\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e':function(b2,T2){if(b2.operator == "not_equals")_chpmgr.envInfo.isCountryCode(b2.variable1,function(x2){T2(!x2);});else _chpmgr.envInfo.isCountryCode(b2.variable1,T2);},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x4c\x61\x6e\x67\x75\x61\x67\x65\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e':function(P2,Q2){if(P2.operator == "not_equals")Q2(!_chpmgr.envInfo.isLanguage(P2.variable1));else Q2(_chpmgr.envInfo.isLanguage(P2.variable1));},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x43\x61\x72\x74\x54\x6f\x74\x61\x6c':function(t2,U2,j2){var u2=_chpmgr.cartEvts.currentCart;if(!u2){U2(false);return;}if(_chpmgr.chp_platform == "2"){var E2=j2 || u2.total_price;}else {var E2=j2 || u2.total_price / 100;}var K2=Number(t2.variable1 || "0");var I2=Number(t2.variable2 || "0");var f2=false;if(t2.operator == "between"){f2=E2 >= K2 && E2 <= I2;}else if(t2.operator == "more_than"){f2=E2 > K2;}else if(t2.operator == "less_than"){f2=E2 < K2;}else if(t2.operator == "equals_number"){f2=E2 == K2;}else if(t2.operator == "not_equals_number"){f2=E2 != K2;}U2(f2);},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x50\x72\x6f\x64\x75\x63\x74':function(Z2,n2){var H2=_chpmgr.envInfo.getUrlProductHandleIfExists();if(!H2){n2(false);return;}_chpmgr.envInfo.getProductInfo({'\x70\x72\x6f\x64\x75\x63\x74\x5f\x68\x61\x6e\x64\x6c\x65':H2,'\x63\x61\x6c\x6c\x62\x61\x63\x6b':function(O2){if(!O2){n2(false);return;}S2(O2);}});function S2(a2){var A2=String(a2.id) == String(Z2.variable1);if(Z2.operator == "not_equals"){A2=String(a2.id) != String(Z2.variable1);}n2(A2);return;}},'\x5f\x76\x61\x6c\x69\x64\x61\x74\x65\x55\x72\x6c':function(v2,i2){var d2=v2.variable1;if(d2.indexOf("http") == -1){d2="https://" + d2;}var G2=jQuery("<a>",{'\x68\x72\x65\x66':d2});G2=G2[0];var V2=_chpmgr.audienceConditions._getCurrentHostData();if(V2.subdomain == ""){var R2=G2.pathname == window.location.pathname;}else {var R2=G2.host == window.location.host && G2.pathname == window.location.pathname;}if(G2.search != ""){R2=R2 && G2.search == window.location.search;}if(v2.operator == "not_equals"){i2(!R2);}else {i2(R2);}},'\x76\x61\x6c\x69\x64\x61\x74\x65\x44\x65\x76\x69\x63\x65':function(C2,o2){var y2=C2.variable1;var s2=_chpmgr.envInfo.isMobile();if(y2 == "mobile"){o2(!s2);}else {o2(s2);}},'\x5f\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74\x48\x6f\x73\x74\x44\x61\x74\x61':function(){var q2=window.location.hostname;var Y2={};var L2=new RegExp('([a-z\-0-9]{2,63})\.([a-z\.]{2,5})$');var N2=L2.exec(q2);Y2.domain=N2[1];Y2.type=N2[2];Y2.subdomain=window.location.hostname.replace(Y2.domain + '.' + Y2.type,'').slice(0,-1);return Y2;}};_chpmgr["triggersMgr"]={'\x69\x6d\x6d\x65\x64\x69\x61\x74\x65\x6c\x79\x41\x62\x6c\x65\x4b\x65\x79\x73':["timer","auto","button"],'\x73\x65\x74\x75\x70\x54\x72\x69\x67\x67\x65\x72\x73':function(X2){jQuery.each(X2.triggers,function(p2,g2){if(_chpmgr.triggersMgr._isImmediatelyAbleTrigger(g2)){return;}_chpmgr.triggersMgr._setupSingleTrigger(g2);});},'\x5f\x73\x65\x74\x75\x70\x53\x69\x6e\x67\x6c\x65\x54\x72\x69\x67\x67\x65\x72':function(c2){var w2="set_trigger_" + c2.key;try{_chpmgr.triggersMgr[c2.key]["setup"](c2);}catch(e2){console.log("ERROR: _chpmgr trigger setup: " + c2.key);console.log(e2);}},'\x5f\x69\x73\x49\x6d\x6d\x65\x64\x69\x61\x74\x65\x6c\x79\x41\x62\x6c\x65\x54\x72\x69\x67\x67\x65\x72':function(r2){return _chpmgr.triggersMgr.immediatelyAbleKeys.indexOf(r2.key) >= 0;},'\x63\x68\x65\x63\x6b\x49\x6d\x6d\x65\x64\x69\x61\x74\x65\x6c\x79\x41\x62\x6c\x65\x54\x72\x69\x67\x67\x65\x72\x73':function(){jQuery.each(_chpmgr.popups,function(J2,F2){jQuery.each(F2.triggers,function(z2,W2){if(!_chpmgr.triggersMgr._isImmediatelyAbleTrigger(W2)){return;}_chpmgr.triggersMgr._setupSingleTrigger(W2);});});}};_chpmgr["triggersMgr"]["exit"]={'\x73\x65\x74\x75\x70':function(l2){var D2=this;jQuery(document).on('mouseleave.registerexit',function(k2){D2._detectexit(k2,l2);});jQuery(document).on('mouseenter.registerenter',function(B2){D2._detectenter(B2);});var h2=-80;if(_chpmgr.site == "glamorous-gifts-uk.myshopify.com"){h2=-120;}jQuery(document).on('touchstart',function(){jQuery("body").addClass('chp_mobile_device');});jQuery(document).on('scroll',function(){if(jQuery('body').hasClass('chp_mobile_device')){if(m2() < h2){_chpmgr.checkPopupValidConditionsAndOpen(l2);}}});var m2=(function(){var M4,b4,x4,T4,P4=50;function Q4(){M4=null;T4=0;}Q4();return function(){b4=window.scrollY;if(M4 != null){T4=b4 - M4;}M4=b4;clearTimeout(x4);x4=setTimeout(Q4,P4);return T4;};})();},'\x5f\x64\x65\x74\x65\x63\x74\x65\x78\x69\x74':function(E4,t4){if(E4.clientY < 60){this.delayshowtimer=setTimeout(function(){_chpmgr.checkPopupValidConditionsAndOpen(t4);},200);}},'\x5f\x64\x65\x74\x65\x63\x74\x65\x6e\x74\x65\x72':function(f4){if(f4.clientY < 60){clearTimeout(this.delayshowtimer);}}};_chpmgr["triggersMgr"]["button"]={'\x73\x65\x74\x75\x70':function(u4){var U4=_chpmgr.getPopupDataById(u4.ref);if(!U4.validConditions){return false;}var K4=jQuery(u4.render_content);K4.css({'\x70\x6f\x73\x69\x74\x69\x6f\x6e':"fixed",'\x7a\x2d\x69\x6e\x64\x65\x78':999});K4=this._setGradientBackground(K4);K4.click(function(){_chpmgr.openPopup(u4);});jQuery("body").append(K4);},'\x5f\x73\x65\x74\x47\x72\x61\x64\x69\x65\x6e\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64':function(I4){var Z4=I4.attr("data-start-color");var n4=I4.attr("data-end-color");var H4=navigator.userAgent.indexOf('Chrome') > -1;var S4=navigator.userAgent.indexOf('MSIE') > -1;var O4=navigator.userAgent.indexOf('Firefox') > -1;var A4=navigator.userAgent.indexOf("Safari") > -1;var a4=navigator.userAgent.indexOf("Presto") > -1;var j4="linear-gradient(to bottom, {val1}, {val2})";if(H4 || A4){j4="-webkit-linear-gradient(top, {val1}, {val2})";}else if(S4){j4="-ms-linear-gradient(top, {val1}, {val2})";}else if(a4){j4="-o-linear-gradient(top, {val1}, {val2})";}else if(O4){j4="-moz-linear-gradient(top, {val1}, {val2})";}j4=j4.replace("{val1}",Z4);j4=j4.replace("{val2}",n4);I4.css("backgroundImage",j4);return I4;}};_chpmgr["triggersMgr"]["timer"]={'\x73\x65\x74\x75\x70':function(R4){var G4=Number(R4.value || "0");if(G4 == 0){return false;}G4=G4 * 1000;function d4(){_chpmgr.openPopup(R4);}if(_chpmgr.popupHasValidConditions(R4.ref)){window.setTimeout(d4,G4);}}};_chpmgr["triggersMgr"]["scroll"]={'\x73\x65\x74\x75\x70':function(i4){var V4=this;var v4=Number(i4.value || "0");if(v4 == 0){return false;}var s4=v4 / 100;var o4=jQuery(document).height() - jQuery(window).height();var y4=o4 * s4;jQuery(document).on("scroll",function(C4){V4._checkScroll(C4,i4,y4);});},'\x5f\x63\x68\x65\x63\x6b\x53\x63\x72\x6f\x6c\x6c':function(L4,N4,q4){var Y4=jQuery(document).scrollTop();if(Y4 >= q4){_chpmgr.checkPopupValidConditionsAndOpen(N4);}}};_chpmgr["triggersMgr"]["auto"]={'\x73\x65\x74\x75\x70':function(X4){_chpmgr.checkPopupValidConditionsAndOpen(X4);}};_chpmgr["chpCustomShopFunctions"]={'\x65\x6d\x62\x61\x6c\x2d\x76\x65\x72\x74\x2e\x6d\x79\x73\x68\x6f\x70\x69\x66\x79\x2e\x63\x6f\x6d':function(){console.log("--- chp custom shop function embal-vert");var g4="_chppwQl8a";var p4=_chpmgr.getPopupDataById(g4);var c4={'\x72\x65\x66':g4,'\x69\x6e\x76\x6f\x63\x61\x74\x69\x6f\x6e':'manual'};if(!p4){return;}jQuery(document).on("chp_ajax_complete",function(F4,r4){if(r4.url.indexOf("section_id=store-availability")){e4();}});jQuery("a[href='/cart']").off().click(function(J4){if(p4.validConditions){J4.preventDefault();J4.stopPropagation();jQuery(document).off("chp_link_click");_chpmgr.openPopup(c4);}});jQuery("#" + g4 + " .chp_button.chp_link").removeAttr("target");var w4=p4.audience_conditions.filter(function(W4){return W4.type == 'cart.price';})[0];e4();function e4(){if(!w4){return;}jQuery(".chp_clone_buy_now").remove();var z4=jQuery(".shopify-payment-button .shopify-payment-button__button[data-testid='Checkout-button']");var D4=z4.clone();D4.addClass("chp_clone_buy_now").show();z4.hide();D4.insertAfter(z4);D4.off().click(function(l4){l4.preventDefault();l4.stopPropagation();D4.css("opacity","0.6");try{h4(function(){z4.trigger('click');D4.css("opacity","1");});}catch(m4){z4.trigger('click');D4.css("opacity","1");console.log("-- ERROR: ");console.warn(m4);}});function h4(M6){var B4=_chpmgr.utils.getUrlProductHandleIfExists();var k4=_chpmgr.utils.getCurrentUrlParam('variant');_chpmgr.utils.getProductInfo({'\x70\x72\x6f\x64\x75\x63\x74\x5f\x68\x61\x6e\x64\x6c\x65':B4,'\x63\x61\x6c\x6c\x62\x61\x63\x6b':function(T6){if(!T6){z4.trigger('click');return;}if(k4 == "null"){var b6=T6.variants[0];}else {var b6=T6.variants.filter(function(P6){return P6.id == k4;})[0];}var x6=b6.price / 100;_chpmgr.audienceConditions._validateCartTotal(w4,function(Q6){if(Q6){jQuery(document).off("chp_link_click").on("chp_link_click",function(t6,E6){if(E6.item.attr("href") == 'https://embalvert.com/cart'){E6.event.preventDefault();z4.trigger('click');}});_chpmgr.openPopup(c4);}},x6);}});}}},'\x6c\x69\x66\x65\x74\x69\x6d\x65\x2d\x6a\x65\x77\x65\x6c\x72\x79\x2e\x6d\x79\x73\x68\x6f\x70\x69\x66\x79\x2e\x63\x6f\x6d':function(){console.log("-- chpCustomShopFunctions lifetime-jewelry");jQuery.getScript("https://dn9xuji0qb90y.cloudfront.net/scripts/magnificpopup.min.js");}};_chpmgr['utils']={'\x67\x65\x74\x55\x72\x6c\x50\x72\x6f\x64\x75\x63\x74\x48\x61\x6e\x64\x6c\x65\x49\x66\x45\x78\x69\x73\x74\x73':function(){var f6=window.location.href;var u6=f6.indexOf("/products/") >= 0;if(!u6)return null;var K6=f6.match(/\/products\/(\w+|-)*/g)[0];if(!K6)return null;return K6.replace('/products/','');},'\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74\x55\x72\x6c\x50\x61\x72\x61\x6d':function(U6){return decodeURI((RegExp(U6 + '=' + '(.+?)(&|$)').exec(window.location.href) || [,null])[1]);},'\x67\x65\x74\x50\x72\x6f\x64\x75\x63\x74\x49\x6e\x66\x6f':function(Z6){var I6=Z6.product_handle;var j6=Z6.callback;if(!I6){j6(null);return;}try{jQuery.get("/products/" + I6 + ".js",function(n6){j6(n6);},"json").fail(function(){j6(null);});}catch(H6){console.log("ERROR: getting product info by handle ---");console.log(H6);j6(null);}}};(function(){function S6(A6){O6(A6);};function O6(R6){if(window.jQuery){var a6=jQuery.fn.jquery.split('.').join('');a6=parseInt(a6);if(typeof jQuery.getScript == 'function' && a6 > 170){R6();return;}}var G6=document.createElement("SCRIPT");G6.src='//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js';G6.type='text/javascript';document.getElementsByTagName("head")[0].appendChild(G6);window.setTimeout(R6,500);}S6(function(){var V6="https://dzb8cpemp5pp6.cloudfront.net/shops/";var v6="https://dn9xuji0qb90y.cloudfront.net/scripts/";try{var s6=decodeURIComponent(_chpmgr.getURLParameter("shop"));var d6=decodeURIComponent(y6());var i6=_chpmgr.getURLParameter("t");_chpmgr["site"]=s6;_chpmgr["shop_name"]=d6;_chpmgr["chp_platform"]=_chpmgr.getURLParameter("chp_ptfm");jQuery("html").addClass("chpp_" + d6);jQuery('head').append(jQuery('<link rel="stylesheet" type="text/css" />').attr('href',v6 + 'magnific-popup.css?t' + i6));jQuery('head').append(jQuery('<link rel="stylesheet" type="text/css" />').attr('href','https://dzb8cpemp5pp6.cloudfront.net/main/chpmgr.min.css?t' + i6));if(!jQuery.magnificPopup){if(typeof $ != 'undefined' && typeof $.magnificPopup == 'object'){jQuery.magnificPopup=$.magnificPopup;}else {jQuery.getScript(v6 + "magnificpopup.min.js",o6);}}else {o6();}}catch(C6){console.warn(C6);}function o6(){var Y6=V6 + d6 + "/chpps.js";jQuery.getScript(Y6,function(){_chpmgr.initialize();});}function y6(){var N6=_chpmgr.getURLParameter("chp_name");if(N6 != "null" && N6 != ""){return N6;}var q6=_chpmgr.getURLParameter("shop");N6=q6.substr(0,q6.indexOf("."));return N6;}});})();
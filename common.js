/*if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://app.redretarget.com/sapp/assets/js/jquery-3.3.1.min.js';
    script.setAttribute('async', 'false');
    document.getElementsByTagName('head')[0].appendChild(script);
}*/

istrackifyinstalled = 1;
function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return '';
}
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
  a_aid = getUrlParameter('a_aid');

  if(a_aid){
    var parts = location.hostname.split('.');
    var subdomain = parts.shift();
    var upperleveldomain = parts.join('.');

    var date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    expires = '; expires=' + date.toUTCString();
    if(upperleveldomain != "myshopify.com" && upperleveldomain != "com" && upperleveldomain != "co" && upperleveldomain != "in" && upperleveldomain != "us" && upperleveldomain != "fr" && upperleveldomain != "org" && upperleveldomain != "au" && upperleveldomain != "uk" && upperleveldomain != "nz" && upperleveldomain != "net" && upperleveldomain != "info" && upperleveldomain != "io" && upperleveldomain != "store"){
        document.cookie = 'a_aid=; path=/; domain=.'+upperleveldomain+'; expires=' + new Date(0).toUTCString();
        document.cookie = 'a_aid='+ a_aid +'; path=/; domain=.'+upperleveldomain+'; expires=' + expires; 
    }else{
      document.cookie = 'a_aid=; path=/; domain=.'+location.hostname+'; expires=' + new Date(0).toUTCString();
      document.cookie = 'a_aid='+ a_aid +'; path=/; domain=.'+location.hostname+'; expires=' + expires;
    }
  }else{
    a_aid = getCookie('a_aid');
  }

initdynamicvar = function (){
    /** dynamic init **/

    var pd_id = __st['rid'];
    initfire = 1;
    var dataocu = document.querySelectorAll('input,button'),
        l = dataocu.length, i, cur;

    for(i=0; i<l; i++) {
      cur = dataocu[i].getAttribute('data-ocu-checkout');
      if(cur){
        //console.log('ocudatacheck');
        initfire = 0;
      }
    }            
    if(initfire == 1 && typeof ga_trackify_script === 'undefined'){
      iniproductstocart = [];
      initquantities = 0;

      xmlhttpinit = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      xmlhttpinit.onreadystatechange = function () {
        if (xmlhttpinit.readyState == 4 && xmlhttpinit.status == 200) {
          var jsondata = JSON.parse(xmlhttpinit.responseText);
          items = jsondata.items;
          total_price = (jsondata.total_price/100);
          all_variant_id = [];
          for (i = 0; i < items.length; i++) {
            iniproductstocart.push(items[i].product_id);
            initquantities = initquantities + items[i].quantity;
            all_variant_id.push(items[i].variant_id);

          }

          /*jQuery.each(items, function(index,value){
            // console.log('init');
            iniproductstocart.push(value.product_id);
            initquantities = initquantities + value.quantity;
          });*/
          if (__st['rtyp'] == 'product') {
            // console.log(iniproductstocart.indexOf(pd_id));
            if(typeof rrtrackpixels !== 'undefined'){
              if(iniproductstocart.indexOf(pd_id) == -1){
                iniproductstocart.push(pd_id);
              }
            }
          }
          iniproductstocart = iniproductstocart.join();
          all_variant_id = all_variant_id.join();
          if(typeof ga_trackify_script === 'undefined'){
            if(typeof rrtrackpixels !== 'undefined'){
              var source = 'https://app.redretarget.com/sapp/MY_Shopify/initiate/'+shop_permanent_domain + '/' + a_aid + '/?pd_id=' + iniproductstocart + '&total_price=' + total_price + '&ajax=1&rrtrackpixels='+rrtrackpixels+'&all_variant_id='+all_variant_id;
              }else{
                var source = 'https://app.redretarget.com/sapp/MY_Shopify/initiate/'+shop_permanent_domain + '/' + a_aid + '/?pd_id=' + iniproductstocart + '&total_price=' + total_price + '&all_variant_id='+all_variant_id + '&ajax=1';
              }
          }
          appendurl(source);
        }
      };
      xmlhttpinit.open('GET', '/cart.json', true);
      xmlhttpinit.send();
    }};

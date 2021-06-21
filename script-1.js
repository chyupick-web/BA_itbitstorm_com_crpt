var humbleshop = {
  el : {
    flexcarousel : $('#flexcarousel'),
    flexslide : $('#flexslider'),
    flexcarouselthumb : $('#flexcarousel-product'),
    flexsliderthumb : $('#flexslider-product'),
    flexbrand : $('#flexcarousel-brands'),
    mainnav : $('.horizontal-nav ul li'),
    nav : $('.horizontal-nav ul li').not('.horizontal-nav ul li li'), 
    size : $('.horizontal-nav ul li').not('.horizontal-nav ul li li').size(),
    bubble : $('.counter a'),
    closeme : $('#closeit'),
    tab : $('#myTab a, #myTab button'),
    fancypop : $('a[data-fancybox-group="zoom"]'),
    toggle : $('.product h6.subhead'),
  },
  theslider : function(){
    
    this.el.flexcarousel.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 192,
      //itemMargin: 5 ,
      asNavFor: '#flexslider'
    });

    this.el.flexslide.flexslider({
      animation: "slide",
      controlNav: true,
      animationLoop: false,
      slideshow: true,
      slideshowSpeed: 5000,
      animationSpeed: 600,
      smoothHeight : true,
      sync: "#flexcarousel"
    });

    this.el.flexcarouselthumb.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 115,
      asNavFor: "#flexslider-product"
    });
    
    this.el.flexsliderthumb.flexslider({
      animation: "slide",
      controlNav: true,
      animationLoop: false,
      slideshow: false,
      sync: "#flexcarousel-product"
    });

    this.el.flexbrand.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: true,
      slideshow: false,
      itemWidth: 180,
    });

  },
  thenav : function(){
    percent = 100/this.el.size;
    this.el.nav.css('width', percent+'%').parent().show();

    this.el.mainnav.mouseenter(function(){
      $('ul', this).stop().slideDown('fast');
    }).mouseleave(function(){
      $('ul', this).stop().slideUp(150);
    });

    selectnav('nav', { label: 'Menu' });
  },
  
  theios : function(){
    var iOS = false,
    p = navigator.platform;
    
    if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
      iOS = true;
      
    $(function(){
        $('.view-thumb').bind('hover', function(e){
          //e.preventDefault();
          //$(this).toggleClass('hovere');
        });
      });    
    }
  },
  theothers : function(){
//     this.el.bubble.on('click', function(){
//       $('.cartbubble').slideToggle();
//     });
//     this.el.closeme.on('click',function(e){
//       e.preventDefault;
//       $('.cartbubble').slideUp();
//     });
    this.el.tab.click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    this.el.fancypop.fancybox();
    this.el.toggle.on('click', function(){
      $('.query').slideToggle();
    });
	$('.collapse').collapse()
    $('article').fitVids();
  },
  init : function(){
    this.theslider();
    this.thenav();    
    this.theothers();
    this.theios();
  }

}

$(window).load(function(){ 
  humbleshop.init();
});

$(document).on('click','#mini-cart-data-gd .counter a',function(e){
  e.preventDefault();
var parent = $(this).closest('#mini-cart-data-gd');
  $(parent).find('.cartbubble').slideToggle();
});
$(document).on('click','#closeit',function(){
  $(this).closest('.cartbubble').slideToggle();
});

function productAdd(d){
  jQuery.ajax({
    type: "POST",
    url: '/cart/add.js',
    data: d,
    async: false,
    dataType:'JSON',
    success:function(sd){
      console.log('success')
      if($("#upsell-product-gd").is(':checked')){
        var id = $("#upsell-product-gd").val();
        var upd = {id:id,quantity:1};
        othProadd(upd);
      }
      if($('#bogo-popup').length > 0){
        $('#bogo-popup').show();
        $('.overlay-gd').show();
      }else if($('#upsell-popup').length > 0){
        $('#upsell-popup').show();
        $('.overlay-upsell-gd').show();
      }
      else{
        window.location.href='/cart';
      }
    },
    error:function(err){
      console.log(JSON.stringify(err));
    }
  });
}
function othProadd(d){
  jQuery.ajax({
    type: "POST",
    url: '/cart/add.js',
    data: d,
    async: false,
    dataType:'JSON',
    success:function(sd){ 
    }
  });
}
function freeProductadd(d){
  jQuery.ajax({
    type: "POST",
    url: '/cart/add.js',
    data: d,
    async: false,
    dataType:'JSON',
    success:function(sd){ 
      window.location.href="/cart";
    }
  });
}

$(document).on('click','.upsell-add-to-cart',function(e){
  e.preventDefault();
  var data = $(this).closest('form').serialize(),
      selector = $(this);
  $(this).val('Adding..');
  setTimeout(function(){
    othProadd(data);
    selector.val('Added');
  },200)
});
$(document).on('click','#addtocart',function(e){
  if(!$(this).hasClass('return-false')){
    e.preventDefault();
    var mainpd = $(this).closest('form').serialize(); 
    productAdd(mainpd);
    //$(this).closest('form').submit();
  }
});
$(document).on('click','#no-free-product',function(e){
  window.location.href='/cart';
});
$(document).on('click','#no-upsell-product',function(e){
  window.location.href='/cart';
});


$(document).on('click','#add-free-product',function(e){
  var data = $('#free-product-form').serialize();
  freeProductadd(data)
});
$(document).on('click','#add-upsell-product',function(e){
  var data = $('#free-product-form').serialize();
  freeProductadd(data)
});


function chooseVariant(){
  var opt1 = $('#bogo-popup').find('[data-opt="option1"] li.selected').attr('data-val'),
      opt2 = $('#bogo-popup').find('[data-opt="option2"] li.selected').attr('data-val'),
      opt3 = $('#bogo-popup').find('[data-opt="option3"] li.selected').attr('data-val');
  var strng = '';
  if(opt1 !== undefined){
    strng += opt1; 
  }
  if(opt2 !== undefined){
    strng += ' / '+opt2; 
  }
  if(opt3 !== undefined){
    strng += ' / '+opt3; 
  }
  console.log(strng);
  $('#bogo-popup [name="id"] option[data-option="'+strng+'"]').prop('selected',true);
}
function chooseVariantup(){
  var opt1 = $('#upsell-popup').find('[data-opt="option1"] li.selected').attr('data-val'),
      opt2 = $('#upsell-popup').find('[data-opt="option2"] li.selected').attr('data-val'),
      opt3 = $('#upsell-popup').find('[data-opt="option3"] li.selected').attr('data-val');
  var strng = '';
  if(opt1 !== undefined){
    strng += opt1; 
  }
  if(opt2 !== undefined){
    strng += ' / '+opt2; 
  }
  if(opt3 !== undefined){
    strng += ' / '+opt3; 
  }
  console.log(strng);
  $('#upsell-popup [name="id"] option[data-option="'+strng+'"]').prop('selected',true);
  var price = $('#upsell-popup [name="id"] option[data-option="'+strng+'"]').attr('data-price');
  $('#upsell-popup').find('.main-price').text(price);
}
$(document).on('click','.optsgd',function(){
var parent = $(this).closest('ul');
  $(parent).find('li').removeClass('selected');
  $(this).addClass('selected');
  setTimeout(function(){
    chooseVariant();
    chooseVariantup()
  },200);
});
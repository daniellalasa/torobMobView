



$(document).ready(function() {

  //Carousel Start
  $('#media').carousel(
  {
    pause	: true,
    interval: 6000,
  });


  //Do Some Actions When Focus on search field
  $('#searFiel').focus(function(){
  	$(this).removeAttr('placeholder');
  	$('#search a').fadeIn(400);
  });

  
  //Do Some Actions When search field unfocus
  $('#searFiel').blur(function(){	

  	$(this).attr('placeholder','جستجو');

  	if($(this).val()=='')
  	{
  		$('#search a').fadeOut(500);
  	}

  });


  //Count number of Lists Dynamicaly
  var cnt = $('.list .item').length;
  $('.list #List-Counter #List-counter-num').html(cnt);


  //Collapse More Sellers Actions
  $('.list .item').slice(2).appendTo('#MoreSellColl');

  //When sellers will be shown
  $('.collapse').on('shown.bs.collapse',function(){
  	$('div.more a i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
  	$('div.more a span').html('بستن بقیه فروشنده ها');
  });

  //When sellers will be hidden 
  $('.collapse').on('hidden.bs.collapse',function(){
  	$('div.more a h2 i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  	$('div.more a h2 span').html('مشاهده بقیه فروشنده ها');

   });




//Fill data by api ... but ... it not works :(

// $.ajax({
// 	url:"http://api.torob.ir/base-product-more-info",
// 	dataType:'json',
// 	success:function(resp){
// 		console.log(resp['price']);

// 	}

// });

});
jQuery(document).ready(function(){
  jQuery(".names .address1").click(function(){
    jQuery(".info").children().slideUp();
    setTimeout(function(){
      jQuery(".info .address1").slideDown();
    }, 600)
  });

  jQuery(".names .address2").click(function(){
    jQuery(".info").children().slideUp();
    jQuery(".info .address2").slideDown();
  });

  jQuery(".names .address3").click(function () {
    jQuery(".info").children().slideUp();
    jQuery(".info .address3").slideDown();
  });
});
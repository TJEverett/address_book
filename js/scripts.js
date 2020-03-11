var catalog = 4;


var showAddress = function(address){
  jQuery(".info").children().slideUp();
  var location = ".info ." + address;
  setTimeout(function(){
    jQuery(location).slideDown();
  }, 750);
};

var writeName = function(){

}




jQuery(document).ready(function(){
  jQuery(".names p").click(function(){
    console.log(jQuery(this).parent()[0].className);
    var className = jQuery(this).parent()[0].className;
    showAddress(className);
  });

  jQuery("#addressAdd").submit(function(event){
    var name = jQuery("input#name").val();
    var phone = jQuery("input#phone").val();
    var email = jQuery("input#email").val();
    var address = jQuery("input#address").val();
  });
});
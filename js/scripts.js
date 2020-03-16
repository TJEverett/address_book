var catalog = 4;


var showAddress = function(address){
  jQuery(".info").children().slideUp();
  var location = ".info ." + address;
  setTimeout(function(){
    jQuery(location).slideDown();
  }, 750);
};

var writeName = function(name){
  var write = '<div class="address' + catalog + '"><p>' + name + '</p></div>';
  jQuery(".names").append(write);
};

var writeAddress = function(phone, email, address){
  var write = '<div class="address' + catalog + '"><p>' + phone + '</p><p>' + email + '</p><p>' + address + '</p></div>';
  jQuery(".info").append(write);
};

var writeContact = function(name, phone, email, address){
  writeName(name);
  writeAddress(phone, email, address);
  catalog = catalog + 1;
};

jQuery(document).ready(function(){
  jQuery(".info").children().slideUp();
  
  jQuery(".names").on("click", "p", function(){
    console.log(jQuery(this).parent()[0].className);
    var className = jQuery(this).parent()[0].className;
    showAddress(className);
  });

  jQuery("#addressAdd").submit(function(event){
    event.preventDefault();
    var name = jQuery("input#name").val();
    var phone = jQuery("input#phone").val();
    var email = jQuery("input#email").val();
    var address = jQuery("input#address").val();

    writeContact(name, phone, email, address);
    jQuery(".info").children().slideUp();
  });
});
// function search(name) {

var api = 'http://www.strudel.org.uk/lookUP/json/?name=sun';

$(function (){


  $.ajax({
   type: "GET",
   url: api,
   dataType: "jsonp",
     success: function(response) {
                    console.log(response);
                    console.log(response.image.src);
                    var pic = response.image.src;
                     $('#preview').append('<img src=" ' + pic + '">');

                }




});


});





// $(function(){
//   'use strict';


// GIPHY TESTING
// PUBLIC KEY: dc6zaTOxFJmzC
// PATH: /v1/gifs/search
function atGiphy(){

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $.getJSON("http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=" + firstValue , function(json){
       console.log("got json", json);

     $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + "<img src ='" + json.data[0].images.fixed_height.url + "'</img>" + "</div>")





}); //closes getJSON

} //closes function atGiphy

// }); // closes use strict

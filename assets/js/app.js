
$(function(){
  'use strict';

//
// $(".chat-input").keypress(function(){
//   alert("this works!");
// });


$('.chat-input').keypress(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '13'){
     console.log($(".chat-input").val())
     var value = $(".chat-input").val();
     switch(value) {
        case "@help":
        console.log("you said hep")
          $(".chat-container").append("<div class = 'alert alert-info' role = 'alert'>Type @weather to get the weather</div>")
            break;
        case "@weather":
          atWeather();
            break;
        case "@temp":
          atTemp();
            break;
        case "@giphy":
          atGiphy();
            break;
        case "@definition":
          atDefinition();
            break;
        case "@movie":
          atMovie();
            break;
        default:

        } //closes switch
   }// closes if
}); //closes input event


})

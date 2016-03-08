var firstValue;

$(function(){
  'use strict';


$('.chat-input').keypress(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '13'){

     var value = $(".chat-input").val();
     var splitValue = value.split(" ");

     var switchValue = splitValue[0];
     firstValue = splitValue[1];

     switch(switchValue) {
        case "@help":
        console.log("you said help")
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
        case "@calc":
          atCalc();
        default:

        } //closes switch
   }// closes if
}); //closes input event


})

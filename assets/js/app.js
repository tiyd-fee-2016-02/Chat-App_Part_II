var firstValue;
var secondValue;
var searchValue;//will be used to re-piece back together multi-word queries for APIs that need them

$(function(){
  'use strict';

$('.chat-input').keypress(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '13'){

     var value = $(".chat-input").val();
     var splitValue = value.split(" ");

     var switchValue = splitValue[0];
     firstValue = splitValue[1];
     secondValue = splitValue[2];

     switch(switchValue) {
        case "@help":
          atHelp();
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
        case "@bg":
          atBG();
            break;
        case "@clear":
          atClear();
            break;
        case "@calc":
          atCalc();
        default:
          console.log("something looks wrong")
        } //closes switch

        $(".chat-input").val('')

   }// closes if


 }); //closes input event

});

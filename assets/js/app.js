var giphySearch;
var atCommand;
var splitValue;
var switchValue;
var value;
var firstValue;
var secondValue;
var searchValue;//will be used to re-piece back together multi-word queries for APIs that need them
var searchJoin;

$(function(){
  'use strict';

$('.chat-input').keypress(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '13'){

     value = $(".chat-input").val();
     splitValue = value.split(" ");

     switchValue = splitValue[0];
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
            break;
        case "@movie":
          atMovie();
            break;
        case "@joke":
          atJoke();
            break;
        default:
          atWhat();
        } //closes switch

        $(".chat-input").val('')
        //clears input box, ready for new commands!

   }// closes if


 }); //closes input event

});

// $(function(){
//   'use strict';



  function atDefinition(){

    $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

    $.getJSON("http://dictionaryapi.net/api/definition/" + firstValue , function(json){
         console.log("got json", json);

        //  var jsonstring = JSON.stringify(json[0].definitions)

    // $.ajax({
    //   url: 'http://dictionaryapi.net/api/definition/' + firstValue,
    //   type: 'GET',
    //   dataType: 'jsonp'
    // }).done(function (json) {
    //   console.log("got json", json);

       $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + json[0].definitions + "</div>")

// });

}); //closes getjson function

}; //closes function atDictionary

// var dict = $.getJSON("http://dictionaryapi.net/api/definition/" + text)
//             dict.done(function(data) {
//               console.log("got data", data);
//             });

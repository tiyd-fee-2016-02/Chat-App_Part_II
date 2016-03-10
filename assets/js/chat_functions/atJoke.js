var atJoke = function(){

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")


  $.ajax({
    url: 'http://tambal.azurewebsites.net/joke/random',
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
      console.log(data);


      // $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + json.joke + "</div>")

    }

  });

};

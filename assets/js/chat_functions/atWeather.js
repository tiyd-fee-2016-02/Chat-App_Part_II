var atWeather = function(){

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $.getJSON("http://api.wunderground.com/api/b80f8aa82340bfd9/conditions/q/" + secondValue + "/" + firstValue + ".json", function(json) {

    $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + "It is " + (json.current_observation.weather).toLowerCase() + " in " + firstValue + "</div>")

  });


};

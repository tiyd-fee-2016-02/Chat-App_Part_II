var atWeather = function(){

  $.getJSON("http://api.wunderground.com/api/b80f8aa82340bfd9/conditions/q/" + "NC" + "/" + APIValue + ".json", function(json) {

    $(".chat-container").append("<div class = 'alert alert-info' role = 'alert'>" + json.current_observation.weather + "</div>")

  });


};

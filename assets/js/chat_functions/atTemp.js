var atTemp = function(){

  $(".chat-container").append("<div class = 'alert alert-success' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $.getJSON("http://api.wunderground.com/api/b80f8aa82340bfd9/conditions/q/" + "NC" + "/" + firstValue + ".json", function(json) {

    var tempRound = Math.round(json.current_observation.temp_f);

    $(".chat-container").append("<div class = 'alert alert-info' role = 'alert'>" + tempRound + "</div>")

  });


};

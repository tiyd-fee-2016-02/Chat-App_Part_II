

function atMovie(){

  var value = $(".chat-input").val();
  var splitValue = value.split(" ");
  // console.log($(".chat-input").val());
  var atCommand = splitValue.shift();
  var movieSearch = splitValue.join("+");
  // var splitValue = value.split(" ");
  console.log(splitValue);
  console.log(atCommand);
  console.log(movieSearch);

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

      $.getJSON("http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&r=json",
          function(json) {

            $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>"
            + '<img src =' + json.Poster + ' width = 100px></img>' + "<br>" + "Rating: " + json.imdbRating + "<br>" + "Actors: " + json.Actors + "</div>")




}); //closes getJSON

} //closes atMovie

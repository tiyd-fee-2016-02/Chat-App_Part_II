var atHelp = function(){

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>Type @weather to get the weather, @temp for current temperature, @bg to change the background, @giphy for a GIF, @movie for the rating and actors of a movie, @calc to answer math problems, or @help again if you forget!</div>")

}

var atHelp = function(){

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>Type @weather to get the weather, @temp for current temperature, @bg to change the background, or @help again if you forget!</div>")

}

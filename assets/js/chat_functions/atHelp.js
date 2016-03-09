var atHelp = function(){

  $(".chat-container").append("<div class = 'alert alert-success' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $(".chat-container").append("<div class = 'alert alert-info' role = 'alert'>Type @weather to get the weather, @temp, or @help again if you forget!</div>")

}

var atWhat = function(){
  $(".chat-container").append("<div class = 'alert alert-success' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $(".chat-container").append("<div class = 'alert alert-info' role = 'alert'>" + "That doesn't mean anything. Try @help." + "</div>")
}

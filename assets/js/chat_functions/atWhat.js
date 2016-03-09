var atWhat = function(){
  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

  $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + "That doesn't mean anything. Try @help." + "</div>")
}

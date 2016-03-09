var atBG = function(){

  $(".chat-container").append("<div class = 'alert alert-success' role = 'alert'>" + $(".chat-input").val() + "</div>")



  var colorResponse;

  switch(firstValue) {
    case "gray":
    case "blue":
    case "purple":
      colorResponse = "That looks okay, I guess."
      break;
    case "white":
      colorResponse = "Ahh. Much better."
      break;
    case "red":
    case "orange":
    case "yellow":
    case "green":
      colorResponse = "Ew, you want the color to be " + firstValue + "? If you say so..."
      break;
    case "black":
      colorResponse = "Hacker mode!"
        break;
    default:
        colorResponse = "Is that a color?";
}

$("body").css("background-color", firstValue);

  $(".chat-container").append("<div class = 'alert alert-info' role = 'alert'>" + colorResponse + "</div>")

}

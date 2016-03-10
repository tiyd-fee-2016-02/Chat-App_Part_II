var atCalc = function(){

  $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + value + "</div>")

    searchValue = splitValue.shift();
    searchJoin = splitValue.join(" ");


  $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + "The answer is: " + eval(searchJoin) + "</div>")

}


var atFrengly = function(){

  var value = $(".chat-input").val();
  var splitValue = value.split(" ");
  // console.log($(".chat-input").val());
  var atCommand = splitValue.shift();
  var frenglySearch = splitValue.join("+");
  // var splitValue = value.split(" ");


    $(".chat-container").append("<div class = 'alert alert-success text-right' role = 'alert'>" + $(".chat-input").val() + "</div>")

        $.ajax({
        		url: 'http://www.frengly.com/',
        		data: {
        			src: 'en',
        			dest: 'es',
        			text: frenglySearch,
        			outformat: 'json',
        			email: 'nicoleacadavillo@gmail.com',
        			password: 'theironyardproject'
        		},
        		success: function(data){
              $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" +  data.translation + "</div>")
        		},
        		error: function (errormessage) {
              $(".chat-container").append("<div class = 'alert alert-info text-left' role = 'alert'>" + "Error" + "</div>")
            }
        	});

};

function fetchbutton() {
  /*
  //XHR object
  var XhrRequest = new XMLHttpRequest();

  XhrRequest.onload = function () {
    //Responce fro browser
    console.log(XhrRequest.response);
    //JSON is a keyvalue paire
    var responseJSON = JSON.parse(XhrRequest.response);
    var Imageurl = responseJSON.message;
    //display
    $("#dog-img").attr("src", Imageurl);
  };

  //true-->Async , false-->sync
  XhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  //Make a request
  XhrRequest.send();
  */

  //Method 1
  /*
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "get",
    success: function (data) {
      // var responseJSON = JSON.parse(XhrRequest.response);
      var Imageurl = data.message;
      //display
      $("#dog-img").attr("src", Imageurl);
    },
  });*/
  //Method 2
  $.get("https://dog.ceo/api/breeds/image/random", function (data) {
    var Imageurl = data.message;
    //display
    $("#dog-img").attr("src", Imageurl);
  });
}

$("#img-button").click(fetchbutton);

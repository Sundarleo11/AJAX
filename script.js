function fetchbutton() {
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
}

$("#img-button").click(fetchbutton);
console.log('demo');

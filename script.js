function fetchbutton() {
  //XHR object
  var XhrRequest = new XMLHttpRequest();

  XhrRequest.onload = function () {
    //Responce fro browser
    console.log(XhrRequest.response);
  };

  //true-->Async , false-->sync
  XhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  //Make a request
  XhrRequest.send();
}

$("#img-button").click(fetchbutton);

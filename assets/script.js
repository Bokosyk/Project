$(document).ready(function () {
  // Makes navbar hamburger button toggle the links on the screen and off.
  $("#nav-Btn").click(function () {
    $("#select-link").toggle(".hidden");
  });

  //Blank for now.
  var cityInput = "";
  var apiKeyOWM = "";
  var apiKeyYoutube = "";
  var userInput = "";

  //Skeleton code for weather API
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&appid=" +
    apiKeyOWM;

  $.ajax({
    url: queryURL,
    method: "GET",
    database: "json",
    success: function (response) {
      console.log(response);
    },
  });
  // console.log(queryURL);

  //QueryURL for youtube playlists still needs to be found.
  var queryURL2 =
    "https://youtube.googleapis.com/youtube/v3/videos?key=[YOUR_API_KEY]" +
    apiKeyYoutube;
  $.ajax({
    url: queryURL2,
    method: "GET",
    database: "json",
    success: function (response2) {
      console.log(response2);
    },
  });
});

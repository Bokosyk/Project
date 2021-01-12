$(document).ready(function () {
  // City Input.
  var cityInput = "";

  // api Keys
  var apiKeyOWM = "b9a7791a6cf8d58430d53a8881a685bc";
  var apiKeyYouTube = "AIzaSyCbX4jXaXpEqVNHfPQh_Zn0sktw5SknrB4";

  // Path for weather api
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&appid=" +
    apiKeyOWM;

  // Get weather Information form api
  $.ajax({
    url: queryURL,
    method: "GET",
    database: "json",
    success: function (response) {
      console.log(response);
    },
  });

  //   on Keypress Enter
  $("#city-input").keypress(function (event) {
    var keycode2 = event.keyCode ? event.keyCode : event.which;
    if (keycode2 == "13") {
      console.log($("#city-input").val());
      // runPlaylist(event.target.value.trim());
    }
  });
});

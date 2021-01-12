$(document).ready(function () {
  var currentDate = moment().format("L");

  //   on Keypress Enter
  $("#city-input").keypress(function (event) {
    var keycode2 = event.keyCode ? event.keyCode : event.which;
    if (keycode2 == "13") {
      // console.log($("#city-input").val());
      // runPlaylist(event.target.value.trim());

      // gets the user input and store it as a variable
      var citySearch = $("#city-input").val();
      // gets the weather data for the user input
      weather(citySearch);
    }
  });

  // api Keys
  var apiKeyWeather = "&appid=b9a7791a6cf8d58430d53a8881a685bc";
  var apiKeyYouTube = "AIzaSyCbX4jXaXpEqVNHfPQh_Zn0sktw5SknrB4";

  // function that gets the info from the API
  function weather(citySearch) {
    $.ajax({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        citySearch +
        "&units=imperial" +
        apiKeyWeather,
      datatype: "json",
      success: function (response) {
        console.log(response);
        
        var weatherDescription = response.weather[0].description;

        // to temperature, humidity, wind speed on the page
        $("#cityName").text(response.name + " (" + currentDate + ")");
        $("#temp").text(response.main.temp);
        $("#description").text(weatherDescription);
        $("#humid").text(response.main.humidity);
        $("#wind").text(response.wind.speed);

        console.log(weatherDescription);
      },
    });
  }
});

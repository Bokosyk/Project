$(document).ready(function () {
  var currentDate = moment().format("L");

  var desc = $("#description");

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

      $("#weather-container").removeClass("hidden");

      runPlaylist2(event.target.value.trim());
    }
  });

  // api Keys
  var apiKeyWeather = "&appid=b9a7791a6cf8d58430d53a8881a685bc";

  // function that gets weather info from the API
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

        // Temperature, description, humidity, wind speed on the page
        $("#cityName").text(response.name + " (" + currentDate + ")");
        $("#temp").text(response.main.temp);
        $("#description").text(weatherDescription);
        $("#humid").text(response.main.humidity);
        $("#wind").text(response.wind.speed);

        console.log(weatherDescription);
      },
    });
  }

  var apiKeyYouTube = "AIzaSyBuv7KGQPgsCS4Imq98FKEm_d5e5FKtOFo";

  // function that fetches data from api
  var apiRequest2 = function (url) {
    return $.ajax({
      url: url,
      method: "GET",
      database: "json",
    });
  };
  function runPlaylist2(desc) {
    var musicSearchInput2 = desc + " music";

    // Url for YouTube search api
    var searchUrl2 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=playlist&maxResults=5&q=${musicSearchInput2}&key=${apiKeyYouTube}`;

    apiRequest2(searchUrl2).done(function (response2) {
      // logic to select a playlistId/channelId/videoId
      if (response2.items.length === 0) {
        // we can't find your mood at this time.
      } else {
        //   pick a random item number from the items array object
        var randomIndex2 = Math.floor(
          Math.random() * Math.floor(response2.items.length - 1)
        );
        var playlistId2 = response2.items[randomIndex2].id.playlistId;
        var playlistUrl2 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId2}&key=${apiKeyYouTube}`;
        apiRequest2(playlistUrl2).done(function (playlist) {
          console.log(playlist);
          var publicPlaylistUrl2 = `https://www.youtube.com/embed?listType=playlist&list=${playlistId2}`;
          $("#yt-player-weather").attr("src", publicPlaylistUrl2);
        });
      }
      // after selecting, search for item to play
      console.log(response2);
    });
  }
});

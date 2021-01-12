$(document).ready(function () {
  // YouTube API key
  var apiKeyYouTube = "AIzaSyBuv7KGQPgsCS4Imq98FKEm_d5e5FKtOFo";

  // function that fetches data from api
  var apiRequest = function (url) {
    return $.ajax({
      url: url,
      method: "GET",
      database: "json",
    });
  };

  // Targeting the input from html
  var userInput = $("#userInput").val();

  //   Search by keyword
  function runPlaylist(userInput) {
    var musicSearchInput = userInput + " music";

    // Url for YouTube search api
    var searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=playlist&maxResults=5&q=${musicSearchInput}&key=${apiKeyYouTube}`;

    apiRequest(searchUrl).done(function (response) {
      // logic to select a playlistId/channelId/videoId
      if (response.items.length === 0) {
        // we can't find your mood at this time.
      } else {
        //   pick a random item number from the items array object
        var randomIndex = Math.floor(
          Math.random() * Math.floor(response.items.length - 1)
        );
        var playlistId = response.items[randomIndex].id.playlistId;
        var playlistUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKeyYouTube}`;
        apiRequest(playlistUrl).done(function (playlist) {
          console.log(playlist);
          var publicPlaylistUrl = `https://www.youtube.com/embed?listType=playlist&list=${playlistId}`;
          $("#yt-player").attr("src", publicPlaylistUrl);
        });
      }
      // after selecting, search for item to play
      console.log(response);
    });
  }

  //   on Keypress Enter
  $("#userInput").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      runPlaylist(event.target.value.trim());
    }
  });
});

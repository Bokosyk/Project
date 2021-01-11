$(document).ready(function () {
  // Makes navbar hamburger button toggle the links on the screen and off.
  $("#nav-Btn").click(function () {
    $("#select-link").toggle(".hidden");
  });

  // Select mood on hover
  $("#mood-card").hover(function () {
    // Show Button
    $("#mood-btn").toggle("hidden");
  });

  // Select weather mood
  $("#weather-card").hover(function () {
    // Show Button
    $("#weather-btn").toggle("hidden");
  });

  // Select Stored Playlist
  $("#playlist-card").hover(function () {
    // Show Button
    $("#playlist-btn").toggle("hidden");
  });

});

$(".album-poster").on("click", function (_) {
  const dataSwitchId = $(this).attr("data-switch");

  ap.list.switch(dataSwitchId);
  ap.play();

  $("#aplayer").addClass("showPlayer");
});

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  audio: [
    {
      name: "Aurora (dzxai Remix)",
      artist: "K-391 & RØRY",
      url: "./assets/audio/aurora.wav",
      cover: "./assets/img/aurora.jpg",
    },
  ],
});

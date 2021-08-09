(function () {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: [
      {
        name: "Mind",
        artist: "D3ZAI",
        url: "./assets/audio/mind.wav",
        cover: "./assets/img/mind.jpg"
      },
      {
        name: "Dakiti (D3ZAI Remix)",
        artist: "Bad Bunny & Jhay Cortez",
        url: "./assets/audio/dakiti.wav",
        cover: "./assets/img/dakiti.jpg"
      },
      {
        name: "Aurora (D3ZAI Remix)",
        artist: "K-391 & RØRY",
        url: "./assets/audio/aurora.wav",
        cover: "./assets/img/aurora.jpg",
      },
    ],
  });
  
  
  $(".album-poster").on("click", function (_) {
    const dataSwitchId = $(this).attr("data-switch");
  
    ap.list.switch(dataSwitchId);
    ap.play();
  
    $("#aplayer").addClass("showPlayer");
  });
}).call(this);
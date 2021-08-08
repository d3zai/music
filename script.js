(function () {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: [
      {
        name: "Dakiti (D3ZAI Remix)",
        artist: "Bad Bunny & Jhay Cortez",
        url: "./assets/audio/dakiti.m4a",
        cover: "./assets/img/dakiti.jpg"
      },
      {
        name: "Aurora (D3ZAI Remix)",
        artist: "K-391 & RØRY",
        url: "./assets/audio/aurora.m4a",
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
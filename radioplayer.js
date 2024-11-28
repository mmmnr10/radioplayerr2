// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
fetch("https://api.sr.se/api/v2/channels/?format=json")
  .then((response) => response.json())
  .then((data) => {
    // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
    data.channels.forEach((channel) => {
      // Skapar div för varje kanal
      const channelDiv = document.createElement("div");
      channelDiv.className = "channel";

      channelDiv.style.backgroundColor = "#" + channel.color; //background color

      // Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
      // <audio controls>
      //   <source src="" type="audio/mpeg" />
      // </audio>
      // Lägger till kanalens namn och bild
      channelDiv.innerHTML = `
    
    <img src="${channel.image}" alt="${channel.name}">
    <h2>${channel.name}</h2>
    
    <audio controls>
        <source src="${channel.liveaudio.url}" type="audio/mpeg">
    </audio>
`;

      // Lägger till kanalen på sidan
      document.getElementById("channels").appendChild(channelDiv);
    });
  });

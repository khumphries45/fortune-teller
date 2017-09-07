console.log("Hello, JS");


var heading = document.querySelector("h3");
heading.style.color = "#1A64FF";


var placer = document.querySelector("#placement");



var body = document.querySelector("body");
var button1 = document.createElement("button");
button1.style.background = "grey";
button1.style.padding = "10px";
button1.style.color = "lime";
button1.innerHTML = "<strong>Ask Marshawn</strong>";
body.appendChild(button1);


button1.onclick = function () {
      console.log("Clicked");
      var length = allplayers.length;
      console.log(length);
      var randnumber = Math.floor((Math.random() * length + 1));
      console.log(randnumber);
     for (var i in allplayers) {
       console.log(allplayers[randnumber]);
       allplayers.forEach(function (player) {
         var p = document.createElement('p')
         p.innerHTML = player.name;
         var section = document.querySelector("section")
         section.appendChild(p);
       })
     }

};


var allplayers;
fetch('https://api.myjson.com/bins/10lm2p').then(function (response) {
  return response.json();
}).then(function (players) {
  allplayers = players;
});

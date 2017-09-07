console.log("Hello, JS");


var heading = document.querySelector("h3");
heading.style.color = "#1A64FF";


var placer = document.querySelector("#placement");

var section = document.querySelector('section');



var body = document.querySelector("body");
var button1 = document.createElement("button");
button1.style.background = "grey";
button1.style.padding = "10px";
button1.style.color = "lime";
button1.innerHTML = "<strong>Ask Marshawn</strong>";
body.appendChild(button1);


button1.onclick = function () {
      console.log("Clicked");
      var randnumber = Math.floor((Math.random() * allplayers.length));
      console.log(randnumber);
      var randplayer = allplayers[randnumber];
      section.innerHTML = randplayer;
      document.body.appendChild(section);
};


var allplayers;
fetch('https://api.myjson.com/bins/166hk1').then(function (response) {
  return response.json();
}).then(function (players) {
  allplayers = players;
});

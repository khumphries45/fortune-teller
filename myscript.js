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
};


var name;
var team;
var age;
var number;
fetch('https://api.myjson.com/bins/10lm2p').then(function (response) {
  return response.json();
}).then(function (data) {
  section.innerHTML = data.name;
  name = data.name;
  team = data.team;
  age = data.age;
  number = data.number;
  data.name.forEach(function (rbname) {
    var p = document.createElement('p');
    p.innerHTML = rbname.number;
    document.body.appendChild(p);
  });
});

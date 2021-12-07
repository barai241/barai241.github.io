

let navElement = document.querySelector(".nav");
console.log("my nav element:", navElement);
let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

  function imagefun() {
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("assets/sun.png")) {
                Image_Id.src = "assets/moon.png";
            }
            else {
                Image_Id.src = "assets/sun.png";
            }
        } 
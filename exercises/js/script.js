var anythingIWant = document.body;
var isDark = false;


// if i clicke the button
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

// background color changes
// text color changes
function changeToDarkMode() {  
  if(isDark === true) {
    
    darkModeButton.textContent = "Dark mode"
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off.");
  } else if(isDark === false){
    darkModeButton.textContent = "Light mode";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on!");
  }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.color = 'darkgreen';

  
});

var buton=document.getElementById("buttn");
var allchar="0123456789ABCDEF";

buton.addEventListener("click",myFun);

function myFun(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}

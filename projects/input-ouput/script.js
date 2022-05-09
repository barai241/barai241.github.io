const container = document.querySelector(".container");
let allEmojis = [
  
  "💑",
  "👩‍❤️‍👩",
  "👨‍❤️‍👨",
  "💏",
  "👩‍❤️‍💋‍👩",
  "👨‍❤️‍💋‍👨",
  "👄",
  "💋",
  "👅",
  "💅",
  "💅🏻",
  "💅🏼",
  "💅🏽",
  "💅🏾",
  "💅🏿",
  "🌷",
  "🌸",
  "🌺",
  "💐",
  "🐹",
  "🐖",
  "🐷",
  "🐽",
  "🐙",
  "🌄", 
  "🍠",
  "🍇",
  "🍉",
  "🍒",
  "🍡",
  "🍣",
  "🍤",
  "🍥",
  "🍧",
  "🍬",
  "🍭",
  "🎀",
  "🎆",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "🎡",
  "🏩",
  "💒",
  "👛",
  "👙",
  "👚",
  "🔮",
  
];
let index = 0;

container.addEventListener("click", (e) => {
  const box = document.createElement("div");
  box.classList.add("pink");
  box.innerHTML = allEmojis[randomInteger(0, allEmojis.length - 1)];
  box.style.fontSize = `120px`;
  box.style.position = "absolute";
  box.style.left = `${randomInteger(0, 90)}%`;
  box.style.top = `${randomInteger(0, 90)}%`;
  box.style.zIndex = index++;
  container.appendChild(box);
});

clearPink.addEventListener("click", function(){
  // newDiv.style.backgroundColor = "white";
});

  wrapper.appendChild(newDiv);


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




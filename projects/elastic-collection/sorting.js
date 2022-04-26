/* globals require */
console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "key8BK9NSBYQbZWp9" }).base(
  "applUKnOzVoutDJYp"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("happymeal").select({}).eachPage(gotPageOfHappymeals, gotAllHappymeals);

// an empty array to hold our book data
let happymeals = [];

// callback function that receives our data
function gotPageOfHappymeals(records, fetchNextPage) {
  console.log("gotPageOfHappymeals()");
  // add the records from this page to our books array
  happymeals.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllHappymeals(err) {
  console.log("gotAllHappymeals()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading happymeals");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogHappymeals();
  showHappymeals();
}

// just loop through the books and console.log them
function consoleLogHappymeals() {
  console.log("consoleLogHappymeals()");
  happymeals.forEach((happymeal) => {
    console.log("Happymeal:", happymeal);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showHappymeals() {
  console.log("showHappymeals()");
  happymeals.forEach((happymeal) => {
    let happymealTextHolder = document.createElement("div");
    happymealTextHolder.classList.add("entry");
    // happymealTextHolder.innerText = happymeal.fields.name;
    wrapper.appendChild(happymealTextHolder);


     let imageHolder = document.createElement("img");
     imageHolder.src = happymeal.fields.images[0].url;
     imageHolder.classList.add("happymealImage");
     happymealTextHolder.appendChild(imageHolder);




      const slugify = function(name) {
   return name.toLowerCase().replaceAll(' ', '-');
 };
  // clean up names of tags to be lower case without spaces


// moved everything inside the show recipe function
 //changed recipes to recipe
 let collection = happymeal.fields.collection;
 collection.forEach(function(collection) {
   let collectionClassName = slugify(collection);
   console.log('happymealClassName', collectionClassName);
   imageHolder.classList.add(collectionClassName);
 });
  // add event listener to our filter to add an active class to our video
 let filterBm = document.querySelector(".bm");
 let bmbutton = document.querySelector(".bmbutton");
 filterBm.addEventListener("click", function(){
   if (imageHolder.classList.contains("bm")) {
     imageHolder.style.display = "block";
     bmbutton.classList.add("active");
   } else {
     imageHolder.style.display = "none";
     bmbutton.classList.remove("active");
   }
 });
  let filterDoraemon = document.querySelector(".doraemon");
 let doraemonButton = document.querySelector(".doraemonbutton");
 filterDoraemon.addEventListener("click", function(){
   if (imageHolder.classList.contains("doraemon")) {
     imageHolder.style.display = "block";
     europeButton.classList.add("active");
   } else {
    imageHolder.style.display = "none";
    doraemonButton.classList.remove("active");
   }
 });
  let filterCh = document.querySelector(".ch");
 let chButton = document.querySelector(".chbutton");
 filterCh.addEventListener("click", function(){
   if (imageHolder.classList.contains("ch")) {
     imageHolder.style.display = "block";
     chButton.classList.add("active");
   } else {
    imageHolder.style.display = "none";
    chButton.classList.remove("active");
   }
 });
  let filterIdog = document.querySelector(".idog");
 let idogButton = document.querySelector(".idogbutton");
 filterIdog.addEventListener("click", function(){
   if (imageHolder.classList.contains("idog")) {
     imageHolder.style.display = "block";
     idogButton.classList.add("active");
   } else {
    imageHolder.style.display = "none";
    idogButton.classList.remove("active");
   }
 });
  let filterHk = document.querySelector(".hk");
 let hkButton = document.querySelector(".hkbutton");
 filterHk.addEventListener("click", function(){
   if (imageHolder.classList.contains("hk")) {
     imageHolder.style.display = "block";
     hhkButton.classList.add("active");
   } else {
    imageHolder.style.display = "none";
    hkButton.classList.remove("active");
   }
 });
  let filterPokemon = document.querySelector(".pokemon");
 let pokemonButton = document.querySelector(".pokemonbutton");
 filterAfrica.addEventListener("click", function(){
   if (imageHolder.classList.contains("pokemon")) {
     imageHolder.style.display = "block";
     pokemonButton.classList.add("active");
   } else {
    imageHolder.style.display = "none";
    pokemonButton.classList.remove("active");
   }
 });

 });
}

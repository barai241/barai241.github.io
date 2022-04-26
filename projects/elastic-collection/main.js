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




happymealTextHolder.addEventListener("click", show);


function show() {
  console.log("test");
  imageHolder.classList.toggle("active");
  happymealTextHolder.classList.toggle("active");

  let textHolder = document.createElement("h2");
     textHolder.classList.add("text");
     textHolder.innerText = happymeal.fields.Notes;
          happymealTextHolder.appendChild(textHolder);

}





 });
}









//FOR BURGER MENU
function myFunction(x) {
  x.classList.toggle("change");
    openNav();
}

function openNav() {
  document.getElementById("mySidenav").classList.toggle("active");
}

// THOMAS HELP
// FAQ / HELP SECTION
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    }
    else {
      content.style.display = "block";

    }
  //  var turn = document.getElementsByClassName("arrowfaq");
      //turn[i].classList.toggle("arrowturn");
  });
}



// FAQ / SUPPORT END //

// Listen for clicks on "login button"
try {
  document.getElementById("loginButton").addEventListener("click", validateUser);
} catch (e) {
  console.log(e);

} finally {
  console.log("no login button");

}
// Validates the username and password
function validateUser() {
  let userInputs = document.getElementById("loginData");

  if (userInputs[0].value == "12341234" && userInputs[1].value == "Duck") {
    console.log("succes");
    window.location.href = "frontpage.html";
  }

  else {
    window.alert("Wrong username or password");
  }
}

try {
  document.getElementById("notificationBell").addEventListener("click", activateNotification);
} catch (e) {
  console.log(e);

} finally {
  console.log("no comprende");

}

// Notifcation Bell
function activateNotification() {
  let containerSlide = document.getElementsByClassName("notificationContainer");
  containerSlide[0].classList.toggle("slideUp");
  console.log("notification activated");
}

// Validates sign up checkbox -  CHARLOTTE  //

try {
  document.getElementById("checkmark").addEventListener("click", checkboxChecked);
} catch (e) {
  console.log(e);

} finally {
  console.log("no sign up button");
}

function checkboxChecked() {
  console.log("checkboxChecked running");
let checkedboxen = document.getElementById("checkboxen");

if (checkedboxen.value == "checked") {
  checkedboxen.value = ""
}
else {
  checkedboxen.value = "checked"
}
}

try {
  document.getElementById("signupButton").addEventListener("click", validateCheckbox);
} catch (e) {
  console.log(e);

} finally {
  console.log("no sign up");
}


function validateCheckbox() {
  console.log("validateCheckbox RUNNING");
  let checkboxInputs = document.getElementById("checkboxen");

  if (checkboxInputs.value == "checked") {
    console.log("successfull");
    window.location.href = "login.html";
  }

  else {
    window.alert("You forgot to agree with terms");
  }
}

try {

  let checkCont = document.getElementById("termsConditions");

  checkCont.addEventListener("click", showTerms);

  document.getElementById("closeTermsButton").addEventListener("click", showTerms);


} catch (e) {
  console.log(e);
} finally {
  console.log("no sign up");
}

function showTerms() {
let sign = document.getElementsByClassName('popupSign');

sign[0].classList.toggle("popupActive");
}

// Sign up END - CHARLOTTE //

// PROFILE
try {

  let butt = document.getElementById("buttButton");

  butt.addEventListener("click", showPopup);

} catch (e) {
  console.log(e);
} finally {
  console.log("no sign up");
}

function showPopup() {
  console.log("active");
let main = document.getElementsByClassName('popupMain');

main[0].classList.toggle("popupActive");
}

// PROFILE END







// CAROUSEL

// Main card functionality
function mainFunctionality () {

}


document.getElementById("arrowDown").addEventListener("click", carouselUp);

// Slide up
function carouselUp() {
  posOB_posMB();
}

// posOB -> posMB
function posOB_posMB() {
let addIdentifier = document.getElementsByClassName("posOB");
addIdentifier[0].classList.add("startIdentifier");

posMB_posMain();

let posOB = document.getElementsByClassName("startIdentifier");
posOB[0].classList.add("posMB");
posOB[0].classList.remove("posOB");
posOB[0].classList.remove("startIdentifier");
}

// posMB -> posMain
function posMB_posMain() {
let posMB = document.getElementsByClassName("posMB");

posMain_posMT();

posMB[0].classList.add("posMain");
posMB[0].classList.remove("posMB");
}

// posMain -> posMT
function posMain_posMT() {
let posMain = document.getElementsByClassName("posMain");

posMT_posOT();

posMain[0].classList.add("posMT");
posMain[0].classList.remove("posMain");
}

// posMT -> posOT
function posMT_posOT() {
let posMT = document.getElementsByClassName("posMT");

posOT_posHidden();

posMT[0].classList.add("posOT");
posMT[0].classList.remove("posMT");
}

// posOT -> posHidden
function posOT_posHidden() {
let posOT = document.getElementsByClassName("posOT");

posHidden_posOB();

posOT[0].classList.add("posHidden");
posOT[0].classList.remove("posOT");
}

// posHidden -> posOB
function posHidden_posOB() {
let posHidden = document.getElementsByClassName("posHidden");

posHidden[0].classList.add("posOB");
posHidden[0].classList.remove("posHidden");
}



document.getElementById("arrowUp").addEventListener("click", slideDown);

// Slide down
function slideDown() {
  posOB_posHidden();
}

// posOB -> posHidden
function posOB_posHidden() {
let addIdentifier = document.getElementsByClassName("posOB");
addIdentifier[0].classList.add("startIdentifier");

posHidden_posOT();

let posOB = document.getElementsByClassName("startIdentifier");
posOB[0].classList.add("posHidden");
posOB[0].classList.remove("posOB");
posOB[0].classList.remove("startIdentifier");
}

// posHidden -> posOT
function posHidden_posOT() {
let posHidden = document.getElementsByClassName("posHidden");

posOT_posMT();

posHidden[0].classList.add("posOT");
posHidden[0].classList.remove("posHidden");
}

// posOT -> posMT
function posOT_posMT() {
let posOT = document.getElementsByClassName("posOT");

posMT_posMain();

posOT[0].classList.add("posMT");
posOT[0].classList.remove("posOT");
}

// posMT -> posMain
function posMT_posMain() {
let posMT = document.getElementsByClassName("posMT");

posMain_posMB();

posMT[0].classList.add("posMain");
posMT[0].classList.remove("posMT");
}

// posMain -> posMB
function posMain_posMB() {
let posMain = document.getElementsByClassName("posMain");

posMB_posOB();

posMain[0].classList.add("posMB");
posMain[0].classList.remove("posMain");
}

// posMB -> posOB
function posMB_posOB() {
let posMB = document.getElementsByClassName("posMB");

posMB[0].classList.add("posOB");
posMB[0].classList.remove("posMB");
}

// FLIP CARD
document.getElementById("ghettoButton").addEventListener("click", flipCard);

function flipCard() {
  let card = document.getElementsByClassName("posMain")[0];
  card.classList.toggle("rotateCard");
}


//DELETE KEY



//SHARE KEY

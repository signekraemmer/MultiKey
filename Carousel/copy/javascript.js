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

// Validates sign up checkbox //

try {
  document.getElementById("checkboxen").addEventListener("click", checkboxChecked);
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

// Sign up END

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

let arrows = document.getElementsByClassName("arrow");

// checks which arrow was clicked - If this don't work jsut use ID's
if (arrows[0] == true) {
  arrows[0].addEventListener("click", movePosTMain)
}

else if (arrows[1] == true) {
  arrows[1].addEventListener("click", movePosBMain)
}

// Gives the new main card the bigger values
function mainValues () {

}


// Circle up
// posAT to posBT

// posBT to HIDDEN

// HIDDEN to posBB

// posBB to posAB

// posAB to posMain

// posMain to posAT



// Circle down
// posBT to posAT

// posAT to posMain

// posMain to posAB

// posAB to posBB

// posBB to HIDDEN

// HIDDEN to posBT

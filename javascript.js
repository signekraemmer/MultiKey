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


// Validates sign up checkbox //

function validateUser() {
  let checkboxInputs = document.getElementById("checkContainer");

  if (checkboxInputs[0].value == "checked") {
    console.log("successfull");
    window.location.href = "login.html";
  }

  else {
    window.alert("You forgot to agree with terms");
  }
}

// Sign up END //

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


// PROFILE

let butt = document.getElementsByClassName('button');

butt[0].addEventListener("click", showPopup);

function showPopup() {
  console.log("active");
let main = document.getElementsByClassName('popupMain');

main[0].classList.toggle("popupActive");
}

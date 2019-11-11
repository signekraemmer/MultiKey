


try {
  document.getElementsByClassName("testCard")[0].addEventListener("mousemove", funcOne);

} catch (e) {

} finally {

}

function funcOne(e) {
  console.log(e.clientX);
  let xPos = e.clientX;
  let yPos = e.clientY;
  document.getElementsByClassName("testCard")[0].style.transform = "translate(" + xPos + ", " + yPos + "px)";

  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

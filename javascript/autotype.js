/* auto type animation with Javascript in home page */
var i = 0;
var txt = "Welcome to my webpage!🥳";
var speed = 50;
type();
function type() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

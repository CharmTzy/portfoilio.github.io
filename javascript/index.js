'use strict'
/*change color of the page while clicking light or dark mode button*/
function switch_theme(mode) {
  if (mode === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
    document.getElementById("mode").innerHTML = '<i class="fas fa-sun"></i>&nbsp;Light Mode';
    document.getElementById("mode").setAttribute("onclick", "switch_theme('light')");
  } else if (mode === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("mode").innerHTML = '<i class="fas fa-moon"></i>&nbsp;Dark Mode';
    document.getElementById("mode").setAttribute("onclick", "switch_theme('dark')");
  }
}

/* search bar connected to google engine*/
function google() {
  var query = document.getElementById("query").value;
  window.open("https://google.com/search?q=" + query);
}

/* Clock in navigation bar */
var myVar = setInterval(myTimer, 1000);
var hours = [
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function myTimer() {
  var date = new Date();
  document.getElementById("date").innerHTML =
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
  document.getElementById("hours").innerHTML = hours[date.getHours()];
  document.getElementById("minutes").innerHTML =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  document.getElementById("seconds").innerHTML =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  document.getElementById("ampm").innerHTML = date.getHours() < 12 ? "AM" : "PM";


    document.getElementById("colon2").innerHTML = ":";
    document.getElementById("colon1").innerHTML = ":";
  }

/* scroll button to top */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})

//Simple Js file to make use of the scroll feature to the portfolio page
// When the user scrolls down 20px from the top of the document, show the button
//getThisYear is a function to update callender year dybamically every year
window.onload = function () {
  window.onscroll = function() {scrollFunction()};

  getThisYear();
  
}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Update Calender Year in footer section Dynamically
function getThisYear(){
  const calenderYear = document.getElementById('cal-year');

  const year = new Date();
  const thisYear = year.getFullYear();
  calenderYear.textContent = thisYear;
}




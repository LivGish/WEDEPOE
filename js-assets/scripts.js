/*CODE ATTRIBUTION*/
/*TITLE: Accordions*/
/*AUTHOR: W3 schools*/
/*DATE: 28/10/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://www.w3schools.com/howto/howto_js_accordion.asp*/

/*CODE ATTRIBUTION*/
/*TITLE: Tabs*/
/*AUTHOR: W3 schools*/
/*DATE: 28/10/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://www.w3schools.com/howto/tabs.asp*/

// Accordion
var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Tabs
function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  if (evt) evt.currentTarget.className += " active";
}

// Open the default tab on page load, even if not triggered by a click
window.addEventListener('DOMContentLoaded', function() {
  var defaultTab = document.getElementById("defaultOpen");
  if (defaultTab) {
    openMenu(null, defaultTab.getAttribute('onclick').match(/'([^']+)'/)[1]);
    defaultTab.className += " active";
  }
});
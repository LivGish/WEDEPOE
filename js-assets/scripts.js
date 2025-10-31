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

  // Gallery lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  console.log("Lightbox elements:", { lightbox, lightboxImg, caption, closeBtn });

  if (lightbox && lightboxImg && caption && closeBtn) {
    const galleryImages = document.querySelectorAll(".gallery img");
    console.log("Found gallery images:", galleryImages.length);
    
    // Function to close lightbox and restore scrolling
    function closeLightbox() {
      lightbox.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.position = "";
      console.log("Lightbox closed, scrolling restored");
    }
    
    galleryImages.forEach((img, index) => {
      console.log(`Adding click listener to image ${index}:`, img.src);
      img.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Image clicked:", img.src);
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        caption.textContent = img.alt;
        // Don't disable scrolling - this was causing the issue
      });
    });

    closeBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      console.log("Close button clicked");
      closeLightbox();
    });

    lightbox.addEventListener("click", function(e) {
      if (e.target === lightbox) {
        console.log("Lightbox background clicked");
        closeLightbox();
      }
    });

    // Prevent clicks on the lightbox image from closing the lightbox
    lightboxImg.addEventListener("click", function(e) {
      e.stopPropagation();
    });

    // Add escape key to close lightbox
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && lightbox.style.display === "block") {
        closeLightbox();
      }
    });
  } else {
    console.log("Missing lightbox elements:", { 
      lightbox: !!lightbox, 
      lightboxImg: !!lightboxImg, 
      caption: !!caption, 
      closeBtn: !!closeBtn 
    });
  }
});
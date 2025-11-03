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
  // Load drinks data first
  loadDrinksData();
  
  // Initialize search functionality
  initializeSearch();
  
  // Initialize franchise form
  initializeFranchiseForm();
  
  // Initialize contact form
  initializeContactForm();
  
  // Open default tab
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

// Search & Filtering
function initializeSearch() {
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("keyup", function () {
      let filter = this.value.toLowerCase();
      let drinks = document.querySelectorAll("#searchList li");

      drinks.forEach(i => {
        let text = i.textContent.toLowerCase();
        i.style.display = text.includes(filter) ? "list-item" : "none";
      });
    });
  }
}

const coldDrinks = [
  { name: "Plain Iced Matcha Latte", price: 60 },
  { name: "Rose Iced Matcha Latte", price: 80 },
  { name: "Colourful Iced Matcha Latte", price: 80 },
  { name: "Pineapple Iced Matcha Latte", price: 80 },
  { name: "Blueberry Iced Matcha Latte", price: 80 },
  { name: "Mango Iced Matcha Latte", price: 80 },
  { name: "Strawberry Iced Matcha Latte", price: 80 },
];

const mocktails = [
  { name: "Matcha Lemonade", price: 60 },
  { name: "Strawberry & Pineapple", price: 80 },
  { name: "Almond & Strawberry", price: 80 },
  { name: "Blueberry & Lemon", price: 80 },
  { name: "Strawberry & Lemon", price: 80 },
];

const hotDrinks = [
  { name: "Plain Hot Matcha Latte", price: 60 },
  { name: "Vanilla Hot Matcha Latte", price: 70 },
  { name: "Hazelnut Hot Matcha Latte", price: 70 },
  { name: "Caramel Hot Matcha Latte", price: 70 },
];

// Combine all drinks for the full menu and search functionality
const allDrinks = [...coldDrinks, ...mocktails, ...hotDrinks];

// --- Function to display any drink list ---
function displayDrinks(list, elementId) {
  const container = document.getElementById(elementId);
  if (container) {
    container.innerHTML = ""; // clear previous items
    list.forEach(drink => {
      const li = document.createElement("li");
      li.textContent = `${drink.name} - R${drink.price}`;
      container.appendChild(li);
    });
  }
}

// --- Load all tab contents on page load ---
function loadDrinksData() {
  // Load drinks for all the different tab content areas
  const fullMenuContainers = document.querySelectorAll('#Full-menu #icedDrinks, #Full-menu #mocktailDrinks, #Full-menu #hotDrinks');
  
  // Full menu tab
  const fullMenuIced = document.querySelector('#Full-menu #icedDrinks');
  const fullMenuMocktails = document.querySelector('#Full-menu #mocktailDrinks');  
  const fullMenuHot = document.querySelector('#Full-menu #hotDrinks');
  
  if (fullMenuIced) displayDrinks(coldDrinks, 'icedDrinks');
  if (fullMenuMocktails) displayDrinks(mocktails, 'mocktailDrinks');
  if (fullMenuHot) displayDrinks(hotDrinks, 'hotDrinks');
  
  // Individual tabs - we need to create unique containers for these
  displayDrinks(coldDrinks, "icedDrinksTab");
  displayDrinks(mocktails, "mocktailDrinksTab");
  displayDrinks(hotDrinks, "hotDrinksTab");
  
  // For search functionality
  displayDrinks(allDrinks, "searchList");
}

// Enhanced contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const phone = document.getElementById('number').value;
      const email = document.getElementById('email').value;
      const reason = document.getElementById('reason').value;
      const message = document.getElementById('experience').value;
      
      // Create email subject and body
      const subject = `Contact Form: ${reason}`;
      const body = 
        `Name: ${name}%0D%0A` +
        `Phone: ${phone}%0D%0A` +
        `Email: ${email}%0D%0A%0D%0A` +
        `Message Type: ${reason}%0D%0A%0D%0A` +
        `Message:%0D%0A${message}`;
      
      // Create mailto link
      const mailtoLink = `mailto:info@love-matcha.co.za?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show confirmation message
      alert('Your email client should now open with the pre-filled message. If it doesn\'t open automatically, please contact us directly at info@love-matcha.co.za');
      
      // Reset form
      this.reset();
    });
  }
}

// Franchise form validation and feedback
function initializeFranchiseForm() {
  const franchiseForm = document.getElementById("franchiseForm");
  console.log("Looking for franchise form:", franchiseForm);
  
  if (franchiseForm) {
    console.log("Franchise form found, adding event listener");
    franchiseForm.addEventListener("submit", function(e) {
      console.log("Franchise form submitted!");
      e.preventDefault();
      
      // Get form data for validation
      const name = document.getElementById("franchiseName")?.value.trim();
      const phone = document.getElementById("franchisePhone")?.value.trim();
      const email = document.getElementById("franchiseEmail")?.value.trim();
      const address = document.getElementById("franchiseAddress")?.value.trim();
      const reason = document.getElementById("franchiseReason")?.value.trim();
      const experience = document.getElementById("franchiseExperience")?.value.trim();
      const type = document.getElementById("franchiseType")?.value.trim();
      const budget = document.getElementById("franchiseBudget")?.value.trim();
      
      const feedback = document.getElementById("formFeedback");
      console.log("Form data:", { name, phone, email, address, reason, experience, type, budget });
      
      // Basic validation
      if (!name || !email || !phone || !address || !reason || !experience || !type || !budget) {
        feedback.innerHTML = '<p style="color: red; font-weight: bold;">Please fill in all fields correctly.</p>';
        console.log("Validation failed: missing fields");
        return;
      }
      
      if (!email.includes("@")) {
        feedback.innerHTML = '<p style="color: red; font-weight: bold;">Please enter a valid email address.</p>';
        console.log("Validation failed: invalid email");
        return;
      }
      
      if (reason.length < 10) {
        feedback.innerHTML = '<p style="color: red; font-weight: bold;">Please provide more details about your interest (minimum 10 characters).</p>';
        console.log("Validation failed: reason too short");
        return;
      }
      
      console.log("Validation passed, showing success message");
      
      // Success message
      feedback.innerHTML = `
        <div style="background-color: #f3f6eb; border: 2px solid #3c4f12; padding: 20px; border-radius: 10px; margin-top: 20px;">
          <h3 style="color: #3c4f12; text-align: center; margin: 0 0 15px 0;">🎉 Thank You for Your Interest!</h3>
          <p style="color: #3c4f12; text-align: center; margin: 5px 0;"><strong>Dear ${name},</strong></p>
          <p style="color: #3c4f12; text-align: center; margin: 5px 0;">You meet the requirements to become a Love Matcha franchisee!</p>
          <p style="color: #3c4f12; text-align: center; margin: 5px 0;">Our franchise team will review your application and contact you within 3-5 business days.</p>
          <p style="color: #3c4f12; text-align: center; margin: 15px 0 5px 0;"><strong>Next Steps:</strong></p>
          <ul style="color: #3c4f12; text-align: left; max-width: 400px; margin: 0 auto;">
            <li>We'll email you a detailed franchise information packet</li>
            <li>Schedule a consultation call to discuss your vision</li>
            <li>Site visit and location assessment</li>
            <li>Final approval and franchise agreement</li>
          </ul>
          <p style="color: #3c4f12; text-align: center; margin: 15px 0 0 0;"><strong>Contact:</strong> franchise@love-matcha.co.za</p>
        </div>
      `;
      console.log("Success message displayed");
      
      // Clear form inputs immediately after showing success message
      this.reset();
      console.log("Form inputs cleared");
    });
  } else {
    console.log("Franchise form not found on this page");
  }
}
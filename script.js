// Hide navbar on scroll and only show when at the top
const scrollThreshold = 100; // Adjust this value to delay hiding
window.addEventListener('scroll', function() {
  let navbar = document.querySelector('header.navbar');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > scrollThreshold) {
    navbar.style.opacity = '0'; // Fade out
    navbar.style.pointerEvents = 'none'; // Optional: Disable interactions when hidden
  } else if (scrollTop === 0) {
    navbar.style.opacity = '1'; // Fade in
    navbar.style.pointerEvents = 'auto'; // Re-enable interactions
  }
});

function openNav() {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay").classList.add("show-overlay");
    document.querySelector("header.navbar").classList.add("nav-hidden");
    preventScrolling();
}

function closeNav() {
  document.getElementById("overlay").classList.remove("show-overlay");
  setTimeout(function() {
    document.getElementById("overlay").classList.add("d-none");
  }, 500); // Delay to match the CSS transition time
  document.querySelector("header.navbar").classList.remove("nav-hidden");
  document.querySelector(".navbar-collapse").classList.add("nav-hidden");
  allowScrolling();

}

// Prevent default navbar toggle behavior and open the overlay instead
document.querySelector('.navbar-toggler').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of expanding the non-overlay menu
  openNav(); // Open the overlay menu instead
});


function preventScrolling() {
  document.body.style.overflow = 'hidden';
}
function allowScrolling() {
  document.body.style.overflow = '';
}


function updateButtonText() {
  const form = document.querySelector(".tito-register-interest-form");

  if (form) {
    const button = form.querySelector("button, input[type='submit']");
    if (button) {
      button.textContent = "Let me know when registration opens";
    }
  }
}

// Observe dynamic changes in the DOM for the button
const buttonObserver = new MutationObserver(updateButtonText);
buttonObserver.observe(document.body, { childList: true, subtree: true });

// Call the function once in case the element already exists
updateButtonText();

// Function to remove the text of the dynamically generated label
function removeLabelText() {
  const emailLabel = document.querySelector(".tito-email-label");
  if (emailLabel) {
    // Ensure only the text content is cleared
    emailLabel.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = ""; // Clear text nodes only
      }
    });
    labelObserver.disconnect(); // Stop observing
  }
}
// Create a separate MutationObserver for the label
const labelObserver = new MutationObserver(removeLabelText);

// Start observing the DOM for changes related to the label
labelObserver.observe(document.body, {
  childList: true, // Watch for added/removed children
  subtree: true,   // Watch the entire subtree for changes
});

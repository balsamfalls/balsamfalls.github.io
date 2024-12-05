  const scrollThreshold = 100;
  const navbar = document.querySelector('header.navbar');
  const overlay = document.getElementById("overlay");
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Hide navbar on scroll
  if (navbar) {
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > scrollThreshold) {
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
      } else if (scrollTop === 0) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    });
  }

  function openNav() {
    if (overlay) {
      overlay.classList.remove("d-none");
      overlay.classList.add("show-overlay");
    }
    navbar?.classList.add("nav-hidden");
    preventScrolling();
  }

  function closeNav() {
    if (overlay) {
      overlay.classList.remove("show-overlay");
      setTimeout(() => overlay.classList.add("d-none"), 500);
    }
    navbar?.classList.remove("nav-hidden");
    allowScrolling();
  }

  if (navbarToggler) {
    navbarToggler.addEventListener('click', function(event) {
      event.preventDefault();
      openNav();
    });
  }

  function preventScrolling() {
    document.body.style.overflow = 'hidden';
  }

  function allowScrolling() {
    document.body.style.overflow = '';
  }


// function updateButtonText() {
//   const form = document.querySelector(".tito-register-interest-form");

//   if (form) {
//     const button = form.querySelector("button, input[type='submit']");
//     if (button) {
//       button.textContent = "Let me know when registration opens";
//     }
//   }
// }

// // Observe dynamic changes in the DOM for the button
// const buttonObserver = new MutationObserver(updateButtonText);
// buttonObserver.observe(document.body, { childList: true, subtree: true });

// // Call the function once in case the element already exists
// updateButtonText();

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

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

// document.addEventListener("DOMContentLoaded", function () {
//     const targetDiv = document.getElementById("panoramic-img-scroll");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               document.body.style.backgroundColor = "#214E34";

//             } else {
//               // document.body.style.backgroundColor = "#EbE3D6";
//             }
//         });
//     }, { threshold: 0.99 }); // Adjust threshold as needed

//     observer.observe(targetDiv);
// });

// document.addEventListener("scroll", function() {
//     const scalingBackground = document.getElementById("scalingBackground");
//     const rect = scalingBackground.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
//     if (rect.top <= windowHeight && rect.bottom >= 0) {
//         // The div is in view
//         const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
//         const scale = 90 + scrollProgress * 30;
//         scalingBackground.style.backgroundSize = `${Math.min(scale, 120)}%`;
//     } else {
//         // The div is out of view, reset size
//         // scalingBackground.style.backgroundSize = "90%";
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const carousel = document.querySelector('#smoothCarousel .carousel-inner');
//     const carouselItems = Array.from(carousel.children);
//     const totalItems = carouselItems.length;
//     let currentIndex = 0;

//     function slideNext() {
//         currentIndex = (currentIndex + 1) % totalItems;

//         // Append the first item at the end to create an infinite loop
//         if (currentIndex === 0) {
//             carousel.appendChild(carouselItems[0]);
//             carouselItems.push(carouselItems.shift());
//         }

//         // Slide to the next item
//         carousel.style.transition = "transform 1s ease";
//         carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

//         // After sliding, reset to remove transition effect and adjust the position
//         setTimeout(function() {
//             carousel.style.transition = "none";
//             carousel.style.transform = "translateX(0%)";
//             currentIndex = 0;
//         }, 1000); // Time should match the duration in the `transition` property

//         setTimeout(slideNext, 3000); // Adjust this interval for the sliding speed
//     }

//     slideNext(); // Start the carousel
// });


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

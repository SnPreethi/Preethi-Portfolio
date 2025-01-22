// Slide-out effect animation of the animation-screen
document.addEventListener("DOMContentLoaded", () => {
    const animationScreen = document.getElementById("animation-screen");
    const helloElements = animationScreen.querySelectorAll(".hello");
    setTimeout(() => {
      helloElements.forEach(element => element.style.display = "none");
      animationScreen.style.animation = "slideOut 1s ease-in-out forwards";
      setTimeout(() => {
        animationScreen.style.display = "none";
      }, 1000);
    }, 3000);
  });



// Toggle hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuLinks = document.querySelectorAll('.menu-links a');
  function toggleMenu() {
    if (menuOverlay.classList.contains('open')) {
      // Start closing animation
      menuOverlay.classList.remove('open');
      menuOverlay.classList.add('closing');
      // Wait for the closing animation to finish before resetting
      setTimeout(() => {
        menuOverlay.classList.remove('closing');
      }, 500); // Match the duration of slide-out
    } else {
      // Open the menu
      menuOverlay.classList.add('open');
    }
    hamburgerIcon.classList.toggle('open');
  }
  // Add click event listener to the hamburger icon
  hamburgerIcon.addEventListener('click', toggleMenu);
  // Add click event listener to menu links to close the menu
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (menuOverlay.classList.contains('open')) {
        toggleMenu(); // Close the menu when a link is clicked
      }
    });
  });
});



// Typing effect
const textArray = ["A STEM Graduate", "An ML Engineer", "An AI Researcher", "A Robotics Enthusiast"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;
const dynamicTextElement = document.getElementById("dynamic-text");
let textIndex = 0;
let charIndex = 0;
function typeText() {
    if (charIndex < textArray[textIndex].length) {
        dynamicTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}
function eraseText() {
    if (charIndex > 0) {
        dynamicTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, typingSpeed);
});


// Add hover effect on timeline items
document.querySelectorAll('.timeline-item').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.timeline-dot').style.backgroundColor = '#007BFF';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('.timeline-dot').style.backgroundColor = '#4caf50';
  });
});

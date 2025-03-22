document.addEventListener("DOMContentLoaded", function () {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  // Boot-up text to display
  const text = `Booting up...
[OK] Loading system...
[OK] Initializing components...
[OK] Starting services...
[OK] Mounting filesystems...
[OK] Starting network...
Welcome to My Website!`;

  let index = 0;

  // Typing effect function
  function type() {
    if (index < text.length) {
      bootText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed (100ms per character)
    } else {
      // Add a delay before switching to the main content
      setTimeout(() => {
        bootScreen.style.opacity = "0"; // Fade out boot screen
        setTimeout(() => {
          bootScreen.classList.add("hidden"); // Hide boot screen
          mainContent.classList.remove("hidden"); // Show main content
        }, 500); // Wait for fade-out to complete
      }, 2000); // Delay after typing finishes
    }
  }

  // Start the typing effect
  type();
});

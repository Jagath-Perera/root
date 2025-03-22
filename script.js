document.addEventListener("DOMContentLoaded", function () {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  if (!bootText || !bootScreen || !mainContent) {
    console.error("Missing required elements!");
    return;
  }

  const text = `Booting up...
[OK] Loading system...
[OK] Initializing components...
[OK] Starting services...
[OK] Mounting filesystems...
[OK] Starting network...
Welcome to My Website!`;

  let index = 0;

  function type() {
    if (index < text.length) {
      bootText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        bootScreen.style.opacity = "0";
        setTimeout(() => {
          bootScreen.style.display = "none"; // Ensures it's removed
          mainContent.style.display = "block"; // Make main content visible
        }, 500);
      }, 2000);
    }
  }

  type();
});

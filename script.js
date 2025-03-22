document.addEventListener("DOMContentLoaded", function () {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  if (!bootText || !bootScreen || !mainContent) {
    console.error("Missing required elements!");
    return;
  }

  // More detailed Linux-like boot sequence
  const bootMessages = [
    "Booting MyOS v1.0...",
    "[OK] Initializing BIOS...",
    "[OK] Checking CPU cores...",
    "[OK] Detecting RAM modules...",
    "[OK] Verifying disk drives...",
    "[OK] Mounting root filesystem...",
    "[OK] Checking filesystem integrity...",
    "[OK] Enabling swap memory...",
    "[OK] Loading kernel modules...",
    "[OK] Detecting hardware devices...",
    "[OK] Initializing network interfaces...",
    "[OK] Starting system logging service...",
    "[OK] Launching SSH daemon...",
    "[OK] Starting firewall (iptables)...",
    "[OK] Enabling security services...",
    "[OK] Checking for updates...",
    "[OK] Loading desktop environment...",
    "[OK] Running startup scripts...",
    "[OK] Starting background services...",
    "[OK] Initializing graphical interface...",
    "Welcome to MyOS v1.0!"
  ];

  let index = 0;

  function typeMessage() {
    if (index < bootMessages.length) {
      bootText.textContent += bootMessages[index] + "\n";
      index++;
      setTimeout(typeMessage, Math.random() * 100 + 30); // Faster typing speed
    } else {
      setTimeout(() => {
        bootScreen.style.opacity = "0"; // Fade out
        setTimeout(() => {
          bootScreen.style.display = "none"; // Hide boot screen
          mainContent.style.display = "block"; // Show main content
        }, 300);
      }, 1000);
    }
  }

  typeMessage();
});

document.addEventListener("DOMContentLoaded", function () {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  if (!bootText || !bootScreen || !mainContent) {
    console.error("Missing required elements!");
    return;
  }

  // Linux-like Boot Messages (More Realistic)
  const bootMessages = [
    "Booting MyOS v1.0...",
    "[OK] Loading BIOS...",
    "[OK] Checking CPU cores...",
    "[OK] Detecting RAM modules...",
    "[OK] Initializing PCI devices...",
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
    "[OK] Checking for software updates...",
    "[OK] Starting system scheduler...",
    "[OK] Running startup scripts...",
    "[OK] Initializing graphical interface...",
    "[OK] Loading user session...",
    "Welcome to MyOS v1.0!"
  ];

  let index = 0;

  function typeMessage() {
    if (index < bootMessages.length) {
      bootText.textContent += bootMessages[index] + "\n";
      index++;
      setTimeout(typeMessage, Math.random() * 80 + 20); // Fast booting speed
    } else {
      setTimeout(() => {
        bootScreen.style.opacity = "0"; // Fade out
        setTimeout(() => {
          bootScreen.style.display = "none"; // Hide boot screen
          mainContent.style.display = "block"; // Show main content
        }, 300);
      }, 500);
    }
  }

  typeMessage();
});

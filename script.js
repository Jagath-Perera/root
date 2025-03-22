document.addEventListener("DOMContentLoaded", function () {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  // Boot-up text to display
  const bootMessages = [
    "Booting MyOS v1.0...",
    "[OK] Loading BIOS...",
    "[OK] Initializing CPU cores...",
    "[OK] Detecting RAM modules...",
    "[OK] Initializing system bus...",
    "[OK] Verifying storage devices...",
    "[OK] Mounting root filesystem...",
    "[OK] Checking filesystem integrity...",
    "[OK] Enabling swap memory...",
    "[OK] Loading kernel modules...",
    "[OK] Detecting hardware devices...",
    "[OK] Initializing PCI and USB devices...",
    "[OK] Starting system logging service...",
    "[OK] Launching SSH daemon...",
    "[OK] Configuring firewall rules...",
    "[OK] Checking security policies...",
    "[OK] Starting background services...",
    "[OK] Running startup scripts...",
    "[OK] Initializing graphical environment...",
    "[OK] Starting display manager...",
    "[OK] Loading user session...",
    "[OK] Initializing network interfaces...",
    "[OK] Configuring static IP address...",
    "[OK] Starting network manager...",
    "[OK] Testing network connectivity...",
    "[OK] Mounting additional filesystems...",
    "[OK] Starting NTP service for time synchronization...",
    "[OK] Configuring system locales...",
    "[OK] Enabling AppArmor profiles...",
    "[OK] Starting system monitoring services...",
    "[OK] Starting systemd-journald...",
    "[OK] Starting cron daemon for scheduled tasks...",
    "[OK] Checking disk health...",
    "[OK] Running file system checks...",
    "[OK] Starting user session services...",
    "[OK] Loading system-wide applications...",
    "[OK] Initializing user environment...",
    "[OK] Starting audio subsystem...",
    "[OK] Starting Bluetooth service...",
    "[OK] Initializing touchpad and keyboard drivers...",
    "[OK] Enabling high-performance mode...",
    "[OK] Enabling system watchdog...",
    "[OK] Starting system security audit service...",
    "[OK] Launching cloud sync service...",
    "[OK] Starting backup service...",
    "[OK] Starting print spooler service...",
    "[OK] Launching system update manager...",
    "[OK] Loading firewall rules...",
    "[OK] Running post-boot optimizations...",
    "Welcome to MyOS v1.0!"
  ];

  const loginMessages = [
    "login: root", 
    "Password:", 
  ];

  let index = 0;
  let password = "";
  
  // Function to type messages
  function typeMessage(messages, callback) {
    if (index < messages.length) {
      bootText.textContent += messages[index] + "\n";
      index++;

      // Scroll down after every message
      bootScreen.scrollTop = bootScreen.scrollHeight; // Ensure scrolling to the bottom

      // Random interval for next message (0 to 1500ms)
      const randomInterval = Math.floor(Math.random() * 1501); // Random interval between 0ms and 1500ms
      setTimeout(() => typeMessage(messages, callback), randomInterval); // Apply the random interval to next message
    } else {
      if (callback) callback();
    }
  }

  // Function to simulate password input with * characters
  function simulatePasswordInput(passwordInput, callback) {
    let passwordIndex = 0;
    let displayedPassword = "";
    
    function typePassword() {
      if (passwordIndex < passwordInput.length) {
        displayedPassword += "*"; // Add * for each password character
        bootText.textContent = bootText.textContent.replace("Password:", "Password: " + displayedPassword); // Update the password display
        passwordIndex++;

        // Scroll down after every update
        bootScreen.scrollTop = bootScreen.scrollHeight;

        // Simulate typing speed
        const randomInterval = Math.floor(Math.random() * 1501); // Random interval between 0ms and 1500ms
        setTimeout(typePassword, randomInterval); // Apply the random interval to each character
      } else {
        if (callback) callback(); // Call callback after password is fully typed
      }
    }

    typePassword();
  }

  // Function to show boot messages and then login sequence
  function startBootSequence() {
    typeMessage(bootMessages, () => {
      setTimeout(() => {
        // Start login sequence after a delay
        bootText.textContent = ""; // Clear the previous text
        index = 0; // Reset index for login sequence
        typeMessage(loginMessages, () => {
          // Simulate password input
          simulatePasswordInput("rootpassword", () => {
            setTimeout(() => {
              // After login sequence is complete, fade out boot screen and show main content
              setTimeout(() => {
                bootScreen.style.opacity = "0"; // Fade out boot screen
                setTimeout(() => {
                  bootScreen.style.display = "none"; // Hide boot screen
                  mainContent.style.display = "block"; // Show main content
                }, 300); // Wait for fade-out to complete
              }, 1000); // Delay before showing main content
            }, 500); // Short delay before showing main content after login
          });
        });
      }, 1000); // Wait for a short delay before starting login
    });
  }

  // Start the boot sequence
  startBootSequence();
});

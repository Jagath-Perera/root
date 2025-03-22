document.addEventListener("DOMContentLoaded", function () {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainContent = document.getElementById("main-content");

  if (!bootText || !bootScreen || !mainContent) {
    console.error("Missing required elements!");
    return;
  }

  // More realistic Linux boot sequence messages
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

  let index = 0;

 function typeMessage() {
  if (index < bootMessages.length) {
    bootText.textContent += bootMessages[index] + "\n";
    index++;
    setTimeout(typeMessage, Math.random() * 150 + 50); // Slower booting speed (50-150ms per line)
  } else {
    setTimeout(() => {
      bootScreen.style.opacity = "0"; // Fade out
      setTimeout(() => {
        bootScreen.style.display = "none"; // Hide boot screen
        mainContent.style.display = "block"; // Show main content
      }, 300);
    }, 1000); // Slightly longer delay before switching
  }
}
  
  typeMessage();
});

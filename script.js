const roles = [
    "Aspiring Full Stack Developer",
    "Blockchain Explorer",
    "Web Developer",
    "Tech Enthusiast"
  ];
  
  let index = 0;
  let charIndex = 0;
  let typingElement = document.getElementById("typing");
  
  function type() {
    if (charIndex < roles[index].length) {
      typingElement.textContent += roles[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = roles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      index = (index + 1) % roles.length;
      setTimeout(type, 500);
    }
  }
  function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }
  // 🎉 Confetti when page loads
window.onload = function () {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
  };
  document.addEventListener("DOMContentLoaded", type);
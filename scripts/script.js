// script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.link'));
  let currentIndex = -1; // No link focused initially

  // Focus the first link when user starts navigating
  const handleFirstInput = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      // Start from first link if no link is focused
      if (currentIndex === -1) currentIndex = 0;
      focusCurrentLink();
    }
  };

  // Handle arrow key navigation
  const handleKeydown = (e) => {
    if (!['ArrowUp', 'ArrowDown', 'Enter'].includes(e.key)) return;

    const index = links.indexOf(document.activeElement);
    
    // If one of the links is focused, handle navigation
    if (index !== -1) {
      e.preventDefault();

      if (e.key === 'ArrowDown') {
        const next = (index + 1) % links.length;
        links[next].focus();
      } else if (e.key === 'ArrowUp') {
        const prev = (index - 1 + links.length) % links.length;
        links[prev].focus();
      } else if (e.key === 'Enter') {
        document.activeElement.click();
      }
    }
  };

  // Apply focus styling
  function focusCurrentLink() {
    if (links[currentIndex]) {
      links[currentIndex].focus();
    }
  }

  // Add event listeners
  document.addEventListener('keydown', handleFirstInput);
  document.addEventListener('keydown', handleKeydown);

  // Optional: Visual focus indicator (ensure CSS handles :focus)
  links.forEach(link => {
    link.addEventListener('focus', () => {
      currentIndex = links.indexOf(link);
    });
  });
});
/*
const  comingSoon () => {document.querySelector('.link.website').addEventListener('hover', () => {
  document.querySelector('.link.website').innerHTML = `Coming Soon!`;
});
}

*/

var btn = document.querySelector("button");

btn.addEventListener("mouseover", function() {
  this.textContent = "Coming soon!";
})
btn.addEventListener("mouseout", function() {
  this.innerHTML = '<span class="iconify" data-icon="bi:globe"></span>' + " My Website";
})
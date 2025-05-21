// Mobile interaction helper
// This script adds mobile-specific touch interactions and fixes various mobile issues

document.addEventListener('DOMContentLoaded', function() {
  // Detect if device is touch-enabled
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Fix for 100vh issue on mobile browsers (especially iOS)
    function setMobileHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set the height initially and on resize
    setMobileHeight();
    window.addEventListener('resize', setMobileHeight);
    
    // Fix for iOS input focus causing viewport shift
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        // Add a slight delay to let the keyboard appear first
        setTimeout(() => {
          // Scroll the input into view properly
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      });
    });
    
    // Add active state class for better touch feedback
    const interactiveElements = document.querySelectorAll('a, button, .btn, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.classList.add('touch-active');
      });
      
      element.addEventListener('touchend', () => {
        setTimeout(() => {
          element.classList.remove('touch-active');
        }, 200);
      });
      
      element.addEventListener('touchcancel', () => {
        element.classList.remove('touch-active');
      });
    });
    
    // Handle mobile orientation changes
    window.addEventListener('orientationchange', () => {
      // Reset scroll position issues that may occur on orientation change
      setTimeout(() => {
        window.scrollTo(0, window.scrollY + 1);
        window.scrollTo(0, window.scrollY - 1);
      }, 100);
    });
  }
});

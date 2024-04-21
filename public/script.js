// Function to hide the cookie consent element
function hideCookieConsent() {
    cookieConsent.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function () {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
  
      mobileMenuButton.addEventListener('click', function () {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
      });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
      link.addEventListener('click', function () {
          // Remove the 'bg-gray-900' class from all links
          links.forEach(l => l.classList.remove('bg-gray-900'));
          // Add the 'bg-gray-900' class to the clicked link
          this.classList.add('bg-gray-900');
      });
      });
  });
  
  // Get the cookie consent element
  const cookieConsent = document.querySelector('.bg-gray-100.fixed');
  
  // Get the accept and decline buttons
  const acceptButton = cookieConsent.querySelector('.bg-blue-500');
  const declineButton = cookieConsent.querySelector('.bg-gray-300');
  
  // Add event listeners to the accept and decline buttons
  acceptButton.addEventListener('click', hideCookieConsent);
  declineButton.addEventListener('click', hideCookieConsent);
  
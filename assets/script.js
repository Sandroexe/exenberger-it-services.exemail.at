// ============================================
// EXENBERGER IT SERVICES - HAUPTSKRIPT
// Mobile-optimiert
// ============================================

/**
 * Lädt die Konfigurationsdatei und gibt das Konfigurationsobjekt zurück
 */
async function loadConfig() {
  try {
    const response = await fetch('/config.json');
    const config = await response.json();
    return config;
  } catch (error) {
    console.error('Fehler beim Laden der Konfiguration:', error);
    return null;
  }
}

/**
 * Generiert die Navigation basierend auf config.json
 */
async function initializeNavigation() {
  const config = await loadConfig();
  if (!config) return;

  const navContainer = document.querySelector('nav');
  if (!navContainer) return;

  config.navigation.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    navContainer.appendChild(a);
  });
}

/**
 * Generiert den Footer basierend auf config.json
 */
async function initializeFooter() {
  const config = await loadConfig();
  if (!config) return;

  const footerContainer = document.querySelector('.footer-container');
  if (!footerContainer) return;

  const footerHTML = `
    <div class="footer-content">
      <div class="footer-section">
        <h4>Kontakt</h4>
        <p><strong>${config.company.name}</strong></p>
        <p>${config.company.address.street}<br>
           ${config.company.address.zip} ${config.company.address.city}</p>
        <p><a href="mailto:${config.company.email}">${config.company.email}</a></p>
        <p><a href="tel:${config.company.phone}">${config.company.phone}</a></p>
      </div>
      <div class="footer-section">
        <h4>Navigation</h4>
        <a href="index.html">Startseite</a>
        <a href="index.html#about">Über Uns</a>
        <a href="index.html#services">Services</a>
        <a href="index.html#contact">Kontakt</a>
      </div>
      <div class="footer-section">
        <h4>Rechtliches</h4>
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">${config.footer.copyright}</p>
    </div>
  `;
  
  footerContainer.innerHTML = footerHTML;
}

/**
 * Setzt den Seitentitel und Meta-Daten
 */
async function setPageMetadata(pageTitle) {
  const config = await loadConfig();
  if (!config) return;

  document.title = pageTitle + ' | ' + config.company.name;
  document.documentElement.lang = config.website.language;
}

/**
 * Initialisiert die Seite beim Laden
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeFooter();
  
  // Smooth scroll für mobile Geräte
  if (window.innerWidth < 768) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
});

// Prevent zoom on double-tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

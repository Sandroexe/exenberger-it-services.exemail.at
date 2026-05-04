// ============================================
// EXENBERGER IT SERVICES - HAUPTSKRIPT
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

  // Erstelle die Footer-Struktur
  const footerHTML = `
    <div class="footer-content">
      <div class="footer-section">
        <h4>Kontakt</h4>
        <p><strong>${config.company.name}</strong></p>
        <p>${config.company.address.street}<br>
           ${config.company.address.zip} ${config.company.address.city}<br>
           ${config.company.address.country}</p>
        <p>Email: <a href="mailto:${config.company.email}">${config.company.email}</a></p>
        <p>Tel: <a href="tel:${config.company.phone}">${config.company.phone}</a></p>
      </div>
      <div class="footer-section">
        <h4>Unternehmen</h4>
        <a href="index.html">Startseite</a>
        <a href="#about">Über Uns</a>
        <a href="#services">Services</a>
      </div>
      <div class="footer-section">
        <h4>Rechtliches</h4>
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutzerklärung</a>
      </div>
      <div class="footer-section">
        <h4>Folgen Sie uns</h4>
        ${config.footer.socialLinks.map(link => 
          `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.platform}</a>`
        ).join('')}
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
});

/**
 * Glatte Scroll-Animation
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

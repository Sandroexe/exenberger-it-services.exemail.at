# Exenberger IT Services Webseite

Professionelle Website für Exenberger IT Services mit modernem, responsivem Design.

## 📁 Struktur

```
├── index.html              # Startseite
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── config.json             # Zentrale Konfigurationsdatei (CSV-ähnlich)
├── assets/
│   ├── style.css           # Einheitliches Design und Styling
│   └── script.js           # JavaScript für Navigation und Footer
└── README.md               # Diese Datei
```

## 🎨 Design-System

Das Projekt nutzt ein **zentrales Konfigurationssystem** basierend auf `config.json`:

### Konfiguration (config.json)

Die `config.json` enthält alle wichtigen Informationen:

- **Unternehmensangaben**: Name, Beschreibung, Kontaktdaten, Adresse
- **Website-Metadaten**: Titel, Autor, Sprache
- **Design-Variablen**: Farben, Schriftarten, Abstände
- **Navigation**: Links und Menüstruktur
- **Footer**: Copyright und Social Media Links

### CSS (assets/style.css)

- **CSS-Variablen** für konsistente Farben und Abstände
- **Mobile-First** responsive Design
- **BEM-ähnliche** Klassen-Struktur
- **Utility-Klassen** für häufig verwendete Stile
- Automatische Dark-Mode-Elemente (Header & Footer)

### JavaScript (assets/script.js)

- Lädt die `config.json` zentral
- Generiert Navigation dynamisch
- Erstellt Footer-Inhalte automatisch
- Setzt Seitentitel und Meta-Daten
- Implementiert glatte Scroll-Animation

## 🔧 Anpassung

### Unternehmensangaben ändern

Bearbeiten Sie `config.json`:

```json
"company": {
  "name": "Ihr Unternehmensname",
  "email": "ihre-email@example.com",
  "phone": "+49 (0) XXX XXXXXX",
  "address": {
    "street": "Ihre Straße X",
    "zip": "12345",
    "city": "Ihre Stadt",
    "country": "Deutschland"
  }
}
```

### Farben anpassen

Ändern Sie die Farben in `config.json` unter `design.colors`:

```json
"colors": {
  "primary": "#0052CC",
  "secondary": "#6C757D",
  ...
}
```

Oder direkt in `assets/style.css` unter `:root`:

```css
:root {
  --primary-color: #0052CC;
  --secondary-color: #6C757D;
  ...
}
```

### Navigation erweitern

Fügen Sie Links in `config.json` unter `navigation.links` hinzu:

```json
"links": [
  { "text": "Neue Seite", "href": "neue-seite.html" },
  ...
]
```

## 📱 Responsivität

Die Website ist vollständig responsive und passt sich an:

- 📱 Mobile Geräte (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🚀 Features

✅ **Professionelles Design**
- Modernes, sauberes Interface
- Konsistente Farbpalette
- Klare Typografie

✅ **Zentrale Konfiguration**
- Single Source of Truth für alle Inhalte
- Einfache Verwaltung von Angaben
- Automatische Aktualisierung auf allen Seiten

✅ **Rechtliche Compliance**
- Impressum (§ 5 TMG)
- Datenschutzerklärung (DSGVO)
- Dynamisch generierte Kontaktangaben

✅ **Benutzerfreundlichkeit**
- Intuitive Navigation
- Glatte Scroll-Animationen
- Kontaktformular auf der Startseite

✅ **SEO-Optimiert**
- Semantisches HTML
- Meta-Tags
- Strukturierte Inhalte

## 📝 Lizenz

Copyright © 2026 Exenberger IT Services. Alle Rechte vorbehalten.

## 💡 Tipps

- Ersetzen Sie die Dummy-Inhalte in den Service-Karten
- Integrieren Sie ein Email-Backend für das Kontaktformular
- Erweitern Sie die Seite mit zusätzlichen Service-Seiten
- Fügen Sie Blog-Funktionalität hinzu
- Implementieren Sie Analytics (Google Analytics, Matomo, etc.)

---

**Erstellt mit ❤️ für professionelle IT-Services**

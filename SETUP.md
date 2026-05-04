# Exenberger IT Services - Setup-Anleitung

## 🚀 Kontaktformular konfigurieren

Das Kontaktformular nutzt **Formspree** - einen kostenlosen, DSGVO-konformen Email-Service.

### Schritt 1: Formspree Account erstellen

1. Gehe zu https://formspree.io
2. Melde dich mit einer Email an
3. Klicke auf **"Create new form"**
4. Wähle **Email** als Formtyp
5. Gib deine Email ein: **sandro@exemail.at**
6. Formspree gibt dir eine **Form ID** (z.B. `f_abc123xyz`)

### Schritt 2: Form ID in die Website eintragen

**Option A: Automatischer Ansatz**

Öffne `assets/contact-form.js` und ersetze Zeile 4:

```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
```

Ersetze `YOUR_FORMSPREE_ID` mit deiner ID, z.B.:

```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbjqwqln';
```

**Option B: Über config.json**

Bearbeite `config.json` und aktualisiere:

```json
"contact": {
  "formService": "formspree",
  "formspreeId": "YOUR_FORM_ID_HERE"
}
```

### Schritt 3: Website testen

1. Gehe auf die Webseite
2. Scrolle zum Kontaktbereich
3. Fülle das Formular aus und sende es ab
4. **Wichtig:** Du wirst einen Bestätigungs-Link per Email bekommen (von Formspree)
5. Klicke den Link, um das Formular zu aktivieren
6. Ab jetzt funktioniert es!

## 📋 Was wurde aktualisiert?

### ✅ Kontaktdaten
- Email: **sandro@exemail.at**
- Telefon: **+43 676 740 6799**
- Adresse: **Schwoich 6334, Österreich**

Alle Daten sind in **config.json** zentral gespeichert und überall aktualisiert.

### ✅ Rechtliche Compliance

**Österreich-spezifisch angepasst:**
- Impressum nach **ECG (E-Commerce-Gesetz)** & **Mediengesetz**
- Datenschutz nach **DSGVO + österreichisches Recht**
- Verweis auf **Österreichische Datenschutzbehörde**
- Formspree mit **EU-Standard-Datenschutzklauseln**

### ✅ Kontaktformular Features

**Sichere Verarbeitung via Formspree:**
- DSGVO-konform
- Keine lokale Speicherung sensibler Daten
- Automatische Löschung nach 7 Tagen (bei Formspree)
- SSL-verschlüsselt
- Spam-Schutz integriert

**Nutzer-Experience:**
- Checkbox für Datenschutz-Zustimmung (Pflicht)
- Fehler/Erfolgs-Meldungen
- Loading-Status beim Versenden
- Optionale Telefonnummer
- Betreff-Feld

### ✅ Direkte Kontaktmöglichkeiten

Auf der Kontakt-Seite gibt es auch:
- Email-Link: sandro@exemail.at
- Telefon-Link: +43 676 740 6799

## 🔒 Sicherheit & Datenschutz

### Was passiert mit den Daten?

1. **Nutzer füllt Formular aus**
   ↓
2. **Formspree empfängt Daten** (verschlüsselt via HTTPS)
   ↓
3. **Email an sandro@exemail.at versendet**
   ↓
4. **Formspree löscht Daten nach 7 Tagen automatisch**

### Rechtliche Grundlagen

✅ **Art. 6 Abs. 1 lit. a DSGVO** - Einwilligung (Checkbox)  
✅ **Art. 6 Abs. 1 lit. f DSGVO** - Berechtigtes Interesse  
✅ **Art. 28 DSGVO** - Formspree ist Auftragsverarbeiter  
✅ **EU-Standard-Datenschutzklauseln** - für Datentransfer  

## 🆘 Fehlerbehebung

### Formular sendet nicht ab?

1. Prüfe die **Form ID** in `contact-form.js`
2. Hast du den **Bestätigungs-Link** von Formspree aktiviert?
3. Schau in der **Browserkonsole** (F12) auf Fehler

### Email kommt nicht an?

1. Prüfe Spam-Ordner
2. Ist `sandro@exemail.at` korrekt?
3. Teste direkt: mailto:sandro@exemail.at

### Formspree-Link aktivieren?

1. Du bekommst eine Email von Formspree
2. Klick auf den Bestätigungs-Link
3. Formular ist dann aktiv ✓

## 📱 GitHub Pages Hosting

Die Website läuft auf **GitHub Pages** (kostenlos):

1. Gehe zu **Settings** → **Pages**
2. **Source:** Deploy from branch
3. **Branch:** main / folder: / (root)
4. **Custom domain:** (optional)

## 📧 Support & Kontakt

Bei Fragen oder Problemen:

- **Email:** sandro@exemail.at
- **Telefon:** +43 676 740 6799
- **Location:** Schwoich, Tirol, Österreich

---

**Hinweis:** Alle persönlichen Daten sind DSGVO-konform gespeichert und werden nicht an Dritte weitergegeben.

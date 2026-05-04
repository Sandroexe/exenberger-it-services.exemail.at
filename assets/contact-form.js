/**
 * KONTAKTFORMULAR HANDLER
 * Sendet Nachrichten via Formspree (kostenlos, DSGVO-konform)
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const messageDiv = document.getElementById('form-message');
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet...';
        messageDiv.style.display = 'none';

        const formData = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            messageDiv.style.display = 'block';
            
            if (response.ok) {
                messageDiv.style.backgroundColor = '#d4edda';
                messageDiv.style.color = '#155724';
                messageDiv.style.borderLeft = '4px solid #28A745';
                messageDiv.innerHTML = '<strong>Erfolg!</strong> Ihre Nachricht wurde versendet. Wir werden uns bald bei Ihnen melden.';
                form.reset();
                submitBtn.textContent = 'Nachricht absenden';
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.borderLeft = '4px solid #DC3545';
            messageDiv.innerHTML = '<strong>Fehler!</strong> Die Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Nachricht absenden';
        }
    });
});

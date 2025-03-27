// Funzione per gestire il cambio dei checkbox
function handleCheckboxChange(event) {
    const checkbox = event.target;  // Il checkbox selezionato
    const gestore = checkbox.getAttribute('data-gestore');  // Recupera il nome del gestore
    const linkInput = document.getElementById('linkToCopy');  // Recupera il campo di input per il link
    const copyLinkContainer = document.getElementById('copyLinkContainer');  // Il contenitore per il link

    // Verifica se il checkbox è selezionato
    if (checkbox.checked) {
        const allCheckboxes = document.querySelectorAll('.userCheckbox');
        allCheckboxes.forEach(cb => {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    }
    
    if (checkbox.checked) {
        // Crea il link e inseriscilo nel campo di input
        const link = `https://www.tinnvision.cloud/integra?gestore=${gestore}`;
        linkInput.value = link;  // Imposta il valore del campo di input con il link

        // Mostra il bottone e il campo di input del link
        copyLinkContainer.style.display = 'block';
    } else {
        // Se il checkbox viene deselezionato, nascondi il contenitore del link
        copyLinkContainer.style.display = 'none';
    }
}

// Aggiungi l'evento a tutti i checkbox
function addCheckboxEventListeners() {
    const checkboxes = document.querySelectorAll('.userCheckbox');  // Trova tutti i checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);  // Aggiungi l'evento 'change'
    });
}

// Quando la pagina è pronta, aggiungi gli event listeners ai checkbox
document.addEventListener('DOMContentLoaded', addCheckboxEventListeners);

// Funzione per filtrare la tabella mentre si scrive
function filterTable() {
    const input = document.getElementById("searchInput");  // Ottieni l'input di ricerca
    const filter = input.value.toUpperCase();  // Ottieni il valore della ricerca e convertilo in maiuscolo
    const table = document.getElementById("userTable");  // Ottieni il corpo della tabella
    const rows = table.getElementsByTagName("tr");  // Ottieni tutte le righe della tabella (compresa l'intestazione)

    // Cicla su tutte le righe della tabella, saltando la prima che è l'intestazione
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        
        // Assicurati che la riga abbia celle, quindi non processare l'intestazione
        if (cells.length > 0) {
            const gestoreCell = cells[3]; // La colonna gestore è la seconda (indice 1)

            // Verifica se la cella esiste
            if (gestoreCell) {
                const txtValue = gestoreCell.textContent || gestoreCell.innerText;  // Ottieni il testo della cella
                
                // Mostra o nascondi la riga in base al contenuto della cella
                rows[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
            }
        }
    }
}

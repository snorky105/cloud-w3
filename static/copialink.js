// Funzione per generare il link
function generateLink(gestore) {
    const baseUrl = "https://www.tinnvision.cloud/integra?gestore=";
    return baseUrl + encodeURIComponent(gestore); // Crea il link completo
}
// Funzione per copiare il link
function copyLink() {
    var copyText = document.getElementById("linkToCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Per dispositivi mobili

    document.execCommand("copy");  // Copia il testo
    alert("Link copiato: " + copyText.value);  // Messaggio di conferma
}

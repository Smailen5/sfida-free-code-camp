
console.log('Script caricato con successo!');

// alert(`Ciao, una volta inseriti i dati all'interno del form puoi vederli stampati in console, per utilizzare gli strumenti da sviluppatori premi F12 o click destro e seleziona ispeziona`)

function handleSubmit(event) {
    console.log('Funzione handleSubmit chiamata!'); // debug per capire se la funzione viene chiamata correttamente
    event.preventDefault(); // Evita l'invio del modulo
    const formData = new FormData(event.target); //variabile che recupererà i dati del form
    const formDataObject = {}; // variabile che conterrà i dati del form come oggetto

    formData.forEach((value, key) => { // forEach per andare a recuperare tutti i valori del form e inserirli dentro alla variabile oggetto
        formDataObject[key] = value;
    });

    console.table(formDataObject);
}
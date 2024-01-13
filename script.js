
console.log('Script caricato con successo!');
alert(`Ciao, una volta inseriti i dati all'interno del form puoi vederli stampati in console,
per utilizzare gli strumenti da sviluppatori premi F12 o click destro e seleziona ispeziona`)

function handleSubmit(event) {
    console.log('Funzione handleSubmit chiamata!');
    event.preventDefault(); // Evita l'invio del modulo
    const formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    console.table(formDataObject);
}
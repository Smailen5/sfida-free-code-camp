
console.log('Script caricato con successo!');

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
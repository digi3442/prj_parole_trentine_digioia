document.getElementById('searchBar').addEventListener('keyup', function() {
    let input = this.value.toLowerCase();
    let lista = document.getElementById('listaElementi').getElementsByTagName('li');
    
    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        if (elemento.textContent.toLowerCase().includes(input)) {
            elemento.style.display = "";
        } else {
            elemento.style.display = "none";
        }
    }
});

function eseguiRicerca() {
    alert("Ricerca per: " + document.getElementById('searchBar').value);
}

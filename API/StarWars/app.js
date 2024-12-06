async function fetchAllPlanets() {
    let url = "https://swapi.dev/api/planets/";
    let allPlanets = [];

    while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allPlanets = allPlanets.concat(data.results);
        url = data.next;  // Passe à la page suivante
    }

    return allPlanets;
}

// Appel de la fonction pour afficher les résultats
fetchAllPlanets().then(planets => console.log(planets));

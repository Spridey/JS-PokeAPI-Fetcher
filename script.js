let numMons = 10;
let offset = 151;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${numMons}&offset=${offset}`;

async function fetchPokemon() {
    const response = await fetch(url);
    const data = await response.json();
    outputPokemon(data);
}

function outputPokemon(data){
    console.log("outputting pokemon...")
    const section = document.querySelector("section");
    const myArticle = document.createElement("article");
    for (const mon of data.results){
        myArticle.innerHTML += `
        <h2>Name: <a href="${mon.url}">${mon.name}</a></h2>
        
        `;
    }
    section.appendChild(myArticle);
}

fetchPokemon();
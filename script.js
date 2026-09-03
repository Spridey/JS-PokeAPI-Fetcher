let numMons = 10;
let offset = 151;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${numMons}&offset=${offset}`;

async function fetchAllPokemon() {
    const response = await fetch(url);
    const data = await response.json();
    outputPokemonList(data);
}

async function fetchPokemon(mon) {
    const response = await fetch(mon.url);
    const data = await response.json();
    const outputHeader = document.querySelector(`#${mon.name}`);
    let pokemonOutput = document.createElement("p");

    
    pokemonOutput.innerHTML = `
    <img src="${data.sprites.front_default}">
    `;

    outputHeader.appendChild(pokemonOutput);
}

function outputPokemonList(data){
    console.log("outputting pokemon...");
    const section = document.querySelector("section");
    const myArticle = document.createElement("article");
    for (const mon of data.results){
        myArticle.innerHTML += `
        <h2 id = "${mon.name}">Name: <a href="${mon.url}">${mon.name}</a></h2>
        
        `;
        let button = document.createElement("button");
        button.textContent = `Show ${mon.name} info`;
        button.addEventListener("click", fetchPokemon(`${mon.url}`));

        myArticle.appendChild(button);
        fetchPokemon(mon);

    }
    section.appendChild(myArticle);
}

fetchAllPokemon();
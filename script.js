let numMons = 10;
let offset = 151;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${numMons}&offset=${offset}`;

async function fetchAllPokemon() {
    const response = await fetch(url);
    const data = await response.json();
    outputPokemonList(data);
}

async function fetchPokemon(mon) {
    console.log(`Fetching data for ${mon.name}...`)
    const response = await fetch(mon.url);
    const data = await response.json();
    const outputHeader = document.querySelector(`#${mon.name}`);
    let pokemonOutput = document.createElement("p");

    
    pokemonOutput.innerHTML = `
    <img src="${data.sprites.front_default}">
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
    <p>Type: ${data.types[0].type.name}</p>
    `;

    outputHeader.appendChild(pokemonOutput);
}

function outputPokemonList(data) {
    console.log("outputting pokemon...");

    const section = document.querySelector("section");
    const myArticle = document.createElement("article");

    for (const mon of data.results) {

        const heading = document.createElement("h2");
        heading.id = mon.name;
        heading.innerHTML = `
            Name: <a href="${mon.url}">${mon.name}</a>
        `;

        const button = document.createElement("button");
        button.textContent = `Show ${mon.name} info`;

        button.addEventListener("click", () => {
            fetchPokemon(mon);
            button.disabled = true;
        })

        myArticle.appendChild(heading);
        myArticle.appendChild(button);
    }

    section.appendChild(myArticle);
}

fetchAllPokemon();
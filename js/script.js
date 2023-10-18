const pokemonname = document.querySelector('.pokemon_name');
const pokemonnumber = document.querySelector('.pokemon_number');
const pokemonimage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('#input_search');
const buttonprev = document.querySelector('.btn-prev');
const buttonnext = document.querySelector('.btn-next');

let searchpokemon = 1;

const fetchpokemon = async (pokemon) => {
    const apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}
`);
    const data = await apiresponse.json();
    return data;
}

const renderpokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);

    input.value = "";
    input.placeholder = data.id + " - " + data.name;
    pokemonimage.src = data.sprites.versions['generation-v']['black-white'].animated['front_default'];
    searchpokemon = data.id
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderpokemon(input.value.toLowerCase())
});

buttonprev.addEventListener('click', () =>{
    if (searchpokemon > 1){
    searchpokemon -= 1;
    renderpokemon(searchpokemon);
    }
});

buttonnext.addEventListener('click', () =>{
    searchpokemon += 1;
    renderpokemon(searchpokemon);
});

renderpokemon(searchpokemon);

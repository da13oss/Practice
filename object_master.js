const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//Objects where the id is evenly divisible by 3:
//const divisibleByThree = pokemon.filter(p => p.id % 3 === 0);
//console.log(divisibleByThree);

//Array of Pokemon objects that are firetype:
//const fireTypePokemon = pokemon.filter(p => p.types.includes("fire"));
//console.log(fireTypePokemon);

//More than one type:
//const multipleTypesPokemon = pokemon.filter(p => p.types.length > 1);
//console.log(multipleTypesPokemon);

//Names of the Pokémon:
//const pokemonNames = pokemon.map(p => p.name);
//console.log(pokemonNames);

//Id greater than 99:
//const namesWithIdGreaterThan99 = pokemon.filter(p => p.id > 99).map(p => p.name);
//console.log(namesWithIdGreaterThan99);

//Only type is poison:
//const poisonOnlyPokemon = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison").map(p => p.name);
//console.log(poisonOnlyPokemon);

//Whose second type is "flying":
//const firstTypeIfFlyingSecond = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
//console.log(firstTypeIfFlyingSecond);

//Count of the number of Pokémon that are "normal" type:
//const normalTypeCount = pokemon.filter(p => p.types.includes("normal")).length;
//console.log(normalTypeCount);

//All Pokémon except id of 148:
//const withoutId148 = pokemon.filter(p => p.id !== 148);
//console.log(withoutId148);

//All Pokémon, and for Pokémon with id 35, replacing "normal" with "fairy":
const updatedPokemon = pokemon.map(p => 
    p.id === 35 ? { ...p, types: p.types.map(type => type === "normal" ? "fairy" : type) } : p
);
console.log(updatedPokemon);


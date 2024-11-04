import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
                setPokemon(response.data.results);
                setFilteredPokemon(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        fetchPokemon();
    }, []);

    const handleSearch = () => {
        const filtered = pokemon.filter(poke =>
            poke.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPokemon(filtered);
    };

    return (
        <div>
            <h1>Pokemon API</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Search Pokémon"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <ul>
                {filteredPokemon.map((poke, index) => (
                    <li key={index}>{poke.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
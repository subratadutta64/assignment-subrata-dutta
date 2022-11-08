function FormatData(data) {
  let pokemonStats = {};
  pokemonStats["name"] = data.name;
  pokemonStats["height"] = data.height;
  pokemonStats["weight"] = data.weight;
  pokemonStats["type"] = data.types[0].type.name;
  pokemonStats["picture"] =
    data.sprites.other["official-artwork"].front_default;
  return pokemonStats;
}

async function FetchPokemonDetails(searchedValue: string) {
  console.log(`searchedValue: ${searchedValue}`);
  let pokemonData = {};
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchedValue}`
    );
    const data = await response.json();
    pokemonData = FormatData(data);
  } catch (error) {
    console.log(error);
  }

  return pokemonData;
}

export { FetchPokemonDetails };

import { type PokemonDetails } from '../pokemon_store';

function formatData(data): PokemonDetails {
  const { name, height, weight, types, sprites } = data;
  return {
    name,
    height,
    weight,
    type: types[0].type.name,
    picture: sprites.other['official-artwork'].front_default,
  };
}

async function FetchPokemonDetails(
  searchedValue: string | undefined
): Promise<PokemonDetails | {}> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${String(searchedValue)}`
    );
    const data = await response.json();
    return formatData(data);
  } catch (error) {
    console.log(error);
    return {};
  }
}

export { FetchPokemonDetails };

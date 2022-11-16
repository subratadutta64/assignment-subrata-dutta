import React, { ReactElement, useState } from 'react';
import { SearchBar, type SearchBarProps } from '../../components/search_bar';
import { ShowPokemonDetails } from '../../components/pokemon_details';
import { FetchPokemonDetails } from '../../api_calls';
import { Spinner } from '../../components/spinner';
import { type PokemonDetails, pokemonInventory } from '../../pokemon_store';
import { Link } from '../../components/links';
import { useRouter } from 'next/router';

function SearchPage(): ReactElement {
  const [searchedValue, setSearchedValue] = useState<string>();
  const [pokemonData, setpokemonData] = useState<PokemonDetails | {}>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  console.log(searchedValue);

  async function search(e: React.MouseEvent): Promise<void> {
    e.preventDefault();
    setIsLoading(true);
    console.log(`Searched for ${String(searchedValue)}`);
    const data = await FetchPokemonDetails(searchedValue);
    setpokemonData(data);
    console.log(`API call Success ${String(data)}`);
    setIsLoading(false);
  }

  function capturePokemon(): void {
    pokemonInventory.capturedPokemons.forEach((pokemon) => {
      console.log({ ...pokemon });
    });
    console.log('*************HI*********');
    console.log(pokemonData);
    pokemonInventory.addPokemon(pokemonData);
    pokemonInventory.capturedPokemons.forEach((pokemon) => {
      console.log({ ...pokemon });
    });
  }

  async function redirectToInventory(): Promise<void> {
    await router.push('/inventory');
  }

  // props["updateSearchedValue"] = updateSearchedValue;
  // props['search'] = search;

  if (pokemonData != null) {
    console.log(pokemonData);
  }

  const searchProps: SearchBarProps = {
    updateSearchedValue: setSearchedValue,
    search,
  };
  const showPokemonDetailsProps = {
    params: pokemonData,
    onClick: capturePokemon,
    buttonText: 'Capture',
    disableButtonAfterClick: true,
  };
  const linkProps = {
    text: 'Wanna!! See your captured Pokemon.',
    link: 'Go Here in inventory',
    onClick: redirectToInventory,
  };
  return (
    <>
      <SearchBar {...searchProps} />
      {!isLoading && (pokemonData != null) && (
        <ShowPokemonDetails {...showPokemonDetailsProps} />
      )}
      {isLoading && <Spinner />}
      <Link {...linkProps} />
    </>
  );
}

export default SearchPage;

import React, { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import { SearchBar, type SearchBarProps } from '../../components/search_bar';
import { pokemonInventory } from '../../pokemon_store';
import { Link } from '../../components/links';
import {
  CapturedPokemon,
  type CapturedPokemonProps,
} from '../../components/pokemon_details';

function InventoryPage(): ReactElement {
  const [searchedValue, setSearchedValue] = useState<string>();
  const [sortingOrder, setSortingOrder] = useState<string>(
    'Newest to Oldest captured'
  );
  const router = useRouter();

  function search(e: React.MouseEvent): void {
    e.preventDefault();
  }

  async function redirectToSearch(): Promise<void> {
    await router.push('/search');
  }

  function releasePokemon(pokemonName: string): void {
    pokemonInventory.removePokemon(pokemonName);
    pokemonInventory.capturedPokemons.forEach((pokemon) => {
      console.log({ ...pokemon });
    });
  }

  const searchProps: SearchBarProps = {
    updateSearchedValue: setSearchedValue,
    search,
  };
  const linkProps = {
    text: 'Wanna!! Capture some new Pokemon.',
    link: 'Go Here to Search',
    onClick: redirectToSearch,
  };
  const CapturedPokemonProps: CapturedPokemonProps = {
    pokemonInventory,
    releasePokemon,
    defaultOrder: sortingOrder,
    changeOrder: setSortingOrder,
    prefixFilter: searchedValue,
  };
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <SearchBar {...searchProps} />
        <Link {...linkProps} />
        <CapturedPokemon {...CapturedPokemonProps} />
      </div>
    </div>
  );
}

export default InventoryPage;

import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { PokemonStore, type PokemonDetails } from '../../pokemon_store';
import { ShowPokemonDetails } from './pokemon_details';
import { observer } from 'mobx-react-lite';
import { Dropdown, type DropdownProps } from '../dropdown';

interface CapturedPokemonProps {
  pokemonInventory: PokemonStore;
  releasePokemon: (pokemonName: string) => void;
  defaultOrder: string;
  changeOrder: (newOrder: string) => void;
  prefixFilter?: string;
}

function arrangePokemon(
  capturedPokemonDetails: PokemonDetails[],
  defaultOrder: string
): void {
  switch (defaultOrder) {
    case 'Alphabetical':
      capturedPokemonDetails.sort((firstPokemon, secondPokemon) => {
        return firstPokemon.name <= secondPokemon.name ? -1 : 1;
      });
      break;
    case 'Reverse Alphabetical':
      capturedPokemonDetails.sort((firstPokemon, secondPokemon) => {
        return firstPokemon.name <= secondPokemon.name ? 1 : -1;
      });
      break;
    case 'Newest to Oldest captured':
      capturedPokemonDetails.reverse();
  }
}

const CapturedPokemon: FC<CapturedPokemonProps> = observer(
  ({
    pokemonInventory,
    releasePokemon,
    defaultOrder,
    changeOrder,
    prefixFilter = '',
  }) => {
    const capturedPokemonDetails: PokemonDetails[] =
      pokemonInventory.capturedPokemons
        .map((pokemon) => ({ ...pokemon }))
        .filter((pokemon) => pokemon.name.indexOf(prefixFilter) === 0);

    arrangePokemon(capturedPokemonDetails, defaultOrder);
    const capturedPokemonsView = capturedPokemonDetails.map((pokemon) => {
      const pokemonData = {
        params: pokemon,
        onClick: releasePokemon,
        buttonText: 'Release',
        disableButtonAfterClick: false,
      };
      console.log('Here----------');
      console.log({ ...pokemon });
      return <ShowPokemonDetails key={uuid()} {...pokemonData} />;
    });

    const DropdownProps: DropdownProps = {
      menuTitle: defaultOrder,
      dropdownList: [
        'Alphabetical',
        'Reverse Alphabetical',
        'Newest to Oldest captured',
        'Oldest to Newest captured',
      ],
      onClick: changeOrder,
    };
    return (
      <>
        {pokemonInventory.capturedPokemons.length > 0 && (
          <div className="flex flex-col space-y-1.5 mx-8 mb-8 pb-8 border-8 border-double border-stone-700 rounded-lg bg-gray-900">
            <div className="my-5 ml flex flex-row-reverse mr-8">
              <Dropdown {...DropdownProps} />
            </div>
            <div className="flex flex-col space-y-1.5 mx-8 mb-8 border-8 border border-stone-700 rounded-lg bg-slate-400">
              {capturedPokemonsView}
            </div>
          </div>
        )}
      </>
    );
  }
);

export { CapturedPokemon, type CapturedPokemonProps };

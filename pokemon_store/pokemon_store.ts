import { action, makeObservable, observable } from 'mobx';

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  type: string;
  picture: string;
}

class PokemonStore {
  capturedPokemons: PokemonDetails[] = [];

  constructor() {
    makeObservable(this, {
      capturedPokemons: observable,
      addPokemon: action,
      removePokemon: action,
    });
  }

  addPokemon(pokemon): void {
    if (
      this.capturedPokemons.find(
        (existingPokemon) => existingPokemon.name === pokemon.name
      ) == null
    ) {
      this.capturedPokemons.push(pokemon);
    }
  }

  removePokemon(name): void {
    const index = this.capturedPokemons.findIndex(
      (existingPokemon) => existingPokemon.name === name
    );
    if (index >= 0) {
      this.capturedPokemons.splice(index, 1);
    }
  }
}

const pokemonInventory = new PokemonStore();

export { PokemonStore, pokemonInventory, type PokemonDetails };

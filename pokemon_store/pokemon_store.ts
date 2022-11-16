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
    console.log(
      `__________IN INventory ${this.capturedPokemons.length}___________`
    );
    if (
      this.capturedPokemons.find(
        (existingPokemon) => existingPokemon.name === pokemon.name
      ) == null
    ) {
      this.capturedPokemons.push(pokemon);
    }
    for (let i = 0; i < this.capturedPokemons.length; i++) {
      console.log({ ...this.capturedPokemons[i] });
    }
    console.log('***********END***********');
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

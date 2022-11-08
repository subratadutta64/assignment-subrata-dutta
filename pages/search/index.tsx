import { SearchBar } from "../../components/search_bar";
import { ShowPokemonDetails } from "../../components/pokemon_details";
import { FetchPokemonDetails } from "../../api_calls";
import { useState } from "react";

function SearchPage() {
  const [searchedValue, setSearchedValue] = useState<string>();
  const [pokemonData, setpokemonData] = useState<any>();

  // useEffect=()=>{

  // }

  function updateSearchedValue(newValue) {
    setSearchedValue(newValue);
    // console.log(searchedValue);
  }

  console.log(searchedValue);
  let props = {};
  props["updateSearchedValue"] = updateSearchedValue;
  const searchBarComponent = SearchBar(props);

  async function search(e: any) {
    e.preventDefault();
    console.log(`Searched for ${searchedValue}`);
    const data = await FetchPokemonDetails(searchedValue);
    setpokemonData(data);
    console.log(data);
  }
  if (pokemonData) {
    console.log(pokemonData);
  }

  return (
    <div className="">
      <form onSubmit={search} className="my-4">
        {searchBarComponent}
      </form>
      {pokemonData && <ShowPokemonDetails props={pokemonData} />}
      {/* <div className="bg-mint text-mint fill-current">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
          alt="Pic of the author"
        />
        <img src="" alt="" />
      </div> */}
    </div>
  );
}

export default SearchPage;

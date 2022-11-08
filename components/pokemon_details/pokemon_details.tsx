const ShowPokemonDetails = ({ props }) => {
  console.log(`Comp creat:${props}`);
  let pokemonBasicInfo = [];
  Object.entries(props).forEach(([key, value]) => {
    console.log(key, value);
    if (key !== "picture") {
      let formattedKey = key[0].toUpperCase() + key.substring(1);
      pokemonBasicInfo.push(
        <li id={props.name}>
          {formattedKey}: {value}
        </li>
      );
    }
  });

  return (
    <div className="bg-gray-500 flex flex-row container mx-auto mt-10 h-auto w-5/6 border-2 border-black">
      <img
        className="bg-gray-800 my-2 mx-2 w-1/3 border-2 border-blue"
        src={props.picture}
        alt="Pokemon pic"
      />
      <ul className="bg-gray-300 grid content-evenly content-center flex flex-col justify-center my-2 mx-2 container border-2 border-blue text-4xl font-serif italic font-bold">
        {pokemonBasicInfo}
      </ul>
    </div>
  );
};

export { ShowPokemonDetails };

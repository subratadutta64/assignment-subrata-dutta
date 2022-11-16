import React, { FC, useState } from 'react';
import { Button, ButtonType } from '../button';
import { NotFound } from '../not_found';
import { Spinner } from '../spinner';
import { pokemonInventory, type PokemonDetails } from '../../pokemon_store';
import { v4 as uuid } from 'uuid';

interface ShowPokemonDetailsProps {
  params: PokemonDetails | {};
  onClick: (pokemonName?: string) => void;
  buttonText: string;
  disableButtonAfterClick: boolean;
}

const ShowPokemonDetails: FC<ShowPokemonDetailsProps> = ({
  params,
  onClick,
  buttonText,
  disableButtonAfterClick,
}) => {
  const [downloaded, setDownloaded] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(
    !(
      pokemonInventory.capturedPokemons.find(
        (pokemon) => pokemon.name === params.name
      ) == null
    )
  );

  const pokemonBasicInfo = Object.entries(params).map(([key, value]) => {
    console.log(key, value);
    if (key === 'picture') {
      return <></>;
    }
    const formattedDisplay: string = `${key[0].toUpperCase()}${key.substring(
      1
    )}: ${String(value)}`;
    return <li key={uuid()}>{formattedDisplay}</li>;
  });

  return (
    <div>
      {pokemonBasicInfo.length > 0 && (
        <div>
          <div className="bg-slate-800 flex flex-row container mx-auto mt-10 h-auto w-5/6 border-2">
            <div className="bg-slate-700 my-2 mx-2 w-1/2">
              {!downloaded && <Spinner />}
              <img
                src={params.picture.toString()}
                alt="Pokemon pic"
                onLoad={() => setDownloaded(true)}
              />
            </div>
            <ul className="bg-slate-300 grid content-evenly content-center flex flex-col justify-center my-2 mx-2 container border-2 border-blue text-4xl font-serif italic font-bold">
              {pokemonBasicInfo}
            </ul>
          </div>
          {!disableButton || !disableButtonAfterClick ? (
            <Button
              text={buttonText}
              onClick={() => {
                if (disableButtonAfterClick) {
                  onClick();
                  return setDisableButton(true);
                }
                onClick(params.name);
              }}
            />
          ) : (
            <Button text={'Already Captured'} buttonType={ButtonType.Disable} />
          )}
        </div>
      )}
      {pokemonBasicInfo.length === 0 && <NotFound />}
    </div>
  );
};

export { ShowPokemonDetails, type ShowPokemonDetailsProps };

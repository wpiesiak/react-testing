import React, { useEffect, useState } from 'react';
import { getCharacterList } from '../../services/rickmortyapi';
import { Character } from './Character';

export const CharacterList = (props) => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    getCharacterList()
      .then((response) => {
        setCharacters(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {characters
        ? characters.map((character) => <Character key={character.id} character={character} />)
        : 'loading...'}
    </div>
  );
};

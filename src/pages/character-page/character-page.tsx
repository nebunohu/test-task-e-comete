import React, { FC, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { useLocation, useParams } from 'react-router-dom';
import { $characterState } from '../../features/character';
import getCharacterFx from '../../features/character/effects/get-character-fx';

const CharacterPage: FC = () => {
  const location = useLocation();
  // const [character, setCharacter] = useState<any>(null)
  const { character } = useStore($characterState);
  const { characterId } = useParams();
  // const characterId = ;
  // const character = location.state?.character;
  useEffect(() => {
    if (characterId) getCharacterFx(characterId);
  }, []);



  return (
    <div>
      <h1>{character?.name}</h1>
    </div>
  );
};

export default CharacterPage;
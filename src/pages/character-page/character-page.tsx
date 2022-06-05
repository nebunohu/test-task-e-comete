import React, { FC, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import { $characterState } from '../../features/character';
import getCharacterFx from '../../features/character/effects/get-character-fx';

const CharacterPage: FC = () => {
  const { character } = useStore($characterState);
  const { characterId } = useParams();
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
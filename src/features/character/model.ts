import { createStore } from 'effector';
import { TCharacter } from '../../types';
import clearCharacterFx from './effects/clear-character';
import getCharacterFx from './effects/get-character-fx';

type TEpisodesState = {
  character: TCharacter | null;

  isGetCharacterRequest: boolean;
};

export const initialState: TEpisodesState = {
  character: null,

  isGetCharacterRequest: false,
};

// const saveEpisodes = createEvent

export const $characterState = createStore(initialState)
  .on(getCharacterFx.doneData, (characterState, newData: any) => {
    return { ...characterState, character: newData };
  })
  .on(clearCharacterFx, (characterState) => {
    return { ...characterState, character: null };
  });

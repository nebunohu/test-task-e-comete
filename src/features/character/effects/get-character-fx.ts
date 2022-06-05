import { createEffect } from 'effector';
import getCharacter from '../../../utils/get-character';
import setCharacterRequest from './set-character-request';

const getCharacterFx = createEffect<any>(async (id: string) => {
  setCharacterRequest(true);
  const data = await getCharacter(id);
  setCharacterRequest(false);
  return data;
});

export default getCharacterFx;

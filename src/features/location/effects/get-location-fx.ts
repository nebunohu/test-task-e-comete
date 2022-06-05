import { createEffect } from 'effector';
import getLocation from '../../../utils/get-location';
import setLocationRequest from './set-location-request';

const getLocationFx = createEffect<any>(async (id: string) => {
  setLocationRequest(true);
  const data = await getLocation(id);
  setLocationRequest(false);
  return data;
});

export default getLocationFx;

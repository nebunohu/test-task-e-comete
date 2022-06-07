import { createStore } from 'effector';
import { TLocation } from '../../types';
import getLocationFx from './effects/get-location-fx';

type TLocationState = {
  location: TLocation | null;

  isGetLocationRequest: boolean;
};

export const initialState: TLocationState = {
  location: null,

  isGetLocationRequest: false,
};

export const $locationState = createStore(initialState)
  .on(getLocationFx.doneData, (locationState, newData: any) => {
    return { ...locationState, location: newData };
  });

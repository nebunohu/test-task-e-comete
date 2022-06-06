import React, { FC, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import { $locationState } from '../../features/location';
import getLocationFx from '../../features/location/effects/get-location-fx';

const LocationPage: FC = () => {
  const { location } = useStore($locationState);
  const { locationId } = useParams();
  useEffect(() => {
    if (locationId) getLocationFx(locationId);
  }, []);

  return (
    <div>
      <h1>{location?.name}</h1>
    </div>
  );
};

export default LocationPage;

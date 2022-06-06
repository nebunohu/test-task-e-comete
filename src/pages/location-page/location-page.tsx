import React, { FC, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Stack,
} from 'react-bootstrap';
import { $locationState } from '../../features/location';
import getLocationFx from '../../features/location/effects/get-location-fx';
import Resident from '../../components/resident/resident';
import BackButton from '../../components/back-button/back-button';

const LocationPage: FC = () => {
  const { location } = useStore($locationState);
  const { locationId } = useParams();
  useEffect(() => {
    if (locationId) getLocationFx(locationId);
  }, []);

  if (!location) return null;

  return (
    <Container>
      <BackButton />
      <Row>
        <h1>
          {location.name}
        </h1>
      </Row>
      <Row>
        <span>
          Dimenson:&nbsp;
          {location.dimension}
        </span>
        <h2>Residents:</h2>
        <Stack>
          {
            location.residents.map((resident) => <Resident key={resident} residentUrl={resident} />)
          }
        </Stack>
      </Row>
    </Container>
  );
};

export default LocationPage;

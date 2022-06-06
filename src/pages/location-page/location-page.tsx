import React, { FC, useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import { $locationState } from '../../features/location';
import getLocationFx from '../../features/location/effects/get-location-fx';
import Resident from '../../components/resident/resident';

const LocationPage: FC = () => {
  const { location } = useStore($locationState);
  const { locationId } = useParams();
  useEffect(() => {
    if (locationId) getLocationFx(locationId);
  }, []);

  if (!location) return null;

  return (
    <Container fluid="true">
      <Row>
        <h1 className="p-0">
          {location.name}
        </h1>
      </Row>
      <Row sm="12">
        <Col>
          <Row>
            Dimenson:&nbsp;
            {location.dimension}
          </Row>
          <h2 className="p-0">Residents:</h2>
          {
            location.residents.map((resident) => <Resident key={resident} residentUrl={resident} />)
          }
        </Col>
      </Row>
    </Container>
  );
};

export default LocationPage;

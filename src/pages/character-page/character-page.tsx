import React, { FC, useEffect } from 'react';
import { useStore } from 'effector-react';
import { Link, useParams } from 'react-router-dom';
import {
  Col,
  Container,
  Row,
  Stack,
} from 'react-bootstrap';
import { $characterState } from '../../features/character';
import getCharacterFx from '../../features/character/effects/get-character-fx';
import StatusMarker from '../../components/status-marker/status-marker';
import clearCharacterFx from '../../features/character/effects/clear-character';

const CharacterPage: FC = () => {
  const { character } = useStore($characterState);
  const { characterId } = useParams();
  useEffect(() => {
    if (characterId) getCharacterFx(characterId);
    return () => {
      clearCharacterFx();
    };
  }, []);

  if (!character) return null;

  const characterLocationId = character.location.url.match(/\d+/);

  return (
    <Container fluid="true">
      <Row>
        <h1>
          {character.name}
        </h1>
      </Row>
      <Row sm="12">
        <Col sm="3">
          <img style={{ width: '100%', border: '2px solid black' }} src={character.image} alt={character.name} />
        </Col>
        <Col>
          <Row>
            <Stack className="p-0" direction="horizontal" gap={2}>
              Status:
              <StatusMarker status={character.status} />
              <span>{character.status}</span>
            </Stack>
          </Row>
          <Row>
            Gender:&nbsp;
            {character.gender}
          </Row>
          <Row>
            Species:&nbsp;
            {character.species}
          </Row>
          <Row>
            Origin:&nbsp;
            {character.origin.name}
          </Row>
          <Row>
            <Stack className="p-0" direction="horizontal">
              Location:&nbsp;
              <Link to={`/location/${characterLocationId ? characterLocationId[0] : null}`}>{character.location.name}</Link>
            </Stack>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterPage;

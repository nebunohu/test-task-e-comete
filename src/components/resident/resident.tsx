import React, { FC, useEffect, useState } from 'react';
// import { useStore } from 'effector-react';
import {
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { $characterState } from '../../features/character';
import getCharacterFx from '../../features/character/effects/get-character-fx';
import { TCharacter } from '../../types';
import getCharacter from '../../utils/get-character';

type TResidentProps = {
  residentUrl: string;
};

const Resident: FC<TResidentProps> = ({ residentUrl }) => {
  const splittedResident = residentUrl.split('/');
  const residentId = splittedResident[splittedResident.length - 1];
  const [resident, setResident] = useState<TCharacter | null>(null);
  // const { character } = useStore($characterState);
  useEffect(() => {
    if (residentId) getCharacterFx(residentId);
  }, []);

  const characterRequest = async () => {
    const character = await getCharacter(residentId);
    setResident(character);
  };

  if (!resident) {
    characterRequest();
    return null;
  }

  return (
    <Row>
      <Link className="p-0" to={`/character/${resident.id}`}>{resident.name}</Link>
    </Row>
  );
};

export default Resident;

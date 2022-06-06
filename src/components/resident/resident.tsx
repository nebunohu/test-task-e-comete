import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getCharacterFx from '../../features/character/effects/get-character-fx';
import { TCharacter } from '../../types';
import getCharacter from '../../utils/get-character';
import styles from './resident.module.scss';

type TResidentProps = {
  residentUrl: string;
};

const Resident: FC<TResidentProps> = ({ residentUrl }) => {
  const splittedResident = residentUrl.split('/');
  const residentId = splittedResident[splittedResident.length - 1];
  const [resident, setResident] = useState<TCharacter | null>(null);
  const location = useLocation();

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
    <Link
      className={`${styles.link} p-0`}
      to={`/character/${resident.id}`}
      state={{
        from: location.pathname,
      }}
    >
      {resident.name}
    </Link>
  );
};

export default Resident;

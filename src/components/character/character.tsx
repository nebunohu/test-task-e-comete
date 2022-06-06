import React, { FC, useEffect, useState } from 'react';
import CharacterCard from '../character-card/character-card';

type TCharacterProps = {
  url: string;
};

const Character: FC<TCharacterProps> = ({ url }) => {
  const [error, setError] = useState(false);
  const [person, setPerson] = useState<any>(null);
  useEffect(() => {
    const getPerson = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPerson(data);
    };

    try {
      if (!person) {
        getPerson();
      }
    } catch (e) {
      setError(true);
    }
  }, [person]);

  if (!person) return null;

  if (error) return <div>Возникла ошибка</div>;

  return (
    <CharacterCard character={person} />
  );
};

export default Character;

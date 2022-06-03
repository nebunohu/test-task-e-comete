import React, { FC, useEffect, useState } from 'react';

// Styles
import styles from './character.module.scss';

type TCharacterProps = {
  url: string;
};

const Character: FC<TCharacterProps> = ({ url }) => {
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
      console.log(e);
    }
  }, [person]);
  return (
    <div className={`${styles.wrapper}`}>
      {person?.name}
    </div>
  );
};

export default Character;

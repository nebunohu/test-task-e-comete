import React, { FC } from 'react';
import StatusMarker from '../status-marker/status-marker';
// import StatusMarker from '../status-marker/status-marker';
import styles from './character-card.module.scss';

type TCharacterCardProps = {
  character: any;
}

const CharacterCard: FC<TCharacterCardProps> = ({ character }) => {
  return (
    <article className={`${styles.cardWrapper}`}>
      <img className={`${styles.cardImage}`} src={character.image} alt='' />
      <div className={`${styles.infoWrapper}`}>
        <ul>
          <li className={`${styles.characterName}`}>{character.name}</li>
          <li className={`${styles.characterStatus}`}><StatusMarker status={character.status} /> {character.status} - {character.species}</li>
          <li>Last known location: {character.location.name}</li>
        </ul>
      </div>
    </article>
  );
};

export default CharacterCard;
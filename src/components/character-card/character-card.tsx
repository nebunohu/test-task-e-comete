import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StatusMarker from '../status-marker/status-marker';
import styles from './character-card.module.scss';

type TCharacterCardProps = {
  character: any;
};

const CharacterCard: FC<TCharacterCardProps> = ({ character }) => {
  const splittedCharacterUrl = character.url.split('/');
  const characterId = splittedCharacterUrl[splittedCharacterUrl.length - 1];
  const splittedLocationUrl = character.location.url.split('/');
  const locationId = splittedLocationUrl[splittedLocationUrl.length - 1];
  const location = useLocation();
  return (
    <article className={`${styles.cardWrapper}`}>
      <img className={`${styles.cardImage}`} src={character.image} alt="" />
      <div className={`${styles.infoWrapper}`}>
        <ul>
          <li className={`${styles.characterName}`}>
            <Link
              className={`${styles.link}`}
              to={`/character/${characterId}`}
              state={{
                from: location.pathname,
              }}
            >
              {character.name}
            </Link>
          </li>
          <li className={`${styles.characterStatus}`}>
            <StatusMarker status={character.status} />
            {character.status}
            &nbsp;
            -
            &nbsp;
            {character.species}
          </li>
          <li>
            Last known location:&nbsp;
            <Link
              className={`${styles.link}`}
              to={`/location/${locationId}`}
              state={{
                from: location.pathname,
              }}
            >
              {character.location.name}
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CharacterCard;

import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { $episodes } from '../../features/episodes';
import Character from '../character/character';

// type TEpisodeDetailsProps = {
//   characters: Array<string>;
// };

const EpisodeDetails: FC = () => {
  const location = useLocation();
  const { episode } = useParams();
  const { list } = useStore($episodes);
  const characters = list.find((el) => el.id.toString() === episode)?.characters;
  return (
    <div>
      {location.pathname}
      <div>
        {characters && characters.map((el, index) => <Character key={`index_${index + 1}`} url={el} />)}
      </div>
    </div>
  );
};

export default EpisodeDetails;

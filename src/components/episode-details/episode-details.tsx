import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

const EpisodeDetails: FC = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname}
    </div>
  );
};

export default EpisodeDetails;

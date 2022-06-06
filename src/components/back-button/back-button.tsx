import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TLocationWithState } from '../../types';

import backButtonStyles from './back-button.module.scss';

const BackButton = () => {
  const location = useLocation() as TLocationWithState;

  if (location.state === null) {
    location.state = { from: '/' };
  }
  return (
    <div>
      <Link className={`${backButtonStyles.link}`} to={location.state.from}>back</Link>
    </div>
  );
};

export default BackButton;

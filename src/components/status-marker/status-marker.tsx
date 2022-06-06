import React, { FC } from 'react';
import styles from './status-marker.module.css';

type TStatusMarkerProps = {
  status: string;
};

const StatusMarker: FC<TStatusMarkerProps> = ({ status }) => {
  let markerColor = styles.green;
  if (status === 'Dead') markerColor = styles.red;
  if (status === 'unknown') markerColor = styles.grey;

  return (
    <div className={`${styles.marker} ${markerColor}`} />
  );
};

export default StatusMarker;

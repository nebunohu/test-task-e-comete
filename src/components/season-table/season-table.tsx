import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

// Styles
import styles from './season-table.module.scss';

type TSeasonTableProps = {
  list: Array<any>;
  index: number;
};

const SeasonTable: FC<TSeasonTableProps> = ({ list, index }) => {
  return (
    <>
      <h1>
        {`Season ${index + 1}`}
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td className={`${styles.idCell}`}>
              Id
            </td>
            <td>
              Name
            </td>
            <td>
              Air date
            </td>
            <td>
              episode
            </td>
            <td>
              Characters count
            </td>
          </tr>
        </thead>
        <tbody>
          {list.map((ep) => {
            return (
              <tr key={ep.id}>
                <td className={`${styles.idCell}`}>
                  <Link to={`${ep.id}`}>{ep.id}</Link>
                </td>
                <td>
                  {ep.name}
                </td>
                <td>
                  {ep.air_date}
                </td>
                <td>
                  {ep.episode}
                </td>
                <td>
                  {ep.characters.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SeasonTable;

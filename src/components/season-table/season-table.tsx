import React, { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Stack, Table } from 'react-bootstrap';

// Styles
import styles from './season-table.module.scss';
import { TEpisode } from '../../types';

type TSeasonTableProps = {
  list: Array<TEpisode>;
  index: number;
};

const SeasonTable: FC<TSeasonTableProps> = ({ list, index }) => {
  const [sortedList, setSortedList] = useState(list);
  const [formState, setFormState] = useState({
    id: true,
    name: true,
    air_date: true,
    episode: true,
    count: true,
  });

  const sortByKey = (sortingList: Array<TEpisode>, key: string) => {
    let localSortedList = [...sortingList];
    function compareItems(item1: any, item2: any) {
      if (item1[key] > item2[key]) {
        return 1;
      }
      if (item1[key] < item2[key]) {
        return -1;
      }
      return 0;
    }

    function compareItemsByDate(item1: any, item2: any) {
      const date1 = new Date(item1);
      const date2 = new Date(item2);
      if (date1 > date2) {
        return 1;
      }
      if (date1 < date2) {
        return -1;
      }
      return 0;
    }

    function compareItemsByCharactersCount(item1: any, item2: any) {
      const count1 = item1.characters.length;
      const count2 = item2.characters.length;
      if (count1 > count2) {
        return 1;
      }
      if (count1 < count2) {
        return -1;
      }
      return 0;
    }

    if (key === 'air_date') {
      localSortedList = localSortedList.sort(compareItemsByDate);
    } else if (key === 'count') {
      localSortedList = localSortedList.sort(compareItemsByCharactersCount);
    } else {
      localSortedList = localSortedList.sort(compareItems);
    }

    return localSortedList;
  };

  const sortById = () => {
    setSortedList(() => sortByKey(list, 'id'));
  };

  const sortByName = () => {
    setSortedList(() => sortByKey(list, 'name'));
  };

  const sortByDate = () => {
    setSortedList(() => sortByKey(list, 'air_date'));
  };

  const sortByEpisode = () => {
    setSortedList(() => sortByKey(list, 'episode'));
  };

  const sortByCharactersCount = () => {
    setSortedList(() => sortByKey(list, 'count'));
  };

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    setFormState({ ...formState, [name]: checked });
  };

  return (
    <>
      <h1>
        {`Season ${index + 1}`}
      </h1>
      <div>
        Show columns:
        <Form>
          <Stack
            direction="horizontal"
            gap={5}
          >
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Id"
                name="id"
                defaultChecked={formState.id}
                onChange={onFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Name"
                name="name"
                defaultChecked={formState.name}
                onChange={onFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Air date"
                name="air_date"
                defaultChecked={formState.air_date}
                onChange={onFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Episode"
                name="episode"
                defaultChecked={formState.episode}
                onChange={onFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Characters count"
                name="count"
                defaultChecked={formState.count}
                onChange={onFormChange}
              />
            </Form.Group>
          </Stack>
        </Form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {formState.id && (
              <td
                className={`${styles.idCell} ${styles.headerCell}`}
                onClick={sortById}
              >
                Id
              </td>
            )}
            {formState.name && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByName}
              >
                Name
              </td>
            )}
            {formState.air_date && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByDate}
              >
                Air date
              </td>
            )}
            {formState.episode && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByEpisode}
              >
                Episode
              </td>
            )}
            {formState.count && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByCharactersCount}
              >
                Characters count
              </td>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedList.map((ep) => {
            return (
              <tr key={ep.id}>
                {formState.id && (
                  <td className={`${styles.idCell}`}>
                    <Link to={`/episode/${ep.id}`}>{ep.id}</Link>
                  </td>
                )}
                {formState.name && (
                  <td>
                    {ep.name}
                  </td>
                )}
                {formState.air_date && (
                  <td>
                    {ep.air_date}
                  </td>
                )}
                {formState.episode && (
                  <td>
                    {ep.episode}
                  </td>
                )}
                {formState.count && (
                  <td>
                    {ep.characters.length}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SeasonTable;
